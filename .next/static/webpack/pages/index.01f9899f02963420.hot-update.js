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

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\n// interface CardProps{\n//     img: string, \n//     label: string\n// }\nfunction Card() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = ref[0], setExpanded = ref[1];\n    var open = function() {\n        return setExpanded(true);\n    };\n    var close = function() {\n        return setExpanded(false);\n    };\n    var bannerImg = 'https://static.teatroallascala.org/static/upload/syl/sylvia---martina-arduino-claudio-coviello---ph-brescia-e-amisano--teatro-alla-scala.jpg';\n    var classes = expanded ? \"bg-white hover:h-auto hover:scale-105 hover:lg:scale-105 text-gotham border-dark shadow-card-img relative z-10\" : \"bg-white hover:h-80 hover:scale-105 hover:lg:scale-125 text-gotham border-dark shadow-card-img mx-5 relative z-1\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \" \".concat(classes),\n        onMouseEnter: open,\n        onMouseLeave: close,\n        style: {\n            transition: \"0.3s\"\n        },\n        __source: {\n            fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative h-60 p-1 border-white border-2 shadow-card-img\",\n                __source: {\n                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: bannerImg,\n                    layout: \"fill\",\n                    __source: {\n                        fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"font-bold p-5 bg-white\",\n                __source: {\n                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/scheda\",\n                        __source: {\n                            fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            className: \"text-dark text-2xl cursor-pointer\",\n                            __source: {\n                                fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 38\n                            },\n                            __self: this,\n                            children: \"Titolo dell'opera\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: expanded ? \"block bg-white\" : \"hidden bg-white\",\n                        __source: {\n                            fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-dark text-md mt-2\",\n                                __source: {\n                                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"opera in due atti\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-dark text-md\",\n                                __source: {\n                                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Libretto di Felice Romani\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-dark text-md\",\n                                __source: {\n                                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: \"Nuova produzione Mds\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"mt-6 text-center pb-5\",\n                                __source: {\n                                    fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: _Button__WEBPACK_IMPORTED_MODULE_3__.ButtonVariantTypes.big,\n                                    text: 'Guarda ora',\n                                    url: \"/theoplayer\",\n                                    __source: {\n                                        fileName: \"/home/sulaimandev/Desktop/fiverr/src/components/Card.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    },\n                                    __self: this\n                                })\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Card, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVDtBQUN1QjtBQUN6Qjs7QUFHNUIsRUFBdUI7QUFDdkIsRUFBb0I7QUFDcEIsRUFBb0I7QUFDcEIsRUFBSTtBQUVXLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLENBQUM7O0lBRTVCLEdBQUssQ0FBMkJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDTSxRQUFRLEdBQWlCTixHQUFlLEtBQTlCTyxXQUFXLEdBQUlQLEdBQWU7SUFFL0MsR0FBSyxDQUFDUSxJQUFJLEdBQUcsUUFBUTtRQUFGRCxNQUFNLENBQU5BLFdBQVcsQ0FBQyxJQUFJOztJQUNuQyxHQUFLLENBQUNFLEtBQUssR0FBRyxRQUFRO1FBQUZGLE1BQU0sQ0FBTkEsV0FBVyxDQUFDLEtBQUs7O0lBRXJDLEdBQUcsQ0FBQ0csU0FBUyxHQUFZLENBQThJO0lBRXZLLEdBQUcsQ0FBQ0MsT0FBTyxHQUFJTCxRQUFRLEdBQUksQ0FBZ0gsa0hBQUcsQ0FBa0g7SUFFaFEsTUFBTSx1RUFDRE0sQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBQyxHQUFVLE9BQVJGLE9BQU87UUFBSUcsWUFBWSxFQUFFTixJQUFJO1FBQUVPLFlBQVksRUFBRU4sS0FBSztRQUFFTyxLQUFLLEVBQUUsQ0FBQ0M7WUFBQUEsVUFBVSxFQUFFLENBQU07UUFBQSxDQUFDOzs7Ozs7OztpRkFDOUZMLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5RDs7Ozs7OzsrRkFDbkVaLG1EQUFLO29CQUFDaUIsR0FBRyxFQUFFUixTQUFTO29CQUFHUyxNQUFNLEVBQUMsQ0FBTTs7Ozs7Ozs7O2tGQUV4Q1AsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXdCOzs7Ozs7Ozt5RkFDbENULGtEQUFJO3dCQUFDZ0IsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7dUdBQUVDLENBQUU7NEJBQUNSLFNBQVMsRUFBQyxDQUFtQzs7Ozs7OztzQ0FBQyxDQUFzQjs7OzBGQUM1RkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFUCxRQUFRLEdBQUcsQ0FBZ0Isa0JBQUcsQ0FBaUI7Ozs7Ozs7O2lHQUMxRGdCLENBQUM7Z0NBQUNULFNBQVMsRUFBQyxDQUF3Qjs7Ozs7OzswQ0FBQyxDQUFpQjs7aUdBQ3REUyxDQUFDO2dDQUFDVCxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7MENBQUMsQ0FBeUI7O2lHQUN6RFMsQ0FBQztnQ0FBQ1QsU0FBUyxFQUFDLENBQW1COzs7Ozs7OzBDQUFDLENBQW9COztpR0FFcERELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OzsrR0FDakNYLCtDQUFNO29DQUFDcUIsT0FBTyxFQUFFcEIsMkRBQXNCO29DQUFFc0IsSUFBSSxFQUFFLENBQVk7b0NBQUVDLEdBQUcsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUFNdEcsQ0FBQztHQTlCdUJyQixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3g/YjVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBCdXR0b24sIHsgQnV0dG9uVmFyaWFudFR5cGVzIH0gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG4vLyBpbnRlcmZhY2UgQ2FyZFByb3Bze1xuLy8gICAgIGltZzogc3RyaW5nLCBcbi8vICAgICBsYWJlbDogc3RyaW5nXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoKSB7XG5cbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiBzZXRFeHBhbmRlZCh0cnVlKTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IHNldEV4cGFuZGVkKGZhbHNlKTtcblxuICAgIGxldCBiYW5uZXJJbWcgOiBzdHJpbmcgPSAnaHR0cHM6Ly9zdGF0aWMudGVhdHJvYWxsYXNjYWxhLm9yZy9zdGF0aWMvdXBsb2FkL3N5bC9zeWx2aWEtLS1tYXJ0aW5hLWFyZHVpbm8tY2xhdWRpby1jb3ZpZWxsby0tLXBoLWJyZXNjaWEtZS1hbWlzYW5vLS10ZWF0cm8tYWxsYS1zY2FsYS5qcGcnO1xuXG4gICAgbGV0IGNsYXNzZXMgPSAoZXhwYW5kZWQpID8gXCJiZy13aGl0ZSBob3ZlcjpoLWF1dG8gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmxnOnNjYWxlLTEwNSB0ZXh0LWdvdGhhbSBib3JkZXItZGFyayBzaGFkb3ctY2FyZC1pbWcgcmVsYXRpdmUgei0xMFwiIDogXCJiZy13aGl0ZSBob3ZlcjpoLTgwIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpsZzpzY2FsZS0xMjUgdGV4dC1nb3RoYW0gYm9yZGVyLWRhcmsgc2hhZG93LWNhcmQtaW1nIG14LTUgcmVsYXRpdmUgei0xXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCAke2NsYXNzZXN9YH0gb25Nb3VzZUVudGVyPXtvcGVufSBvbk1vdXNlTGVhdmU9e2Nsb3NlfSBzdHlsZT17e3RyYW5zaXRpb246IFwiMC4zc1wifX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjAgcC0xIGJvcmRlci13aGl0ZSBib3JkZXItMiBzaGFkb3ctY2FyZC1pbWdcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtiYW5uZXJJbWd9ICBsYXlvdXQ9XCJmaWxsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBwLTUgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NjaGVkYVwiPjxoMSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIj5UaXRvbG8gZGVsbCZhcG9zO29wZXJhPC9oMT48L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2V4cGFuZGVkID8gXCJibG9jayBiZy13aGl0ZVwiIDogXCJoaWRkZW4gYmctd2hpdGVcIn0gPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1tZCBtdC0yXCI+b3BlcmEgaW4gZHVlIGF0dGk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LW1kXCI+TGlicmV0dG8gZGkgRmVsaWNlIFJvbWFuaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtbWRcIj5OdW92YSBwcm9kdXppb25lIE1kczwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXIgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtCdXR0b25WYXJpYW50VHlwZXMuYmlnfSB0ZXh0PXsnR3VhcmRhIG9yYSd9IHVybD1cIi90aGVvcGxheWVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQnV0dG9uIiwiQnV0dG9uVmFyaWFudFR5cGVzIiwiTGluayIsIkNhcmQiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwib3BlbiIsImNsb3NlIiwiYmFubmVySW1nIiwiY2xhc3NlcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsInNyYyIsImxheW91dCIsImhyZWYiLCJoMSIsInAiLCJ2YXJpYW50IiwiYmlnIiwidGV4dCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card.tsx\n");

/***/ })

});