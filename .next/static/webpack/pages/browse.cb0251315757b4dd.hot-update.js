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

/***/ "./pages/browse.js":
/*!*************************!*\
  !*** ./pages/browse.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ \"./components/section.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/grid-item */ \"./components/grid-item.js\");\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supabaseClient */ \"./supabaseClient.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Browse = ()=>{\n    _s();\n    const [animals, setAnimals] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetchAnimals();\n    }, []);\n    const onSearchChange = (e)=>{\n        const value = e.target.value;\n        setSearch(value);\n        searchAnimals(value);\n    };\n    const searchAnimals = async (searchValue)=>{\n        const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.from(\"animals\").select().like(\"name\", \"%\".concat(searchValue, \"%\"));\n        if (error) {\n            console.error(\"Error fetching data:\", error);\n        } else if (search == \"\") {\n            fetchAnimals();\n        } else {\n            setAnimals(data);\n        }\n    };\n    const onSearchKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            searchAnimals(search);\n        }\n    };\n    const onClickSearch = ()=>{\n        searchAnimals(search);\n    };\n    const fetchAnimals = async ()=>{\n        const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_4__.supabase.from(\"animals\").select(\"*\");\n        if (error) {\n            console.error(\"Error fetching data:\", error);\n        } else {\n            setAnimals(data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Browse\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            maxW: \"full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                    as: \"h2\",\n                    fontSize: 24,\n                    mb: 4,\n                    children: \"Browse all Discoveries\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputGroup, {\n                    borderRadius: 5,\n                    size: \"sm\",\n                    maxW: 500,\n                    mb: 8,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputLeftElement, {\n                            pointerEvents: \"none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.Search2Icon, {\n                                color: \"gray.600\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                                lineNumber: 70,\n                                columnNumber: 35\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                            type: \"text\",\n                            placeholder: \"Search...\",\n                            border: \"1px solid #949494\",\n                            onChange: onSearchChange,\n                            onKeyDown: onSearchKeyDown\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputRightAddon, {\n                            p: 0,\n                            border: \"none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                size: \"sm\",\n                                borderLeftRadius: 0,\n                                borderRightRadius: 3.3,\n                                border: \"1px solid #949494\",\n                                onClick: onClickSearch,\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {\n                    columns: 6,\n                    gap: 6,\n                    children: animals.map((animal)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_grid_item__WEBPACK_IMPORTED_MODULE_3__.GridItem, {\n                                thumbnail: \"../\",\n                                name: animal.name,\n                                species: animal.species,\n                                family: animal.family,\n                                nativity: animal.nativity,\n                                type: animal.type\n                            }, animal.name, false, {\n                                fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                                lineNumber: 95,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nicholas\\\\Documents\\\\My own random stuff\\\\birb\\\\pages\\\\browse.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Browse, \"It1KlkvNUPTiaTXunr66uo4GKB4=\");\n_c = Browse;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\nvar _c;\n$RefreshReg$(_c, \"Browse\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9icm93c2UuanM/Mjc3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgSGVhZGluZyxcclxuICAgIFNpbXBsZUdyaWQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBJbnB1dCxcclxuICAgIElucHV0R3JvdXAsXHJcbiAgICBJbnB1dExlZnRFbGVtZW50LFxyXG4gICAgSW5wdXRSaWdodEFkZG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25cIjtcclxuaW1wb3J0IHsgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWQtaXRlbVwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9zdXBhYmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQnJvd3NlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FuaW1hbHMsIHNldEFuaW1hbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hBbmltYWxzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25TZWFyY2hDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXRTZWFyY2godmFsdWUpO1xyXG4gICAgICAgIHNlYXJjaEFuaW1hbHModmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlYXJjaEFuaW1hbHMgPSBhc3luYyAoc2VhcmNoVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYW5pbWFsc1wiKS5zZWxlY3QoKS5saWtlKFwibmFtZVwiLCBgJSR7c2VhcmNoVmFsdWV9JWApO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICAgICAgZmV0Y2hBbmltYWxzKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBbmltYWxzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvblNlYXJjaEtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaEFuaW1hbHMoc2VhcmNoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb25DbGlja1NlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBzZWFyY2hBbmltYWxzKHNlYXJjaCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZldGNoQW5pbWFscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiYW5pbWFsc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBbmltYWxzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiQnJvd3NlXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4Vz1cImZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBmb250U2l6ZT17MjR9IG1iPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgYWxsIERpc2NvdmVyaWVzXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXAgYm9yZGVyUmFkaXVzPXs1fSBzaXplPVwic21cIiBtYXhXPXs1MDB9IG1iPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8U2VhcmNoMkljb24gY29sb3I9XCJncmF5LjYwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzk0OTQ5NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtvblNlYXJjaEtleURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRSaWdodEFkZG9uIHA9ezB9IGJvcmRlcj1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnRSYWRpdXM9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSaWdodFJhZGl1cz17My4zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkICM5NDk0OTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja1NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRSaWdodEFkZG9uPlxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezZ9IGdhcD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FuaW1hbHMubWFwKChhbmltYWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FuaW1hbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbD17XCIuLi9cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthbmltYWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWVzPXthbmltYWwuc3BlY2llc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYW1pbHk9e2FuaW1hbC5mYW1pbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZpdHk9e2FuaW1hbC5uYXRpdml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXthbmltYWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlO1xyXG5leHBvcnQgeyBnZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFrcmFcIjtcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkhlYWRpbmciLCJTaW1wbGVHcmlkIiwiQnV0dG9uIiwiSW5wdXQiLCJJbnB1dEdyb3VwIiwiSW5wdXRMZWZ0RWxlbWVudCIsIklucHV0UmlnaHRBZGRvbiIsIkxheW91dCIsIlNlY3Rpb24iLCJTZWFyY2gySWNvbiIsIkdyaWRJdGVtIiwic3VwYWJhc2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnJvd3NlIiwiYW5pbWFscyIsInNldEFuaW1hbHMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmZXRjaEFuaW1hbHMiLCJvblNlYXJjaENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInNlYXJjaEFuaW1hbHMiLCJzZWFyY2hWYWx1ZSIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJsaWtlIiwiY29uc29sZSIsIm9uU2VhcmNoS2V5RG93biIsImtleSIsIm9uQ2xpY2tTZWFyY2giLCJ0aXRsZSIsIm1heFciLCJhcyIsImZvbnRTaXplIiwibWIiLCJib3JkZXJSYWRpdXMiLCJzaXplIiwicG9pbnRlckV2ZW50cyIsImNoaWxkcmVuIiwiY29sb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJib3JkZXIiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInAiLCJib3JkZXJMZWZ0UmFkaXVzIiwiYm9yZGVyUmlnaHRSYWRpdXMiLCJvbkNsaWNrIiwiY29sdW1ucyIsImdhcCIsIm1hcCIsImFuaW1hbCIsInRodW1ibmFpbCIsIm5hbWUiLCJzcGVjaWVzIiwiZmFtaWx5IiwibmF0aXZpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/browse.js\n"));

/***/ })

});