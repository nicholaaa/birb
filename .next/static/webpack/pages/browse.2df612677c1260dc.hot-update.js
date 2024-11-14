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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GridItem: function() { return /* binding */ GridItem; },\n/* harmony export */   GridItemStyle: function() { return /* binding */ GridItemStyle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js\");\n/* harmony import */ var _public_images_blank_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/blank-thumbnail.jpg */ \"./public/images/blank-thumbnail.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GridItem = (param)=>{\n    let { name, species, family, nativity, type, thumbnail } = param;\n    _s();\n    const [isOpen, setIsOpen] = useState(false);\n    const handleOpen = ()=>setIsOpen(true);\n    const handleClose = ()=>setIsOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            w: \"100%\",\n            textAlign: \"center\",\n            cursor: \"pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    loader: (param)=>{\n                        let { src } = param;\n                        return src ? src : _public_images_blank_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n                    },\n                    src: thumbnail,\n                    alt: name,\n                    width: \"300\",\n                    height: \"200\",\n                    className: \"grid-item-thumbnail\",\n                    loading: \"lazy\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    mt: 2,\n                    fontWeight: \"bold\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    fontSize: 14,\n                    children: [\n                        family,\n                        \" | \",\n                        species\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                    colorScheme: nativity === \"native\" ? \"green\" : nativity === \"non-native\" ? \"red\" : \"purple\",\n                    mr: 2,\n                    children: nativity\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                    colorScheme: type === \"bird\" ? \"blue\" : \"pink\",\n                    children: type\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(GridItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = GridItem;\nconst GridItemStyle = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {\n        styles: \"\\n      .grid-item-thumbnail {\\n        border-radius: 12px;\\n      }\\n    \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\grid-item.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n_c1 = GridItemStyle;\nvar _c, _c1;\n$RefreshReg$(_c, \"GridItem\");\n$RefreshReg$(_c1, \"GridItemStyle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWQtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQVlMO0FBQ2M7QUFDMEI7QUFFM0QsTUFBTWEsV0FBVztRQUFDLEVBQ3JCQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsU0FBUyxFQUNaOztJQUNHLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHQyxTQUFTO0lBRXJDLE1BQU1DLGFBQWEsSUFBTUYsVUFBVTtJQUNuQyxNQUFNRyxjQUFjLElBQU1ILFVBQVU7SUFDcEMscUJBQ0k7a0JBQ0osNEVBQUNwQixpREFBR0E7WUFBQ3dCLEdBQUU7WUFBT0MsV0FBVTtZQUFTQyxRQUFPOzs4QkFDcEMsOERBQUMzQixtREFBS0E7b0JBQ0Y0QixRQUFROzRCQUFDLEVBQUVDLEdBQUcsRUFBRTsrQkFBTUEsTUFBTUEsTUFBTWpCLDBFQUFjQTs7b0JBQ2hEaUIsS0FBS1Y7b0JBQ0xXLEtBQUtoQjtvQkFDTGlCLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BDLFdBQVU7b0JBQ1ZDLFNBQVE7Ozs7Ozs4QkFFWiw4REFBQ2hDLGtEQUFJQTtvQkFBQ2lDLElBQUk7b0JBQUdDLFlBQVc7OEJBQ25CdEI7Ozs7Ozs4QkFFTCw4REFBQ1osa0RBQUlBO29CQUFDbUMsVUFBVTs7d0JBQ1hyQjt3QkFBTzt3QkFBSUQ7Ozs7Ozs7OEJBRWhCLDhEQUFDWixtREFBS0E7b0JBQ0ZtQyxhQUNJckIsYUFBYSxXQUNQLFVBQ0FBLGFBQWEsZUFDYixRQUNBO29CQUVWc0IsSUFBSTs4QkFFSHRCOzs7Ozs7OEJBRUwsOERBQUNkLG1EQUFLQTtvQkFBQ21DLGFBQWFwQixTQUFTLFNBQVMsU0FBUzs4QkFBU0E7Ozs7Ozs7Ozs7Ozs7QUFJaEUsRUFBRTtHQTlDV0w7S0FBQUE7QUFnRE4sTUFBTTJCLGdCQUFnQixrQkFDekIsOERBQUM3QixrREFBTUE7UUFDSDhCLFFBQVM7Ozs7O2tCQU1mO01BUldEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzPzhmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICAgIEJveCxcbiAgICBUZXh0LFxuICAgIEJhZGdlLFxuICAgIEJ1dHRvbixcbiAgICBNb2RhbCxcbiAgICBNb2RhbE92ZXJsYXksXG4gICAgTW9kYWxDb250ZW50LFxuICAgIE1vZGFsSGVhZGVyLFxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXG4gICAgTW9kYWxCb2R5LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgYmxhbmtUaHVtYm5haWwgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvYmxhbmstdGh1bWJuYWlsLmpwZ1wiO1xuXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSAoe1xuICAgIG5hbWUsXG4gICAgc3BlY2llcyxcbiAgICBmYW1pbHksXG4gICAgbmF0aXZpdHksXG4gICAgdHlwZSxcbiAgICB0aHVtYm5haWwsXG59KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRJc09wZW4odHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRJc09wZW4oZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgPEJveCB3PVwiMTAwJVwiIHRleHRBbGlnbj1cImNlbnRlclwiIGN1cnNvcj1cInBvaW50ZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBsb2FkZXI9eyh7IHNyYyB9KSA9PiAoc3JjID8gc3JjIDogYmxhbmtUaHVtYm5haWwpfVxuICAgICAgICAgICAgc3JjPXt0aHVtYm5haWx9XG4gICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRodW1ibmFpbFwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IG10PXsyfSBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQgZm9udFNpemU9ezE0fT5cbiAgICAgICAgICAgIHtmYW1pbHl9IHwge3NwZWNpZXN9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XG4gICAgICAgICAgICAgICAgbmF0aXZpdHkgPT09IFwibmF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgOiBuYXRpdml0eSA9PT0gXCJub24tbmF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJwdXJwbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXI9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtuYXRpdml0eX1cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPEJhZGdlIGNvbG9yU2NoZW1lPXt0eXBlID09PSBcImJpcmRcIiA/IFwiYmx1ZVwiIDogXCJwaW5rXCJ9Pnt0eXBlfTwvQmFkZ2U+XG4gICAgPC9Cb3g+XG4gICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGNvbnN0IEdyaWRJdGVtU3R5bGUgPSAoKSA9PiAoXG4gICAgPEdsb2JhbFxuICAgICAgICBzdHlsZXM9e2BcbiAgICAgIC5ncmlkLWl0ZW0tdGh1bWJuYWlsIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIH1cbiAgICBgfVxuICAgIC8+XG4pO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiQm94IiwiVGV4dCIsIkJhZGdlIiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEJvZHkiLCJHbG9iYWwiLCJibGFua1RodW1ibmFpbCIsIkdyaWRJdGVtIiwibmFtZSIsInNwZWNpZXMiLCJmYW1pbHkiLCJuYXRpdml0eSIsInR5cGUiLCJ0aHVtYm5haWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsInciLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJsb2FkZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJtdCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yU2NoZW1lIiwibXIiLCJHcmlkSXRlbVN0eWxlIiwic3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/grid-item.js\n"));

/***/ })

});