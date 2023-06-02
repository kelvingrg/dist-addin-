"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_pages_Bom_Bom_js"],{

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

/***/ "./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.js":
/*!******************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BomNavBar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BomNavBar.css */ "./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");





function BomNavBar() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.taskpane;
    }),
    nextPage = _useSelector.nextPage;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    bomAction = _useSelector2.bomAction;
  var opengetMenu = function opengetMenu() {
    document.getElementById("bom-get-menu-box").style.display = "block";
  };
  var closeMenuBox = function closeMenuBox() {
    document.getElementById("bom-get-menu-box").style.display = "none";
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, "/assets/beacon-without-background -logo.png ")
  })), nextPage === "bom" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(bomAction == "map" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("map"));
    }
  }, "Map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button bom-get-menu-button ".concat(bomAction == "getRegularBom" || bomAction == "getFlatBom" || bomAction == "getHierarchicalBom" ? "selectedAction" : null),
    onClick: opengetMenu
  }, "Get", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "bom-get-menu-box",
    id: "bom-get-menu-box",
    onMouseLeave: closeMenuBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: function onClick() {
      closeMenuBox();
      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("getRegularBom"));
    }
  }, "Regular BOM", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: function onClick() {
      closeMenuBox();
      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("getFlatBom"));
    }
  }, "Flat BOM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: function onClick() {
      closeMenuBox();
      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("getHierarchicalBom"));
    }
  }, "Hierarchical BOM"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(bomAction == "create" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("create"));
    }
  }, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(bomAction == "update" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setBomAction)("update"));
    }
  }, "Update")));
}
/* harmony default export */ __webpack_exports__["default"] = (BomNavBar);

/***/ }),

/***/ "./src/taskpane/pages/Bom/Bom.js":
/*!***************************************!*\
  !*** ./src/taskpane/pages/Bom/Bom.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commonComponents/SideBarMenu/SideBarMenu */ "./src/taskpane/commonComponents/SideBarMenu/SideBarMenu.js");
/* harmony import */ var _Bom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bom.css */ "./src/taskpane/pages/Bom/Bom.css");
/* harmony import */ var _commonComponents_Bom_BomNavBar_BomNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonComponents/Bom/BomNavBar/BomNavBar */ "./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");






var MaterialMap = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Material_MaterialMap_MaterialMap_js"), __webpack_require__.e("src_taskpane_api_graphQlMutation_js-src_taskpane_commonComponents_DropDown_DropDown_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Material/MaterialMap/MaterialMap */ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.js"));
});
var BomGet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Bom_BomGet_BomGet_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Bom/BomGet/BomGet */ "./src/taskpane/commonComponents/Bom/BomGet/BomGet.js"));
});
var BomUpdate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Bom_BomUpdate_BomUpdate_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Bom/BomUpdate/BomUpdate */ "./src/taskpane/commonComponents/Bom/BomUpdate/BomUpdate.js"));
});
var Loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Loading/Loading */ "./src/taskpane/commonComponents/Loading/Loading.js"));
});
var BomCreate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Bom_BomCreate_BomCreate_js_BomCreate_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Bom/BomCreate/BomCreate.js/BomCreate */ "./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.js"));
});
var BomFlatBom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Bom_BomFlatBom_BomFlatBom_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Bom/BomFlatBom/BomFlatBom */ "./src/taskpane/commonComponents/Bom/BomFlatBom/BomFlatBom.js"));
});
var BomHierarchicalBom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-select_dist_react-select_esm_js"), __webpack_require__.e("src_taskpane_api_apiCalls_js-src_taskpane_commonComponents_Button_Button_js-src_taskpane_cons-f00e6d"), __webpack_require__.e("src_taskpane_api_graphQlQuery_js"), __webpack_require__.e("src_taskpane_commonComponents_Bom_BomHierarchicalBom_BomHierarchicalBom_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom */ "./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.js"));
});
function Bom() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
      return state.action;
    }),
    bomAction = _useSelector.bomAction,
    uploadLoader = _useSelector.uploadLoader,
    bomMappingDataTemp = _useSelector.bomMappingDataTemp;
  // const {} = useSelector((state) => state.taskpane);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonContainer",
    id: "commonContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonNavBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Bom_BomNavBar_BomNavBar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonBody "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonSidebarBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonActivityArea"
  }, bomAction === "map" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MaterialMap, {
    mappingConfig: bomMappingDataTemp,
    setmappingConfig: _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setBomMappingTempData,
    setmappingConfig2: _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setBomMappingTempData2
  }), " ") : null, bomAction === "getRegularBom" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BomGet, null)) : null, bomAction === "getFlatBom" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BomFlatBom, null), " ") : null, bomAction === "getHierarchicalBom" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BomHierarchicalBom, null), " ") : null, bomAction === "create" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BomCreate, null), " ") : null, bomAction === "update" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BomUpdate, null), " ") : null))), uploadLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loading, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (Bom);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css ***!
  \*********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding:5px 2px 5px 2px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n.bom-get-menu-button{\r\nposition: relative;\r\n}\r\n.bom-get-menu-box{\r\n    display: none;\r\n    padding: 0;\r\n    margin:0;\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 0rem;\r\n    word-break: keep-all;\r\n    width: max-content;\r\n    height:  max-content;\r\n    background-color: bisque;\r\n    list-style: none;\r\n\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    \r\n}\r\n.bom-get-menu-box li{\r\n    word-break: keep-all;\r\n    padding: .3rem;\r\n    padding-inline: 1rem;\r\n}\r\n.bom-get-menu-box li:hover{\r\nbackground-color: #FFC467;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;AAEA,uBAAuB;AACvB;AACA;IACI,gCAAgC;IAChC,wBAAwB;;AAE5B;AACA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;AACA;AACA,kBAAkB;AAClB;AACA;IACI,aAAa;IACb,UAAU;IACV,QAAQ;IACR,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,wBAAwB;IACxB,gBAAgB;;IAEhB,wFAAwF;;AAE5F;AACA;IACI,oBAAoB;IACpB,cAAc;IACd,oBAAoB;AACxB;AACA;AACA,yBAAyB;AACzB","sourcesContent":[".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding:5px 2px 5px 2px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n.bom-get-menu-button{\r\nposition: relative;\r\n}\r\n.bom-get-menu-box{\r\n    display: none;\r\n    padding: 0;\r\n    margin:0;\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 0rem;\r\n    word-break: keep-all;\r\n    width: max-content;\r\n    height:  max-content;\r\n    background-color: bisque;\r\n    list-style: none;\r\n\r\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\r\n    \r\n}\r\n.bom-get-menu-box li{\r\n    word-break: keep-all;\r\n    padding: .3rem;\r\n    padding-inline: 1rem;\r\n}\r\n.bom-get-menu-box li:hover{\r\nbackground-color: #FFC467;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Bom/Bom.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Bom/Bom.css ***!
  \******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 3;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/pages/Bom/Bom.css"],"names":[],"mappings":"AAAA;IACI;uBACmB;IACnB,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;AACA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,KAAK;AACL,wBAAwB;AACxB,UAAU;AACV;AACA;AACA,aAAa;AACb,gBAAgB;AAChB,YAAY;;AAEZ;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,aAAa;AACb,8BAA8B;AAC9B,eAAe;AACf;AACA;AACA,YAAY;AACZ,iBAAiB;AACjB","sourcesContent":[".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 3;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css":
/*!*******************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css ***!
  \*******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_BomNavBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./BomNavBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomNavBar/BomNavBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_BomNavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_BomNavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_BomNavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_BomNavBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/pages/Bom/Bom.css":
/*!****************************************!*\
  !*** ./src/taskpane/pages/Bom/Bom.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Bom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Bom.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Bom/Bom.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Bom_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_Bom_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Bom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Bom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_taskpane_pages_Bom_Bom_js.js.map