"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_pages_Projects_Projects_js"],{

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

/***/ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.js":
/*!****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectIndicator.css */ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



function ProjectIndicator() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state.taskpane;
    }),
    activeProject = _useSelector.activeProject;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "projectIndicator-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "..."), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, activeProject === null || activeProject === void 0 ? void 0 : activeProject.name));
}
/* harmony default export */ __webpack_exports__["default"] = (ProjectIndicator);

/***/ }),

/***/ "./src/taskpane/commonComponents/Project/Project.js":
/*!**********************************************************!*\
  !*** ./src/taskpane/commonComponents/Project/Project.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.css */ "./src/taskpane/commonComponents/Project/Project.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProjectIndicator/ProjectIndicator */ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.js");
/* harmony import */ var _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/icons/search-icon.svg */ "./assets/icons/search-icon.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Project() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    projectList = _useState2[0],
    setProjectList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(projectList),
    _useState6 = _slicedToArray(_useState5, 2),
    filteredData = _useState6[0],
    setFilteredData = _useState6[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
      return state.taskpane;
    }),
    activeProject = _useSelector.activeProject;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
      return state.action;
    }),
    uploadLoader = _useSelector2.uploadLoader,
    sideBarOpen = _useSelector2.sideBarOpen;
  var dispacth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var filtered = projectList === null || projectList === void 0 ? void 0 : projectList.filter(function (item) {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(filtered);
  }, [projectList, searchQuery]);

  // while loading the componenetd it fetch the available projects in dtx
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(true));
    var token = localStorage.getItem("tenantToken");
    try {
      var body = {
        operationName: "MyQuery",
        query: "query MyQuery {\n  core_projects {\n    name\n    id\n  }\n}\n",
        variables: null
      };
      fetch(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify(body)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_4__.setNextPage)("homeLogin"));
            } else {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-error-message", "Something went wrong");
            }
          });
        } else {
          var _data$data;
          setProjectList(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.core_projects);
          dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
        }
      }).catch(function (error) {
        console.log(error);
        dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
      });
    } catch (error) {
      console.log(error);
      dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
    }
  }, [true]);

  // getProjectDeatails ==> get all the details of selelcted project by passing projectId
  var getProjectDetails = function getProjectDetails(projectDetails) {
    console.log(projectDetails);
    dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(true));
    try {
      var headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("beaconToken")
      };
      axios__WEBPACK_IMPORTED_MODULE_10__["default"].post("".concat(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_BASE_URL, "/user/tokenExchange"), {
        projectId: projectDetails === null || projectDetails === void 0 ? void 0 : projectDetails.id
      }, {
        headers: headers
      }).then(function (response) {
        var _response$data;
        localStorage.setItem("projectExchangeToken", response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message);
        dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)(projectDetails));
        dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
      }).catch(function (error) {
        console.log("tenant  login ", error);
        dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
      });
    } catch (error) {
      console.log(error);
      dispacth((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_5__.setUploadLoader)(false));
    }
  };

  // setActiveProjectAsMaster ==> if select master instead of any project then project token will be saved as tenant token
  var setActiveProjectAsMaster = function setActiveProjectAsMaster() {
    dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_4__.setActiveProject)({
      name: "Master",
      id: "Master"
    }));
    localStorage.setItem("projectExchangeToken", localStorage.getItem("tenantToken"));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "project-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search-box"
  }, !sideBarOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "search-icon",
    src: _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_9__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    className: "project-search-input",
    placeholder: "Search by name",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "project-list-box"
  }, searchQuery ? "master".includes(searchQuery) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "project-list-names ".concat((activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" ? "selected-project" : ""),
    onClick: setActiveProjectAsMaster
  }, "0. Master") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "project-list-names ".concat((activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" ? "selected-project" : ""),
    onClick: setActiveProjectAsMaster
  }, "0. Master"), filteredData === null || filteredData === void 0 ? void 0 : filteredData.map(function (project, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      key: project === null || project === void 0 ? void 0 : project.id,
      className: "project-list-names ".concat((activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === (project === null || project === void 0 ? void 0 : project.id) ? "selected-project" : ""),
      onClick: function onClick() {
        getProjectDetails(project);
      }
    }, index + 1, ". ", project === null || project === void 0 ? void 0 : project.name);
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/taskpane/constFunctions/constants.js":
/*!**************************************************!*\
  !*** ./src/taskpane/constFunctions/constants.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOM_CREATE_SUCCESS": function() { return /* binding */ BOM_CREATE_SUCCESS; },
/* harmony export */   "BOM_STATE": function() { return /* binding */ BOM_STATE; },
/* harmony export */   "BOM_UNIQUE_ERROR": function() { return /* binding */ BOM_UNIQUE_ERROR; },
/* harmony export */   "BOM__MAPPING_FIELDS": function() { return /* binding */ BOM__MAPPING_FIELDS; },
/* harmony export */   "HIDE_COLUMNS": function() { return /* binding */ HIDE_COLUMNS; },
/* harmony export */   "JWT_ERROR_MESSAGE": function() { return /* binding */ JWT_ERROR_MESSAGE; },
/* harmony export */   "MATAERIAL_MAPPING_FIELDS": function() { return /* binding */ MATAERIAL_MAPPING_FIELDS; }
/* harmony export */ });
var JWT_ERROR_MESSAGE = "Could not verify JWT";
var BOM_UNIQUE_ERROR = "Uniqueness violation";
var BOM_CREATE_SUCCESS = "Bom created Successfully!";
var HIDE_COLUMNS = ["id", "associated_product_code_bom"]; // add the property names here to hide while showing to customer
var BOM__MAPPING_FIELDS = [{
  label: "Quantity (BOM)",
  value: "quantity"
}, {
  label: "Total Price (BOM)",
  value: "total_price"
}, {
  label: "Unit Size (BOM) ",
  value: "unit_size"
}, {
  label: "Associated Product code (BOM)",
  value: "associated_product_code_bom"
}, {
  label: "Material Id ",
  value: "custom_material_id"
}, {
  label: "ERP Id ",
  value: "erp_material_id"
}, {
  label: "Gross Weight",
  value: "gross_weight"
}, {
  label: "Inventory",
  value: "inventory"
}, {
  label: "Lead Time",
  value: "lead_time"
}, {
  label: "Others",
  value: "material_description"
}, {
  label: "Material Group",
  value: "material_group"
}, {
  label: "Material Name* ",
  value: "material_name"
}, {
  label: "Material Product Code ",
  value: "material_product_code"
}, {
  label: "Material Type ",
  value: "material_type"
},
// { label: "Others", value: "others" },
{
  label: "Parent Id ",
  value: "parent_id"
}, {
  label: "PLM Id ",
  value: "plm_material_id"
}, {
  label: "PLM Record Id",
  value: "plm_record_id"
}, {
  label: "Product Code ",
  value: "product_code"
}, {
  label: "Quantity",
  value: "quantity"
}, {
  label: "Status",
  value: "status"
}, {
  label: "Storage",
  value: "storage_loc"
}, {
  label: "Unit Cost",
  value: "unit_cost"
}, {
  label: "UOM ",
  value: "unit_of_material"
}, {
  label: "Unit Sale Price",
  value: "unit_sale_price"
}, {
  label: "Weight Unit",
  value: "weight_unit"
}];
var MATAERIAL_MAPPING_FIELDS = [{
  label: "Material Id*",
  value: "custom_material_id"
}, {
  label: "Material Name*",
  value: "material_name"
}, {
  label: "PLM Id*",
  value: "plm_material_id"
}, {
  label: "UOM*",
  value: "unit_of_material"
}, {
  label: "ERP Id ",
  value: "erp_material_id"
}, {
  label: "Gross Weight",
  value: "gross_weight"
}, {
  label: "Inventory",
  value: "inventory"
}, {
  label: "Lead Time",
  value: "lead_time"
}, {
  label: "Others",
  value: "material_description"
}, {
  label: "Material Group",
  value: "material_group"
}, {
  label: "Material Product Code ",
  value: "material_product_code"
}, {
  label: "Material Type ",
  value: "material_type"
},
// { label: "Others", value: "others" },
{
  label: "Parent Id ",
  value: "parent_id"
}, {
  label: "PLM Record Id",
  value: "plm_record_id"
}, {
  label: "Product Code ",
  value: "product_code"
}, {
  label: "Quantity",
  value: "quantity"
}, {
  label: "Status",
  value: "status"
}, {
  label: "Storage",
  value: "storage_loc"
}, {
  label: "Unit Cost",
  value: "unit_cost"
}, {
  label: "Unit Sale Price",
  value: "unit_sale_price"
}, {
  label: "Weight Unit",
  value: "weight_unit"
}, {
  label: "Tags",
  value: "tags"
}];
var BOM_STATE = {
  checkout: 3
};

/***/ }),

/***/ "./src/taskpane/pages/Projects/Projects.js":
/*!*************************************************!*\
  !*** ./src/taskpane/pages/Projects/Projects.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonComponents_Material_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commonComponents/Material/Navbar/NavBar */ "./src/taskpane/commonComponents/Material/Navbar/NavBar.js");
/* harmony import */ var _commonComponents_Project_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonComponents/Project/Project */ "./src/taskpane/commonComponents/Project/Project.js");
/* harmony import */ var _commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonComponents/SideBarMenu/SideBarMenu */ "./src/taskpane/commonComponents/SideBarMenu/SideBarMenu.js");
/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects.css */ "./src/taskpane/pages/Projects/Projects.css");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var Loading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../commonComponents/Loading/Loading */ "./src/taskpane/commonComponents/Loading/Loading.js"));
});

function Projects() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    uploadLoader = _useSelector.uploadLoader;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonContainer",
    id: "commonContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonNavBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Material_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonBody "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonSidebarBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonActivityArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Project_Project__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), uploadLoader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loading, null)));
}
/* harmony default export */ __webpack_exports__["default"] = (Projects);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projectIndicator-box{\r\n    margin: 0;\r\n    padding:0;\r\n    padding: .08rem;\r\n    width: -webkit-fill-available;\r\n    display: grid;\r\ngrid-template-columns: 1fr 1fr;\r\npadding-right:.2rem;\r\ngrid-gap: 1px;\r\n}\r\n.projectIndicator-box span {\r\ntext-align: center;\r\nbackground-color: rgba(255, 196, 103, .6);\r\nwidth: 100%;\r\nheight: 100%;\r\nfont-size: x-small;\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,SAAS;IACT,eAAe;IACf,6BAA6B;IAC7B,aAAa;AACjB,8BAA8B;AAC9B,mBAAmB;AACnB,aAAa;AACb;AACA;AACA,kBAAkB;AAClB,yCAAyC;AACzC,WAAW;AACX,YAAY;AACZ,kBAAkB;;AAElB","sourcesContent":[".projectIndicator-box{\r\n    margin: 0;\r\n    padding:0;\r\n    padding: .08rem;\r\n    width: -webkit-fill-available;\r\n    display: grid;\r\ngrid-template-columns: 1fr 1fr;\r\npadding-right:.2rem;\r\ngrid-gap: 1px;\r\n}\r\n.projectIndicator-box span {\r\ntext-align: center;\r\nbackground-color: rgba(255, 196, 103, .6);\r\nwidth: 100%;\r\nheight: 100%;\r\nfont-size: x-small;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Project/Project.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Project/Project.css ***!
  \*************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, " .project-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.project-body .search-box{\r\n    border:1px solid;\r\n    padding:5px;\r\n    margin: 1rem 0 0 0;\r\n    display: flex;\r\n    width: 13rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    background-color: white;\r\n    \r\n}\r\ninput[type=\"search\"] {\r\n    border: none;\r\n  background: transparent;\r\n  margin: 0 0 0 10px;\r\n  font-size: 13px;\r\n  color: inherit;\r\n  border-radius: inherit;\r\n flex-grow: 1;\r\n width: 195px;\r\n  }\r\n  input[type=\"search\"]:focus{\r\n    outline: none\r\n  }\r\n  \r\n  input[type=\"search\"]::placeholder {\r\n    color: #bbb;\r\n  }\r\n\r\n  .search-icon {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: transparent ;\r\n  transform: scaleX(-1);\r\n  width: 16px;\r\n  height: 16px;\r\n\r\n  }\r\n  .project-list-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 20px;\r\n    justify-content: start;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n  .project-list-box label{\r\n    border-bottom: 1px  #FFC467 solid;\r\n    border-bottom-width: thin;\r\n    width: 13rem;\r\n    padding: 5px;\r\n  }\r\n  .project-list-box label:hover{\r\n    background-color: #FFC467;\r\n    border: 1px solid #383332;\r\n  }\r\n  .active-project-name{\r\n    margin: 0 0 10px 10px;\r\n    padding:0;\r\n  }\r\n  .active-project-name span {\r\n    text-transform: capitalize;\r\n    font-weight: bold;\r\n  }\r\n  .selected-project{\r\n    background-color:#FFF0D9 ;\r\n    opacity:1;\r\n    border: 1px solid #383332;\r\n    border-radius: 2px;\r\n  }", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Project/Project.css"],"names":[],"mappings":"CAAC;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;;AAE3B;AACA;IACI,YAAY;EACd,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;CACvB,YAAY;CACZ,YAAY;EACX;EACA;IACE;EACF;;EAEA;IACE,WAAW;EACb;;EAEA;EACA,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,qBAAqB;EACrB,WAAW;EACX,YAAY;;EAEZ;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,iCAAiC;IACjC,yBAAyB;IACzB,YAAY;IACZ,YAAY;EACd;EACA;IACE,yBAAyB;IACzB,yBAAyB;EAC3B;EACA;IACE,qBAAqB;IACrB,SAAS;EACX;EACA;IACE,0BAA0B;IAC1B,iBAAiB;EACnB;EACA;IACE,yBAAyB;IACzB,SAAS;IACT,yBAAyB;IACzB,kBAAkB;EACpB","sourcesContent":[" .project-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.project-body .search-box{\r\n    border:1px solid;\r\n    padding:5px;\r\n    margin: 1rem 0 0 0;\r\n    display: flex;\r\n    width: 13rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 3px;\r\n    background-color: white;\r\n    \r\n}\r\ninput[type=\"search\"] {\r\n    border: none;\r\n  background: transparent;\r\n  margin: 0 0 0 10px;\r\n  font-size: 13px;\r\n  color: inherit;\r\n  border-radius: inherit;\r\n flex-grow: 1;\r\n width: 195px;\r\n  }\r\n  input[type=\"search\"]:focus{\r\n    outline: none\r\n  }\r\n  \r\n  input[type=\"search\"]::placeholder {\r\n    color: #bbb;\r\n  }\r\n\r\n  .search-icon {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: transparent ;\r\n  transform: scaleX(-1);\r\n  width: 16px;\r\n  height: 16px;\r\n\r\n  }\r\n  .project-list-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 20px;\r\n    justify-content: start;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n  .project-list-box label{\r\n    border-bottom: 1px  #FFC467 solid;\r\n    border-bottom-width: thin;\r\n    width: 13rem;\r\n    padding: 5px;\r\n  }\r\n  .project-list-box label:hover{\r\n    background-color: #FFC467;\r\n    border: 1px solid #383332;\r\n  }\r\n  .active-project-name{\r\n    margin: 0 0 10px 10px;\r\n    padding:0;\r\n  }\r\n  .active-project-name span {\r\n    text-transform: capitalize;\r\n    font-weight: bold;\r\n  }\r\n  .selected-project{\r\n    background-color:#FFF0D9 ;\r\n    opacity:1;\r\n    border: 1px solid #383332;\r\n    border-radius: 2px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Projects/Projects.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Projects/Projects.css ***!
  \****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 1;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/pages/Projects/Projects.css"],"names":[],"mappings":"AAAA;IACI;uBACmB;IACnB,uBAAuB;AAC3B;AACA;AACA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,KAAK;AACL,wBAAwB;AACxB,UAAU;AACV;AACA;AACA,aAAa;AACb,gBAAgB;AAChB;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,aAAa;AACb,8BAA8B;AAC9B,eAAe;AACf;AACA;AACA,YAAY;AACZ,iBAAiB;AACjB","sourcesContent":[".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 1;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css":
/*!*****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css ***!
  \*****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ProjectIndicator.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ProjectIndicator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/commonComponents/Project/Project.css":
/*!***********************************************************!*\
  !*** ./src/taskpane/commonComponents/Project/Project.css ***!
  \***********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Project.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Project/Project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_Project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/pages/Projects/Projects.css":
/*!**************************************************!*\
  !*** ./src/taskpane/pages/Projects/Projects.css ***!
  \**************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Projects/Projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_Projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/icons/search-icon.svg":
/*!**************************************!*\
  !*** ./assets/icons/search-icon.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/search-icon.svg";

/***/ })

}]);
//# sourceMappingURL=src_taskpane_pages_Projects_Projects_js.js.map