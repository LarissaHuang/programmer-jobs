"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pet = function Pet(props) {
  return _react.default.createElement("div", {}, [_react.default.createElement("h1", {}, props.name), _react.default.createElement("h2", {}, props.animal), _react.default.createElement("h2", {}, props.breed)]);
};

var _default = Pet;
exports.default = _default;