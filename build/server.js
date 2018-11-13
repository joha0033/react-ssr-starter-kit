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

var _views = require('../views');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.use(_bodyParser2.default.json());

app.get('/', async (req, res) => {
  const { html, preloadedState } = await (0, _server2.default)();

  res.send((0, _views.renderFullPage)(html, preloadedState));
});

app.get('/data', (req, res) => {
  res.send(_data.data);
});

app.listen(_config2.default.port, () => {
  console.info(`listening on port ${_config2.default.port}...`);
});