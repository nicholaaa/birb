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

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridItem: function() { return /* binding */ GridItem; },\n/* harmony export */   GridItemStyle: function() { return /* binding */ GridItemStyle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js\");\n\n\n\n\nconst GridItem = (param)=>{\n    let { name, species, family, nativity, type, thumbnail } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        textAlign: \"center\",\n        cursor: \"pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                loader: ()=>thumbnail,\n                src: thumbnail,\n                alt: name,\n                width: 300,\n                className: \"grid-item-thumbnail\",\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mt: 2,\n                fontWeight: \"bold\",\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                fontSize: 14,\n                children: [\n                    family,\n                    \" | \",\n                    species\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                colorScheme: nativity === \"native\" ? \"green\" : nativity === \"non-native\" ? \"red\" : \"purple\",\n                mr: 2,\n                children: nativity\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                colorScheme: type === \"bird\" ? \"blue\" : \"pink\",\n                children: type\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GridItem;\nconst GridItemStyle = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {\n        styles: \"\\n      .grid-item-thumbnail {\\n        border-radius: 12px;\\n      }\\n    \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n_c1 = GridItemStyle;\nvar _c, _c1;\n$RefreshReg$(_c, \"GridItem\");\n$RefreshReg$(_c1, \"GridItemStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFDWjtBQUVqQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTt5QkFDekUsOERBQUNWLGlEQUFHQTtRQUFDVyxHQUFFO1FBQU9DLFdBQVU7UUFBU0MsUUFBTzs7MEJBQ3BDLDhEQUFDZCxtREFBS0E7Z0JBQ0ZlLFFBQVEsSUFBTUo7Z0JBQ2RLLEtBQUtMO2dCQUNMTSxLQUFLWDtnQkFDTFksT0FBTztnQkFDUEMsV0FBVTtnQkFDVkMsU0FBUTs7Ozs7OzBCQUVaLDhEQUFDbEIsa0RBQUlBO2dCQUFDbUIsSUFBSTtnQkFBR0MsWUFBVzswQkFBUWhCOzs7Ozs7MEJBQ2hDLDhEQUFDSixrREFBSUE7Z0JBQUNxQixVQUFVOztvQkFDWGY7b0JBQU87b0JBQUlEOzs7Ozs7OzBCQUVoQiw4REFBQ0osbURBQUtBO2dCQUFDcUIsYUFBYWYsYUFBYSxXQUFXLFVBQVVBLGFBQWEsZUFBZSxRQUFRO2dCQUFVZ0IsSUFBSTswQkFDbkdoQjs7Ozs7OzBCQUVMLDhEQUFDTixtREFBS0E7Z0JBQUNxQixhQUFhZCxTQUFTLFNBQVMsU0FBUzswQkFDMUNBOzs7Ozs7Ozs7Ozs7RUFHWDtLQXJCV0w7QUF1Qk4sTUFBTXFCLGdCQUFnQixrQkFDekIsOERBQUN0QixrREFBTUE7UUFDSHVCLFFBQVM7Ozs7O2tCQU1mO01BUldEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzPzhmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBCb3gsIFRleHQsIEJhZGdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSAoeyBuYW1lLCBzcGVjaWVzLCBmYW1pbHksIG5hdGl2aXR5LCB0eXBlLCB0aHVtYm5haWwgfSkgPT4gKFxuICAgIDxCb3ggdz1cIjEwMCVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjdXJzb3I9XCJwb2ludGVyXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgbG9hZGVyPXsoKSA9PiB0aHVtYm5haWx9XG4gICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cbiAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGh1bWJuYWlsXCJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQgbXQ9ezJ9IGZvbnRXZWlnaHQ9XCJib2xkXCI+e25hbWV9PC9UZXh0PlxuICAgICAgICA8VGV4dCBmb250U2l6ZT17MTR9PlxuICAgICAgICAgICAge2ZhbWlseX0gfCB7c3BlY2llc31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8QmFkZ2UgY29sb3JTY2hlbWU9e25hdGl2aXR5ID09PSBcIm5hdGl2ZVwiID8gXCJncmVlblwiIDogbmF0aXZpdHkgPT09IFwibm9uLW5hdGl2ZVwiID8gXCJyZWRcIiA6IFwicHVycGxlXCJ9IG1yPXsyfT5cbiAgICAgICAgICAgIHtuYXRpdml0eX1cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPEJhZGdlIGNvbG9yU2NoZW1lPXt0eXBlID09PSBcImJpcmRcIiA/IFwiYmx1ZVwiIDogXCJwaW5rXCJ9PlxuICAgICAgICAgICAge3R5cGV9XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgPC9Cb3g+XG4pO1xuXG5leHBvcnQgY29uc3QgR3JpZEl0ZW1TdHlsZSA9ICgpID0+IChcbiAgICA8R2xvYmFsXG4gICAgICAgIHN0eWxlcz17YFxuICAgICAgLmdyaWQtaXRlbS10aHVtYm5haWwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgfVxuICAgIGB9XG4gICAgLz5cbik7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJCb3giLCJUZXh0IiwiQmFkZ2UiLCJHbG9iYWwiLCJHcmlkSXRlbSIsIm5hbWUiLCJzcGVjaWVzIiwiZmFtaWx5IiwibmF0aXZpdHkiLCJ0eXBlIiwidGh1bWJuYWlsIiwidyIsInRleHRBbGlnbiIsImN1cnNvciIsImxvYWRlciIsInNyYyIsImFsdCIsIndpZHRoIiwiY2xhc3NOYW1lIiwibG9hZGluZyIsIm10IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJtciIsIkdyaWRJdGVtU3R5bGUiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/grid-item.js\n"));

/***/ })

});