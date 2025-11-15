import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render(url, options) {
  const helmetContext = {};

  const stream = renderToPipeableStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    options
  );

  return {
    pipe: stream.pipe,
    abort: stream.abort,
    helmetContext
  };
}
