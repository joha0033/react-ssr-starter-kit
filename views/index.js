export function renderFullPage(initialContent) {
  return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${initialContent.html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(initialContent.preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/vendor.js?version=1" charset="utf-8"></script>
            <script src="/app.js?version=1" charset="utf-8"></script>
        </body>
      </html>
      `
}