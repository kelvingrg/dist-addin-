"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_commonComponents_Material_MaterialExport_MaterialExport_js"],{

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

/***/ "./src/taskpane/api/tagQueries.js":
/*!****************************************!*\
  !*** ./src/taskpane/api/tagQueries.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkParentTagExists": function() { return /* binding */ checkParentTagExists; },
/* harmony export */   "insertMaterialTagMutation": function() { return /* binding */ insertMaterialTagMutation; },
/* harmony export */   "insertTagMutation": function() { return /* binding */ insertTagMutation; }
/* harmony export */ });
// for creating a new tag
var insertTagMutation = "\nmutation insert_tag($tagName: String, $parentId: Int) {\n  insert_tag_one(object: {name: $tagName, parent_id: $parentId}, on_conflict: {constraint: tag_name_parent_id_key, update_columns: []})  {\n    id\n  }\n}\n";

// for creating a tag material association
var insertMaterialTagMutation = "\nmutation insert_material_tag($tag_materials:[tag_material_insert_input!]!) {\n  insert_tag_material(objects:$tag_materials, on_conflict: {constraint: tag_material_pkey, update_columns: []}) {\n    affected_rows\n  }\n}\n";

//check if parent tag already exists
var checkParentTagExists = "query tags($tagName: String!) {\n  tag(where: {name: {_eq: $tagName}, parent_id: {_is_null: true}}) {\n    id\n  }\n}";

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

/***/ "./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.js":
/*!*********************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _MaterialExport_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialExport.css */ "./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/graphQlMutation */ "./src/taskpane/api/graphQlMutation.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Button/Button */ "./src/taskpane/commonComponents/Button/Button.js");
/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../DropDown/DropDown */ "./src/taskpane/commonComponents/DropDown/DropDown.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constFunctions/tagHelper */ "./src/taskpane/constFunctions/tagHelper.js");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// import { BeatLoader } from "react-spinners";












function MaterialExport() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    lastUsedColumn = _useSelector.lastUsedColumn;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.taskpane;
    }),
    MMmappingData = _useSelector2.MMmappingData,
    mmExportFailedRows = _useSelector2.mmExportFailedRows,
    mmExportSuccessRows = _useSelector2.mmExportSuccessRows;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mustHaveField = _useState2[0],
    setMustHaveField = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    sheetTypes = _useState4[0],
    setSheetTypes = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedSheet = _useState6[0],
    setSelectedSheet = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    exportConfig = _useState8[0],
    setExportConfig = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    errorHandle = _useState10[0],
    setErrorHandle = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    errorCells = _useState12[0],
    setErrorCells = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    materialMasterData = _useState14[0],
    setAllMaterialMasterData = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    uploadedIds = _useState16[0],
    setUploadedIds = _useState16[1];
  var failedRows = [];
  var exportedRows = [];

  // this useEffect(empty dependency array) hook contain a anonymus function , which reads
  //  all the sheet names in the current opend excel and stores all sheet names into the setSheetTypes state
  // setSheetTypes=["sheet1","sheet2","sheet3",...]
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    Excel.run(function (context) {
      var sheets = context.workbook.worksheets;
      var sheetNames = [];
      context.load(sheets, "items/name");
      return context.sync().then(function () {
        for (var i = 0; i < (sheets === null || sheets === void 0 ? void 0 : (_sheets$items = sheets.items) === null || _sheets$items === void 0 ? void 0 : _sheets$items.length); i++) {
          var _sheets$items, _sheets$items$i, _sheets$items$i2;
          sheetNames.push({
            value: sheets === null || sheets === void 0 ? void 0 : (_sheets$items$i = sheets.items[i]) === null || _sheets$items$i === void 0 ? void 0 : _sheets$items$i.name,
            label: sheets === null || sheets === void 0 ? void 0 : (_sheets$items$i2 = sheets.items[i]) === null || _sheets$items$i2 === void 0 ? void 0 : _sheets$items$i2.name
          });
        }
        setSheetTypes(sheetNames);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }, []);
  var customStyles = {
    control: function control(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        borderColor: state.isFocused ? "#383332" : "##383332",
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          borderColor: state.isFocused ? null : null
        },
        minHeight: 28,
        height: 28,
        width: 250,
        padding: "0px 0px"
      });
    },
    option: function option(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        backgroundColor: state.isSelected ? "#FFC467" : "##F8F4F0",
        color: state.isSelected ? "#383332" : "#383332",
        "&:hover": {
          backgroundColor: "#F8F4F0"
        },
        minHeight: 18,
        width: 250,
        paddingBottom: 4
      });
    },
    dropdownIndicator: function dropdownIndicator(base) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: 4
      });
    },
    input: function input(base, state) {
      return _objectSpread(_objectSpread({}, base), {}, {
        padding: "0px 0px 0px"
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.getElementById("material-export-warning").style.display = "none";
    document.getElementById("material-export-success").style.display = "none";
  }, []);

  // handlesheetChange==>  whenever the current sheet switched , then this function reads heading of each column(row 1)
  // based on the address stored in mapping configuration (MMmappingData) and stores into sheetMapData state
  // sheetMapData =[
  //   {
  //     dtxField: materil_id,
  //       excelField: "Custom Materail Id",
  //       address: A,
  //   }
  // ]
  var handleSheetChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(selectedSheet) {
      var sheetMapData, MMmapppingDataArray, _loop, i;
      return _regeneratorRuntime().wrap(function _callee2$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setSelectedSheet(selectedSheet);
            (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_7__.activateGivenSheet)(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value);
            sheetMapData = [];
            MMmapppingDataArray = Object.entries(MMmappingData);
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
              return _regeneratorRuntime().wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Excel.run( /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
                        var sheet;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)).getRange(String(MMmapppingDataArray[i][1].address + "1")).load("values");
                              _context.next = 3;
                              return context.sync();
                            case 3:
                              sheetMapData === null || sheetMapData === void 0 ? void 0 : sheetMapData.push({
                                dtxField: MMmapppingDataArray[i][1].name,
                                excelField: sheet === null || sheet === void 0 ? void 0 : sheet.values[0][0],
                                address: MMmapppingDataArray[i][1].address
                              });
                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                      return function (_x3) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            i = 0;
          case 6:
            if (!(i < MMmapppingDataArray.length)) {
              _context3.next = 11;
              break;
            }
            return _context3.delegateYield(_loop(i), "t0", 8);
          case 8:
            i++;
            _context3.next = 6;
            break;
          case 11:
            setExportConfig(sheetMapData);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee2);
    }));
    return function handleSheetChange(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  // uploadData ==> after finding the last used row number of  selectedSheet (not active sheet)
  // andchecking the  availablity of all starred feilds, function iterate from row2(to avoid heading) to last row
  // each iteratiion calls a functon  uploadDataToDtx
  var uploadData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Excel.run( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
                var sheet, lastRow, _MMmappingData$tags, tenantToken, i;
                return _regeneratorRuntime().wrap(function _callee3$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value));
                      lastRow = sheet.getUsedRange().load("rowCount");
                      _context4.next = 4;
                      return context.sync();
                    case 4:
                      if (MMmappingData.hasOwnProperty( true && "unit_of_material")) {
                        _context4.next = 9;
                        break;
                      }
                      setMustHaveField(true);
                      (0,core_js__WEBPACK_IMPORTED_MODULE_5__.setTimeout)(function () {
                        setMustHaveField(false);
                      }, 3000);
                      _context4.next = 33;
                      break;
                    case 9:
                      tenantToken = localStorage.getItem("tenantToken");
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(true));
                      getLastUsedColumn();
                      console.log("started", parseInt(lastRow.rowCount));
                      i = 2;
                    case 14:
                      if (!(i <= parseInt(lastRow.rowCount))) {
                        _context4.next = 20;
                        break;
                      }
                      _context4.next = 17;
                      return uploadDataToDtx(i, tenantToken);
                    case 17:
                      i++;
                      _context4.next = 14;
                      break;
                    case 20:
                      if (!(MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$tags = MMmappingData.tags) !== null && _MMmappingData$tags !== void 0 && _MMmappingData$tags.address)) {
                        _context4.next = 27;
                        break;
                      }
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(true));
                      _context4.next = 24;
                      return _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.uploadAllTags();
                    case 24:
                      _context4.next = 26;
                      return _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.uploadMaterialTags();
                    case 26:
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
                    case 27:
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setLastUsedColumn)(null));
                      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportSuccessRows)(exportedRows));
                      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportFailedRows)(failedRows));
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
                      setErrorHandle(true);
                      console.log(failedRows, exportedRows);
                    case 33:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee3);
              }));
              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 3:
            _context5.next = 11;
            break;
          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            console.log("Error:", _context5.t0);
            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportSuccessRows)(exportedRows));
            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportFailedRows)(failedRows));
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee4, null, [[0, 5]]);
    }));
    return function uploadData() {
      return _ref3.apply(this, arguments);
    };
  }();

  // uploadDataToDtx ==> reads the values in each  cell of given row number (i)  based on the Mapping configaration (MMmappingdata)
  //  and allocates these values into respective fields of mutaion varaibles and then calls the api to mutate
  //  if any rows get faied to export then the row number is stored to reupload the same data
  var uploadDataToDtx = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(i, tenantToken) {
      var variables;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(true));
            variables = {};
            _context7.next = 5;
            return Excel.run( /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
                var _MMmappingData$custom, _MMmappingData$custom2, _MMmappingData$erp_ma, _MMmappingData$erp_ma2, _MMmappingData$gross_, _MMmappingData$gross_2, _MMmappingData$invent, _MMmappingData$invent2, _MMmappingData$lead_t, _MMmappingData$lead_t2, _MMmappingData$materi, _MMmappingData$materi2, _MMmappingData$materi3, _MMmappingData$materi4, _MMmappingData$materi5, _MMmappingData$materi6, _MMmappingData$others, _MMmappingData$others2, _MMmappingData$parent, _MMmappingData$parent2, _MMmappingData$plm_ma, _MMmappingData$plm_ma2, _MMmappingData$plm_re, _MMmappingData$plm_re2, _MMmappingData$produc, _MMmappingData$produc2, _MMmappingData$quanti, _MMmappingData$quanti2, _MMmappingData$unit_c, _MMmappingData$unit_c2, _MMmappingData$storag, _MMmappingData$storag2, _MMmappingData$unit_o, _MMmappingData$unit_o2, _MMmappingData$unit_s, _MMmappingData$unit_s2, _MMmappingData$weight, _MMmappingData$weight2, _MMmappingData$tags2, _MMmappingData$tags3;
                var sheet, custom_material_id, erp_material_id, gross_weight, inventory, lead_time, material_description, material_group, material_name, others, parent_id, plm_material_id, plm_record_id, product_code, quantity, unit_cost, storage_loc, unit_of_material, unit_sale_price, weight_unit, tag, body;
                return _regeneratorRuntime().wrap(function _callee5$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)); // String(MMmappingData?.custom_material_id?.address + i)
                      custom_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$custom = MMmappingData.custom_material_id) !== null && _MMmappingData$custom !== void 0 && _MMmappingData$custom.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$custom2 = MMmappingData.custom_material_id) === null || _MMmappingData$custom2 === void 0 ? void 0 : _MMmappingData$custom2.address) + i)).load("values") : null;
                      erp_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$erp_ma = MMmappingData.erp_material_id) !== null && _MMmappingData$erp_ma !== void 0 && _MMmappingData$erp_ma.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$erp_ma2 = MMmappingData.erp_material_id) === null || _MMmappingData$erp_ma2 === void 0 ? void 0 : _MMmappingData$erp_ma2.address) + i)).load("values") : null;
                      gross_weight = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$gross_ = MMmappingData.gross_weight) !== null && _MMmappingData$gross_ !== void 0 && _MMmappingData$gross_.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$gross_2 = MMmappingData.gross_weight) === null || _MMmappingData$gross_2 === void 0 ? void 0 : _MMmappingData$gross_2.address) + i)).load("values") : null;
                      inventory = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$invent = MMmappingData.inventory) !== null && _MMmappingData$invent !== void 0 && _MMmappingData$invent.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$invent2 = MMmappingData.inventory) === null || _MMmappingData$invent2 === void 0 ? void 0 : _MMmappingData$invent2.address) + i)).load("values") : null;
                      lead_time = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$lead_t = MMmappingData.lead_time) !== null && _MMmappingData$lead_t !== void 0 && _MMmappingData$lead_t.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$lead_t2 = MMmappingData.lead_time) === null || _MMmappingData$lead_t2 === void 0 ? void 0 : _MMmappingData$lead_t2.address) + i)).load("values") : null;
                      material_description = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi = MMmappingData.material_description) !== null && _MMmappingData$materi !== void 0 && _MMmappingData$materi.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi2 = MMmappingData.material_description) === null || _MMmappingData$materi2 === void 0 ? void 0 : _MMmappingData$materi2.address) + i)).load("values") : null;
                      material_group = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi3 = MMmappingData.material_group) !== null && _MMmappingData$materi3 !== void 0 && _MMmappingData$materi3.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi4 = MMmappingData.material_group) === null || _MMmappingData$materi4 === void 0 ? void 0 : _MMmappingData$materi4.address) + i)).load("values") : null;
                      material_name = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi5 = MMmappingData.material_name) !== null && _MMmappingData$materi5 !== void 0 && _MMmappingData$materi5.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi6 = MMmappingData.material_name) === null || _MMmappingData$materi6 === void 0 ? void 0 : _MMmappingData$materi6.address) + i)).load("values") : null;
                      others = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$others = MMmappingData.others) !== null && _MMmappingData$others !== void 0 && _MMmappingData$others.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$others2 = MMmappingData.others) === null || _MMmappingData$others2 === void 0 ? void 0 : _MMmappingData$others2.address) + i)).load("values") : null;
                      parent_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$parent = MMmappingData.parent_id) !== null && _MMmappingData$parent !== void 0 && _MMmappingData$parent.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$parent2 = MMmappingData.parent_id) === null || _MMmappingData$parent2 === void 0 ? void 0 : _MMmappingData$parent2.address) + i)).load("values") : null;
                      plm_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$plm_ma = MMmappingData.plm_material_id) !== null && _MMmappingData$plm_ma !== void 0 && _MMmappingData$plm_ma.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$plm_ma2 = MMmappingData.plm_material_id) === null || _MMmappingData$plm_ma2 === void 0 ? void 0 : _MMmappingData$plm_ma2.address) + i)).load("values") : null;
                      plm_record_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$plm_re = MMmappingData.plm_record_id) !== null && _MMmappingData$plm_re !== void 0 && _MMmappingData$plm_re.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$plm_re2 = MMmappingData.plm_record_id) === null || _MMmappingData$plm_re2 === void 0 ? void 0 : _MMmappingData$plm_re2.address) + i)).load("values") : null;
                      product_code = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$produc = MMmappingData.product_code) !== null && _MMmappingData$produc !== void 0 && _MMmappingData$produc.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$produc2 = MMmappingData.product_code) === null || _MMmappingData$produc2 === void 0 ? void 0 : _MMmappingData$produc2.address) + i)).load("values") : null;
                      quantity = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$quanti = MMmappingData.quantity) !== null && _MMmappingData$quanti !== void 0 && _MMmappingData$quanti.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$quanti2 = MMmappingData.quantity) === null || _MMmappingData$quanti2 === void 0 ? void 0 : _MMmappingData$quanti2.address) + i)).load("values") : null;
                      unit_cost = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_c = MMmappingData.unit_cost) !== null && _MMmappingData$unit_c !== void 0 && _MMmappingData$unit_c.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_c2 = MMmappingData.unit_cost) === null || _MMmappingData$unit_c2 === void 0 ? void 0 : _MMmappingData$unit_c2.address) + i)).load("values") : null;
                      storage_loc = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$storag = MMmappingData.storage_loc) !== null && _MMmappingData$storag !== void 0 && _MMmappingData$storag.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$storag2 = MMmappingData.storage_loc) === null || _MMmappingData$storag2 === void 0 ? void 0 : _MMmappingData$storag2.address) + i)).load("values") : null;
                      unit_of_material = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_o = MMmappingData.unit_of_material) !== null && _MMmappingData$unit_o !== void 0 && _MMmappingData$unit_o.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_o2 = MMmappingData.unit_of_material) === null || _MMmappingData$unit_o2 === void 0 ? void 0 : _MMmappingData$unit_o2.address) + i)).load("values") : null;
                      unit_sale_price = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_s = MMmappingData.unit_sale_price) !== null && _MMmappingData$unit_s !== void 0 && _MMmappingData$unit_s.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_s2 = MMmappingData.unit_sale_price) === null || _MMmappingData$unit_s2 === void 0 ? void 0 : _MMmappingData$unit_s2.address) + i)).load("values") : null;
                      weight_unit = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$weight = MMmappingData.weight_unit) !== null && _MMmappingData$weight !== void 0 && _MMmappingData$weight.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$weight2 = MMmappingData.weight_unit) === null || _MMmappingData$weight2 === void 0 ? void 0 : _MMmappingData$weight2.address) + i)).load("values") : null;
                      tag = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$tags2 = MMmappingData.tags) !== null && _MMmappingData$tags2 !== void 0 && _MMmappingData$tags2.address ? sheet.getRange(String((MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$tags3 = MMmappingData.tags) === null || _MMmappingData$tags3 === void 0 ? void 0 : _MMmappingData$tags3.address) + i)).load("values") : null;
                      _context6.next = 23;
                      return context.sync();
                    case 23:
                      variables = {
                        custom_material_id: String(custom_material_id === null || custom_material_id === void 0 ? void 0 : custom_material_id.values[0][0]),
                        erp_material_id: erp_material_id === null || erp_material_id === void 0 ? void 0 : erp_material_id.values[0][0],
                        gross_weight: gross_weight === null || gross_weight === void 0 ? void 0 : gross_weight.values[0][0],
                        inventory: inventory === null || inventory === void 0 ? void 0 : inventory.values[0][0],
                        lead_time: lead_time === null || lead_time === void 0 ? void 0 : lead_time.values[0][0],
                        material_description: material_description === null || material_description === void 0 ? void 0 : material_description.values[0][0],
                        material_group: material_group === null || material_group === void 0 ? void 0 : material_group.values[0][0],
                        material_name: material_name === null || material_name === void 0 ? void 0 : material_name.values[0][0],
                        others: others === null || others === void 0 ? void 0 : others.values[0][0],
                        parent_id: parent_id === null || parent_id === void 0 ? void 0 : parent_id.values[0][0],
                        plm_material_id: String(plm_material_id === null || plm_material_id === void 0 ? void 0 : plm_material_id.values[0][0]),
                        plm_record_id: plm_record_id === null || plm_record_id === void 0 ? void 0 : plm_record_id.values[0][0],
                        product_code: product_code === null || product_code === void 0 ? void 0 : product_code.values[0][0],
                        quantity: quantity === null || quantity === void 0 ? void 0 : quantity.values[0][0],
                        unit_cost: unit_cost === null || unit_cost === void 0 ? void 0 : unit_cost.values[0][0],
                        storage_loc: storage_loc === null || storage_loc === void 0 ? void 0 : storage_loc.values[0][0],
                        unit_of_material: unit_of_material === null || unit_of_material === void 0 ? void 0 : unit_of_material.values[0][0],
                        unit_sale_price: unit_sale_price === null || unit_sale_price === void 0 ? void 0 : unit_sale_price.values[0][0],
                        weight_unit: weight_unit === null || weight_unit === void 0 ? void 0 : weight_unit.values[0][0]
                      };
                      body = {
                        operationName: "CreateMaterialMaster",
                        variables: variables,
                        query: "mutation CreateMaterialMaster($custom_material_id: String, $erp_material_id: String, $gross_weight: Int, $inventory: Int, $lead_time: Int, $material_description: String, $material_group: Int, $material_name: String, $others: jsonb, $parent_id: Int, $plm_material_id: String, $plm_record_id: String, $product_code: Int, $quantity: float8, $storage_loc: Int, $unit_cost: Int, $unit_of_material: String, $unit_sale_price: Int, $weight_unit: String) {\n  insert_core_material_master_one(\n    object: {custom_material_id: $custom_material_id, erp_material_id: $erp_material_id, gross_weight: $gross_weight, inventory: $inventory, lead_time: $lead_time, material_description: $material_description, material_group: $material_group, material_name: $material_name, others: $others, parent_id: $parent_id, plm_material_id: $plm_material_id, plm_record_id: $plm_record_id, product_code: $product_code, quantity: $quantity, unit_cost: $unit_cost, storage_loc: $storage_loc, unit_of_material: $unit_of_material, unit_sale_price: $unit_sale_price, weight_unit: $weight_unit}\n  ) {\n    id\n    __typename\n  }\n}\n"
                      };
                      _context6.next = 27;
                      return fetch(_config__WEBPACK_IMPORTED_MODULE_6__.DTX_GRAPHQL_URL, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + tenantToken
                        },
                        body: JSON.stringify(body)
                      }).then(function (response) {
                        return response.json();
                      }).then(function (data) {
                        console.log(data.data.insert_core_material_master_one);
                        if (data.data) {
                          var _MMmappingData$tags4;
                          // if tags data exists insert the tags for upload
                          if (MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$tags4 = MMmappingData.tags) !== null && _MMmappingData$tags4 !== void 0 && _MMmappingData$tags4.address) {
                            console.log(tag.values[0][0]);
                            _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.insert(data.data.insert_core_material_master_one.id, String(tag === null || tag === void 0 ? void 0 : tag.values[0][0]));
                          }
                          setUploadedIds(function (currentUploadedIds) {
                            return _objectSpread(_objectSpread({}, currentUploadedIds), {}, _defineProperty({}, i, data.data.insert_core_material_master_one.id));
                          });
                          dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
                          markSuccess(i);
                          exportedRows.push(i);
                        } else {
                          console.log(i, "error happened");
                          markFailed(i);
                          failedRows.push(i);
                        }
                      }).catch(function (error) {
                        console.log("Error", error);
                        markFailed(i);
                        failedRows.push(i);
                        dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
                      });
                    case 27:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee5);
              }));
              return function (_x7) {
                return _ref6.apply(this, arguments);
              };
            }());
          case 5:
            _context7.next = 11;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
            console.log("Error:", _context7.t0);
          case 11:
          case "end":
            return _context7.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function uploadDataToDtx(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
  // getLastUsedColumn=> it stores last used column name into lastusedcolumnName state
  var getLastUsedColumn = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Excel.run( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
                var _lastRow$address, _lastRow$address$spli;
                var sheet, lastRow;
                return _regeneratorRuntime().wrap(function _callee7$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value));
                      lastRow = sheet.getUsedRange().load("address");
                      _context8.next = 4;
                      return context.sync();
                    case 4:
                      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setLastUsedColumn)(lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$address = lastRow.address) === null || _lastRow$address === void 0 ? void 0 : (_lastRow$address$spli = _lastRow$address.split(":")[1]) === null || _lastRow$address$spli === void 0 ? void 0 : _lastRow$address$spli.split("")[0]));
                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee7);
              }));
              return function (_x8) {
                return _ref8.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context9.stop();
        }
      }, _callee8);
    }));
    return function getLastUsedColumn() {
      return _ref7.apply(this, arguments);
    };
  }();
  //mark success will fill the  green color to the given row
  var markSuccess = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(i) {
      return _regeneratorRuntime().wrap(function _callee11$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            console.log("inside success");
            if (!lastUsedColumn) {
              _context12.next = 6;
              break;
            }
            _context12.next = 4;
            return Excel.run( /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(context) {
                return _regeneratorRuntime().wrap(function _callee9$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)).getRange(String("A".concat(i, ":").concat(lastUsedColumn + i))).format.fill.color = "#3eea4a";
                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee9);
              }));
              return function (_x10) {
                return _ref10.apply(this, arguments);
              };
            }());
          case 4:
            _context12.next = 8;
            break;
          case 6:
            _context12.next = 8;
            return Excel.run( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(context) {
                var sheet, lastRow;
                return _regeneratorRuntime().wrap(function _callee10$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value));
                      lastRow = sheet.getUsedRange().load("address");
                      return _context11.abrupt("return", context.sync().then(function () {
                        var _lastRow$address2, _lastRow$address2$spl;
                        context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)).getRange(String("A".concat(i, ":").concat((lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$address2 = lastRow.address) === null || _lastRow$address2 === void 0 ? void 0 : (_lastRow$address2$spl = _lastRow$address2.split(":")[1]) === null || _lastRow$address2$spl === void 0 ? void 0 : _lastRow$address2$spl.split("")[0]) + i))).format.fill.color = "#3eea4a";
                      }));
                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee10);
              }));
              return function (_x11) {
                return _ref11.apply(this, arguments);
              };
            }());
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee11);
    }));
    return function markSuccess(_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
  //markFailed ==> will fill the color red to given fields
  var markFailed = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(i) {
      return _regeneratorRuntime().wrap(function _callee14$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            if (!lastUsedColumn) {
              _context15.next = 5;
              break;
            }
            _context15.next = 3;
            return Excel.run( /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(context) {
                return _regeneratorRuntime().wrap(function _callee12$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)).getRange(String("A".concat(i, ":").concat(lastUsedColumn + i))).format.fill.color = "#d03758";
                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee12);
              }));
              return function (_x13) {
                return _ref13.apply(this, arguments);
              };
            }());
          case 3:
            _context15.next = 7;
            break;
          case 5:
            _context15.next = 7;
            return Excel.run( /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(context) {
                var sheet, lastRow;
                return _regeneratorRuntime().wrap(function _callee13$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      sheet = context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value));
                      lastRow = sheet.getUsedRange().load("address");
                      return _context14.abrupt("return", context.sync().then(function () {
                        var _lastRow$address3, _lastRow$address3$spl;
                        context.workbook.worksheets.getItem(String(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value)).getRange(String("A".concat(i, ":").concat((lastRow === null || lastRow === void 0 ? void 0 : (_lastRow$address3 = lastRow.address) === null || _lastRow$address3 === void 0 ? void 0 : (_lastRow$address3$spl = _lastRow$address3.split(":")[1]) === null || _lastRow$address3$spl === void 0 ? void 0 : _lastRow$address3$spl.split("")[0]) + i))).format.fill.color = "#d03758";
                      }));
                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee13);
              }));
              return function (_x14) {
                return _ref14.apply(this, arguments);
              };
            }());
          case 7:
          case "end":
            return _context15.stop();
        }
      }, _callee14);
    }));
    return function markFailed(_x12) {
      return _ref12.apply(this, arguments);
    };
  }();
  //reuploadErrorOccuredData ==> will upload the rows which failed on last export
  var reuploadErrorOccuredData = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var tenantToken, i;
      return _regeneratorRuntime().wrap(function _callee15$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            tenantToken = localStorage.getItem("tenantToken");
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(true));
            failedRows = [];
            exportedRows = [];
            i = 0;
          case 5:
            if (!(i < mmExportFailedRows.length)) {
              _context16.next = 11;
              break;
            }
            _context16.next = 8;
            return uploadDataToDtx(parseInt(mmExportFailedRows[i]), tenantToken);
          case 8:
            i++;
            _context16.next = 5;
            break;
          case 11:
            // upload tags
            // upload material tags
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportSuccessRows)(exportedRows));
            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setmmExportFailedRows)(failedRows));
            console.log(failedRows, exportedRows);
          case 15:
          case "end":
            return _context16.stop();
        }
      }, _callee15);
    }));
    return function reuploadErrorOccuredData() {
      return _ref15.apply(this, arguments);
    };
  }();
  //cancelReupload ==> fucntion wchich cancels the option to  reupload and ready for next export
  var cancelReupload = function cancelReupload() {
    setErrorHandle(false);
  };
  var checkErrorsAndUpload = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      return _regeneratorRuntime().wrap(function _callee17$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_7__.clearAllbackGroundColorEXA1)();
          case 2:
            Excel.run( /*#__PURE__*/function () {
              var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(context) {
                var worksheet, range, excelMaterialData, materialDataArray, errorCells, tagMaterialMapping, i, _MMmappingData$custom3, _MMmappingData$custom4, _MMmappingData$erp_ma3, _MMmappingData$erp_ma4, _MMmappingData$gross_3, _MMmappingData$gross_4, _MMmappingData$invent3, _MMmappingData$invent4, _MMmappingData$lead_t3, _MMmappingData$lead_t4, _MMmappingData$materi7, _MMmappingData$materi8, _MMmappingData$materi9, _MMmappingData$materi10, _MMmappingData$materi11, _MMmappingData$materi12, _MMmappingData$parent3, _MMmappingData$parent4, _MMmappingData$plm_ma3, _MMmappingData$plm_ma4, _MMmappingData$plm_re3, _MMmappingData$plm_re4, _MMmappingData$produc3, _MMmappingData$produc4, _MMmappingData$quanti3, _MMmappingData$quanti4, _MMmappingData$storag3, _MMmappingData$storag4, _MMmappingData$unit_c3, _MMmappingData$unit_c4, _MMmappingData$unit_o3, _MMmappingData$unit_o4, _MMmappingData$unit_s3, _MMmappingData$unit_s4, _MMmappingData$weight3, _MMmappingData$weight4, _MMmappingData$tags5, _MMmappingData$tags6, element, tags, verifyElement, _i2;
                return _regeneratorRuntime().wrap(function _callee16$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      verifyElement = function _verifyElement(mappingdata, field, excelRowData, type, i) {
                        var _mappingdata$field, _mappingdata$field2, _mappingdata$field3, _mappingdata$field4;
                        if (excelRowData[((_mappingdata$field = mappingdata[field]) === null || _mappingdata$field === void 0 ? void 0 : _mappingdata$field.columnNumber) - 1] !== null && excelRowData[((_mappingdata$field2 = mappingdata[field]) === null || _mappingdata$field2 === void 0 ? void 0 : _mappingdata$field2.columnNumber) - 1] !== undefined && excelRowData[((_mappingdata$field3 = mappingdata[field]) === null || _mappingdata$field3 === void 0 ? void 0 : _mappingdata$field3.columnNumber) - 1] !== "" && (type ? _typeof(excelRowData[((_mappingdata$field4 = mappingdata[field]) === null || _mappingdata$field4 === void 0 ? void 0 : _mappingdata$field4.columnNumber) - 1]) === type : true)) {
                          return true;
                        } else {
                          errorCells.push(mappingdata[field].address + (i + 1));
                        }
                      };
                      worksheet = context.workbook.worksheets.getActiveWorksheet();
                      range = worksheet.getUsedRange();
                      range.load("values");
                      _context17.next = 6;
                      return context.sync();
                    case 6:
                      excelMaterialData = range.values;
                      materialDataArray = [];
                      errorCells = [];
                      tagMaterialMapping = {};
                      for (i = 1; i < excelMaterialData.length; i++) {
                        element = {};
                        element.custom_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$custom3 = MMmappingData.custom_material_id) !== null && _MMmappingData$custom3 !== void 0 && _MMmappingData$custom3.address && verifyElement(MMmappingData, "custom_material_id", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$custom4 = MMmappingData.custom_material_id) === null || _MMmappingData$custom4 === void 0 ? void 0 : _MMmappingData$custom4.columnNumber) - 1]) : null;
                        element.erp_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$erp_ma3 = MMmappingData.erp_material_id) !== null && _MMmappingData$erp_ma3 !== void 0 && _MMmappingData$erp_ma3.address && verifyElement(MMmappingData, "erp_material_id", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$erp_ma4 = MMmappingData.erp_material_id) === null || _MMmappingData$erp_ma4 === void 0 ? void 0 : _MMmappingData$erp_ma4.columnNumber) - 1]) : null;
                        element.gross_weight = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$gross_3 = MMmappingData.gross_weight) !== null && _MMmappingData$gross_3 !== void 0 && _MMmappingData$gross_3.address && verifyElement(MMmappingData, "gross_weight", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$gross_4 = MMmappingData.gross_weight) === null || _MMmappingData$gross_4 === void 0 ? void 0 : _MMmappingData$gross_4.columnNumber) - 1] : null;
                        element.inventory = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$invent3 = MMmappingData.inventory) !== null && _MMmappingData$invent3 !== void 0 && _MMmappingData$invent3.address && verifyElement(MMmappingData, "inventory", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$invent4 = MMmappingData.inventory) === null || _MMmappingData$invent4 === void 0 ? void 0 : _MMmappingData$invent4.columnNumber) - 1] : null;
                        element.lead_time = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$lead_t3 = MMmappingData.lead_time) !== null && _MMmappingData$lead_t3 !== void 0 && _MMmappingData$lead_t3.address && verifyElement(MMmappingData, "lead_time", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$lead_t4 = MMmappingData.lead_time) === null || _MMmappingData$lead_t4 === void 0 ? void 0 : _MMmappingData$lead_t4.columnNumber) - 1] : null;
                        element.material_description = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi7 = MMmappingData.material_description) !== null && _MMmappingData$materi7 !== void 0 && _MMmappingData$materi7.address && verifyElement(MMmappingData, "material_description", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi8 = MMmappingData.material_description) === null || _MMmappingData$materi8 === void 0 ? void 0 : _MMmappingData$materi8.columnNumber) - 1]) : null;
                        element.material_group = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi9 = MMmappingData.material_group) !== null && _MMmappingData$materi9 !== void 0 && _MMmappingData$materi9.address && verifyElement(MMmappingData, "material_group", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi10 = MMmappingData.material_group) === null || _MMmappingData$materi10 === void 0 ? void 0 : _MMmappingData$materi10.columnNumber) - 1] : null;
                        element.material_name = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$materi11 = MMmappingData.material_name) !== null && _MMmappingData$materi11 !== void 0 && _MMmappingData$materi11.address && verifyElement(MMmappingData, "material_name", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$materi12 = MMmappingData.material_name) === null || _MMmappingData$materi12 === void 0 ? void 0 : _MMmappingData$materi12.columnNumber) - 1]) : null;
                        //   element.others = MMmappingData?.others?.address
                        //     ? sheet.getRange(String(MMmappingData?.others?.address + i)).load("values")
                        //     : null;
                        element.parent_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$parent3 = MMmappingData.parent_id) !== null && _MMmappingData$parent3 !== void 0 && _MMmappingData$parent3.address && verifyElement(MMmappingData, "parent_id", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$parent4 = MMmappingData.parent_id) === null || _MMmappingData$parent4 === void 0 ? void 0 : _MMmappingData$parent4.columnNumber) - 1] : null;
                        element.plm_material_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$plm_ma3 = MMmappingData.plm_material_id) !== null && _MMmappingData$plm_ma3 !== void 0 && _MMmappingData$plm_ma3.address && verifyElement(MMmappingData, "plm_material_id", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$plm_ma4 = MMmappingData.plm_material_id) === null || _MMmappingData$plm_ma4 === void 0 ? void 0 : _MMmappingData$plm_ma4.columnNumber) - 1]) : null;
                        element.plm_record_id = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$plm_re3 = MMmappingData.plm_record_id) !== null && _MMmappingData$plm_re3 !== void 0 && _MMmappingData$plm_re3.address && verifyElement(MMmappingData, "plm_record_id", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$plm_re4 = MMmappingData.plm_record_id) === null || _MMmappingData$plm_re4 === void 0 ? void 0 : _MMmappingData$plm_re4.columnNumber) - 1]) : null;
                        element.product_code = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$produc3 = MMmappingData.product_code) !== null && _MMmappingData$produc3 !== void 0 && _MMmappingData$produc3.address && verifyElement(MMmappingData, "product_code", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$produc4 = MMmappingData.product_code) === null || _MMmappingData$produc4 === void 0 ? void 0 : _MMmappingData$produc4.columnNumber) - 1] : null;
                        element.quantity = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$quanti3 = MMmappingData.quantity) !== null && _MMmappingData$quanti3 !== void 0 && _MMmappingData$quanti3.address && verifyElement(MMmappingData, "quantity", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$quanti4 = MMmappingData.quantity) === null || _MMmappingData$quanti4 === void 0 ? void 0 : _MMmappingData$quanti4.columnNumber) - 1] : null;
                        element.storage_loc = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$storag3 = MMmappingData.storage_loc) !== null && _MMmappingData$storag3 !== void 0 && _MMmappingData$storag3.address && verifyElement(MMmappingData, "storage_loc", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$storag4 = MMmappingData.storage_loc) === null || _MMmappingData$storag4 === void 0 ? void 0 : _MMmappingData$storag4.columnNumber) - 1] : null;
                        element.unit_cost = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_c3 = MMmappingData.unit_cost) !== null && _MMmappingData$unit_c3 !== void 0 && _MMmappingData$unit_c3.address && verifyElement(MMmappingData, "unit_cost", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_c4 = MMmappingData.unit_cost) === null || _MMmappingData$unit_c4 === void 0 ? void 0 : _MMmappingData$unit_c4.columnNumber) - 1] : null;
                        element.unit_of_material = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_o3 = MMmappingData.unit_of_material) !== null && _MMmappingData$unit_o3 !== void 0 && _MMmappingData$unit_o3.address && verifyElement(MMmappingData, "unit_of_material", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_o4 = MMmappingData.unit_of_material) === null || _MMmappingData$unit_o4 === void 0 ? void 0 : _MMmappingData$unit_o4.columnNumber) - 1]) : null;
                        element.unit_sale_price = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$unit_s3 = MMmappingData.unit_sale_price) !== null && _MMmappingData$unit_s3 !== void 0 && _MMmappingData$unit_s3.address && verifyElement(MMmappingData, "unit_sale_price", excelMaterialData[i], "number", i) ? excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$unit_s4 = MMmappingData.unit_sale_price) === null || _MMmappingData$unit_s4 === void 0 ? void 0 : _MMmappingData$unit_s4.columnNumber) - 1] : null;
                        element.weight_unit = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$weight3 = MMmappingData.weight_unit) !== null && _MMmappingData$weight3 !== void 0 && _MMmappingData$weight3.address && verifyElement(MMmappingData, "weight_unit", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$weight4 = MMmappingData.weight_unit) === null || _MMmappingData$weight4 === void 0 ? void 0 : _MMmappingData$weight4.columnNumber) - 1]) : null;
                        materialDataArray.push(element);
                        tags = MMmappingData !== null && MMmappingData !== void 0 && (_MMmappingData$tags5 = MMmappingData.tags) !== null && _MMmappingData$tags5 !== void 0 && _MMmappingData$tags5.address && verifyElement(MMmappingData, "tags", excelMaterialData[i], false, i) ? String(excelMaterialData[i][(MMmappingData === null || MMmappingData === void 0 ? void 0 : (_MMmappingData$tags6 = MMmappingData.tags) === null || _MMmappingData$tags6 === void 0 ? void 0 : _MMmappingData$tags6.columnNumber) - 1]) : null;
                        if (element.custom_material_id && tags) {
                          tagMaterialMapping[element.custom_material_id.trim()] = {
                            uploadedId: null,
                            tags: tags
                          };
                        }
                      }
                      console.log("materialDataArray", materialDataArray);
                      if (!((errorCells === null || errorCells === void 0 ? void 0 : errorCells.length) > 0)) {
                        _context17.next = 24;
                        break;
                      }
                      setErrorCells(errorCells);
                      document.getElementById("material-export-warning").style.display = "block";
                      _i2 = 0;
                    case 16:
                      if (!(_i2 < errorCells.length)) {
                        _context17.next = 22;
                        break;
                      }
                      _context17.next = 19;
                      return markErrorCells(errorCells[_i2]);
                    case 19:
                      _i2++;
                      _context17.next = 16;
                      break;
                    case 22:
                      _context17.next = 26;
                      break;
                    case 24:
                      setAllMaterialMasterData(materialDataArray);
                      materialMasterExportAsOne(materialDataArray, tagMaterialMapping);
                    case 26:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee16);
              }));
              return function (_x15) {
                return _ref17.apply(this, arguments);
              };
            }()).catch(function (error) {
              console.error(error);
            });
          case 3:
          case "end":
            return _context18.stop();
        }
      }, _callee17);
    }));
    return function checkErrorsAndUpload() {
      return _ref16.apply(this, arguments);
    };
  }();
  var markErrorCells = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(address) {
      return _regeneratorRuntime().wrap(function _callee19$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return Excel.run( /*#__PURE__*/function () {
              var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(context) {
                return _regeneratorRuntime().wrap(function _callee18$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      context.workbook.worksheets.getItem(selectedSheet === null || selectedSheet === void 0 ? void 0 : selectedSheet.value).getRange(address).format.fill.color = "red";
                      _context19.next = 3;
                      return context.sync();
                    case 3:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee18);
              }));
              return function (_x17) {
                return _ref19.apply(this, arguments);
              };
            }());
          case 2:
          case "end":
            return _context20.stop();
        }
      }, _callee19);
    }));
    return function markErrorCells(_x16) {
      return _ref18.apply(this, arguments);
    };
  }();
  var materialMasterExportAsOne = function materialMasterExportAsOne(materialDataArray, tagMaterialMapping) {
    dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(true));
    var token = localStorage.getItem("tenantToken");
    var body = {
      operationName: "exportMaterialMasterDataAsOne",
      variables: {
        materials: materialDataArray
      },
      query: _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_9__.exportMaterialMasterDataAsOne
    };
    (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_8__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_6__.DTX_GRAPHQL_URL, token, body).then( /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(data) {
        var _data$data, _data$data$insert_cor, _data$data2, _data$data2$insert_co, _data$data3, _data$data3$insert_co, _iterator, _step, material;
        return _regeneratorRuntime().wrap(function _callee20$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (!(data !== null && data !== void 0 && data.errors)) {
                _context21.next = 5;
                break;
              }
              dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
              data.errors.map(function (element) {
                if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_12__.JWT_ERROR_MESSAGE)) {
                  (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_13__.logout)();
                  dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_2__.setNextPage)("homeLogin"));
                } else {
                  (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_13__.showErrorMessage)("material-export-failed", "Material data  export failed");
                }
              });
              _context21.next = 16;
              break;
            case 5:
              if (!(data !== null && data !== void 0 && (_data$data = data.data) !== null && _data$data !== void 0 && (_data$data$insert_cor = _data$data.insert_core_material_master) !== null && _data$data$insert_cor !== void 0 && _data$data$insert_cor.affected_rows)) {
                _context21.next = 16;
                break;
              }
              _iterator = _createForOfIteratorHelper(data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$insert_co = _data$data3.insert_core_material_master) === null || _data$data3$insert_co === void 0 ? void 0 : _data$data3$insert_co.returning);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  material = _step.value;
                  // setting the uploaded id of the material
                  tagMaterialMapping[material.custom_material_id.trim()].uploadedId = material.id;
                  // inserting the tag
                  _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.insert(material.id, tagMaterialMapping[material.custom_material_id.trim()].tags);
                }
                // uploading the tags
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context21.next = 10;
              return _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.uploadAllTags();
            case 10:
              _context21.next = 12;
              return _constFunctions_tagHelper__WEBPACK_IMPORTED_MODULE_14__.tagHelper.uploadMaterialTags();
            case 12:
              dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
              document.getElementById("material-export-success").style.display = "block";
              document.getElementById("material-export-success").innerHTML = (data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$insert_co = _data$data2.insert_core_material_master) === null || _data$data2$insert_co === void 0 ? void 0 : _data$data2$insert_co.affected_rows) + " rows successfully exported";
              (0,core_js__WEBPACK_IMPORTED_MODULE_5__.setTimeout)(function () {
                document.getElementById("material-export-success").style.display = "none";
              }, 3000);
            case 16:
            case "end":
              return _context21.stop();
          }
        }, _callee20);
      }));
      return function (_x18) {
        return _ref20.apply(this, arguments);
      };
    }()).catch(function (response) {
      console.log(response, "response after query failed");
      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_4__.setUploadLoader)(false));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mm-export-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: sheetTypes,
    styles: customStyles,
    handleChange: handleSheetChange,
    value: selectedSheet,
    label: "Selelct the sheet name"
  })), MMmappingData ? (exportConfig === null || exportConfig === void 0 ? void 0 : exportConfig.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "mm-export-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Excel Column Name "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "DTX Column Name "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Address"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, exportConfig === null || exportConfig === void 0 ? void 0 : exportConfig.map(function (obj) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: obj === null || obj === void 0 ? void 0 : obj.dtxField
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, " ", obj === null || obj === void 0 ? void 0 : obj.excelField), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, obj.dtxField), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, obj.address));
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "you dont have any mapping configuration data. Please map before exporting"), mustHaveField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "warning-mustHaveFields"
  }, "check the mapping configuration data, should contain all starred fields", " "), (exportConfig === null || exportConfig === void 0 ? void 0 : exportConfig.length) > 0 && !errorHandle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      uploadData();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Export 1-by-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: checkErrorsAndUpload
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Export All "
  }))), errorHandle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload after-export"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "successNo"
  }, mmExportSuccessRows === null || mmExportSuccessRows === void 0 ? void 0 : mmExportSuccessRows.length), " Row(s) exported successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "failedNo"
  }, mmExportFailedRows === null || mmExportFailedRows === void 0 ? void 0 : mmExportFailedRows.length), " Row(s) failed to export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "after-export-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "cancel",
    onClick: cancelReupload
  }, "close"), mmExportFailedRows.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "reUpload",
    onClick: reuploadErrorOccuredData
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "material-export-failed",
    id: "material-export-failed"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "material-export-success",
    id: "material-export-success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "material-export-warning",
    id: "material-export-warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "check red shaded area in excel for "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Empty values are not allowed "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Instead of numbers Strings not allowed and vise versa "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "check for unwanted data in the sheet ")));
}
/* harmony default export */ __webpack_exports__["default"] = (MaterialExport);

/***/ }),

/***/ "./src/taskpane/constFunctions/tagHelper.js":
/*!**************************************************!*\
  !*** ./src/taskpane/constFunctions/tagHelper.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagHelper": function() { return /* binding */ tagHelper; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _api_tagQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/tagQueries */ "./src/taskpane/api/tagQueries.js");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// for initializing a tag and its children by creating a parent data and children data
var TagsNode = /*#__PURE__*/_createClass(function TagsNode(tagName) {
  _classCallCheck(this, TagsNode);
  this.name = tagName;
  this.materialIds = [];
  this.uploadedParentId = null;
  this.isUploaded = false;
  this.uploadedId = null;
  this.isEndOfTag = false;
  this.children = {};
}); // For creating , inserting and uploading tags by creating a Trie data structure
var TagHelper = /*#__PURE__*/function () {
  function TagHelper() {
    _classCallCheck(this, TagHelper);
    // for initializing the root tag node as null
    this.root = new TagsNode(null);
    // for storing the data of the uploaded tags
    this.materialTagUploadData = [];
  }

  // insert a new tag trie data structure for storing the tags and associated material Id
  _createClass(TagHelper, [{
    key: "insert",
    value: function insert(materialId, tags) {
      var current = this.root;
      var _iterator = _createForOfIteratorHelper(tags.split("_")),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          // if node doesn't have the current tag as child, insert it
          if (current.children[tag] === undefined) {
            current.children[tag] = new TagsNode(tag);
          }

          // adding the  material id to the list
          current.children[tag].materialIds.push(materialId);

          // move down, to insert next tag
          current = current.children[tag];
        }
        // mark the last inserted tag as end of the tagName
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      current.isEndOfTag = true;
    }

    // internal function for uploading the tags to dtx
  }, {
    key: "uploadTagToDtx",
    value: function () {
      var _uploadTagToDtx = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tagName) {
        var parentId,
          tenantToken,
          body,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              parentId = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
              tenantToken = localStorage.getItem("tenantToken");
              body = {
                query: _api_tagQueries__WEBPACK_IMPORTED_MODULE_2__.insertTagMutation,
                variables: {
                  tagName: tagName,
                  parentId: parentId
                }
              };
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var res;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_1__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_0__.DTX_GRAPHQL_URL, tenantToken, body);
                      case 2:
                        res = _context.sent;
                        if (res.errors) {
                          console.log({
                            error: res.errors
                          });
                          reject(res.errors);
                        }
                        resolve(res.data.insert_tag_one.id);
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                })), 3000);
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function uploadTagToDtx(_x) {
        return _uploadTagToDtx.apply(this, arguments);
      }
      return uploadTagToDtx;
    }() // check if tag already exists
  }, {
    key: "checkTagExists",
    value: function () {
      var _checkTagExists = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tagName) {
        var tenantToken, body;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              tenantToken = localStorage.getItem("tenantToken");
              body = {
                query: _api_tagQueries__WEBPACK_IMPORTED_MODULE_2__.checkParentTagExists,
                variables: {
                  tagName: tagName
                }
              };
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var res;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_1__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_0__.DTX_GRAPHQL_URL, tenantToken, body);
                      case 2:
                        res = _context3.sent;
                        if (res.errors) {
                          console.log({
                            error: res.errors
                          });
                          reject(res.errors);
                        }
                        resolve(res.data.tag);
                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                })), 3000);
              }));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function checkTagExists(_x2) {
        return _checkTagExists.apply(this, arguments);
      }
      return checkTagExists;
    }() // function to upload all the tags in the memory
  }, {
    key: "uploadAllTags",
    value: function () {
      var _uploadAllTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var current,
          _i,
          _Object$values,
          child,
          tag,
          uploadedId,
          _uploadedId,
          _iterator2,
          _step2,
          materialId,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              current = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : this.root;
              _i = 0, _Object$values = Object.values(current.children);
            case 2:
              if (!(_i < _Object$values.length)) {
                _context5.next = 34;
                break;
              }
              child = _Object$values[_i];
              child.uploadedParentId = current.uploadedId;
              // upload the tag if not already uploaded
              if (child.isUploaded) {
                _context5.next = 29;
                break;
              }
              if (current.name) {
                _context5.next = 22;
                break;
              }
              _context5.next = 9;
              return this.checkTagExists(child.name);
            case 9:
              tag = _context5.sent;
              if (!(tag.length > 0)) {
                _context5.next = 15;
                break;
              }
              child.uploadedId = tag[0].id;
              child.isUploaded = true;
              _context5.next = 20;
              break;
            case 15:
              _context5.next = 17;
              return this.uploadTagToDtx(child.name, child.uploadedParentId);
            case 17:
              uploadedId = _context5.sent;
              child.uploadedId = uploadedId;
              child.isUploaded = true;
            case 20:
              _context5.next = 27;
              break;
            case 22:
              _context5.next = 24;
              return this.uploadTagToDtx(child.name, child.uploadedParentId);
            case 24:
              _uploadedId = _context5.sent;
              child.uploadedId = _uploadedId;
              child.isUploaded = true;
            case 27:
              // storing the tag id along with the uploaded material id
              _iterator2 = _createForOfIteratorHelper(child.materialIds);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  materialId = _step2.value;
                  this.materialTagUploadData.push({
                    material_id: materialId,
                    tag_id: child.uploadedId
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            case 29:
              _context5.next = 31;
              return this.uploadAllTags(child);
            case 31:
              _i++;
              _context5.next = 2;
              break;
            case 34:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function uploadAllTags() {
        return _uploadAllTags.apply(this, arguments);
      }
      return uploadAllTags;
    }() // function for uploading material tag to the backend
  }, {
    key: "uploadMaterialTags",
    value: function () {
      var _uploadMaterialTags = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var tenantToken, body, res;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              tenantToken = localStorage.getItem("tenantToken");
              body = {
                query: _api_tagQueries__WEBPACK_IMPORTED_MODULE_2__.insertMaterialTagMutation,
                variables: {
                  tag_materials: this.materialTagUploadData
                }
              };
              _context6.next = 4;
              return (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_1__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_0__.DTX_GRAPHQL_URL, tenantToken, body);
            case 4:
              res = _context6.sent;
              if (!res.errors) {
                _context6.next = 8;
                break;
              }
              console.log({
                error: res.errors
              });
              throw new Error(res.errors);
            case 8:
              return _context6.abrupt("return", res.data);
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function uploadMaterialTags() {
        return _uploadMaterialTags.apply(this, arguments);
      }
      return uploadMaterialTags;
    }()
  }]);
  return TagHelper;
}();
var tagHelper = new TagHelper();

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css ***!
  \************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mm-export-container{\r\n    padding: 5px;\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n}\r\n.mm-export-container table{\r\n    width: 90%;\r\n    border-collapse: collapse;\r\n    margin-top: 15px;\r\n}\r\n.mm-export-table th, td{\r\n    border:1px solid black;\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n.warning-mustHaveFields{\r\n    color:red;\r\n    text-align: center;\r\n    \r\n}\r\n.mm-export-container .upload{\r\nwidth: -webkit-fill-available;\r\nmargin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\ngap:2rem\r\n}\r\n.after-export{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n.after-export p{\r\n    font-size: 13px;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 10px;\r\n}\r\n.after-export .cancel{\r\n   border: 1px solid ;\r\n   fill-opacity: 3;\r\n   background-color:white;\r\n   width: 43px;\r\n   padding: 0;\r\n}\r\n.after-export-buttons{\r\n    width: 100%;\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 10px;\r\n}\r\n.after-export .failedNo{\r\n    color: red;\r\n    font-size:15px;\r\n}\r\n.after-export .successNo{\r\n    font-size:15px;\r\n}\r\n.material-export-warning{\r\n    color: red;\r\n    font-size: x-small;\r\n    margin-bottom: 20px;\r\n    display: none;\r\n    \r\n}\r\n.material-export-warning li:first-child{\r\n    list-style-type: none;\r\n}\r\n.material-export-failed{\r\n    color: red;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n\r\n.material-export-success{\r\n    color:green;\r\n    text-align: center;\r\n    /* display: none; */\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;GACd,mBAAmB;IAClB,sBAAsB;AAC1B;AACA;IACI,UAAU;IACV,yBAAyB;IACzB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,SAAS;IACT,kBAAkB;;AAEtB;AACA;AACA,6BAA6B;AAC7B,gBAAgB;IACZ,aAAa;IACb,uBAAuB;AAC3B;AACA;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,eAAe;IACf,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;AACA;GACG,kBAAkB;GAClB,eAAe;GACf,sBAAsB;GACtB,WAAW;GACX,UAAU;AACb;AACA;IACI,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;;AAEjB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":[".mm-export-container{\r\n    padding: 5px;\r\n    display: flex;\r\n   align-items: center;\r\n    flex-direction: column;\r\n}\r\n.mm-export-container table{\r\n    width: 90%;\r\n    border-collapse: collapse;\r\n    margin-top: 15px;\r\n}\r\n.mm-export-table th, td{\r\n    border:1px solid black;\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n.warning-mustHaveFields{\r\n    color:red;\r\n    text-align: center;\r\n    \r\n}\r\n.mm-export-container .upload{\r\nwidth: -webkit-fill-available;\r\nmargin-top: 10px;\r\n    display: flex;\r\n    justify-content: center;\r\ngap:2rem\r\n}\r\n.after-export{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n.after-export p{\r\n    font-size: 13px;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 10px;\r\n}\r\n.after-export .cancel{\r\n   border: 1px solid ;\r\n   fill-opacity: 3;\r\n   background-color:white;\r\n   width: 43px;\r\n   padding: 0;\r\n}\r\n.after-export-buttons{\r\n    width: 100%;\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    margin-top: 10px;\r\n}\r\n.after-export .failedNo{\r\n    color: red;\r\n    font-size:15px;\r\n}\r\n.after-export .successNo{\r\n    font-size:15px;\r\n}\r\n.material-export-warning{\r\n    color: red;\r\n    font-size: x-small;\r\n    margin-bottom: 20px;\r\n    display: none;\r\n    \r\n}\r\n.material-export-warning li:first-child{\r\n    list-style-type: none;\r\n}\r\n.material-export-failed{\r\n    color: red;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n\r\n.material-export-success{\r\n    color:green;\r\n    text-align: center;\r\n    /* display: none; */\r\n}"],"sourceRoot":""}]);
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


/***/ }),

/***/ "./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css":
/*!**********************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css ***!
  \**********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MaterialExport_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./MaterialExport.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MaterialExport_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_MaterialExport_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MaterialExport_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MaterialExport_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_taskpane_commonComponents_Material_MaterialExport_MaterialExport_js.js.map