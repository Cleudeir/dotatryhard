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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _component_CardPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/CardPlayer */ \"./component/CardPlayer.jsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Header */ \"./component/Header.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_Tables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Tables */ \"./component/Tables.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"E:\\\\GitHub\\\\dotatryhard\\\\pages\\\\index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  console.log(router.query);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      useData = _useState[0],\n      setData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (router.query.region) {\n      var filter = data.filter(function (item) {\n        return item.profile.loccountrycode === router.query.region.toLocaleUpperCase().replace('_', ' ');\n      });\n      console.log(filter);\n\n      if (filter.length > 0) {\n        setData(filter);\n      } else {\n        setData(false);\n      }\n    } else {\n      setData(data);\n      console.log(data);\n    }\n  }, [router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      style: {\n        margin: 'auto',\n        padding: 5\n      },\n      children: router.query.region ? router.query.region.toLocaleUpperCase().replace('_', ' ') : 'WORLD'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), useData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n          children: \"Top 50\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_Tables__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          _matches: useData\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 19\n    }, this), !useData && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h4\", {\n      style: {\n        margin: 'auto',\n        padding: 30\n      },\n      children: \"nenhum jogador encontrado!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 20\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"uupRQG9kOhsjpOwyZWwLeVOfwmw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQXJCOzs7QUFhZSxTQUFTQyxJQUFULE9BQXNCO0VBQUE7O0VBQUEsSUFBUEMsSUFBTyxRQUFQQSxJQUFPO0VBQ25DLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBeEI7RUFDQVMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkI7O0VBR0EsZ0JBQTJCVCwrQ0FBUSxDQUFDLEtBQUQsQ0FBbkM7RUFBQSxJQUFPVSxPQUFQO0VBQUEsSUFBZ0JDLE9BQWhCOztFQUVBWixnREFBUyxDQUFDLFlBQUk7SUFDWixJQUFJTyxNQUFNLENBQUNHLEtBQVAsQ0FBYUcsTUFBakIsRUFBeUI7TUFDdkIsSUFBTUMsTUFBTSxHQUFHUixJQUFJLENBQUNRLE1BQUwsQ0FBWSxVQUFDQyxJQUFEO1FBQUEsT0FBUUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLGNBQWIsS0FBZ0NWLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRyxNQUFiLENBQW9CSyxpQkFBcEIsR0FBd0NDLE9BQXhDLENBQWdELEdBQWhELEVBQXFELEdBQXJELENBQXhDO01BQUEsQ0FBWixDQUFmO01BQ0FYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxNQUFaOztNQUNBLElBQUlBLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFwQixFQUF3QjtRQUN0QlIsT0FBTyxDQUFDRSxNQUFELENBQVA7TUFDRCxDQUZELE1BRU87UUFDTEYsT0FBTyxDQUFDLEtBQUQsQ0FBUDtNQUNEO0lBQ0YsQ0FSRCxNQVFPO01BQ0xBLE9BQU8sQ0FBQ04sSUFBRCxDQUFQO01BQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0lBQ0Q7RUFDRixDQWJRLEVBYU4sQ0FBQ0MsTUFBRCxDQWJNLENBQVQ7RUFjQSxvQkFDRTtJQUFLLFNBQVMsRUFBRVYsb0VBQWhCO0lBQUEsd0JBQ0UsOERBQUMseURBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUU7TUFBSSxLQUFLLEVBQUU7UUFBQ3lCLE1BQU0sRUFBRSxNQUFUO1FBQWlCQyxPQUFPLEVBQUU7TUFBMUIsQ0FBWDtNQUFBLFVBQTBDaEIsTUFBTSxDQUFDRyxLQUFQLENBQWFHLE1BQWIsR0FBb0JOLE1BQU0sQ0FBQ0csS0FBUCxDQUFhRyxNQUFiLENBQW9CSyxpQkFBcEIsR0FBd0NDLE9BQXhDLENBQWdELEdBQWhELEVBQXFELEdBQXJELENBQXBCLEdBQThFO0lBQXhIO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFGRixFQUdHUixPQUFPLGlCQUFJO01BQUEsdUJBQ1Y7UUFBQSx3QkFDRTtVQUFJLFNBQVMsRUFBRWQsZ0VBQWY7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFERixlQUdFLDhEQUFDLHlEQUFEO1VBQVEsUUFBUSxFQUFFYztRQUFsQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRFU7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUhkLEVBV0csQ0FBQ0EsT0FBRCxpQkFBWTtNQUFJLEtBQUssRUFBRTtRQUFDVyxNQUFNLEVBQUUsTUFBVDtRQUFpQkMsT0FBTyxFQUFFO01BQTFCLENBQVg7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYZjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWVEOztHQXBDdUJsQjtVQUNQTjs7O0tBRE9NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9DYXJkUGxheWVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9IZWFkZXInO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlcyBmcm9tICcuLi9jb21wb25lbnQvVGFibGVzJztcclxuXHJcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc29sZS5sb2coJ2dldFN0YXRpYyAtIEhvbWU6ICcpO1xyXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5iYWNrVXJsfS9yYW5raW5nYCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge2RhdGF9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAgKiA2MCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtkYXRhfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSk7XHJcblxyXG5cclxuICBjb25zdCBbdXNlRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5yZWdpb24pIHtcclxuICAgICAgY29uc3QgZmlsdGVyID0gZGF0YS5maWx0ZXIoKGl0ZW0pPT5pdGVtLnByb2ZpbGUubG9jY291bnRyeWNvZGUgPT09IHJvdXRlci5xdWVyeS5yZWdpb24udG9Mb2NhbGVVcHBlckNhc2UoKS5yZXBsYWNlKCdfJywgJyAnKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XHJcbiAgICAgIGlmIChmaWx0ZXIubGVuZ3RoID4gMCApIHtcclxuICAgICAgICBzZXREYXRhKGZpbHRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RGF0YShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgPEhlYWRlci8+XHJcbiAgICAgIDxoMSBzdHlsZT17e21hcmdpbjogJ2F1dG8nLCBwYWRkaW5nOiA1fX0+e3JvdXRlci5xdWVyeS5yZWdpb24/cm91dGVyLnF1ZXJ5LnJlZ2lvbi50b0xvY2FsZVVwcGVyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnICcpOidXT1JMRCd9PC9oMT5cclxuICAgICAge3VzZURhdGEgJiYgPG1haW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlRvcCA1MDwvaDI+XHJcblxyXG4gICAgICAgICAgPFRhYmxlcyBfbWF0Y2hlcz17dXNlRGF0YX0vPlxyXG5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvbWFpbj59XHJcbiAgICAgIHshdXNlRGF0YSAmJiA8aDQgc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgcGFkZGluZzogMzB9fT5uZW5odW0gam9nYWRvciBlbmNvbnRyYWRvITwvaDQ+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZFBsYXllciIsInN0eWxlcyIsIkhlYWRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGVzIiwiUmVhY3QiLCJyZXF1aXJlIiwiSG9tZSIsImRhdGEiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ1c2VEYXRhIiwic2V0RGF0YSIsInJlZ2lvbiIsImZpbHRlciIsIml0ZW0iLCJwcm9maWxlIiwibG9jY291bnRyeWNvZGUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJjb250YWluZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});