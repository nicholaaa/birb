"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/password",{

/***/ "./pages/password.js":
/*!***************************!*\
  !*** ./pages/password.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Password = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleEntryChange = (e)=>setEntry(e.target.value);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (sessionStorage.getItem(\"auth\")) {\n            router.push(\"/add\");\n        }\n    }, []);\n    const HandleSubmit = ()=>{\n        if (entry === \"chicken\") {\n            sessionStorage.setItem(\"auth\", \"true\");\n            router.push(\"/add\");\n        } else {\n            toast({\n                title: \"Access Denied\",\n                description: \"Incorrect Password\",\n                status: \"error\",\n                duration: 1000,\n                isClosable: true\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: \"Password\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h1\",\n                        size: \"xl\",\n                        mt: 6,\n                        align: \"center\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                        isRequired: \"true\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                children: \"Enter Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                type: \"string\",\n                                placeholder: \"Password\",\n                                autoComplete: \"off\",\n                                value: entry,\n                                onChange: handleEntryChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        onClick: HandleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Password, \"eqb/leGJ2IugsDCGZb5ka7Yv3FY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = Password;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Password);\nvar _c;\n$RefreshReg$(_c, \"Password\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXNzd29yZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVMwQjtBQUN5QjtBQUNYO0FBQ0k7QUFFNUMsTUFBTVksV0FBVzs7SUFDYixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1NLG9CQUFvQixDQUFDQyxJQUFNRixTQUFTRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEQsTUFBTUMsUUFBUWIsMERBQVFBO0lBRXRCSSxnREFBU0EsQ0FBQztRQUNOLElBQUlVLGVBQWVDLE9BQU8sQ0FBQyxTQUFTO1lBQ2hDVCxPQUFPVSxJQUFJLENBQUM7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlO1FBQ2pCLElBQUlWLFVBQVVXLFNBQWdDLEVBQUU7WUFDNUNKLGVBQWVPLE9BQU8sQ0FBQyxRQUFRO1lBQy9CZixPQUFPVSxJQUFJLENBQUM7UUFDaEIsT0FBTztZQUNISCxNQUFNO2dCQUNGUyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxRQUFRO2dCQUNSQyxVQUFVO2dCQUNWQyxZQUFZO1lBQ2hCO1FBQ0o7SUFDSjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDekIsbUVBQU1BO1lBQUNxQixPQUFNO3NCQUNWLDRFQUFDN0IsdURBQVNBOztrQ0FDTiw4REFBQ0MscURBQU9BO3dCQUFDaUMsSUFBRzt3QkFBS0MsTUFBSzt3QkFBS0MsSUFBSTt3QkFBR0MsT0FBTTtrQ0FBUzs7Ozs7O2tDQUdqRCw4REFBQy9CLHFEQUFPQTs7Ozs7a0NBQ1IsOERBQUNnQzs7Ozs7a0NBQ0QsOERBQUNwQyx5REFBV0E7d0JBQUNxQyxZQUFXOzswQ0FDcEIsOERBQUNwQyx1REFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MsbURBQUtBO2dDQUNGb0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsY0FBYTtnQ0FDYnZCLE9BQU9MO2dDQUNQNkIsVUFBVTNCOzs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDWCxvREFBTUE7d0JBQUMrQixJQUFJO3dCQUFHUSxhQUFZO3dCQUFPQyxTQUFTckI7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQXBETVo7O1FBQ2FILGtEQUFTQTtRQUdWRixzREFBUUE7OztLQUpwQks7O0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bhc3N3b3JkLmpzPzNmZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgRGl2aWRlcixcclxuICAgIHVzZVRvYXN0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2VudHJ5LCBzZXRFbnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IGhhbmRsZUVudHJ5Q2hhbmdlID0gKGUpID0+IHNldEVudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgSGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeSA9PT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFTU1dPUkQpIHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImF1dGhcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hZGRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWNjZXNzIERlbmllZFwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5jb3JyZWN0IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwieGxcIiBtdD17Nn0gYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FbnRlciBQYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVudHJ5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtdD17NH0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgb25DbGljaz17SGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmQ7XHJcbmV4cG9ydCB7IGdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYWtyYVwiO1xyXG4iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiSGVhZGluZyIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJCdXR0b24iLCJEaXZpZGVyIiwidXNlVG9hc3QiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlBhc3N3b3JkIiwicm91dGVyIiwiZW50cnkiLCJzZXRFbnRyeSIsImhhbmRsZUVudHJ5Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9hc3QiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiSGFuZGxlU3VibWl0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BBU1NXT1JEIiwic2V0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkdXJhdGlvbiIsImlzQ2xvc2FibGUiLCJhcyIsInNpemUiLCJtdCIsImFsaWduIiwiYnIiLCJpc1JlcXVpcmVkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwib25DaGFuZ2UiLCJjb2xvclNjaGVtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/password.js\n"));

/***/ })

});