"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, target, children, ...props } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        href: href,\n        scroll: false,\n        p: 2,\n        bg: active ? \"#88ccca\" : undefined,\n        color: active ? \"#202023\" : inactiveColor,\n        target: target,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst MenuLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c1 = (props, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        ref: ref,\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined));\n_c2 = MenuLink;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setAuth(sessionStorage.getItem(\"auth\") === \"true\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        css: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 2,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/browse\",\n                            path: path,\n                            children: \"Browse\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: auth ? \"/add\" : \"/password\",\n                            path: path,\n                            children: \"Add Discovery\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            ml: 2,\n                            display: {\n                                base: \"inline-block\",\n                                md: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                isLazy: true,\n                                id: \"navbar-menu\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {\n                                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton,\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.HamburgerIcon, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 39\n                                        }, void 0),\n                                        variant: \"outline\",\n                                        \"aria-label\": \"Options\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: \"/browse\",\n                                                children: \"Browse\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: auth ? \"/add\" : \"/password\",\n                                                children: \"Add Discovery\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"ZK8n/9nc3y0LagTnWR2LuhxteAE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c3 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"MenuLink$forwardRef\");\n$RefreshReg$(_c2, \"MenuLink\");\n$RefreshReg$(_c3, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLDhEQUFDRCxzREFBUUE7Z0RBQUNlLElBQUlNO2dEQUFVYixNQUFLOzBEQUFVOzs7Ozs7MERBR3ZDLDhEQUFDUixzREFBUUE7Z0RBQ0xlLElBQUlNO2dEQUNKYixNQUFNZ0IsT0FBTyxTQUFTOzBEQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQztJQS9FTUQ7O1FBYVVuQiwrREFBaUJBOzs7TUFiM0JtQjtBQWlGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCaXJkTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSBcIi4vdGhlbWUtdG9nZ2xlLWJ1dHRvblwiO1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIHRhcmdldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmO1xuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuODAwXCIsIFwid2hpdGVBbHBoYS45MDBcIik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXtOZXh0TGlua31cbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICBzY3JvbGw9e2ZhbHNlfVxuICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgIGJnPXthY3RpdmUgPyBcIiM4OGNjY2FcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcIiMyMDIwMjNcIiA6IGluYWN0aXZlQ29sb3J9XG4gICAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn07XG5cbmNvbnN0IE1lbnVMaW5rID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxMaW5rIHJlZj17cmVmfSBhcz17TmV4dExpbmt9IHsuLi5wcm9wc30gLz5cbikpO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEF1dGgoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikgPT09IFwidHJ1ZVwiKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgIGFzPVwibmF2XCJcbiAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIiNmZmZmZmY0MFwiLCBcIiMyMDIwMjM4MFwiKX1cbiAgICAgICAgICAgIGNzcz17eyBiYWNrZHJvcEZpbHRlcjogXCJibHVyKDEwcHgpXCIgfX1cbiAgICAgICAgICAgIHpJbmRleD17Mn1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxuICAgICAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17XCJ0aWdodGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJpcmRMb2dvIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17eyBiYXNlOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL2Jyb3dzZVwiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQnJvd3NlXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YXV0aCA/IFwiL2FkZFwiIDogXCIvcGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBEaXNjb3ZlcnlcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZVRvZ2dsZUJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3sgYmFzZTogXCJpbmxpbmUtYmxvY2tcIiwgbWQ6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgaXNMYXp5IGlkPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e01lbnVMaW5rfSBocmVmPVwiL2Jyb3dzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvd3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e01lbnVMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YXV0aCA/IFwiL2FkZFwiIDogXCIvcGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIERpc2NvdmVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmlyZExvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsInRhcmdldCIsImNoaWxkcmVuIiwicHJvcHMiLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwiYXMiLCJzY3JvbGwiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk1lbnVMaW5rIiwicmVmIiwiTmF2YmFyIiwiYXV0aCIsInNldEF1dGgiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJwb3NpdGlvbiIsInciLCJjc3MiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwianVzdGlmeSIsIm1yIiwic2l6ZSIsImxldHRlclNwYWNpbmciLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsIm10IiwiZmxleCIsIm1sIiwiaXNMYXp5IiwiaWQiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});