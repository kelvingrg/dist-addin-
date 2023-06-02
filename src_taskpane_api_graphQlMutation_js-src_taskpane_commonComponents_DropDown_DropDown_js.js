"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_api_graphQlMutation_js-src_taskpane_commonComponents_DropDown_DropDown_js"],{

/***/ "./src/taskpane/api/graphQlMutation.js":
/*!*********************************************!*\
  !*** ./src/taskpane/api/graphQlMutation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProductBomQuery": function() { return /* binding */ CreateProductBomQuery; },
/* harmony export */   "CreateProjectBomQuery": function() { return /* binding */ CreateProjectBomQuery; },
/* harmony export */   "UpdateBomitemsMutation": function() { return /* binding */ UpdateBomitemsMutation; },
/* harmony export */   "exportMaterialMasterDataAsOne": function() { return /* binding */ exportMaterialMasterDataAsOne; },
/* harmony export */   "mappingConfigDataMutation": function() { return /* binding */ mappingConfigDataMutation; }
/* harmony export */ });
var UpdateBomitemsMutation = "mutation UpdateBomitemsMutation(\n    $bom_items: [bom_items_insert_input!]!,\n    $bom_id: Int) {\n    insert_bom_versions(\n      objects: {\n        bom_id: $bom_id,\n        bom_items: {data: $bom_items}\n      }\n    ) {\n      affected_rows\n    }\n  }";
var exportMaterialMasterDataAsOne = "mutation exportMaterialMasterDataAsOne($materials: [core_material_master_insert_input!]!) {\n  insert_core_material_master(objects: $materials) {\n    returning{\n      id\n      custom_material_id\n    }\n    affected_rows\n  }\n}";
var CreateProductBomQuery = "mutation CreateProductBomQuery(\n  $name: String!,\n  $items: [bomItemsArray],\n  $product_code_id: Int!,\n  ) {\n  insert_bom(\n    product_code_id: $product_code_id,\n    bom_data: {\n      items: $items,\n      name: $name,\n    }) {\n    message\n  }\n}\n";
var CreateProjectBomQuery = "mutation CreateProjectBomQuery(\n  $name: String!,\n  $items: [bomItemsArray],\n  ) {\n  insert_bom(\n    bom_data: {\n      items: $items,\n      name: $name,\n    }) {\n    message\n  }\n}";
var mappingConfigDataMutation = "mutation mappingConfigDataMutation($tenant_id: Int!, $bom:jsonb!, $material:jsonb!) {\n  update_tenant_defaults(\n    where: {tenant_id: {_eq: $tenant_id}}\n    _set: {bom: $bom, material: $material}\n  ) {\n    affected_rows\n  }\n}\n";

/***/ }),

/***/ "./src/taskpane/commonComponents/DropDown/DropDown.js":
/*!************************************************************!*\
  !*** ./src/taskpane/commonComponents/DropDown/DropDown.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/index-a86253bb.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _DropDown_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDown.css */ "./src/taskpane/commonComponents/DropDown/DropDown.css");





function DropDown(_ref) {
  var options = _ref.options,
    handleChange = _ref.handleChange,
    value = _ref.value,
    label = _ref.label,
    _ref$noOptionMessage = _ref.noOptionMessage,
    noOptionMessage = _ref$noOptionMessage === void 0 ? "No option available" : _ref$noOptionMessage,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? true : _ref$isLoading;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.action;
    }),
    sideBarOpen = _useSelector.sideBarOpen,
    uploadLoader = _useSelector.uploadLoader;
  var filteredOptions = options === null || options === void 0 ? void 0 : options.filter(function (option, index, self) {
    return index === (self === null || self === void 0 ? void 0 : self.findIndex(function (o) {
      return (o === null || o === void 0 ? void 0 : o.label) === (option === null || option === void 0 ? void 0 : option.label);
    }));
  });
  var NoOptionsMessage = function NoOptionsMessage(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_4__.c.NoOptionsMessage, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "custom-css-class"
    }, noOptionMessage));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-select-dd"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    options: filteredOptions,
    components: {
      NoOptionsMessage: NoOptionsMessage
    },
    styles: _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_2__.customStyles,
    onChange: handleChange,
    value: value,
    className: "".concat(sideBarOpen ? "selectType" : " "),
    isDisabled: uploadLoader ? true : false,
    isLoading: isLoading
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (DropDown);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/DropDown/DropDown.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/DropDown/DropDown.css ***!
  \***************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-select-dd p{\r\n    margin:10px 0px 5px 0px\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/DropDown/DropDown.css"],"names":[],"mappings":"AAAA;IACI;AACJ","sourcesContent":[".react-select-dd p{\r\n    margin:10px 0px 5px 0px\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/DropDown/DropDown.css":
/*!*************************************************************!*\
  !*** ./src/taskpane/commonComponents/DropDown/DropDown.css ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DropDown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./DropDown.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/DropDown/DropDown.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DropDown_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_DropDown_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DropDown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DropDown_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_taskpane_api_graphQlMutation_js-src_taskpane_commonComponents_DropDown_DropDown_js.js.map