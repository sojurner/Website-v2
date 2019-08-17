webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/molecules/GreetingAnimation.jsx":
/*!****************************************************!*\
  !*** ./components/molecules/GreetingAnimation.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var _styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/_greeting.scss */ "./styles/components/_greeting.scss");
/* harmony import */ var _styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_data_personalData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/data/personalData */ "./assets/data/personalData.js");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/GreetingAnimation.jsx";





var Name = function Name() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h1",
    children: 'Paul Kim',
    className: "landing-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var GreetingAnimation = function GreetingAnimation(_ref) {
  var mounted = _ref.mounted;

  var typedHeader = function typedHeader() {
    switch (mounted) {
      case 2:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
          variant: "h1",
          children: 'My Name is ...',
          className: "landing-header-initial-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        });

      case 0:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
          variant: "h1",
          children: 'Hello',
          className: "landing-header-initial-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });

      default:
        return null;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, typedHeader(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h1",
    children: 'Front-end Dev',
    className: mounted === 3 ? 'landing-main__title-show' : 'landing-main__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SkillSet, {
    skills: _assets_data_personalData__WEBPACK_IMPORTED_MODULE_3__["skills"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GreetingAnimation);

/***/ })

})
//# sourceMappingURL=index.js.abd8b849bb61dd7bd973.hot-update.js.map