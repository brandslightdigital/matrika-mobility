// server.js
import fs from 'node:fs/promises'
import express from 'express'
import { Transform } from 'node:stream'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
const ABORT_DELAY = 10000

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''

// CSS file path - yeh build ke baad check karna
let cssPath = ''
if (isProduction) {
  try {
    const assets = await fs.readdir('./dist/client/assets')
    const cssFile = assets.find(file => file.endsWith('.css'))
    if (cssFile) {
      cssPath = `/assets/${cssFile}`
    }
  } catch (e) {
    console.log('CSS file not found in assets')
  }
}

// Create http server
const app = express()

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML - YAHAN CHANGE KARO
app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')
    let template
    let render

    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    // CSS injection logic
    let criticalCss = ''
    if (isProduction && cssPath) {
      criticalCss = `<link rel="stylesheet" href="${cssPath}" />`
    }

    let didError = false
    const { pipe, abort } = render(url, {
      onShellError() {
        res.status(500)
        res.set({ 'Content-Type': 'text/html' })
        res.send('<h1>Something went wrong</h1>')
      },
      onShellReady() {
        res.status(didError ? 500 : 200)
        res.set({ 'Content-Type': 'text/html' })

        // Split template and inject CSS
        const templateParts = template.split(`<!--app-html-->`)
        if (templateParts.length !== 2) {
          res.send(template)
          return
        }

        const [htmlStart, htmlEnd] = templateParts
        
        // CSS ko head mein inject karo
        const htmlWithCss = htmlStart.replace('</head>', `${criticalCss}</head>`)
        
        res.write(htmlWithCss)

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding)
            callback()
          },
        })

        transformStream.on('finish', () => {
          res.end(htmlEnd)
        })

        pipe(transformStream)
      },
      onError(error) {
        didError = true
        console.error(error)
      },
    })

    setTimeout(() => {
      abort()
    }, ABORT_DELAY)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log('Server error:', e.message)
    res.status(500).send('Internal Server Error')
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})