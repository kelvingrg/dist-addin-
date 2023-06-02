"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_commonComponents_Bom_BomCreate_BomCreate_js_BomCreate_js"],{

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

/***/ "./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.js":
/*!*******************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../DropDown/DropDown */ "./src/taskpane/commonComponents/DropDown/DropDown.js");
/* harmony import */ var _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/graphQlQuery */ "./src/taskpane/api/graphQlQuery.js");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../config */ "./src/config.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BomCreate_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BomCreate.css */ "./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Button/Button */ "./src/taskpane/commonComponents/Button/Button.js");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../api/graphQlMutation */ "./src/taskpane/api/graphQlMutation.js");
/* harmony import */ var _ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ProjectIndicator/ProjectIndicator */ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.js");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var AddNewMaterail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_taskpane_commonComponents_Bom_AddNewMaterail_AddNewMaterail_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../AddNewMaterail/AddNewMaterail */ "./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.js"));
});




function BomCreate() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    productCodes = _useState2[0],
    setProductCodes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    prodCodeLoading = _useState4[0],
    setProdCodeLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedProdCode = _useState6[0],
    setSelectedProdCode = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    addNewBomMaterial = _useState8[0],
    setAddNewBomMaterial = _useState8[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.taskpane;
    }),
    bomMappingData = _useSelector.bomMappingData,
    activeProject = _useSelector.activeProject;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
      return state.action;
    }),
    bomName = _useSelector2.bomName;

  // while rendering bom-create page this useEffect fetches  all product codes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setProdCodeLoading(true);
    var token = localStorage.getItem("tenantToken");
    try {
      var body = {
        operationName: "GetAllProductCodes",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.GetAllProductCodes,
        variables: null
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_3__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_4__.DTX_GRAPHQL_URL, token, body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_5__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _loop = function _loop(i) {
            setProductCodes(function (preState) {
              var _data$data2, _data$data2$product_c, _data$data3, _data$data3$product_c;
              return [].concat(_toConsumableArray(preState), [{
                label: data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$product_c = _data$data2.product_code[i]) === null || _data$data2$product_c === void 0 ? void 0 : _data$data2$product_c.product_code,
                value: data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$product_c = _data$data3.product_code[i]) === null || _data$data3$product_c === void 0 ? void 0 : _data$data3$product_c.id
              }]);
            });
          };
          for (var i = 0; i < (data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$product_co = _data$data.product_code) === null || _data$data$product_co === void 0 ? void 0 : _data$data$product_co.length); i++) {
            var _data$data, _data$data$product_co;
            _loop(i);
          }
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
      });
    } catch (error) {
      console.log(error);
    } finally {
      setProdCodeLoading(false);
    }
  }, [true]);
  var handleProdCodeChange = function handleProdCodeChange(selectedProdCode) {
    setSelectedProdCode(selectedProdCode);
  };
  // after checking the mapping config and bom name this function will paste selected material data to excel
  // if there is any associated bom , then it opens addnewMaterial modal (function for pasting such materails are provioded in that componnent )
  var handleCreateBom = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(bomMappingData.quantity && bomMappingData.total_price && bomMappingData.unit_size && bomMappingData.id && bomMappingData.custom_material_id)) {
              _context2.next = 6;
              break;
            }
            _context2.next = 4;
            return checkBomNames().then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(nameExist) {
                var AllSheetNames, _Object$entries, _Object$entries2, sheetname;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!nameExist) {
                        _context.next = 5;
                        break;
                      }
                      console.log(nameExist);
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "".concat(bomName, " is already taken"));
                      _context.next = 19;
                      break;
                    case 5:
                      _context.next = 7;
                      return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.getAllsheetNames)();
                    case 7:
                      AllSheetNames = _context.sent;
                      if (!AllSheetNames.includes(bomName)) {
                        _context.next = 13;
                        break;
                      }
                      (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.activateGivenSheet)(bomName);
                      (_Object$entries = Object.entries(bomMappingData)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.map(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                          key = _ref4[0],
                          value = _ref4[1];
                        (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.writeHeadingsToExcel)(bomMappingData, key, bomName);
                      });
                      _context.next = 18;
                      break;
                    case 13:
                      _context.next = 15;
                      return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.createNewSheet)(bomName);
                    case 15:
                      sheetname = _context.sent;
                      (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.activateGivenSheet)(sheetname);
                      (_Object$entries2 = Object.entries(bomMappingData)) === null || _Object$entries2 === void 0 ? void 0 : _Object$entries2.map(function (_ref5) {
                        var _ref6 = _slicedToArray(_ref5, 2),
                          key = _ref6[0],
                          value = _ref6[1];
                        (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.writeHeadingsToExcel)(bomMappingData, key, sheetname);
                      });
                    case 18:
                      setAddNewBomMaterial(true);
                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
          case 4:
            _context2.next = 8;
            break;
          case 6:
            document.getElementById("mappingWarning").style.display = "block";
            setTimeout(function () {
              document.getElementById("mappingWarning").style.display = "none";
            }, 4000);
          case 8:
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 13:
            _context2.prev = 13;
            return _context2.finish(13);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10, 13, 15]]);
    }));
    return function handleCreateBom() {
      return _ref.apply(this, arguments);
    };
  }();

  // checkBomNames just ensures there is no same bom name in dtx
  var checkBomNames = function checkBomNames() {
    return new Promise(function (resolve, reject) {
      try {
        var body = {
          operationName: "allBomAssociatedwithATenant",
          query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.allBomAssociatedwithATenant
        };
        (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_3__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_4__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
          if (data.errors) {
            data.errors.map(function (element) {
              if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_5__.JWT_ERROR_MESSAGE)) {
                (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
                dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setNextPage)("homeLogin"));
              }
            });
          } else {
            for (var i = 0; i < (data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : (_data$data4$core_bom = _data$data4.core_bom) === null || _data$data4$core_bom === void 0 ? void 0 : _data$data4$core_bom.length); i++) {
              var _data$data4, _data$data4$core_bom, _data$data5;
              if ((data === null || data === void 0 ? void 0 : (_data$data5 = data.data) === null || _data$data5 === void 0 ? void 0 : _data$data5.core_bom[i].name) === bomName) {
                resolve(true);
                break;
              }
            }
            resolve(false);
          }
        }).catch(function (error) {
          console.log(error);
        });
      } catch (error) {
        console.log(error);
      }
    });
  };
  var handleUpdateNewBom = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (!(!(selectedProdCode !== null && selectedProdCode !== void 0 && selectedProdCode.value) && (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" || !bomName)) {
              _context4.next = 5;
              break;
            }
            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "check Bom name and selected prodcuct code ");
            _context4.next = 7;
            break;
          case 5:
            _context4.next = 7;
            return checkBomNames().then( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(nameExist) {
                var bomDataConstructor, updatedBomItems, lastRow, i, element, flag, _i2, bom_items, token, body;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!nameExist) {
                        _context3.next = 4;
                        break;
                      }
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "".concat(bomName, " is already taken"));
                      _context3.next = 70;
                      break;
                    case 4:
                      bomDataConstructor = function _bomDataConstructor(material_id, quantity, total_price, unit_size, associated_product_code_bom) {
                        this.material_id = material_id;
                        this.quantity = quantity;
                        this.total_price = total_price;
                        this.unit_size = unit_size;
                        associated_product_code_bom ? this.associated_product_code = associated_product_code_bom : null;
                      };
                      if (!(bomMappingData.quantity && bomMappingData.total_price && bomMappingData.unit_size && bomMappingData.id && bomMappingData.custom_material_id)) {
                        _context3.next = 68;
                        break;
                      }
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__.setUploadLoader)(true));
                      updatedBomItems = [];
                      _context3.next = 10;
                      return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_11__.getLastUsedRowNumber)();
                    case 10:
                      lastRow = _context3.sent;
                      i = 2;
                    case 12:
                      if (!(i <= lastRow)) {
                        _context3.next = 62;
                        break;
                      }
                      element = {};
                      if (!bomMappingData.id) {
                        _context3.next = 20;
                        break;
                      }
                      _context3.next = 17;
                      return getUpdatedDataOfQuantity(i, "id");
                    case 17:
                      element.material_id = _context3.sent;
                      _context3.next = 21;
                      break;
                    case 20:
                      null;
                    case 21:
                      if (!bomMappingData.quantity) {
                        _context3.next = 27;
                        break;
                      }
                      _context3.next = 24;
                      return getUpdatedDataOfQuantity(i, "quantity");
                    case 24:
                      element.quantity = _context3.sent;
                      _context3.next = 28;
                      break;
                    case 27:
                      null;
                    case 28:
                      if (!bomMappingData.total_price) {
                        _context3.next = 34;
                        break;
                      }
                      _context3.next = 31;
                      return getUpdatedDataOfQuantity(i, "total_price");
                    case 31:
                      element.total_price = _context3.sent;
                      _context3.next = 35;
                      break;
                    case 34:
                      null;
                    case 35:
                      if (!bomMappingData.unit_size) {
                        _context3.next = 41;
                        break;
                      }
                      _context3.next = 38;
                      return getUpdatedDataOfQuantity(i, "unit_size");
                    case 38:
                      element.unit_size = _context3.sent;
                      _context3.next = 42;
                      break;
                    case 41:
                      null;
                    case 42:
                      if (!bomMappingData.associated_product_code_bom) {
                        _context3.next = 48;
                        break;
                      }
                      _context3.next = 45;
                      return getUpdatedDataOfQuantity(i, "associated_product_code_bom");
                    case 45:
                      element.associated_product_code_bom = _context3.sent;
                      _context3.next = 49;
                      break;
                    case 48:
                      null;
                    case 49:
                      if (!(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.custom_material_id)) {
                        _context3.next = 55;
                        break;
                      }
                      _context3.next = 52;
                      return getUpdatedDataOfQuantity(i, "custom_material_id", "string");
                    case 52:
                      element.custom_material_id = _context3.sent;
                      _context3.next = 56;
                      break;
                    case 55:
                      null;
                    case 56:
                      flag = true;
                      for (_i2 = 0; _i2 < updatedBomItems.length; _i2++) {
                        if (updatedBomItems[_i2].custom_material_id === element.custom_material_id && updatedBomItems[_i2].unit_size === element.unit_size) {
                          updatedBomItems[_i2].quantity = updatedBomItems[_i2].quantity + element.quantity;
                          flag = false;
                        }
                      }
                      if (flag) {
                        updatedBomItems.push(element);
                      }
                    case 59:
                      i++;
                      _context3.next = 12;
                      break;
                    case 62:
                      bom_items = updatedBomItems === null || updatedBomItems === void 0 ? void 0 : updatedBomItems.map(function (bomItem) {
                        var bomData = new bomDataConstructor(bomItem.material_id, bomItem === null || bomItem === void 0 ? void 0 : bomItem.quantity, bomItem === null || bomItem === void 0 ? void 0 : bomItem.total_price, bomItem === null || bomItem === void 0 ? void 0 : bomItem.unit_size, bomItem.associated_product_code_bom);
                        return bomData;
                      });
                      token = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" ? localStorage.getItem("tenantToken") : localStorage.getItem("projectExchangeToken");
                      body = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" ? {
                        operationName: "",
                        variables: {
                          product_code_id: selectedProdCode === null || selectedProdCode === void 0 ? void 0 : selectedProdCode.value,
                          name: bomName,
                          items: bom_items
                        },
                        query: _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_13__.CreateProductBomQuery
                      } : {
                        operationName: "CreateProjectBomQuery",
                        variables: {
                          name: bomName,
                          items: bom_items
                        },
                        query: _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_13__.CreateProjectBomQuery
                      };
                      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_3__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_4__.DTX_GRAPHQL_URL, token, body).then(function (data) {
                        var _data$data6, _data$data6$insert_bo, _data$data6$insert_bo2;
                        if (data !== null && data !== void 0 && data.errors) {
                          data.errors.map(function (element) {
                            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_5__.JWT_ERROR_MESSAGE)) {
                              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
                              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setNextPage)("homeLogin"));
                            } else {
                              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "Something went wrong");
                            }
                          });
                        } else if (data !== null && data !== void 0 && (_data$data6 = data.data) !== null && _data$data6 !== void 0 && (_data$data6$insert_bo = _data$data6.insert_bom) !== null && _data$data6$insert_bo !== void 0 && (_data$data6$insert_bo2 = _data$data6$insert_bo.message) !== null && _data$data6$insert_bo2 !== void 0 && _data$data6$insert_bo2.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_5__.BOM_CREATE_SUCCESS)) {
                          console.log("inside bom creatiuiomn");
                          (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.successMessage)("bomUpdate-success", "Bom created Successfully!");
                        } else {
                          (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "Something went wrong");
                        }
                      }).catch(function (error) {
                        dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__.setUploadLoader)(false));
                        console.log("Error", error);
                        (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "Something went wrong");
                      });
                      _context3.next = 70;
                      break;
                    case 68:
                      document.getElementById("mappingWarning").style.display = "block";
                      setTimeout(function () {
                        document.getElementById("mappingWarning").style.display = "none";
                      }, 4000);
                    case 70:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref8.apply(this, arguments);
              };
            }());
          case 7:
            _context4.next = 14;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__.setUploadLoader)(false));
            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "Something went wrong");
          case 14:
            _context4.prev = 14;
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__.setUploadLoader)(false));
            return _context4.finish(14);
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 9, 14, 17]]);
    }));
    return function handleUpdateNewBom() {
      return _ref7.apply(this, arguments);
    };
  }();
  // getUpdatedDataOfQuantity thsi function fetches each cel value and returns a number if type is not passed ,if type passed then it returns a string
  var getUpdatedDataOfQuantity = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(i, field, type) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return Excel.run( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
                var _bomMappingData$field;
                var value;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      value = context.workbook.worksheets.getActiveWorksheet().getRange(String(((_bomMappingData$field = bomMappingData[field]) === null || _bomMappingData$field === void 0 ? void 0 : _bomMappingData$field.address) + i)).load("values");
                      _context5.next = 3;
                      return context.sync();
                    case 3:
                      if (!type) {
                        _context5.next = 7;
                        break;
                      }
                      return _context5.abrupt("return", String(value.values[0][0]));
                    case 7:
                      if (!(typeof value.values[0][0] !== "number")) {
                        _context5.next = 11;
                        break;
                      }
                      return _context5.abrupt("return", 1);
                    case 11:
                      return _context5.abrupt("return", value.values[0][0]);
                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x7) {
                return _ref10.apply(this, arguments);
              };
            }());
          case 3:
            return _context6.abrupt("return", _context6.sent);
          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
          case 9:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 6]]);
    }));
    return function getUpdatedDataOfQuantity(_x4, _x5, _x6) {
      return _ref9.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " bom-create-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], null), (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: productCodes,
    handleChange: handleProdCodeChange,
    value: selectedProdCode,
    label: "Selelct the Product Code",
    noOptionMessage: "No Product Codes availble",
    prodCodeLoading: prodCodeLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-addname-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: ""
  }, " Enter the bom name "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "bom-addName-input",
    value: bomName,
    placeholder: "New Bom name...",
    onChange: function onChange(e) {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_12__.setBomName)(e.target.value));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "addmaterial-button-bom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: handleCreateBom
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Add materials",
    enabled: addNewBomMaterial
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: handleUpdateNewBom
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Create "
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    id: "bom-name-check-warning",
    className: "bom-name-check-warning"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    id: "bomUpdate-success",
    className: "bomUpdate-success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mappingWarning",
    id: "mappingWarning"
  }, !(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "ID"), !(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.unit_size) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Unit Size (BOM)"), !(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.quantity) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Quantity (BOM)"), !(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.total_price) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Total Price (BOM)"), !(bomMappingData !== null && bomMappingData !== void 0 && bomMappingData.custom_material_id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Material Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "you have to map given mandatory field(s)")), addNewBomMaterial && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddNewMaterail, {
    setAddNewBomMaterial: setAddNewBomMaterial
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (BomCreate);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css ***!
  \**********************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bom-create-container{\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n    min-width: fit-content;\r\n\r\n}\r\n.bom-addname-container{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    width: 14rem;\r\n\r\n    \r\n}\r\n.bom-addName-input{\r\n    margin-top: 5px;\r\n    padding: 4px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    padding-left: 10px;\r\n}\r\n.bom-addName-input::placeholder{\r\n  \r\n}\r\n.addmaterial-button-bom{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.bom-name-check-warning{\r\n    color: red;\r\n    font-size: small;\r\n    display: none;\r\n}\r\n.bomUpdate-success{\r\n    color: green;\r\n    display: none;\r\n}\r\n.mappingWarning li{\r\n    color: red;\r\n    font-size: x-small;\r\n}\r\n.mappingWarning li:last-child{\r\n    list-style: none;\r\n}\r\n\r\n.mappingWarning{\r\ndisplay: none;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css"],"names":[],"mappings":"AAAA;IACI,aAAa;GACd,mBAAmB;IAClB,sBAAsB;IACtB,sBAAsB;;AAE1B;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;;;AAGhB;AACA;IACI,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;;AAEA;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;AACb;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;AACA,aAAa;AACb","sourcesContent":[".bom-create-container{\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n    min-width: fit-content;\r\n\r\n}\r\n.bom-addname-container{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    width: 14rem;\r\n\r\n    \r\n}\r\n.bom-addName-input{\r\n    margin-top: 5px;\r\n    padding: 4px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    border-width: thin;\r\n    padding-left: 10px;\r\n}\r\n.bom-addName-input::placeholder{\r\n  \r\n}\r\n.addmaterial-button-bom{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.bom-name-check-warning{\r\n    color: red;\r\n    font-size: small;\r\n    display: none;\r\n}\r\n.bomUpdate-success{\r\n    color: green;\r\n    display: none;\r\n}\r\n.mappingWarning li{\r\n    color: red;\r\n    font-size: x-small;\r\n}\r\n.mappingWarning li:last-child{\r\n    list-style: none;\r\n}\r\n\r\n.mappingWarning{\r\ndisplay: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css":
/*!********************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_BomCreate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./BomCreate.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomCreate/BomCreate.js/BomCreate.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_BomCreate_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_BomCreate_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_BomCreate_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_BomCreate_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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


/***/ })

}]);
//# sourceMappingURL=src_taskpane_commonComponents_Bom_BomCreate_BomCreate_js_BomCreate_js.js.map