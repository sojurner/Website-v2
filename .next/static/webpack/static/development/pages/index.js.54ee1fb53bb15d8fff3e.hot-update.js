webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/hooks.js":
/*!************************!*\
  !*** ./utils/hooks.js ***!
  \************************/
/*! exports provided: MenuToggle, PortalNode, ContactRedirect, Switch, TextSwap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuToggle", function() { return MenuToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalNode", function() { return PortalNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRedirect", function() { return ContactRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSwap", function() { return TextSwap; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var MenuToggle = function MenuToggle(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleToggle = function handleToggle() {
    return setOpen(function (state) {
      return !state;
    });
  };

  return children({
    open: open,
    handleToggle: handleToggle
  });
};
var PortalNode = function PortalNode(_ref2) {
  var children = _ref2.children;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      node = _useState4[0],
      setNode = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (document) setNode(document.querySelector('#portal'));
  }, []);
  return children({
    node: node
  });
};
var ContactRedirect = function ContactRedirect(_ref3) {
  var children = _ref3.children;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      tooltip = _useState6[0],
      setTooltip = _useState6[1];

  var handleTooltip = function handleTooltip(name) {
    setTooltip(name);
  };

  var openTab = function openTab(url) {
    window.open(url, '_blank').focus();
  };

  return children({
    tooltip: tooltip,
    handleTooltip: handleTooltip,
    openTab: openTab
  });
};
var Switch = function Switch(_ref4) {
  var children = _ref4.children,
      switches = _ref4.switches;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(switches[0]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      activeSwitch = _useState8[0],
      setActiveSwitch = _useState8[1];

  var handleChange = function handleChange(switchIndex) {
    setActiveSwitch(switches[switchIndex]);
  };

  return children({
    activeSwitch: activeSwitch,
    handleChange: handleChange
  });
};
var TextSwap = function TextSwap(_ref5) {
  var children = _ref5.children;

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      mounted = _useState10[0],
      setMounted = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeout(function () {
      setMounted(1);
    }, 4000);
    setTimeout(function () {
      setMounted(2);
    }, 8000);
    setTimeout(function () {
      setMounted(3);
    }, 11500);
    setTimeout(function () {
      setMounted(4);
    }, 13000);
  }, []);
  return children({
    mounted: mounted
  });
};

/***/ })

})
//# sourceMappingURL=index.js.54ee1fb53bb15d8fff3e.hot-update.js.map