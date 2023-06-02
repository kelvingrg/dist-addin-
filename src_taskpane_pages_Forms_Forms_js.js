"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_pages_Forms_Forms_js"],{

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

/***/ "./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.js":
/*!*********************************************************************!*\
  !*** ./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _FormNavbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormNavbar.css */ "./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");





function FormNavbar() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.taskpane;
    }),
    nextPage = _useSelector.nextPage;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state === null || state === void 0 ? void 0 : state.action;
    }),
    formAction = _useSelector2.formAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__.BASE_URL, "/assets/beacon-without-background -logo.png ")
  })), nextPage === "forms" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(formAction == "get" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setFormAction)("get"));
    }
  }, "Get"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(formAction == "map" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setFormAction)("map"));
    }
  }, "Map"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(formAction == "export" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setFormAction)("export"));
    }
  }, "Export"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-button ".concat(formAction == "update" ? "selectedAction" : null),
    onClick: function onClick() {
      return dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_2__.setFormAction)("update"));
    }
  }, "Update")));
}
/* harmony default export */ __webpack_exports__["default"] = (FormNavbar);

/***/ }),

/***/ "./src/taskpane/commonComponents/Form/Formmap/FormMap.js":
/*!***************************************************************!*\
  !*** ./src/taskpane/commonComponents/Form/Formmap/FormMap.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _FormMap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormMap.css */ "./src/taskpane/commonComponents/Form/Formmap/FormMap.css");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../DropDown/DropDown */ "./src/taskpane/commonComponents/DropDown/DropDown.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Button/Button */ "./src/taskpane/commonComponents/Button/Button.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/icons/x-circle.svg */ "./assets/icons/x-circle.svg");
/* harmony import */ var _assets_icons_editLogo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../assets/icons/editLogo.svg */ "./assets/icons/editLogo.svg");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../api/graphQlQuery */ "./src/taskpane/api/graphQlQuery.js");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// import { BeatLoader } from "react-spinners";













function formMap() {
  var _Object$entries;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.taskpane;
    }),
    formMappingData = _useSelector.formMappingData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    rangeFor = _useState2[0],
    setRangeFor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    edit = _useState4[0],
    setEdit = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    allFromTemplates = _useState6[0],
    setallFromTemplates = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedForm = _useState8[0],
    setSelectedForm = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    allFormFields = _useState10[0],
    setallFormFields = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    formLoader = _useState12[0],
    setFormLoader = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    fieldLoader = _useState14[0],
    setFieldLoader = _useState14[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFormLoader(true);
    try {
      var body = {
        operationName: "GetAllFormTemplatesQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_13__.GetAllFormTemplatesQuery,
        variables: {}
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_11__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
          var _data$data, _data$data$core_form_, formTypes;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (data !== null && data !== void 0 && data.errors) {
                  data.errors.map(function (element) {
                    if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_12__.JWT_ERROR_MESSAGE)) {
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
                      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setNextPage)("homeLogin"));
                    }
                  });
                } else {
                  formTypes = data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : (_data$data$core_form_ = _data$data.core_form_templates) === null || _data$data$core_form_ === void 0 ? void 0 : _data$data$core_form_.map(function (element) {
                    return {
                      label: element.name,
                      value: element.id
                    };
                  });
                  setallFromTemplates(formTypes);
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    } catch (error) {
      console.log(error);
    } finally {
      setFormLoader(false);
    }
  }, [true]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setRangeFor(null);
    setFieldLoader(true);
    try {
      var body = {
        operationName: "GetDetailFormTemplateQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_13__.GetDetailFormTemplateQuery,
        variables: {
          id: selectedForm === null || selectedForm === void 0 ? void 0 : selectedForm.value
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_11__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
          var _data$data2, _data$data2$core_form, _data$data2$core_form2, fields;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (data !== null && data !== void 0 && data.errors) {
                  data.errors.map(function (element) {
                    if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_12__.JWT_ERROR_MESSAGE)) {
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
                      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setNextPage)("homeLogin"));
                    }
                  });
                } else {
                  fields = data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$core_form = _data$data2.core_form_templates_by_pk) === null || _data$data2$core_form === void 0 ? void 0 : (_data$data2$core_form2 = _data$data2$core_form.template_versions[0].template_fields) === null || _data$data2$core_form2 === void 0 ? void 0 : _data$data2$core_form2.map(function (element) {
                    return {
                      label: element.caption,
                      value: element.field_name
                    };
                  });
                  setallFormFields(fields);
                }
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    } catch (error) {
      console.log(error);
    } finally {
      setFieldLoader(false);
    }
  }, [selectedForm]);
  var handleFieldChanges = function handleFieldChanges(rangeFor) {
    setRangeFor(rangeFor);
  };
  var handleFormSelectionChange = function handleFormSelectionChange(selectedForm) {
    setSelectedForm(selectedForm);
  };
  //function  reserveSelectedSpace  which stores selected address into MMmapping data (state in redux)
  // you have to select what kind of region you are looking for ,if we want select entire colummn then need to select "column" from range type
  // if first column of the excel has selected the the address by default  "A:A" or "A1:Ax" or (if you selected a region like "A10:C20") will be changed to "A"
  //mappingConfig is an object will store the selected address
  // mappingConfig={
  // custom_material_id:{ name: "Custom Material Id* ", address: "A" }
  //}
  var reserveSelectedSpace = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.t0 = rangeFor === null || rangeFor === void 0 ? void 0 : rangeFor.label;
            if (!_context5.t0) {
              _context5.next = 5;
              break;
            }
            _context5.next = 5;
            return Excel.run( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(context) {
                var range, selectedAddress;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      range = context.workbook.getSelectedRange();
                      range.load("address");
                      _context4.next = 4;
                      return context.sync();
                    case 4:
                      selectedAddress = (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__.getAddressWithOutSheetName)(range.address); //checkAlreadyReserved is for checking whether the selelcted colum is reserved or
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.checkAlreadyReservedRange)(formMappingData, selectedAddress).then( /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(addressCheck) {
                          var _range, selectedRange;
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                if (addressCheck) {
                                  _context3.next = 12;
                                  break;
                                }
                                _range = context.workbook.worksheets.getActiveWorksheet().getRange(String(selectedAddress));
                                _range.merge();
                                _context3.next = 5;
                                return context.sync();
                              case 5:
                                dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setFormMappingData)({
                                  name: rangeFor.label,
                                  value: rangeFor.value,
                                  address: selectedAddress,
                                  addressAfterMerge: selectedAddress.split(":")[0]
                                }));
                                selectedRange = context.workbook.worksheets.getActiveWorksheet().getRange(String(selectedAddress.split(":")[0]));
                                selectedRange.format.fill.color = "#FFF0D9";
                                selectedRange.values = [[rangeFor.label]];
                                // selectedRange.format.autofitRows();
                                // selectedRange.format.autofitColumns();
                                return _context3.abrupt("return", context.sync());
                              case 12:
                                (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("reserved-column-error", " Range ".concat(selectedAddress, "  is a reserved space"), "apply-button");
                              case 13:
                              case "end":
                                return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function (_x5) {
                          return _ref5.apply(this, arguments);
                        };
                      }());
                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function (_x4) {
                return _ref4.apply(this, arguments);
              };
            }());
          case 5:
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t1 = _context5["catch"](0);
            console.log("Error:", _context5.t1);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function reserveSelectedSpace() {
      return _ref3.apply(this, arguments);
    };
  }();
  var saveMMmappingConfig = function saveMMmappingConfig() {};
  // deleteCurrentRow == > deletes the selected address from mapping data
  var deleteCurrentRow = function deleteCurrentRow(address, key) {
    var _formMappingDataCopy$;
    (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__.clearGivenRange)(address);
    var formMappingDataCopy = _objectSpread({}, formMappingData);
    var array = formMappingData[key].address.filter(function (element) {
      return element !== address;
    });
    console.log(array);
    formMappingDataCopy = _objectSpread(_objectSpread({}, formMappingData), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, formMappingData[key]), {}, {
      address: array
    })));
    if (((_formMappingDataCopy$ = formMappingDataCopy[key]) === null || _formMappingDataCopy$ === void 0 ? void 0 : _formMappingDataCopy$.address.length) < 1) {
      delete formMappingDataCopy[key];
    }
    if (Object.keys(formMappingDataCopy).length) {
      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setFormMappingData2)(formMappingDataCopy));
    } else {
      dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_7__.setFormMappingData2)({}));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "material-map-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "app-div",
    className: "app-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "select-map-feild"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: allFromTemplates,
    handleChange: handleFormSelectionChange,
    value: selectedForm,
    label: "Selelct the form Template",
    noOptionMessage: "No mapping fields availble",
    isLoading: formLoader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: allFormFields,
    handleChange: handleFieldChanges,
    value: rangeFor,
    label: "Selelct the field",
    noOptionMessage: "No mapping fields availble",
    isLoading: fieldLoader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "warning",
    id: "warning"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    id: "apply-button",
    onClick: function onClick() {
      return selectedForm && rangeFor && reserveSelectedSpace();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Apply",
    enable: selectedForm && rangeFor ? true : false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    className: "reserved-column-error",
    id: "reserved-column-error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    id: "configure-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Mapping to "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Address "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    onClick: function onClick() {
      return setEdit(!edit);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "sidebar-logo-img",
    src: _assets_icons_editLogo_svg__WEBPACK_IMPORTED_MODULE_9__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, formMappingData && ((_Object$entries = Object.entries(formMappingData)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      key = _ref7[0],
      value = _ref7[1];
    return (value === null || value === void 0 ? void 0 : value.address) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, value.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "address-cell"
    }, " ", value === null || value === void 0 ? void 0 : value.address.map(function (address, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "address-and-close"
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "table-address",
        key: index
      }, address), edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        onClick: function onClick() {
          deleteCurrentRow(address, key);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "sidebar-logo-img",
        src: _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_8__,
        key: index
      })));
    }), " "));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      saveMMmappingConfig();
    }
  }, "Save")))));
}
/* harmony default export */ __webpack_exports__["default"] = (formMap);

/***/ }),

/***/ "./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.js":
/*!***************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaterialGet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaterialGet.css */ "./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css");


function MaterialGet() {
  return null;
  // <div>
  //   {" "}
  //   {BASE_URL}, {DTX_GRAPHQL_URL}, {DTX_BASE_URL}{" "}
  // </div>
}

/* harmony default export */ __webpack_exports__["default"] = (MaterialGet);

/***/ }),

/***/ "./src/taskpane/pages/Forms/Forms.js":
/*!*******************************************!*\
  !*** ./src/taskpane/pages/Forms/Forms.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commonComponents/SideBarMenu/SideBarMenu */ "./src/taskpane/commonComponents/SideBarMenu/SideBarMenu.js");
/* harmony import */ var _Forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms.css */ "./src/taskpane/pages/Forms/Forms.css");
/* harmony import */ var _commonComponents_Form_FormNavBar_FormNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonComponents/Form/FormNavBar/FormNavbar */ "./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.js");
/* harmony import */ var _commonComponents_Form_Formmap_FormMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commonComponents/Form/Formmap/FormMap */ "./src/taskpane/commonComponents/Form/Formmap/FormMap.js");
/* harmony import */ var _commonComponents_Material_MaterialGet_MaterialGet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commonComponents/Material/MaterialGet/MaterialGet */ "./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.js");
/* harmony import */ var _commonComponents_Material_MaterialExport_MaterialExport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonComponents/Material/MaterialExport/MaterialExport */ "./src/taskpane/commonComponents/Material/MaterialExport/MaterialExport.js");
/* harmony import */ var _commonComponents_Material_MaterialMap_MaterialMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonComponents/Material/MaterialMap/MaterialMap */ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");









function Forms() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
      return state.action;
    }),
    formAction = _useSelector.formAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonNavBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Form_FormNavBar_FormNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonBody "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonSidebarBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_SideBarMenu_SideBarMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "commonActivityArea"
  }, " ", formAction === "get" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Material_MaterialGet_MaterialGet__WEBPACK_IMPORTED_MODULE_5__["default"], null), " ") : null, formAction === "map" ?
  /*#__PURE__*/
  // <Suspense fallback={<div></div>}>
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Form_Formmap_FormMap__WEBPACK_IMPORTED_MODULE_4__["default"]
  // mappingConfig={MMmappingData}
  // setmappingConfig={setMMmappingTempData}
  // setmappingConfig2={setMMmappingTempData2}
  , null) :
  // </Suspense>
  null, formAction === "export" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Material_MaterialExport_MaterialExport__WEBPACK_IMPORTED_MODULE_6__["default"], null), " ") : null, formAction === "update" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_commonComponents_Material_MaterialGet_MaterialGet__WEBPACK_IMPORTED_MODULE_5__["default"], null), " ") : null))));
}
/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css ***!
  \************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;;AAEA,YAAY;AACZ;AACA;IACI,gCAAgC;IAChC,wBAAwB;;AAE5B;AACA;;IAEI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":[".navbar{\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    display: flex;;\r\n    align-items: center;\r\n    justify-content: center ;\r\n}\r\n.navbar span {\r\n    margin: 10 px;\r\n    padding: 5px;\r\n    font-size: x-small;\r\n    cursor: pointer;\r\n}\r\n.navbar-logo{\r\n    height:100%;\r\n    flex-grow: 1; \r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;  \r\n}\r\n.navbar-logo img{\r\n    height: 28px;\r\n    width: 98px;\r\n    margin-left: 12px;\r\n}\r\n.navbar-option{\r\n    height:100%;\r\n    flex-grow: 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3px;    \r\n}\r\n.navbar-option span{\r\n\r\npadding: 5px;\r\n}\r\n.navbar-option span:hover{\r\n    border-bottom: 1px #383332 solid;\r\n    background-color:#FFC467; \r\n\r\n}\r\n.navbar-logout{\r\n\r\n    height:100%;\r\n    flex-grow: 1;  \r\n}\r\n\r\n.selectedAction{\r\n    border-bottom: 2px #383332 solid; \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/Formmap/FormMap.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/Formmap/FormMap.css ***!
  \******************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.material-map-box {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n \r\n  .app-body{\r\n     display: flex;\r\n     flex-direction: column;\r\n     align-items: center;\r\n     margin-top: 10px;\r\n  }\r\n  .app-body table{\r\n     padding: 5px;\r\n  }\r\n \r\n  .action{\r\n     display: flex;\r\n     flex-direction:row;\r\n     align-items: center; \r\n     justify-content:space-around;\r\n     gap: 10px;\r\n     margin-bottom: 10px;\r\n     width: 100%;\r\n  }\r\n  .action button{\r\n     border:none;\r\n     border-radius: 3px;\r\n     height: 23px;\r\n     width: 70px;\r\n     padding-inline:8px ;\r\n  }\r\n  .action button:active{\r\n     background-color: #383332;\r\n     color: #FFC467;\r\n     font-weight: bold\r\n \r\n  }\r\n  .warning{\r\n     color:red;\r\n     display:none;\r\n \r\n  }\r\n  .apply{\r\n     background-color: #FFC467\r\n  }\r\n  .clear {\r\n background-color: azure;\r\n  }\r\n  .select-map-feild table {\r\n    /* border:1px solid black; */\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    font-size: 12px;\r\n }\r\n #configure-table th, td{\r\n    border:1px solid black;\r\n    text-align: center;\r\n }\r\n \r\n .select-map-feild{\r\n    min-width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n }\r\n \r\n \r\n .select-map-feild p{\r\n     margin-bottom: 7px;\r\n }\r\n  p:nth-child(2){\r\n     margin-top: 10px;\r\n }\r\n .upload{\r\n    margin: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n }\r\n .upload button{\r\n    background-color: #FFC467;\r\n    border:none;\r\n    border-radius: 3px;\r\n    height: 23px;\r\n    width: 70px;\r\n \r\n }\r\n .warnings{\r\n    color: red;\r\n }\r\n #configure-table td:nth-child(3) {\r\n     border :none;\r\n   }\r\n   #configure-table th:last-child {\r\n     border :none;\r\n   }\r\n   .selectType{\r\n     z-index:-1 ;\r\n   }\r\n sup{\r\n    color: red;\r\n }\r\n .reserved-column-error{\r\n   margin:0;\r\n   margin-bottom: 1rem;\r\n   margin-inline-start: 20px;\r\n   margin-inline-end: 20px;\r\n   font-size: smaller;\r\n   color: red;\r\n\r\n }\r\n \r\n\r\n\r\n.table-address {\r\n\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n/* .address-cell{\r\ndisplay: flex;\r\nflex-direction: column;\r\njustify-content: center;\r\n} */\r\n\r\n.address-and-close{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Form/Formmap/FormMap.css"],"names":[],"mappings":";AACA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;EACzB;;;EAGA;KACG,aAAa;KACb,sBAAsB;KACtB,mBAAmB;KACnB,gBAAgB;EACnB;EACA;KACG,YAAY;EACf;;EAEA;KACG,aAAa;KACb,kBAAkB;KAClB,mBAAmB;KACnB,4BAA4B;KAC5B,SAAS;KACT,mBAAmB;KACnB,WAAW;EACd;EACA;KACG,WAAW;KACX,kBAAkB;KAClB,YAAY;KACZ,WAAW;KACX,mBAAmB;EACtB;EACA;KACG,yBAAyB;KACzB,cAAc;KACd;;EAEH;EACA;KACG,SAAS;KACT,YAAY;;EAEf;EACA;KACG;EACH;EACA;CACD,uBAAuB;EACtB;EACA;IACE,4BAA4B;IAC5B,WAAW;IACX,yBAAyB;IACzB,eAAe;CAClB;CACA;IACG,sBAAsB;IACtB,kBAAkB;CACrB;;CAEA;IACG,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;CACtB;;;CAGA;KACI,kBAAkB;CACtB;EACC;KACG,gBAAgB;CACpB;CACA;IACG,YAAY;IACZ,aAAa;IACb,uBAAuB;CAC1B;CACA;IACG,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,WAAW;;CAEd;CACA;IACG,UAAU;CACb;CACA;KACI,YAAY;GACd;GACA;KACE,YAAY;GACd;GACA;KACE,WAAW;GACb;CACF;IACG,UAAU;CACb;CACA;GACE,QAAQ;GACR,mBAAmB;GACnB,yBAAyB;GACzB,uBAAuB;GACvB,kBAAkB;GAClB,UAAU;;CAEZ;;;;AAID;;AAEA,SAAS;AACT,UAAU;AACV;AACA;;;;GAIG;;AAEH;IACI,YAAY;IACZ,8BAA8B;IAC9B,QAAQ;AACZ","sourcesContent":["\r\n.material-map-box {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  \r\n \r\n  .app-body{\r\n     display: flex;\r\n     flex-direction: column;\r\n     align-items: center;\r\n     margin-top: 10px;\r\n  }\r\n  .app-body table{\r\n     padding: 5px;\r\n  }\r\n \r\n  .action{\r\n     display: flex;\r\n     flex-direction:row;\r\n     align-items: center; \r\n     justify-content:space-around;\r\n     gap: 10px;\r\n     margin-bottom: 10px;\r\n     width: 100%;\r\n  }\r\n  .action button{\r\n     border:none;\r\n     border-radius: 3px;\r\n     height: 23px;\r\n     width: 70px;\r\n     padding-inline:8px ;\r\n  }\r\n  .action button:active{\r\n     background-color: #383332;\r\n     color: #FFC467;\r\n     font-weight: bold\r\n \r\n  }\r\n  .warning{\r\n     color:red;\r\n     display:none;\r\n \r\n  }\r\n  .apply{\r\n     background-color: #FFC467\r\n  }\r\n  .clear {\r\n background-color: azure;\r\n  }\r\n  .select-map-feild table {\r\n    /* border:1px solid black; */\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    font-size: 12px;\r\n }\r\n #configure-table th, td{\r\n    border:1px solid black;\r\n    text-align: center;\r\n }\r\n \r\n .select-map-feild{\r\n    min-width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n }\r\n \r\n \r\n .select-map-feild p{\r\n     margin-bottom: 7px;\r\n }\r\n  p:nth-child(2){\r\n     margin-top: 10px;\r\n }\r\n .upload{\r\n    margin: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n }\r\n .upload button{\r\n    background-color: #FFC467;\r\n    border:none;\r\n    border-radius: 3px;\r\n    height: 23px;\r\n    width: 70px;\r\n \r\n }\r\n .warnings{\r\n    color: red;\r\n }\r\n #configure-table td:nth-child(3) {\r\n     border :none;\r\n   }\r\n   #configure-table th:last-child {\r\n     border :none;\r\n   }\r\n   .selectType{\r\n     z-index:-1 ;\r\n   }\r\n sup{\r\n    color: red;\r\n }\r\n .reserved-column-error{\r\n   margin:0;\r\n   margin-bottom: 1rem;\r\n   margin-inline-start: 20px;\r\n   margin-inline-end: 20px;\r\n   font-size: smaller;\r\n   color: red;\r\n\r\n }\r\n \r\n\r\n\r\n.table-address {\r\n\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n/* .address-cell{\r\ndisplay: flex;\r\nflex-direction: column;\r\njustify-content: center;\r\n} */\r\n\r\n.address-and-close{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css ***!
  \******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Forms/Forms.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Forms/Forms.css ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 5;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/pages/Forms/Forms.css"],"names":[],"mappings":"AAAA;IACI;uBACmB;IACnB,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;AACA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,KAAK;AACL,wBAAwB;AACxB,UAAU;AACV;AACA;AACA,aAAa;AACb,gBAAgB;AAChB,YAAY;;AAEZ;AACA;AACA,WAAW;AACX,uBAAuB;AACvB,aAAa;AACb,8BAA8B;AAC9B,eAAe;AACf;AACA;AACA,YAAY;AACZ,iBAAiB;AACjB","sourcesContent":[".commonContainer{\r\n    /* min-height:100vh;\r\n    min-width: 100vw; */\r\n    min-height: -webkit-fill-available;\r\n    background-color: white;\r\n}\r\n.commonNavBar{\r\nheight: 40px;\r\nwidth: 100%;\r\nposition: fixed;\r\ntop:0;\r\nbackground-color: bisque;\r\nz-index: 5;\r\n}\r\n.commonBody{\r\ndisplay: flex;\r\nmargin-top: 40px;\r\nheight: 100%;\r\n\r\n}\r\n.commonSidebarBox{\r\nwidth: 40px;\r\nborder-right: 1px solid;\r\nheight: 100vh;\r\n/* background-color: bisque; */\r\nposition: fixed;  \r\n}\r\n.commonActivityArea{\r\nflex-grow: 1;\r\nmargin-left: 40px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css":
/*!**********************************************************************!*\
  !*** ./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FormNavbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./FormNavbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/FormNavBar/FormNavbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FormNavbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_FormNavbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_FormNavbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_FormNavbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/commonComponents/Form/Formmap/FormMap.css":
/*!****************************************************************!*\
  !*** ./src/taskpane/commonComponents/Form/Formmap/FormMap.css ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_FormMap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./FormMap.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Form/Formmap/FormMap.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_FormMap_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_FormMap_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_FormMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_FormMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css":
/*!****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css ***!
  \****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MaterialGet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./MaterialGet.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialGet/MaterialGet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MaterialGet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_MaterialGet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MaterialGet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MaterialGet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/pages/Forms/Forms.css":
/*!********************************************!*\
  !*** ./src/taskpane/pages/Forms/Forms.css ***!
  \********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/pages/Forms/Forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_Forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_taskpane_pages_Forms_Forms_js.js.map