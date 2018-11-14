import express from 'express'
import config from './config'
import serverRender from './renderers/server'
import { data } from 'data'
import bodyParser from 'body-parser'
// import renderFullPage from '../views/index.js'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

const renderFullPage = (html, preloadedState) => (
  `
  <!doctype html>
  <html>
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="http://localhost:5000/assets/favicon.ico"/>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c')}
      </script>
      <script src="/vendors~app.js?version=1" charset="utf-8"></script>
      <script src="/app.js?version=1" charset="utf-8"></script>
    </body>
  </html>
  `
)
// <script src="/vendor.js?version=1" charset="utf-8"></script>
app.get('/', async (req, res) => {
  const {html, preloadedState} = await serverRender()
  
  res.send(renderFullPage(html, preloadedState))
})

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(config.port, () => {
  console.info(`listening on port ${config.port}...`)
}) 