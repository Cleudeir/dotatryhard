"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/Tables.js":
/*!*****************************!*\
  !*** ./component/Tables.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maths */ \"./component/Maths.js\");\n/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Accordion */ \"./node_modules/react-bootstrap/esm/Accordion.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"E:\\\\GitHub\\\\dotatryhard\\\\component\\\\Tables.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Tables(_ref) {\n  _s();\n\n  var _matches = _ref._matches;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setMounted(true);\n  }, []);\n\n  function colorWinStyle(win) {\n    if (win === 0) {\n      return {\n        backgroundColor: 'rgba(234,67,53,0.3)',\n        whiteSpace: 'nowrap'\n      };\n    }\n\n    return {\n      backgroundColor: 'rgba(58,182,132,0.3)',\n      whiteSpace: 'nowrap'\n    };\n  }\n\n  function imageStyle(url) {\n    return {\n      margin: 0,\n      padding: 0,\n      backgroundImage: \"url(\".concat(url, \")\"),\n      backgroundRepeat: 'no-repeat',\n      backgroundSize: 'cover',\n      backgroundPosition: 'center'\n    };\n  }\n\n  function ImageSize() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      style: {\n        margin: 0,\n        padding: 0,\n        width: 50,\n        height: 50\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this);\n  }\n\n  function selects() {}\n\n  return mounted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    defaultActiveKey: \"0\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 16\n  }, this);\n}\n\n_s(Tables, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c = Tables;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tables);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tables\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVGFibGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsTUFBVCxPQUE0QjtFQUFBOztFQUFBLElBQVhDLFFBQVcsUUFBWEEsUUFBVzs7RUFDMUIsZ0JBQThCUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7RUFBQSxJQUFPUSxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBVixnREFBUyxDQUFDLFlBQU07SUFDZFUsVUFBVSxDQUFDLElBQUQsQ0FBVjtFQUNELENBRlEsRUFFTixFQUZNLENBQVQ7O0VBSUEsU0FBU0MsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7SUFDMUIsSUFBSUEsR0FBRyxLQUFLLENBQVosRUFBZTtNQUNiLE9BQU87UUFBQ0MsZUFBZSxFQUFFLHFCQUFsQjtRQUF5Q0MsVUFBVSxFQUFFO01BQXJELENBQVA7SUFDRDs7SUFDRCxPQUFPO01BQUNELGVBQWUsRUFBRSxzQkFBbEI7TUFBMENDLFVBQVUsRUFBRTtJQUF0RCxDQUFQO0VBQ0Q7O0VBQ0QsU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7SUFDdkIsT0FBTztNQUFDQyxNQUFNLEVBQUUsQ0FBVDtNQUFZQyxPQUFPLEVBQUUsQ0FBckI7TUFBd0JDLGVBQWUsZ0JBQVNILEdBQVQsTUFBdkM7TUFBd0RJLGdCQUFnQixFQUFFLFdBQTFFO01BQXVGQyxjQUFjLEVBQUUsT0FBdkc7TUFBZ0hDLGtCQUFrQixFQUFFO0lBQXBJLENBQVA7RUFDRDs7RUFDRCxTQUFTQyxTQUFULEdBQXFCO0lBQ25CLG9CQUNFO01BQUssS0FBSyxFQUFFO1FBQUNOLE1BQU0sRUFBRSxDQUFUO1FBQVlDLE9BQU8sRUFBRSxDQUFyQjtRQUF3Qk0sS0FBSyxFQUFFLEVBQS9CO1FBQW1DQyxNQUFNLEVBQUU7TUFBM0M7SUFBWjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREY7RUFHRDs7RUFFRCxTQUFTQyxPQUFULEdBQWtCLENBRWpCOztFQUVELE9BQ0VqQixPQUFPLGlCQUFJLDhEQUFDLGlFQUFEO0lBQVcsZ0JBQWdCLEVBQUM7RUFBNUI7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURiO0FBT0Q7O0dBaENRRjs7S0FBQUE7QUFrQ1QsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1RhYmxlcy5qcz8zNmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IHt1bml4VG9ITVN9IGZyb20gJy4vTWF0aHMnO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9BY2NvcmRpb24nO1xyXG5cclxuZnVuY3Rpb24gVGFibGVzKHtfbWF0Y2hlc30pIHtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldE1vdW50ZWQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBjb2xvcldpblN0eWxlKHdpbikge1xyXG4gICAgaWYgKHdpbiA9PT0gMCkge1xyXG4gICAgICByZXR1cm4ge2JhY2tncm91bmRDb2xvcjogJ3JnYmEoMjM0LDY3LDUzLDAuMyknLCB3aGl0ZVNwYWNlOiAnbm93cmFwJ307XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2JhY2tncm91bmRDb2xvcjogJ3JnYmEoNTgsMTgyLDEzMiwwLjMpJywgd2hpdGVTcGFjZTogJ25vd3JhcCd9O1xyXG4gIH1cclxuICBmdW5jdGlvbiBpbWFnZVN0eWxlKHVybCkge1xyXG4gICAgcmV0dXJuIHttYXJnaW46IDAsIHBhZGRpbmc6IDAsIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VybH0pYCwgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInfTtcclxuICB9XHJcbiAgZnVuY3Rpb24gSW1hZ2VTaXplKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogMCwgcGFkZGluZzogMCwgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwfX0+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VsZWN0cygpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgbW91bnRlZCAmJiA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcbiAgICAgIFxyXG5cclxuICAgIDwvQWNjb3JkaW9uID5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVzO1xyXG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJCdXR0b24iLCJDYXJkIiwidW5peFRvSE1TIiwiQWNjb3JkaW9uIiwiVGFibGVzIiwiX21hdGNoZXMiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImNvbG9yV2luU3R5bGUiLCJ3aW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZVNwYWNlIiwiaW1hZ2VTdHlsZSIsInVybCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJJbWFnZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsInNlbGVjdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Tables.js\n"));

/***/ })

});