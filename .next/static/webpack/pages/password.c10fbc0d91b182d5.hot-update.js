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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Password = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [entry, setEntry] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleEntryChange = (e)=>setEntry(e.target.value);\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast)();\n    const HandleSubmit = ()=>{\n        if (entry === \"chicken\") {\n            sessionStorage.setItem(\"auth\", \"true\");\n            router.push(\"/add\");\n            rel;\n        } else {\n            toast({\n                title: \"Access Denied\",\n                description: \"Incorrect Password\",\n                status: \"error\",\n                duration: 1000,\n                isClosable: true\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: \"Password\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h1\",\n                        size: \"xl\",\n                        mt: 6,\n                        align: \"center\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                        isRequired: \"true\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                children: \"Enter Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                                lineNumber: 46,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                type: \"string\",\n                                placeholder: \"Password\",\n                                autoComplete: \"off\",\n                                value: entry,\n                                onChange: handleEntryChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        mt: 4,\n                        colorScheme: \"teal\",\n                        onClick: HandleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\password.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Password, \"YMIJklmlMPlGYQT7rNO7YQiMjGE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useToast\n    ];\n});\n_c = Password;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Password);\nvar _c;\n$RefreshReg$(_c, \"Password\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXNzd29yZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVMwQjtBQUN5QjtBQUNYO0FBQ1A7QUFFakMsTUFBTVcsV0FBVzs7SUFDYixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1LLG9CQUFvQixDQUFDQyxJQUFNRixTQUFTRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEQsTUFBTUMsUUFBUVosMERBQVFBO0lBRXRCLE1BQU1hLGVBQWU7UUFDakIsSUFBSVAsVUFBVVEsU0FBZ0MsRUFBRTtZQUM1Q0csZUFBZUMsT0FBTyxDQUFDLFFBQVE7WUFDL0JiLE9BQU9jLElBQUksQ0FBQztZQUNaQztRQUNKLE9BQU87WUFDSFIsTUFBTTtnQkFDRlMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsWUFBWTtZQUNoQjtRQUNKO0lBQ0o7SUFDQSxxQkFDSTtrQkFDSSw0RUFBQ3hCLG1FQUFNQTtZQUFDb0IsT0FBTTtzQkFDViw0RUFBQzVCLHVEQUFTQTs7a0NBQ04sOERBQUNDLHFEQUFPQTt3QkFBQ2dDLElBQUc7d0JBQUtDLE1BQUs7d0JBQUtDLElBQUk7d0JBQUdDLE9BQU07a0NBQVM7Ozs7OztrQ0FHakQsOERBQUM5QixxREFBT0E7Ozs7O2tDQUNSLDhEQUFDK0I7Ozs7O2tDQUNELDhEQUFDbkMseURBQVdBO3dCQUFDb0MsWUFBVzs7MENBQ3BCLDhEQUFDbkMsdURBQVNBOzBDQUFDOzs7Ozs7MENBQ1gsOERBQUNDLG1EQUFLQTtnQ0FDRm1DLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLGNBQWE7Z0NBQ2J2QixPQUFPTDtnQ0FDUDZCLFVBQVUzQjs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ1Ysb0RBQU1BO3dCQUFDOEIsSUFBSTt3QkFBR1EsYUFBWTt3QkFBT0MsU0FBU3hCO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0U7R0EvQ01UOztRQUNhRixrREFBU0E7UUFHVkYsc0RBQVFBOzs7S0FKcEJJOztBQWlETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYXNzd29yZC5qcz8zZmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtTGFiZWwsXHJcbiAgICBJbnB1dCxcclxuICAgIEJ1dHRvbixcclxuICAgIERpdmlkZXIsXHJcbiAgICB1c2VUb2FzdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBhc3N3b3JkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZW50cnksIHNldEVudHJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgaGFuZGxlRW50cnlDaGFuZ2UgPSAoZSkgPT4gc2V0RW50cnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5cclxuICAgIGNvbnN0IEhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZW50cnkgPT09IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBU1NXT1JEKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhdXRoXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWRkXCIpO1xyXG4gICAgICAgICAgICByZWxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBY2Nlc3MgRGVuaWVkXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbmNvcnJlY3QgUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJ4bFwiIG10PXs2fSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVudGVyIFBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW50cnlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG10PXs0fSBjb2xvclNjaGVtZT1cInRlYWxcIiBvbkNsaWNrPXtIYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZDtcclxuZXhwb3J0IHsgZ2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hha3JhXCI7XHJcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJIZWFkaW5nIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJ1c2VUb2FzdCIsIkxheW91dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiUGFzc3dvcmQiLCJyb3V0ZXIiLCJlbnRyeSIsInNldEVudHJ5IiwiaGFuZGxlRW50cnlDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b2FzdCIsIkhhbmRsZVN1Ym1pdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QQVNTV09SRCIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJyZWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwiYXMiLCJzaXplIiwibXQiLCJhbGlnbiIsImJyIiwiaXNSZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/password.js\n"));

/***/ })

});