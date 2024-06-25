"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/CarousselXP/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/CarousselXP/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselXP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/button */ \"(app-pages-browser)/./node_modules/primereact/button/button.esm.js\");\n/* harmony import */ var primereact_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/carousel */ \"(app-pages-browser)/./node_modules/primereact/carousel/carousel.esm.js\");\n/* harmony import */ var primereact_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/tag */ \"(app-pages-browser)/./node_modules/primereact/tag/tag.esm.js\");\n/* harmony import */ var _app_service_ProductService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/service/ProductService */ \"(app-pages-browser)/./src/app/service/ProductService.js\");\n/* harmony import */ var _barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CircleArrowLeft,CircleArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-arrow-left.js\");\n/* harmony import */ var _barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CircleArrowLeft,CircleArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CarouselXP() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const responsiveOptions = [\n        {\n            breakpoint: \"1400px\",\n            numVisible: 2,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"1199px\",\n            numVisible: 3,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"767px\",\n            numVisible: 2,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"575px\",\n            numVisible: 1,\n            numScroll: 1\n        }\n    ];\n    const getSeverity = (product)=>{\n        switch(product.inventoryStatus){\n            case \"INSTOCK\":\n                return \"success\";\n            case \"LOWSTOCK\":\n                return \"warning\";\n            case \"OUTOFSTOCK\":\n                return \"danger\";\n            default:\n                return null;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _app_service_ProductService__WEBPACK_IMPORTED_MODULE_2__.ProductService.getProductsSmall().then((data)=>setProducts(data.slice(0, 9)));\n    }, []);\n    const productTemplate = (product)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-3/4 w-11/12 bg-white border-1 text-left py-5 px-5 border-8 border-white rounded-3xl m-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 flex justify-end \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://primefaces.org/cdn/primereact/images/product/\".concat(product.image),\n                        alt: product.name,\n                        className: \" w-52 h-52 border-8 border-gray-500 shadow-2 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[220px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"mb-1\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"mt-0 mb-3\",\n                            children: [\n                                \"$\",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_tag__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                            value: product.inventoryStatus,\n                            severity: getSeverity(product)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-full w-full mt-5 flex flex-wrap gap-2 justify-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            icon: \"pi pi-search\",\n                            className: \"p-button p-button-rounded bg-white\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            icon: \"pi pi-star-fill\",\n                            className: \"p-button-success p-button-rounded  bg-white\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card h-auto flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {\n            className: \"card h-auto flex items-center justify-center\",\n            prevIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                className: \" justify-end items-end bg-slate-500\",\n                color: \"#ffff\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                lineNumber: 89,\n                columnNumber: 24\n            }, void 0),\n            nextIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                color: \"#ffff\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                lineNumber: 90,\n                columnNumber: 24\n            }, void 0),\n            value: products,\n            numScroll: 1,\n            numVisible: 1,\n            //responsiveOptions={responsiveOptions} \n            itemTemplate: productTemplate\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n            lineNumber: 88,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_s(CarouselXP, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = CarouselXP;\nvar _c;\n$RefreshReg$(_c, \"CarouselXP\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c3NlbFhQL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDUjtBQUM4QjtBQUNwQztBQUM2QjtBQUNBO0FBZW5ELFNBQVNTOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNVyxvQkFBZ0Q7UUFDbEQ7WUFDSUMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtRQUNBO1lBQ0lGLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxXQUFXO1FBQ2Y7UUFDQTtZQUNJRixZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsV0FBVztRQUNmO1FBQ0E7WUFDSUYsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtLQUNIO0lBRUQsTUFBTUMsY0FBYyxDQUFDQztRQUNqQixPQUFRQSxRQUFRQyxlQUFlO1lBQzNCLEtBQUs7Z0JBQ0QsT0FBTztZQUVYLEtBQUs7Z0JBQ0QsT0FBTztZQUVYLEtBQUs7Z0JBQ0QsT0FBTztZQUVYO2dCQUNJLE9BQU87UUFDZjtJQUNKO0lBRUFoQixnREFBU0EsQ0FBQztRQUNOSSx1RUFBY0EsQ0FBQ2EsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQyxDQUFDQyxPQUFnQlYsWUFBWVUsS0FBS0MsS0FBSyxDQUFDLEdBQUc7SUFDdEYsR0FBRyxFQUFFO0lBRUwsTUFBTUMsa0JBQWtCLENBQUNOO1FBQ3JCLHFCQUNJLDhEQUFDTztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJQyxLQUFLLHdEQUFzRSxPQUFkVixRQUFRVyxLQUFLO3dCQUFJQyxLQUFLWixRQUFRYSxJQUFJO3dCQUFFTCxXQUFVOzs7Ozs7Ozs7Ozs4QkFFcEgsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ007NEJBQUdOLFdBQVU7c0NBQVFSLFFBQVFhLElBQUk7Ozs7OztzQ0FDbEMsOERBQUNFOzRCQUFHUCxXQUFVOztnQ0FBWTtnQ0FBRVIsUUFBUWdCLEtBQUs7Ozs7Ozs7c0NBQ3pDLDhEQUFDNUIsK0NBQUdBOzRCQUFDNkIsT0FBT2pCLFFBQVFDLGVBQWU7NEJBQUVpQixVQUFVbkIsWUFBWUM7Ozs7Ozs7Ozs7Ozs4QkFFL0QsOERBQUNPO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ3RCLHFEQUFNQTs0QkFBQ2lDLE1BQUs7NEJBQWVYLFdBQVU7Ozs7OztzQ0FDdEMsOERBQUN0QixxREFBTUE7NEJBQUNpQyxNQUFLOzRCQUFrQlgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXpEO0lBRUEscUJBQ0ksOERBQUNEO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNyQix5REFBUUE7WUFBQ3FCLFdBQVU7WUFDbkJZLHdCQUFVLDhEQUFDOUIsNEdBQWVBO2dCQUFDa0IsV0FBVTtnQkFBc0NhLE9BQU07Ozs7OztZQUNqRkMsd0JBQVUsOERBQUMvQiw0R0FBZ0JBO2dCQUFDOEIsT0FBTTs7Ozs7O1lBQ2xDSixPQUFPeEI7WUFDUEssV0FBVztZQUNYRCxZQUFZO1lBQ1osd0NBQXdDO1lBQ3hDMEIsY0FBY2pCOzs7Ozs7Ozs7OztBQUkzQjtHQTdFd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c3NlbFhQL2luZGV4LnRzeD9iMWY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdwcmltZXJlYWN0L2J1dHRvbic7XG5pbXBvcnQgeyBDYXJvdXNlbCwgQ2Fyb3VzZWxSZXNwb25zaXZlT3B0aW9uIH0gZnJvbSAncHJpbWVyZWFjdC9jYXJvdXNlbCc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICdwcmltZXJlYWN0L3RhZyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlL1Byb2R1Y3RTZXJ2aWNlJztcbmltcG9ydCB7IENpcmNsZUFycm93TGVmdCwgQ2lyY2xlQXJyb3dSaWdodCAgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBwcmljZTogbnVtYmVyO1xuICAgIGNhdGVnb3J5OiBzdHJpbmc7XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBpbnZlbnRvcnlTdGF0dXM6IHN0cmluZztcbiAgICByYXRpbmc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWxYUCgpIHtcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICAgIGNvbnN0IHJlc3BvbnNpdmVPcHRpb25zOiBDYXJvdXNlbFJlc3BvbnNpdmVPcHRpb25bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogJzE0MDBweCcsXG4gICAgICAgICAgICBudW1WaXNpYmxlOiAyLFxuICAgICAgICAgICAgbnVtU2Nyb2xsOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICcxMTk5cHgnLFxuICAgICAgICAgICAgbnVtVmlzaWJsZTogMyxcbiAgICAgICAgICAgIG51bVNjcm9sbDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAnNzY3cHgnLFxuICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgIG51bVNjcm9sbDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAnNTc1cHgnLFxuICAgICAgICAgICAgbnVtVmlzaWJsZTogMSxcbiAgICAgICAgICAgIG51bVNjcm9sbDogMVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IGdldFNldmVyaXR5ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgc3dpdGNoIChwcm9kdWN0LmludmVudG9yeVN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSAnSU5TVE9DSyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcblxuICAgICAgICAgICAgY2FzZSAnTE9XU1RPQ0snOlxuICAgICAgICAgICAgICAgIHJldHVybiAnd2FybmluZyc7XG5cbiAgICAgICAgICAgIGNhc2UgJ09VVE9GU1RPQ0snOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0c1NtYWxsKCkudGhlbigoZGF0YTogYW55W10pID0+IHNldFByb2R1Y3RzKGRhdGEuc2xpY2UoMCwgOSkpKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBwcm9kdWN0VGVtcGxhdGUgPSAocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMvNCB3LTExLzEyIGJnLXdoaXRlIGJvcmRlci0xIHRleHQtbGVmdCBweS01IHB4LTUgYm9yZGVyLTggYm9yZGVyLXdoaXRlIHJvdW5kZWQtM3hsIG0tMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmbGV4IGp1c3RpZnktZW5kIFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vcHJpbWVmYWNlcy5vcmcvY2RuL3ByaW1lcmVhY3QvaW1hZ2VzL3Byb2R1Y3QvJHtwcm9kdWN0LmltYWdlfWB9IGFsdD17cHJvZHVjdC5uYW1lfSBjbGFzc05hbWU9XCIgdy01MiBoLTUyIGJvcmRlci04IGJvcmRlci1ncmF5LTUwMCBzaGFkb3ctMiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMjIwcHhdXCIgPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMVwiPntwcm9kdWN0Lm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItM1wiPiR7cHJvZHVjdC5wcmljZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8VGFnIHZhbHVlPXtwcm9kdWN0LmludmVudG9yeVN0YXR1c30gc2V2ZXJpdHk9e2dldFNldmVyaXR5KHByb2R1Y3QpfT48L1RhZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgbXQtNSBmbGV4IGZsZXgtd3JhcCBnYXAtMiBqdXN0aWZ5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGkgcGktc2VhcmNoXCIgY2xhc3NOYW1lPVwicC1idXR0b24gcC1idXR0b24tcm91bmRlZCBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBpIHBpLXN0YXItZmlsbFwiIGNsYXNzTmFtZT1cInAtYnV0dG9uLXN1Y2Nlc3MgcC1idXR0b24tcm91bmRlZCAgYmctd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPVwiY2FyZCBoLWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgIHByZXZJY29uPXs8Q2lyY2xlQXJyb3dMZWZ0IGNsYXNzTmFtZT0nIGp1c3RpZnktZW5kIGl0ZW1zLWVuZCBiZy1zbGF0ZS01MDAnIGNvbG9yPScjZmZmZicvPn0gXG4gICAgICAgICAgICAgbmV4dEljb249ezxDaXJjbGVBcnJvd1JpZ2h0IGNvbG9yPScjZmZmZicvPn0gXG4gICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RzfSBcbiAgICAgICAgICAgICBudW1TY3JvbGw9ezF9IFxuICAgICAgICAgICAgIG51bVZpc2libGU9ezF9IFxuICAgICAgICAgICAgIC8vcmVzcG9uc2l2ZU9wdGlvbnM9e3Jlc3BvbnNpdmVPcHRpb25zfSBcbiAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3Byb2R1Y3RUZW1wbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5cbiAgICAgICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJDYXJvdXNlbCIsIlRhZyIsIlByb2R1Y3RTZXJ2aWNlIiwiQ2lyY2xlQXJyb3dMZWZ0IiwiQ2lyY2xlQXJyb3dSaWdodCIsIkNhcm91c2VsWFAiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImdldFNldmVyaXR5IiwicHJvZHVjdCIsImludmVudG9yeVN0YXR1cyIsImdldFByb2R1Y3RzU21hbGwiLCJ0aGVuIiwiZGF0YSIsInNsaWNlIiwicHJvZHVjdFRlbXBsYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDQiLCJoNiIsInByaWNlIiwidmFsdWUiLCJzZXZlcml0eSIsImljb24iLCJwcmV2SWNvbiIsImNvbG9yIiwibmV4dEljb24iLCJpdGVtVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CarousselXP/index.tsx\n"));

/***/ })

});