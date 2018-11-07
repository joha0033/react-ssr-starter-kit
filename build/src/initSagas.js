'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSagas = undefined;

var _sagas = require('./_sagas');

var sagas = _interopRequireWildcard(_sagas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const initSagas = exports.initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}; // runs sagas