'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _server = require('./renderers/server');

var _server2 = _interopRequireDefault(_server);

var _data = require('data');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import renderFullPage from '../views/index.js'

const app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());

const renderFullPage = (html, preloadedState) => `
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
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/vendor.js?version=1" charset="utf-8"></script>
      <script src="/app.js?version=1" charset="utf-8"></script>
    </body>
  </html>
  `;

app.get('/', async (req, res) => {
  const { html, preloadedState } = await (0, _server2.default)();

  res.send(renderFullPage(html, preloadedState));
});

app.get('/data', (req, res) => {
  res.send(_data.data);
});

app.listen(_config2.default.port, () => {
  console.info(`listening on port ${_config2.default.port}...`);
});