"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

require("bootstrap/dist/css/bootstrap.css");

var _Popover = _interopRequireDefault(require("react-bootstrap/Popover"));

var _OverlayTrigger = _interopRequireDefault(require("react-bootstrap/OverlayTrigger"));

require("./ChatWidget.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChatWidget(props) {
  const IFrameRef = (0, _react.useRef)(null);
  const [receivedMsg, setReceivedMsg] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    window.addEventListener("message", function (e) {
      if (!IFrameRef.current) return;
      if (props.provider == null) return;
      IFrameRef.current.contentWindow.postMessage({
        address: props.provider.selectedAddress,
        network: Number(props.provider.chainId),
        accessToken: props.accessToken
      }, "*");
    });
  });

  const popover = /*#__PURE__*/_react.default.createElement(_Popover.default, {
    className: "popover",
    id: "popover-basic"
  }, /*#__PURE__*/_react.default.createElement(_Popover.default.Body, {
    className: "popover-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iframe"
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    ref: IFrameRef,
    width: "300",
    height: "550px",
    src: "https://chat-client.highfi.me/?accessToken=" + props.accessToken
  }))));

  const Example = () => (console.log(props.accessToken), /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
    trigger: "click",
    placement: "top",
    overlay: popover
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    type: "button",
    variant: "success"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faComments,
    color: "white"
  }))));

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Example, null)));
}

var _default = ChatWidget;
exports.default = _default;