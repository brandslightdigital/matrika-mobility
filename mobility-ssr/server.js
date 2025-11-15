import fs from "node:fs/promises";
import express from "express";
import { Transform } from "node:stream";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";
const ABORT_DELAY = 10000;

const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

const app = express();

let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
vite = await createServer({
    server: { middlewareMode: "ssr" },
    appType: "custom",
    optimizeDeps: {
      entries: [],
    }
});

  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

// --------------------------------------------------------------
// ⭐ Chrome DevTools ka cursed request fix
// --------------------------------------------------------------
function shouldIgnoreBadChromeRequests(url) {
  return url.startsWith("/.well-known");
}

// --------------------------------------------------------------
// ⭐ Main SSR handler
// --------------------------------------------------------------
app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl;

    // Block browser devtools junk before Vite touches it
    if (shouldIgnoreBadChromeRequests(url)) {
      return res.status(204).end();
    }

    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    let didError = false;

    const { pipe, abort, helmetContext } = render(url, {
      onShellError() {
        res.status(500).send("<h1>SSR Error</h1>");
      },

      onShellReady() {
        res.status(didError ? 500 : 200);
        res.set({ "Content-Type": "text/html" });

        const helmet = helmetContext.helmet;
        const [htmlStart, htmlEnd] = template.split("<!--app-html-->");

        res.write(
          htmlStart.replace(
            "<head>",
            `<head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}`
          )
        );

        const transformStream = new Transform({
          transform(chunk, enc, cb) {
            res.write(chunk, enc);
            cb();
          },
        });

        transformStream.on("finish", () => {
          res.end(htmlEnd);
        });

        pipe(transformStream);
      },

      onError(err) {
        didError = true;
        console.error(err);
      },
    });

    setTimeout(() => abort(), ABORT_DELAY);
  } catch (err) {
    vite?.ssrFixStacktrace(err);
    console.error(err);
    res.status(500).end(err.stack);
  }
});

app.listen(port, () => {
  console.log("Server running on http://localhost:" + port);
});
