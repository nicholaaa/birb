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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, target, children, ...props } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        href: href,\n        scroll: false,\n        p: 2,\n        bg: active ? \"#88ccca\" : undefined,\n        color: active ? \"#202023\" : inactiveColor,\n        target: target,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst MenuLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c1 = (props, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n        ref: ref,\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined));\n_c2 = MenuLink;\nconst Navbar = (props)=>{\n    _s1();\n    const { path } = props;\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sessionStorage.getItem(\"auth\")) {\n            setAuth(\"true\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        css: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 2,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/browse\",\n                            path: path,\n                            children: \"Browse\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: auth ? \"/add\" : \"/password\",\n                            path: path,\n                            children: \"Add Discovery\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            ml: 2,\n                            display: {\n                                base: \"inline-block\",\n                                md: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                                isLazy: true,\n                                id: \"navbar-menu\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {\n                                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton,\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.HamburgerIcon, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 39\n                                        }, void 0),\n                                        variant: \"outline\",\n                                        \"aria-label\": \"Options\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: \"/browse\",\n                                                children: \"Browse\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                                lineNumber: 106,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {\n                                                as: MenuLink,\n                                                href: !sessionStorage.getItem(\"auth\") ? \"/password\" : \"/add\",\n                                                children: \"Add Discovery\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\components\\\\navbar.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(Navbar, \"jz3oLVCdhKuVNiLyiKONlOPyAx4=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c3 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"MenuLink$forwardRef\");\n$RefreshReg$(_c2, \"MenuLink\");\n$RefreshReg$(_c3, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyRCxzREFBUUE7OzBEQUNMLDhEQUFDRCxzREFBUUE7Z0RBQUNlLElBQUlNO2dEQUFVYixNQUFLOzBEQUFVOzs7Ozs7MERBR3ZDLDhEQUFDUixzREFBUUE7Z0RBQ0xlLElBQUlNO2dEQUNKYixNQUNJLENBQUNrQixlQUFlQyxPQUFPLENBQUMsVUFDbEIsY0FDQTswREFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQztJQWxGTUo7O1FBZVVuQiwrREFBaUJBOzs7TUFmM0JtQjtBQW9GTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCaXJkTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgICBDb250YWluZXIsXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgU3RhY2ssXG4gICAgSGVhZGluZyxcbiAgICBGbGV4LFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgTWVudUxpc3QsXG4gICAgTWVudUJ1dHRvbixcbiAgICBJY29uQnV0dG9uLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSBcIi4vdGhlbWUtdG9nZ2xlLWJ1dHRvblwiO1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIHRhcmdldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmO1xuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuODAwXCIsIFwid2hpdGVBbHBoYS45MDBcIik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXtOZXh0TGlua31cbiAgICAgICAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICAgICAgICBzY3JvbGw9e2ZhbHNlfVxuICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgIGJnPXthY3RpdmUgPyBcIiM4OGNjY2FcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGNvbG9yPXthY3RpdmUgPyBcIiMyMDIwMjNcIiA6IGluYWN0aXZlQ29sb3J9XG4gICAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn07XG5cbmNvbnN0IE1lbnVMaW5rID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gKFxuICAgIDxMaW5rIHJlZj17cmVmfSBhcz17TmV4dExpbmt9IHsuLi5wcm9wc30gLz5cbikpO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKFwiZmFsc2VcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpIHtcbiAgICAgICAgICAgIHNldEF1dGgoXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICBhcz1cIm5hdlwiXG4gICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCIjZmZmZmZmNDBcIiwgXCIjMjAyMDIzODBcIil9XG4gICAgICAgICAgICBjc3M9e3sgYmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMHB4KVwiIH19XG4gICAgICAgICAgICB6SW5kZXg9ezJ9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCJcbiAgICAgICAgICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIG1yPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9e1widGlnaHRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaXJkTG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogXCJmdWxsXCIsIG1kOiBcImF1dG9cIiB9fVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9icm93c2VcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZVxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj17YXV0aCA/IFwiL2FkZFwiIDogXCIvcGFzc3dvcmRcIn0gcGF0aD17cGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgRGlzY292ZXJ5XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGhlbWVUb2dnbGVCdXR0b24gLz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7IGJhc2U6IFwiaW5saW5lLWJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGlzTGF6eSBpZD1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ljb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxIYW1idXJnZXJJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtNZW51TGlua30gaHJlZj1cIi9icm93c2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtNZW51TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiL3Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9hZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgRGlzY292ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCaXJkTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJhcyIsInNjcm9sbCIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTWVudUxpbmsiLCJyZWYiLCJOYXZiYXIiLCJhdXRoIiwic2V0QXV0aCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBvc2l0aW9uIiwidyIsImNzcyIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJmbGV4IiwibWwiLCJpc0xhenkiLCJpZCIsImljb24iLCJ2YXJpYW50IiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});