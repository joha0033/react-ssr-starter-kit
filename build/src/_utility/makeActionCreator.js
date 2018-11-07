"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const makeActionCreator = exports.makeActionCreator = (type, ...argNames) => {
  return function (...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};