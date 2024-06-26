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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselXP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/carousel */ \"(app-pages-browser)/./node_modules/primereact/carousel/carousel.esm.js\");\n/* harmony import */ var primereact_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/tag */ \"(app-pages-browser)/./node_modules/primereact/tag/tag.esm.js\");\n/* harmony import */ var _app_service_ProductService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/service/ProductService */ \"(app-pages-browser)/./src/app/service/ProductService.js\");\n/* harmony import */ var _barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CircleArrowLeft,CircleArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-arrow-left.js\");\n/* harmony import */ var _barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CircleArrowLeft,CircleArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-arrow-right.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CarouselXP() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const responsiveOptions = [\n        {\n            breakpoint: \"1400px\",\n            numVisible: 2,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"1199px\",\n            numVisible: 3,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"767px\",\n            numVisible: 2,\n            numScroll: 1\n        },\n        {\n            breakpoint: \"575px\",\n            numVisible: 1,\n            numScroll: 1\n        }\n    ];\n    const getSeverity = (product)=>{\n        switch(product.inventoryStatus){\n            case \"INSTOCK\":\n                return \"success\";\n            case \"LOWSTOCK\":\n                return \"warning\";\n            case \"OUTOFSTOCK\":\n                return \"danger\";\n            default:\n                return null;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _app_service_ProductService__WEBPACK_IMPORTED_MODULE_2__.ProductService.getProductsSmall().then((data)=>setProducts(data.slice(0, 9)));\n    }, []);\n    const productTemplate = (product)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-auto w-11/12 bg-white border-1 text-left py-5 px-5 border-8 border-white rounded-3xl m-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3 flex justify-end \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://primefaces.org/cdn/primereact/images/product/\".concat(product.image),\n                        alt: product.name,\n                        className: \" w-52 h-52 border-8 border-gray-500 shadow-2 rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[220px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"mb-1\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"mt-0 mb-3\",\n                            children: [\n                                \"$\",\n                                product.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_tag__WEBPACK_IMPORTED_MODULE_3__.Tag, {\n                            value: product.inventoryStatus,\n                            severity: getSeverity(product)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card h-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n            contentClassName: \"flex i\",\n            prevIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                color: \"#ffff\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                lineNumber: 85,\n                columnNumber: 24\n            }, void 0),\n            nextIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CircleArrowLeft_CircleArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                color: \"#ffff\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 24\n            }, void 0),\n            value: products,\n            numScroll: 1,\n            numVisible: 1,\n            //responsiveOptions={responsiveOptions} \n            itemTemplate: productTemplate\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\CADASTRO UNICO\\\\Desktop\\\\lucasDevBr\\\\src\\\\components\\\\CarousselXP\\\\index.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_s(CarouselXP, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = CarouselXP;\nvar _c;\n$RefreshReg$(_c, \"CarouselXP\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c3NlbFhQL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUVzQjtBQUNwQztBQUM2QjtBQUNBO0FBZW5ELFNBQVNROztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQVksRUFBRTtJQUN0RCxNQUFNVSxvQkFBZ0Q7UUFDbEQ7WUFDSUMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtRQUNBO1lBQ0lGLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxXQUFXO1FBQ2Y7UUFDQTtZQUNJRixZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsV0FBVztRQUNmO1FBQ0E7WUFDSUYsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFdBQVc7UUFDZjtLQUNIO0lBRUQsTUFBTUMsY0FBYyxDQUFDQztRQUNqQixPQUFRQSxRQUFRQyxlQUFlO1lBQzNCLEtBQUs7Z0JBQ0QsT0FBTztZQUVYLEtBQUs7Z0JBQ0QsT0FBTztZQUVYLEtBQUs7Z0JBQ0QsT0FBTztZQUVYO2dCQUNJLE9BQU87UUFDZjtJQUNKO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ05HLHVFQUFjQSxDQUFDYSxnQkFBZ0IsR0FBR0MsSUFBSSxDQUFDLENBQUNDLE9BQWdCVixZQUFZVSxLQUFLQyxLQUFLLENBQUMsR0FBRztJQUN0RixHQUFHLEVBQUU7SUFFTCxNQUFNQyxrQkFBa0IsQ0FBQ047UUFDckIscUJBQ0ksOERBQUNPO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlDLEtBQUssd0RBQXNFLE9BQWRWLFFBQVFXLEtBQUs7d0JBQUlDLEtBQUtaLFFBQVFhLElBQUk7d0JBQUVMLFdBQVU7Ozs7Ozs7Ozs7OzhCQUVwSCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FBUVIsUUFBUWEsSUFBSTs7Ozs7O3NDQUNsQyw4REFBQ0U7NEJBQUdQLFdBQVU7O2dDQUFZO2dDQUFFUixRQUFRZ0IsS0FBSzs7Ozs7OztzQ0FDekMsOERBQUM1QiwrQ0FBR0E7NEJBQUM2QixPQUFPakIsUUFBUUMsZUFBZTs0QkFBRWlCLFVBQVVuQixZQUFZQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSTNFO0lBRUEscUJBQ0ksOERBQUNPO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNyQix5REFBUUE7WUFBQ2dDLGtCQUFpQjtZQUMxQkMsd0JBQVUsOERBQUM5Qiw0R0FBZUE7Z0JBQUMrQixPQUFNOzs7Ozs7WUFDakNDLHdCQUFVLDhEQUFDL0IsNEdBQWdCQTtnQkFBQzhCLE9BQU07Ozs7OztZQUNsQ0osT0FBT3hCO1lBQ1BLLFdBQVc7WUFDWEQsWUFBWTtZQUNaLHdDQUF3QztZQUN4QzBCLGNBQWNqQjs7Ozs7Ozs7Ozs7QUFJM0I7R0F6RXdCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJvdXNzZWxYUC9pbmRleC50c3g/YjFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncHJpbWVyZWFjdC9idXR0b24nO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcm91c2VsUmVzcG9uc2l2ZU9wdGlvbiB9IGZyb20gJ3ByaW1lcmVhY3QvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgVGFnIH0gZnJvbSAncHJpbWVyZWFjdC90YWcnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvc2VydmljZS9Qcm9kdWN0U2VydmljZSc7XG5pbXBvcnQgeyBDaXJjbGVBcnJvd0xlZnQsIENpcmNsZUFycm93UmlnaHQgIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgaW52ZW50b3J5U3RhdHVzOiBzdHJpbmc7XG4gICAgcmF0aW5nOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsWFAoKSB7XG4gICAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgICBjb25zdCByZXNwb25zaXZlT3B0aW9uczogQ2Fyb3VzZWxSZXNwb25zaXZlT3B0aW9uW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6ICcxNDAwcHgnLFxuICAgICAgICAgICAgbnVtVmlzaWJsZTogMixcbiAgICAgICAgICAgIG51bVNjcm9sbDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAnMTE5OXB4JyxcbiAgICAgICAgICAgIG51bVZpc2libGU6IDMsXG4gICAgICAgICAgICBudW1TY3JvbGw6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogJzc2N3B4JyxcbiAgICAgICAgICAgIG51bVZpc2libGU6IDIsXG4gICAgICAgICAgICBudW1TY3JvbGw6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogJzU3NXB4JyxcbiAgICAgICAgICAgIG51bVZpc2libGU6IDEsXG4gICAgICAgICAgICBudW1TY3JvbGw6IDFcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBjb25zdCBnZXRTZXZlcml0eSA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgIHN3aXRjaCAocHJvZHVjdC5pbnZlbnRvcnlTdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ0lOU1RPQ0snOlxuICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG5cbiAgICAgICAgICAgIGNhc2UgJ0xPV1NUT0NLJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuXG4gICAgICAgICAgICBjYXNlICdPVVRPRlNUT0NLJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHNTbWFsbCgpLnRoZW4oKGRhdGE6IGFueVtdKSA9PiBzZXRQcm9kdWN0cyhkYXRhLnNsaWNlKDAsIDkpKSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgcHJvZHVjdFRlbXBsYXRlID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1hdXRvIHctMTEvMTIgYmctd2hpdGUgYm9yZGVyLTEgdGV4dC1sZWZ0IHB5LTUgcHgtNSBib3JkZXItOCBib3JkZXItd2hpdGUgcm91bmRlZC0zeGwgbS0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZsZXgganVzdGlmeS1lbmQgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vcHJpbWVyZWFjdC9pbWFnZXMvcHJvZHVjdC8ke3Byb2R1Y3QuaW1hZ2V9YH0gYWx0PXtwcm9kdWN0Lm5hbWV9IGNsYXNzTmFtZT1cIiB3LTUyIGgtNTIgYm9yZGVyLTggYm9yZGVyLWdyYXktNTAwIHNoYWRvdy0yIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyMjBweF1cIiA+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0xXCI+e3Byb2R1Y3QubmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0zXCI+JHtwcm9kdWN0LnByaWNlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxUYWcgdmFsdWU9e3Byb2R1Y3QuaW52ZW50b3J5U3RhdHVzfSBzZXZlcml0eT17Z2V0U2V2ZXJpdHkocHJvZHVjdCl9PjwvVGFnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaC1hdXRvXCI+XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgY29udGVudENsYXNzTmFtZT0nZmxleCBpJ1xuICAgICAgICAgICAgIHByZXZJY29uPXs8Q2lyY2xlQXJyb3dMZWZ0IGNvbG9yPScjZmZmZicvPn0gXG4gICAgICAgICAgICAgbmV4dEljb249ezxDaXJjbGVBcnJvd1JpZ2h0IGNvbG9yPScjZmZmZicvPn0gXG4gICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RzfSBcbiAgICAgICAgICAgICBudW1TY3JvbGw9ezF9IFxuICAgICAgICAgICAgIG51bVZpc2libGU9ezF9IFxuICAgICAgICAgICAgIC8vcmVzcG9uc2l2ZU9wdGlvbnM9e3Jlc3BvbnNpdmVPcHRpb25zfSBcbiAgICAgICAgICAgICBpdGVtVGVtcGxhdGU9e3Byb2R1Y3RUZW1wbGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5cbiAgICAgICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYXJvdXNlbCIsIlRhZyIsIlByb2R1Y3RTZXJ2aWNlIiwiQ2lyY2xlQXJyb3dMZWZ0IiwiQ2lyY2xlQXJyb3dSaWdodCIsIkNhcm91c2VsWFAiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicmVzcG9uc2l2ZU9wdGlvbnMiLCJicmVha3BvaW50IiwibnVtVmlzaWJsZSIsIm51bVNjcm9sbCIsImdldFNldmVyaXR5IiwicHJvZHVjdCIsImludmVudG9yeVN0YXR1cyIsImdldFByb2R1Y3RzU21hbGwiLCJ0aGVuIiwiZGF0YSIsInNsaWNlIiwicHJvZHVjdFRlbXBsYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDQiLCJoNiIsInByaWNlIiwidmFsdWUiLCJzZXZlcml0eSIsImNvbnRlbnRDbGFzc05hbWUiLCJwcmV2SWNvbiIsImNvbG9yIiwibmV4dEljb24iLCJpdGVtVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CarousselXP/index.tsx\n"));

/***/ })

});