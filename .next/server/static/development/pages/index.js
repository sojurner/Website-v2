module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data/personalData.js":
/*!*************************************!*\
  !*** ./assets/data/personalData.js ***!
  \*************************************/
/*! exports provided: bucketList, skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bucketList", function() { return bucketList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
const bucketList = [{
  type: 'personal',
  in_progress: true,
  completed: false,
  description: 'Try Franklins BBQ',
  iconName: 'Cow'
}, {
  type: 'personal',
  in_progress: false,
  completed: false,
  description: 'Survive a bear encounter',
  iconName: 'Panda'
}, {
  type: 'personal',
  in_progress: true,
  completed: false,
  description: 'Live in a mosquito free country',
  iconName: 'Bug'
}, {
  type: 'professional',
  in_progress: false,
  completed: true,
  description: 'Serve in the military',
  iconName: 'Flag'
}, {
  type: 'personal',
  in_progress: true,
  completed: false,
  description: "Find all the 'Live Simply' hats",
  iconName: 'Hat'
}, {
  type: 'professional',
  in_progress: true,
  completed: false,
  description: 'Work at Reddit',
  iconName: 'Reddit'
}, {
  type: 'personal',
  in_progress: false,
  completed: false,
  description: 'Eat at Sukiyabashi Jiro',
  iconName: 'Sushi'
}, {
  type: 'professional',
  in_progress: false,
  completed: false,
  description: 'Inspire the troubled'
}, {
  type: 'personal',
  in_progress: false,
  completed: false,
  description: 'Live off grid for a month',
  iconName: 'Grid'
}, {
  type: 'professional',
  in_progress: true,
  completed: false,
  description: 'Freelancing / Work remotely',
  iconName: 'Work'
}, {
  type: 'personal',
  in_progress: false,
  completed: true,
  description: 'Meet relatives for the first time',
  iconName: 'Family'
}];
const skills = [{
  iconName: 'React',
  color: '#61dafb'
}, {
  iconName: 'MUI',
  color: '#1976d2'
}, {
  iconName: 'JS',
  color: '#F0DB4F'
}, {
  iconName: 'TS',
  color: '#0077C6'
}, {
  iconName: 'Node',
  color: '#88C349'
}, {
  iconName: 'Ruby',
  color: '#D31304'
}, {
  iconName: 'HTML',
  color: '#EA6228'
}, {
  iconName: 'CSS',
  color: '#3596D0'
}, {
  iconName: 'Git',
  color: '#EB4D28'
}, {
  iconName: 'VSCode',
  color: '#0077C6'
}];

/***/ }),

/***/ "./assets/icons/index.js":
/*!*******************************!*\
  !*** ./assets/icons/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/js */ "@mdi/js");
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mdi_js__WEBPACK_IMPORTED_MODULE_0__);

const iconsList = {
  Linkedin: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLinkedin"],
  Greeting: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiHumanGreeting"],
  Git: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiGit"],
  Github: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiGithubBox"],
  Phone: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiCellphone"],
  Web: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiWeb"],
  Home: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiHome"],
  Music: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiHeadphones"],
  Note: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiNoteOutline"],
  Graduation: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiSchool"],
  Interest: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiStarFace"],
  Projects: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiSourceBranch"],
  Code: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiCodeTags"],
  Download: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiDownloadOutline"],
  Work: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiBriefcaseOutline"],
  Email: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiEmailOutline"],
  React: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiReact"],
  CSS: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLanguageCss3"],
  HTML: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLanguageHtml5"],
  Node: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiNodejs"],
  JS: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLanguageJavascript"],
  TS: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLanguageTypescript"],
  MUI: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiMaterialUi"],
  Ruby: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiRuby"],
  Copyright: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiCopyright"],
  Loading: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiLoading"],
  Menu: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiMenu"],
  BackMenu: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiBackburger"],
  VSCode: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiVisualStudioCode"],
  Resume: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiScriptTextOutline"],
  Reddit: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiReddit"],
  Bug: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiBugOutline"],
  Sushi: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiFish"],
  Cow: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiCow"],
  Panda: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiPanda"],
  Grid: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiGrid"],
  Polygon: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiVectorPolygon"],
  Flag: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiFlagVariantOutline"],
  Hat: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiHatFedora"],
  Family: _mdi_js__WEBPACK_IMPORTED_MODULE_0__["mdiAccountGroupOutline"]
};
/* harmony default export */ __webpack_exports__["default"] = (iconsList);

/***/ }),

/***/ "./components/atoms/Icon.jsx":
/*!***********************************!*\
  !*** ./components/atoms/Icon.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ "./assets/icons/index.js");
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/react */ "@mdi/react");
/* harmony import */ var _mdi_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/atoms/Icon.jsx";




const Icon = (_ref) => {
  let {
    iconName
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["iconName"]);

  const path = _assets_icons__WEBPACK_IMPORTED_MODULE_3__["default"][iconName];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mdi_react__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    path: path
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/atoms/ListItem.jsx":
/*!***************************************!*\
  !*** ./components/atoms/ListItem.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/atoms/ListItem.jsx";


const ListItem = props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, `
      .contact__list__icon {
        padding: 5px 7px;
        border-radius: 50%;
        cursor: pointer
      }

      .contact__list__icon:hover {
        background: rgba(0, 0, 0, .05);
      }
    `));

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./components/atoms/Typography.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/Typography.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_base_typography_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/base/_typography.scss */ "./styles/base/_typography.scss");
/* harmony import */ var _styles_base_typography_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_base_typography_scss__WEBPACK_IMPORTED_MODULE_3__);





const Typography = (_ref) => {
  let {
    variant
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["variant"]);

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(variant, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./components/base/App.jsx":
/*!*********************************!*\
  !*** ./components/base/App.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Footer */ "./components/templates/Footer.jsx");
/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Main */ "./components/templates/Main.jsx");
/* harmony import */ var _templates_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Base */ "./components/templates/Base.jsx");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/base/App.jsx";





const root = 'root';
const header = 'header';
const main = 'main';
const footer = 'footer';

const App = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2528907176" + " " + (root || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Base__WEBPACK_IMPORTED_MODULE_4__["default"], {
  headerClass: `${root}__${header}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
  className: `${root}__${main}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  className: `${root}__${footer}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2528907176",
  __self: undefined
}, ".root.jsx-2528907176{height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL2Jhc2UvQXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFHc0IsYUFDZiIsImZpbGUiOiIvVXNlcnMvcGF3bC9Eb2N1bWVudHMvZnJvbnQtZW5kL3BlcnNvbmFsL1BlcnNvbmFsLXdlYnNpdGUudjIvY29tcG9uZW50cy9iYXNlL0FwcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gJy4uL3RlbXBsYXRlcy9Gb290ZXInO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vdGVtcGxhdGVzL01haW4nO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vdGVtcGxhdGVzL0Jhc2UnO1xuXG5jb25zdCByb290ID0gJ3Jvb3QnO1xuY29uc3QgaGVhZGVyID0gJ2hlYWRlcic7XG5jb25zdCBtYWluID0gJ21haW4nO1xuY29uc3QgZm9vdGVyID0gJ2Zvb3Rlcic7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3Jvb3R9PlxuICAgIDxCYXNlIGhlYWRlckNsYXNzPXtgJHtyb290fV9fJHtoZWFkZXJ9YH0+XG4gICAgICA8TWFpbiBjbGFzc05hbWU9e2Ake3Jvb3R9X18ke21haW59YH0gLz5cbiAgICAgIDxGb290ZXIgY2xhc3NOYW1lPXtgJHtyb290fV9fJHtmb290ZXJ9YH0gLz5cbiAgICA8L0Jhc2U+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnJvb3Qge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/base/App.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/compounds/Contact.jsx":
/*!******************************************!*\
  !*** ./components/compounds/Contact.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/List */ "./components/molecules/List.jsx");

var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/compounds/Contact.jsx";


const contactInfo = [{
  name: 'Github',
  url: 'https://www.github.com/sojurner'
}, {
  name: 'Linkedin',
  url: 'https://www.linkedin.com/in/paulkim-sojurner/'
}, {
  name: 'Email',
  mailUrl: 'paul.kim0591@gmail.com'
}, {
  name: 'Resume',
  url: 'https://drive.google.com/file/d/1anbv6eDYMmSOrqo2xnDf0jVa1caoEIK2/view'
}];

const Contact = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_List__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    listItems: contactInfo
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/compounds/Menu.jsx":
/*!***************************************!*\
  !*** ./components/compounds/Menu.jsx ***!
  \***************************************/
/*! exports provided: LinkFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkFactory", function() { return LinkFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouterMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/MenuItem */ "./components/molecules/MenuItem.jsx");
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_components_menu_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/components/_menu.scss */ "./styles/components/_menu.scss");
/* harmony import */ var _styles_components_menu_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_components_menu_scss__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/compounds/Menu.jsx";






const listItemStyle = {
  display: 'flex'
};

const LinkFactory = (_ref) => {
  let {
    iconProps,
    typographyProps
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["iconProps", "typographyProps"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, iconProps, {
    size: 0.75,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, typographyProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })));
};

const menuList = [{
  href: '/',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkFactory, {
    iconProps: {
      iconName: 'Home',
      size: 0.75
    },
    typographyProps: {
      variant: 'p',
      children: 'Home'
    },
    props: {
      style: listItemStyle
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })
}, {
  href: '/about',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkFactory, {
    iconProps: {
      iconName: 'Greeting',
      size: 0.75
    },
    typographyProps: {
      variant: 'p',
      children: 'About Me'
    },
    props: {
      style: listItemStyle
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })
}, {
  href: '/projects',
  children: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkFactory, {
    iconProps: {
      iconName: 'Projects',
      size: 0.75
    },
    typographyProps: {
      variant: 'p',
      children: 'My Work'
    },
    props: {
      style: listItemStyle
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })
}];

const Menu = (_ref2) => {
  let {
    router
  } = _ref2,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["router"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), menuList.map(itemProps => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_molecules_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: router.pathname === itemProps.href ? `${props.className}__link ${props.className}__link-active` : `${props.className}__link`
  }, itemProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))));
};

const RouterMenu = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Menu);


/***/ }),

/***/ "./components/molecules/GreetingAnimation.jsx":
/*!****************************************************!*\
  !*** ./components/molecules/GreetingAnimation.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var _styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/components/_greeting.scss */ "./styles/components/_greeting.scss");
/* harmony import */ var _styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_greeting_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_SkillSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/SkillSet */ "./components/molecules/SkillSet.jsx");
/* harmony import */ var _assets_data_personalData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/personalData */ "./assets/data/personalData.js");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/GreetingAnimation.jsx";






const Name = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
  variant: "h1",
  children: 'Paul Kim',
  className: "landing-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
});

const GreetingAnimation = ({
  mounted
}) => {
  const typedHeader = () => {
    switch (mounted) {
      case 2:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: undefined
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
          variant: "h1",
          children: 'My Name is ...',
          className: "landing-header-initial-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: undefined
        });

      case 0:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
          variant: "h1",
          children: 'Hello',
          className: "landing-header-initial-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: undefined
        });

      default:
        return null;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, typedHeader(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing-main__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h1",
    children: 'Front-end Dev',
    className: mounted === 3 ? 'landing-main__title-show' : 'landing-main__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), mounted === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_SkillSet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      transform: 'translate3d(81px, 35px, 0px)'
    },
    skills: _assets_data_personalData__WEBPACK_IMPORTED_MODULE_4__["skills"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GreetingAnimation);

/***/ }),

/***/ "./components/molecules/List.jsx":
/*!***************************************!*\
  !*** ./components/molecules/List.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/ListItem */ "./components/atoms/ListItem.jsx");
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/List.jsx";





const List = (_ref) => {
  let {
    listItems,
    openTab,
    direction
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["listItems", "openTab", "direction"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1419842447", [direction, direction !== 'row' ? '40px' : '200px']]]) + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), listItems.map(listItemProps => {
    const {
      url,
      name,
      tooltip
    } = listItemProps;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: 'contact__list__icon',
      children: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: 'gray',
        iconName: name,
        size: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }),
      onClick: url ? () => openTab(url) : () => window.location.href = `mailto:${url}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    });
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1419842447",
    dynamic: [direction, direction !== 'row' ? '40px' : '200px'],
    __self: undefined
  }, `.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;-webkit-flex-direction:${direction};-ms-flex-direction:${direction};flex-direction:${direction};-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:0;width:${direction !== 'row' ? '40px' : '200px'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBRXNCLDBFQUNHLGdCQUM0QixnSkFDZiwySEFDbkIsVUFDeUIsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL21vbGVjdWxlcy9MaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi9hdG9tcy9MaXN0SXRlbSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9hdG9tcy9JY29uJztcblxuY29uc3QgTGlzdCA9ICh7IGxpc3RJdGVtcywgb3BlblRhYiwgZGlyZWN0aW9uLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCB7Li4ucHJvcHN9PlxuICAgICAgICB7bGlzdEl0ZW1zLm1hcChsaXN0SXRlbVByb3BzID0+IHtcbiAgICAgICAgICBjb25zdCB7IHVybCwgbmFtZSwgdG9vbHRpcCB9ID0gbGlzdEl0ZW1Qcm9wcztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2NvbnRhY3RfX2xpc3RfX2ljb24nfVxuICAgICAgICAgICAgICBjaGlsZHJlbj17PEljb24gY29sb3I9eydncmF5J30gaWNvbk5hbWU9e25hbWV9IHNpemU9ezF9IC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgID8gKCkgPT4gb3BlblRhYih1cmwpXG4gICAgICAgICAgICAgICAgICA6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBtYWlsdG86JHt1cmx9YClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2RpcmVjdGlvbn07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogJHtkaXJlY3Rpb24gIT09ICdyb3cnID8gJzQwcHgnIDogJzIwMHB4J307XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl19 */
/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/List.jsx */`));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/molecules/MenuItem.jsx":
/*!*******************************************!*\
  !*** ./components/molecules/MenuItem.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/MenuItem.jsx";



const MenuItem = (_ref) => {
  let {
    className
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./components/molecules/SkillSet.jsx":
/*!*******************************************!*\
  !*** ./components/molecules/SkillSet.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/SkillSet.jsx";




const SkillSet = (_ref) => {
  let {
    skills
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["skills"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: "jsx-2929272067" + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), skills.map(skillProps => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, skillProps, {
    size: 1,
    style: {
      margin: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2929272067",
    __self: undefined
  }, "div.jsx-2929272067{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;max-width:180px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL21vbGVjdWxlcy9Ta2lsbFNldC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBR3dCLDBFQUNNLHFFQUNILGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvcGF3bC9Eb2N1bWVudHMvZnJvbnQtZW5kL3BlcnNvbmFsL1BlcnNvbmFsLXdlYnNpdGUudjIvY29tcG9uZW50cy9tb2xlY3VsZXMvU2tpbGxTZXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEljb24gZnJvbSAnLi4vYXRvbXMvSWNvbic7XG5cbmNvbnN0IFNraWxsU2V0ID0gKHsgc2tpbGxzLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgey4uLnByb3BzfT5cbiAgICAgICAge3NraWxscy5tYXAoc2tpbGxQcm9wcyA9PiAoXG4gICAgICAgICAgPEljb24gey4uLnNraWxsUHJvcHN9IHNpemU9ezF9IHN0eWxlPXt7IG1hcmdpbjogNSB9fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lsbFNldDtcbiJdfQ== */\n/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/molecules/SkillSet.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillSet);

/***/ }),

/***/ "./components/organisms/Drawer.jsx":
/*!*****************************************!*\
  !*** ./components/organisms/Drawer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compounds_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compounds/Menu */ "./components/compounds/Menu.jsx");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/organisms/Drawer.jsx";






const drawerClass = 'drawer';
const menuClass = `${drawerClass}__menu`;

const Drawer = ({
  open
}) => {
  const renderContent = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-507367205" + " " + ((open ? `${drawerClass} ${drawerClass}-open` : `${drawerClass} ${drawerClass}-close`) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: `${drawerClass}__title`,
      variant: 'h5',
      children: 'Menu',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_compounds_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: menuClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "507367205",
      __self: undefined
    }, `.${drawerClass}.jsx-507367205{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;background:#fdfdfd;position:absolute;height:-webkit-fill-available;top:0;left:0;-webkit-transition:0.2s linear;transition:0.2s linear;border-right:1px solid #ededed;-webkit-flex:0 0 1;-ms-flex:0 0 1;flex:0 0 1;}.${drawerClass}-close.jsx-507367205{-webkit-transform:translate3d(-170px,0,0);-ms-transform:translate3d(-170px,0,0);transform:translate3d(-170px,0,0);}.${drawerClass}-open.jsx-507367205{-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL29yZ2FuaXNtcy9EcmF3ZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCVyxBQUc0QixBQWF1QixBQUdMLDBFQWZQLHlCQWdCMUIsZUFIQSw0Q0FacUIsbUJBQ0Qsa0JBQ1ksOEJBQ3hCLE1BQ0MsT0FDZ0Isc0RBQ1EsK0JBQ3BCLDZDQUNiIiwiZmlsZSI6Ii9Vc2Vycy9wYXdsL0RvY3VtZW50cy9mcm9udC1lbmQvcGVyc29uYWwvUGVyc29uYWwtd2Vic2l0ZS52Mi9jb21wb25lbnRzL29yZ2FuaXNtcy9EcmF3ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvdW5kcy9NZW51JztcbmltcG9ydCB7IFBvcnRhbE5vZGUgfSBmcm9tICcuLi8uLi91dGlscy9ob29rcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9hdG9tcy9UeXBvZ3JhcGh5JztcblxuY29uc3QgZHJhd2VyQ2xhc3MgPSAnZHJhd2VyJztcbmNvbnN0IG1lbnVDbGFzcyA9IGAke2RyYXdlckNsYXNzfV9fbWVudWA7XG5cbmNvbnN0IERyYXdlciA9ICh7IG9wZW4gfSkgPT4ge1xuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgPyBgJHtkcmF3ZXJDbGFzc30gJHtkcmF3ZXJDbGFzc30tb3BlbmBcbiAgICAgICAgICAgICAgOiBgJHtkcmF3ZXJDbGFzc30gJHtkcmF3ZXJDbGFzc30tY2xvc2VgXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZHJhd2VyQ2xhc3N9X190aXRsZWB9XG4gICAgICAgICAgICB2YXJpYW50PXsnaDUnfVxuICAgICAgICAgICAgY2hpbGRyZW49eydNZW51J31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT17bWVudUNsYXNzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLiR7ZHJhd2VyQ2xhc3N9IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgICAgICAgICAgZmxleDogMCAwIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC4ke2RyYXdlckNsYXNzfS1jbG9zZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE3MHB4LCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4ke2RyYXdlckNsYXNzfS1vcGVuIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3J0YWxOb2RlPlxuICAgICAgeyh7IG5vZGUgfSkgPT4gKG5vZGUgPyBjcmVhdGVQb3J0YWwocmVuZGVyQ29udGVudCgpLCBub2RlKSA6IG51bGwpfVxuICAgIDwvUG9ydGFsTm9kZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiJdfQ== */
/*@ sourceURL=/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/organisms/Drawer.jsx */`));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["PortalNode"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, ({
    node
  }) => node ? Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(renderContent(), node) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./components/templates/Base.jsx":
/*!***************************************!*\
  !*** ./components/templates/Base.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/templates/Header.jsx");
/* harmony import */ var _organisms_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/Drawer */ "./components/organisms/Drawer.jsx");
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/templates/Base.jsx";





const Base = ({
  headerClass,
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["MenuToggle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, ({
  open,
  handleToggle
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  open: open,
  handleToggle: handleToggle,
  className: headerClass,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  open: open,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), children));

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./components/templates/Footer.jsx":
/*!*****************************************!*\
  !*** ./components/templates/Footer.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");

var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/templates/Footer.jsx";



const Footer = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    iconName: 'Copyright',
    size: 1.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/templates/Header.jsx":
/*!*****************************************!*\
  !*** ./components/templates/Header.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var _styles_components_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/components/_header.scss */ "./styles/components/_header.scss");
/* harmony import */ var _styles_components_header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/Icon */ "./components/atoms/Icon.jsx");


var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/templates/Header.jsx";





const logoName = '__logoName';

const Header = (_ref) => {
  let {
    className,
    handleToggle,
    open
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "handleToggle", "open"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `${className}`
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: `${className}${logoName}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_atoms_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleToggle,
    className: `${className}${logoName}-menu `,
    iconName: open ? 'BackMenu' : 'Menu',
    size: 1.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: 'https://res.cloudinary.com/paulkim/image/upload/v1552394091/images/misc/Paul-kim-logo.png',
    height: 25,
    style: {
      filter: 'brightness(0.5) contrast(1)'
    },
    alt: "paul kim logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })));
};



/***/ }),

/***/ "./components/templates/Main.jsx":
/*!***************************************!*\
  !*** ./components/templates/Main.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Typography */ "./components/atoms/Typography.jsx");
/* harmony import */ var _molecules_GreetingAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/GreetingAnimation */ "./components/molecules/GreetingAnimation.jsx");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ "./utils/hooks.js");
/* harmony import */ var _compounds_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compounds/Contact */ "./components/compounds/Contact.jsx");
/* harmony import */ var _styles_components_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/components/_main.scss */ "./styles/components/_main.scss");
/* harmony import */ var _styles_components_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_main_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/components/templates/Main.jsx";






const mainClass = 'main';
const greetingClass = `${mainClass}__greeting`;

const Main = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["TextSwap"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, ({
    mounted
  }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_GreetingAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mounted: mounted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), mounted === 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "contact-personalImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["ContactRedirect"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, ({
    openTab
  }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_compounds_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    openTab: openTab,
    style: {
      margin: '52px 10px'
    },
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "contact-personalImg__img contact-personalImg__img-1",
    src: 'https://res.cloudinary.com/paulkim/image/upload/v1552394092/images/misc/family-cropped.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "contact-personalImg__img contact-personalImg__img-2",
    src: 'https://res.cloudinary.com/paulkim/image/upload/v1552393702/images/professional/army_photo.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_base_App_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/App.jsx */ "./components/base/App.jsx");
/* harmony import */ var _styles_layouts_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layouts/_main.scss */ "./styles/layouts/_main.scss");
/* harmony import */ var _styles_layouts_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layouts_main_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/pawl/Documents/front-end/personal/Personal-website.v2/pages/index.jsx";




const AppPage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_base_App_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (AppPage);

/***/ }),

/***/ "./styles/base/_typography.scss":
/*!**************************************!*\
  !*** ./styles/base/_typography.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/components/_greeting.scss":
/*!******************************************!*\
  !*** ./styles/components/_greeting.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/components/_header.scss":
/*!****************************************!*\
  !*** ./styles/components/_header.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/components/_main.scss":
/*!**************************************!*\
  !*** ./styles/components/_main.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/components/_menu.scss":
/*!**************************************!*\
  !*** ./styles/components/_menu.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/layouts/_main.scss":
/*!***********************************!*\
  !*** ./styles/layouts/_main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MenuToggle = ({
  children
}) => {
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleToggle = () => setOpen(state => !state);

  return children({
    open,
    handleToggle
  });
};
const PortalNode = ({
  children
}) => {
  const [node, setNode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (document) setNode(document.querySelector('#portal'));
  }, []);
  return children({
    node
  });
};
const ContactRedirect = ({
  children
}) => {
  const [tooltip, setTooltip] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const handleTooltip = name => {
    setTooltip(name);
  };

  const openTab = url => {
    window.open(url, '_blank').focus();
  };

  return children({
    tooltip,
    handleTooltip,
    openTab
  });
};
const Switch = ({
  children,
  switches
}) => {
  const [activeSwitch, setActiveSwitch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(switches[0]);

  const handleChange = switchIndex => {
    setActiveSwitch(switches[switchIndex]);
  };

  return children({
    activeSwitch,
    handleChange
  });
};
const TextSwap = ({
  children
}) => {
  const [mounted, setMounted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      setMounted(1);
    }, 4000);
    setTimeout(() => {
      setMounted(2);
    }, 8000);
    setTimeout(() => {
      setMounted(3);
    }, 12200);
  }, []);
  return children({
    mounted
  });
};

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pawl/Documents/front-end/personal/Personal-website.v2/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@mdi/js":
/*!**************************!*\
  !*** external "@mdi/js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdi/js");

/***/ }),

/***/ "@mdi/react":
/*!*****************************!*\
  !*** external "@mdi/react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mdi/react");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map