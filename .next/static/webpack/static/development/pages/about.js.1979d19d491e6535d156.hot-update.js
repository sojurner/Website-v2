webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/molecules/List.jsx":
/*!***************************************!*\
  !*** ./components/molecules/List.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/ListItem */ "./components/atoms/ListItem.jsx");
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/List.jsx";





var List = function List(_ref) {
  var listItems = _ref.listItems,
      openTab = _ref.openTab,
      direction = _ref.direction;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["73832872", [direction, direction !== 'row' ? '40px' : '130px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, listItems.map(function (listItemProps) {
    var url = listItemProps.url,
        name = listItemProps.name,
        tooltip = listItemProps.tooltip;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'contact__list__icon',
      children: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: 'gray',
        iconName: name,
        size: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }),
      onClick: url ? function () {
        return openTab(url);
      } : function () {
        return window.location.href = "mailto:".concat(url);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "73832872",
    dynamic: [direction, direction !== 'row' ? '40px' : '130px'],
    __self: this
  }, ".__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-flex-direction:".concat(direction, ";-ms-flex-direction:").concat(direction, ";flex-direction:").concat(direction, ";-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:0;width:").concat(direction !== 'row' ? '40px' : '130px', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBRXNCLDBFQUNHLGdCQUM0QixnSkFDZiwySEFDbkIsVUFDeUIsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi9hdG9tcy9MaXN0SXRlbSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9hdG9tcy9JY29uJztcblxuY29uc3QgTGlzdCA9ICh7IGxpc3RJdGVtcywgb3BlblRhYiwgZGlyZWN0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHVsPlxuICAgICAgICB7bGlzdEl0ZW1zLm1hcChsaXN0SXRlbVByb3BzID0+IHtcbiAgICAgICAgICBjb25zdCB7IHVybCwgbmFtZSwgdG9vbHRpcCB9ID0gbGlzdEl0ZW1Qcm9wcztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2NvbnRhY3RfX2xpc3RfX2ljb24nfVxuICAgICAgICAgICAgICBjaGlsZHJlbj17PEljb24gY29sb3I9eydncmF5J30gaWNvbk5hbWU9e25hbWV9IHNpemU9ezF9IC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgID8gKCkgPT4gb3BlblRhYih1cmwpXG4gICAgICAgICAgICAgICAgICA6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBtYWlsdG86JHt1cmx9YClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2RpcmVjdGlvbn07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogJHtkaXJlY3Rpb24gIT09ICdyb3cnID8gJzQwcHgnIDogJzEzMHB4J307XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/List.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=about.js.1979d19d491e6535d156.hot-update.js.map