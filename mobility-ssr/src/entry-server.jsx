// src/entry-server.jsx
import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import './index.css'

export function render(url, options) {
  const app = (
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )

  return renderToPipeableStream(app, {
    onShellReady: options.onShellReady,
    onShellError: options.onShellError,
    onError: options.onError,
  })
}