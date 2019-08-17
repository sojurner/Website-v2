webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/base/About.jsx":
/*!***********************************!*\
  !*** ./components/base/About.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Base */ "./components/templates/Base.jsx");
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var _molecules_SkillSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/SkillSet */ "./components/molecules/SkillSet.jsx");
/* harmony import */ var _compounds_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compounds/Contact */ "./components/compounds/Contact.jsx");
/* harmony import */ var _compounds_BucketList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compounds/BucketList */ "./components/compounds/BucketList.jsx");
/* harmony import */ var _molecules_Toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../molecules/Toggle */ "./components/molecules/Toggle.jsx");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _assets_data_personalData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/data/personalData */ "./assets/data/personalData.js");
/* harmony import */ var _styles_layouts_about_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/layouts/_about.scss */ "./styles/layouts/_about.scss");
/* harmony import */ var _styles_layouts_about_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_about_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _atoms_RandomQuote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../atoms/RandomQuote */ "./components/atoms/RandomQuote.jsx");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/base/About.jsx";












var aboutClass = 'about';

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Base__WEBPACK_IMPORTED_MODULE_2__["default"], {
    headerClass: 'root__header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: aboutClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    className: 'profile-card',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3545029929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    className: "jsx-3545029929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h1",
    children: "Front-end Dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: 1,
      borderLeft: '.5px solid rgba(19, 19, 19, 0.28)',
      height: 50
    },
    className: "jsx-3545029929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_SkillSet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    skills: _assets_data_personalData__WEBPACK_IMPORTED_MODULE_9__["skills"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3545029929" + " " + 'contact-switch',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_8__["ContactRedirect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, function (_ref) {
    var openTab = _ref.openTab;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_compounds_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
      direction: 'column',
      openTab: openTab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_8__["Switch"], {
    switches: ['personal', 'professional'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, function (_ref2) {
    var activeSwitch = _ref2.activeSwitch,
        handleChange = _ref2.handleChange;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3545029929" + " " + 'contact-switch__switchTable',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3545029929" + " " + 'contact-switch__switch',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "h3",
      children: "Bucket List",
      className: 'switch__header',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Toggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      activeSwitch: activeSwitch,
      handleChange: handleChange,
      toggleProps: ['personal', 'professional'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_compounds_BucketList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      bucketList: _assets_data_personalData__WEBPACK_IMPORTED_MODULE_9__["bucketList"].filter(function (items) {
        return items.type === activeSwitch;
      }),
      header: activeSwitch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3545029929" + " " + 'quote',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_RandomQuote__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: 'quote',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3545029929",
    __self: this
  }, ".contact-switch.jsx-3545029929{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;min-height:370px;max-height:370px;}.contact-switch__switchTable.jsx-3545029929{margin-top:25px;box-shadow:0px 3px 5px 1px #00000030;}.contact-switch__switch.jsx-3545029929{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.quote.jsx-3545029929{margin:45px;border-top:1px solid #00000012;padding-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL2Jhc2UvQWJvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFd0IsQUFHOEIsQUFNRyxBQUtBLEFBT0osWUFDbUIsSUFaTSxBQUt4QiwyQkFRSSxVQVpuQixPQWFlLGNBcEJnQixnQkFZTiw0Q0FTTSx1REFSVixRQVpGLGlCQUNBLGlCQUNuQiwwQkFtQnFCLHlCQVJyQixvRUFTQSIsImZpbGUiOiIvVXNlcnMvcGF3bC9Eb2N1bWVudHMvZnJvbnQtZW5kL3BlcnNvbmFsL1BlcnNvbmFsLXdlYnNpdGUudjIvY29tcG9uZW50cy9iYXNlL0Fib3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gJy4uL3RlbXBsYXRlcy9CYXNlJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2F0b21zL1R5cG9ncmFwaHknO1xuaW1wb3J0IFNraWxsU2V0IGZyb20gJy4uL21vbGVjdWxlcy9Ta2lsbFNldCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb3VuZHMvQ29udGFjdCc7XG5pbXBvcnQgQnVja2V0TGlzdCBmcm9tICcuLi9jb21wb3VuZHMvQnVja2V0TGlzdCc7XG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4uL21vbGVjdWxlcy9Ub2dnbGUnO1xuXG5pbXBvcnQgeyBDb250YWN0UmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzJztcbmltcG9ydCB7IGJ1Y2tldExpc3QsIHNraWxscyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL3BlcnNvbmFsRGF0YSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9sYXlvdXRzL19hYm91dC5zY3NzJztcbmltcG9ydCBSYW5kb21RdW90ZSBmcm9tICcuLi9hdG9tcy9SYW5kb21RdW90ZSc7XG5cbmNvbnN0IGFib3V0Q2xhc3MgPSAnYWJvdXQnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZSBoZWFkZXJDbGFzcz17J3Jvb3RfX2hlYWRlcid9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0Q2xhc3N9PlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXsncHJvZmlsZS1jYXJkJ30+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGNoaWxkcmVuPVwiRnJvbnQtZW5kIERldlwiIC8+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiAnLjVweCBzb2xpZCByZ2JhKDE5LCAxOSwgMTksIDAuMjgpJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2tpbGxTZXQgc2tpbGxzPXtza2lsbHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFjdC1zd2l0Y2gnfT5cbiAgICAgICAgICAgICAgPENvbnRhY3RSZWRpcmVjdD5cbiAgICAgICAgICAgICAgICB7KHsgb3BlblRhYiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q29udGFjdCBkaXJlY3Rpb249eydjb2x1bW4nfSBvcGVuVGFiPXtvcGVuVGFifSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29udGFjdFJlZGlyZWN0PlxuICAgICAgICAgICAgICA8U3dpdGNoIHN3aXRjaGVzPXtbJ3BlcnNvbmFsJywgJ3Byb2Zlc3Npb25hbCddfT5cbiAgICAgICAgICAgICAgICB7KHsgYWN0aXZlU3dpdGNoLCBoYW5kbGVDaGFuZ2UgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250YWN0LXN3aXRjaF9fc3dpdGNoVGFibGUnfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250YWN0LXN3aXRjaF9fc3dpdGNoJ30+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj1cIkJ1Y2tldCBMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3N3aXRjaF9faGVhZGVyJ31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN3aXRjaD17YWN0aXZlU3dpdGNofVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVQcm9wcz17WydwZXJzb25hbCcsICdwcm9mZXNzaW9uYWwnXX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnVja2V0TGlzdFxuICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldExpc3Q9e2J1Y2tldExpc3QuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPT4gaXRlbXMudHlwZSA9PT0gYWN0aXZlU3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2FjdGl2ZVN3aXRjaH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3F1b3RlJ30+XG4gICAgICAgICAgICAgIDxSYW5kb21RdW90ZSBjbGFzc05hbWU9eydxdW90ZSd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRhY3Qtc3dpdGNoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM3MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb250YWN0LXN3aXRjaF9fc3dpdGNoVGFibGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMXB4ICMwMDAwMDAzMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb250YWN0LXN3aXRjaF9fc3dpdGNoIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5xdW90ZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMTI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Jhc2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/base/About.jsx */")))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.8ac7cb8a4a047a9033ed.hot-update.js.map