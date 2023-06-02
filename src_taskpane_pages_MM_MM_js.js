"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_pages_MM_MM_js"],{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "DTX_BASE_URL": function() { return /* binding */ DTX_BASE_URL; },
/* harmony export */   "DTX_GRAPHQL_URL": function() { return /* binding */ DTX_GRAPHQL_URL; }
/* harmony export */ });
var dtxGraphqlUrl = {
  development: "https://beacon-dev.hasura.app/v1/graphql",
  production: "https://beacon-dev.hasura.app/v1/graphql",
  staging: "https://beacon-stg.hasura.app/v1/graphql"
};
var devProdUrl = {
  development: "https://kelvingrg.github.io/dist-addin-",
  production: "https://excel-dev.beacon-dtx.com",
  staging: "https://excel-stg.beacon-dtx.com"
};
var dtxBaseUrl = {
  development: "https://kelvingrg.github.io/dist-addin-",
  production: "https://dev-be.beacon-dtx.com",
  staging: "https://stg-be.beacon-dtx.com/"
};
var DTX_GRAPHQL_URL = dtxGraphqlUrl["development"];
var DTX_BASE_URL = dtxBaseUrl["development"];
var BASE_URL = devProdUrl["development"];


/***/ }),

/***/ "./src/taskpane/commonComponents/Material/Navbar/NavBar.js":
/*!*****************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/Navbar/NavBar.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar.css */ "./src/taskpane/commonComponents/Material/Navbar/NavBar.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");





function NavBar() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.taskpane;
    }),
    nextPage = _useSelector.nextPage;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    materialAction = _useSelector2.materialAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL, "/assets/beacon-without-background -logo.png ")
  })), nextPage === "material" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(materialAction == "get" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setMaterialAction)("get"));
    }
  }, "Get"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(materialAction == "map" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setMaterialAction)("map"));
    }
  }, "Map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(materialAction == "export" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setMaterialAction)("export"));
    }
  }, "Export"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(materialAction == "update" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setMaterialAction)("update"));
    }
  }, "Update")));
}
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/taskpane/pages/MM/MM.js":
/*!*************************************!*\
  !*** ./src/taskpane/pages/MM/MM.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MM_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MM.css */ "./src/taskpane/pages/MM/MM.css");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _commonComponents_Material_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonComponents/Material/Navbar/NavBar */ "./src/taskpane/commonComponents/Material/Navbar/NavBar.js");
/* harmony import */ var _commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonComponents/SideBarMenu/SideBarMenu */ "./src/taskpane/commonComponents/SideBarMenu/SideBarMenu.js");






var Loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Loading/Loading */ "./src/taskpane/commonComponents/Loading/Loading.js"));
});
var MaterialExport = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("vendors-node_modules_core-js_index_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_commonComponents_Material_MaterialExport_MaterialExport_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Material/MaterialExport/MaterialExport */ "./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.js"));
});
var MaterialGet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_taskpane_commonComponents_Material_MaterialGet_MaterialGet_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Material/MaterialGet/MaterialGet */ "./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.js"));
});
var MaterialMap = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Material_MaterialMap_MaterialMap_js"), __webpack_require__.e("src_taskpane_api_graphQlMutation_js-src_taskpane_commonComponents_DropDown_DropDown_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Material/MaterialMap/MaterialMap */ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.js"));
});
function MM() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    materialAction = _useSelector.materialAction,
    uploadLoader = _useSelector.uploadLoader,
    MMmappingDataTemp = _useSelector.MMmappingDataTemp;
  // const {} = useSelector((state) => state?.taskpane);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonContainer",
    id: "commonContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonNavBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Material_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonBody "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonSidebarBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonActivityArea"
  }, materialAction === "get" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MaterialGet, null), " ") : null, materialAction === "map" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MaterialMap, {
    mappingConfig: MMmappingDataTemp,
    setmappingConfig: _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_3__.setMMmappingTempData,
    setmappingConfig2: _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_3__.setMMmappingTempData2
  })) : null, materialAction === "export" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MaterialExport, null), " ") : null, materialAction === "update" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MaterialGet, null), " ") : null))), uploadLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loading, null));
}
/* harmony default export */ __webpack_exports__["default"] = (MM);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/Navbar/NavBar.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/Navbar/NavBar.css ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Material/Navbar/NavBar.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;AAEA,YAAY;AACZ;AACA;IACI,gCAAgC;IAChC,wBAAwB;;AAE5B;AACA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":[".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/MM/MM.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/MM/MM.css ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 1;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/pages/MM/MM.css"],"names":[],"mappings":"AAAA;IACI;uBACmB;IACnB,uBAAuB;AAC3B;AACA;AACA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,KAAK;AACL,wBAAwB;AACxB,UAAU;AACV;AACA;AACA,aAAa;AACb,gBAAgB;AAChB;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,aAAa;AACb,8BAA8B;AAC9B,eAAe;AACf;AACA;AACA,YAAY;AACZ,iBAAiB;AACjB","sourcesContent":[".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 1;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/Material/Navbar/NavBar.css":
/*!******************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/Navbar/NavBar.css ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_NavBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./NavBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/Navbar/NavBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_NavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_NavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_NavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_NavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/pages/MM/MM.css":
/*!**************************************!*\
  !*** ./src/taskpane/pages/MM/MM.css ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MM_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./MM.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/MM/MM.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MM_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_MM_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_taskpane_pages_MM_MM_js.js.map