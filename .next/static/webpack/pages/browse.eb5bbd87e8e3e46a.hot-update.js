"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/browse",{

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridItem: function() { return /* binding */ GridItem; },\n/* harmony export */   GridItemStyle: function() { return /* binding */ GridItemStyle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js\");\n\n\n\n\nconst GridItem = (param)=>{\n    let { name, species, family, nativity, type, thumbnail } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        textAlign: \"center\",\n        cursor: \"pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                loader: ()=>thumbnail,\n                src: \"/images/\",\n                alt: name,\n                width: \"300\",\n                height: \"200\",\n                className: \"grid-item-thumbnail\",\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mt: 2,\n                fontWeight: \"bold\",\n                children: name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                fontSize: 14,\n                children: [\n                    family,\n                    \" | \",\n                    species\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                colorScheme: nativity === \"native\" ? \"green\" : nativity === \"non-native\" ? \"red\" : \"purple\",\n                mr: 2,\n                children: nativity\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {\n                colorScheme: type === \"bird\" ? \"blue\" : \"pink\",\n                children: type\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GridItem;\nconst GridItemStyle = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {\n        styles: \"\\n      .grid-item-thumbnail {\\n        border-radius: 12px;\\n      }\\n    \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n_c1 = GridItemStyle;\nvar _c, _c1;\n$RefreshReg$(_c, \"GridItem\");\n$RefreshReg$(_c1, \"GridItemStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFDWjtBQUVqQyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTt5QkFDekUsOERBQUNWLGlEQUFHQTtRQUFDVyxHQUFFO1FBQU9DLFdBQVU7UUFBU0MsUUFBTzs7MEJBQ3BDLDhEQUFDZCxtREFBS0E7Z0JBQ0ZlLFFBQVEsSUFBTUo7Z0JBQ2RLLEtBQUk7Z0JBQ0pDLEtBQUtYO2dCQUNMWSxPQUFNO2dCQUNOQyxRQUFPO2dCQUNQQyxXQUFVO2dCQUNWQyxTQUFROzs7Ozs7MEJBRVosOERBQUNuQixrREFBSUE7Z0JBQUNvQixJQUFJO2dCQUFHQyxZQUFXOzBCQUFRakI7Ozs7OzswQkFDaEMsOERBQUNKLGtEQUFJQTtnQkFBQ3NCLFVBQVU7O29CQUNYaEI7b0JBQU87b0JBQUlEOzs7Ozs7OzBCQUVoQiw4REFBQ0osbURBQUtBO2dCQUFDc0IsYUFBYWhCLGFBQWEsV0FBVyxVQUFVQSxhQUFhLGVBQWUsUUFBUTtnQkFBVWlCLElBQUk7MEJBQ25HakI7Ozs7OzswQkFFTCw4REFBQ04sbURBQUtBO2dCQUFDc0IsYUFBYWYsU0FBUyxTQUFTLFNBQVM7MEJBQzFDQTs7Ozs7Ozs7Ozs7O0VBR1g7S0F0QldMO0FBd0JOLE1BQU1zQixnQkFBZ0Isa0JBQ3pCLDhEQUFDdkIsa0RBQU1BO1FBQ0h3QixRQUFTOzs7OztrQkFNZjtNQVJXRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcz84ZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBCYWRnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtID0gKHsgbmFtZSwgc3BlY2llcywgZmFtaWx5LCBuYXRpdml0eSwgdHlwZSwgdGh1bWJuYWlsIH0pID0+IChcbiAgICA8Qm94IHc9XCIxMDAlXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY3Vyc29yPVwicG9pbnRlclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGxvYWRlcj17KCkgPT4gdGh1bWJuYWlsfVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9cIlxuICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgd2lkdGg9XCIzMDBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbS10aHVtYm5haWxcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAvPlxuICAgICAgICA8VGV4dCBtdD17Mn0gZm9udFdlaWdodD1cImJvbGRcIj57bmFtZX08L1RleHQ+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPXsxNH0+XG4gICAgICAgICAgICB7ZmFtaWx5fSB8IHtzcGVjaWVzfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCYWRnZSBjb2xvclNjaGVtZT17bmF0aXZpdHkgPT09IFwibmF0aXZlXCIgPyBcImdyZWVuXCIgOiBuYXRpdml0eSA9PT0gXCJub24tbmF0aXZlXCIgPyBcInJlZFwiIDogXCJwdXJwbGVcIn0gbXI9ezJ9PlxuICAgICAgICAgICAge25hdGl2aXR5fVxuICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8QmFkZ2UgY29sb3JTY2hlbWU9e3R5cGUgPT09IFwiYmlyZFwiID8gXCJibHVlXCIgOiBcInBpbmtcIn0+XG4gICAgICAgICAgICB7dHlwZX1cbiAgICAgICAgPC9CYWRnZT5cbiAgICA8L0JveD5cbik7XG5cbmV4cG9ydCBjb25zdCBHcmlkSXRlbVN0eWxlID0gKCkgPT4gKFxuICAgIDxHbG9iYWxcbiAgICAgICAgc3R5bGVzPXtgXG4gICAgICAuZ3JpZC1pdGVtLXRodW1ibmFpbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICB9XG4gICAgYH1cbiAgICAvPlxuKTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkJveCIsIlRleHQiLCJCYWRnZSIsIkdsb2JhbCIsIkdyaWRJdGVtIiwibmFtZSIsInNwZWNpZXMiLCJmYW1pbHkiLCJuYXRpdml0eSIsInR5cGUiLCJ0aHVtYm5haWwiLCJ3IiwidGV4dEFsaWduIiwiY3Vyc29yIiwibG9hZGVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJsb2FkaW5nIiwibXQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvclNjaGVtZSIsIm1yIiwiR3JpZEl0ZW1TdHlsZSIsInN0eWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/grid-item.js\n"));

/***/ })

});