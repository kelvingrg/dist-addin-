"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_commonComponents_Material_MaterialMap_MaterialMap_js"],{

/***/ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.js":
/*!***************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _MaterialMap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaterialMap.css */ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../DropDown/DropDown */ "./src/taskpane/commonComponents/DropDown/DropDown.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Button/Button */ "./src/taskpane/commonComponents/Button/Button.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../assets/icons/x-circle.svg */ "./assets/icons/x-circle.svg");
/* harmony import */ var _assets_icons_editLogo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../assets/icons/editLogo.svg */ "./assets/icons/editLogo.svg");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../api/graphQlMutation */ "./src/taskpane/api/graphQlMutation.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../api/graphQlQuery */ "./src/taskpane/api/graphQlQuery.js");
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














function MaterialMap(_ref) {
  var _Object$entries;
  var mappingConfig = _ref.mappingConfig,
    setmappingConfig = _ref.setmappingConfig,
    setmappingConfig2 = _ref.setmappingConfig2;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.taskpane;
    }),
    nextPage = _useSelector.nextPage;
  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.action;
    }),
    bomMappingDataTemp = _useSelector2.bomMappingDataTemp,
    MMmappingDataTemp = _useSelector2.MMmappingDataTemp;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    rangeFor = _useState2[0],
    setRangeFor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    edit = _useState4[0],
    setEdit = _useState4[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var fieldFor = nextPage === "bom" ? _constFunctions_constants__WEBPACK_IMPORTED_MODULE_10__.BOM__MAPPING_FIELDS : _constFunctions_constants__WEBPACK_IMPORTED_MODULE_10__.MATAERIAL_MAPPING_FIELDS;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getLatestMappingData();
  }, [true]);
  var selectRangeFor = function selectRangeFor(rangeFor) {
    setRangeFor(rangeFor);
  };
  var getLatestMappingData = function getLatestMappingData() {
    dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setUploadLoader)(true));
    try {
      var body = {
        operationName: "GetBomMaterialMappingConfigQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_15__.GetBomMaterialMappingConfigQuery,
        variables: {
          tenant_id: localStorage.getItem("tenantId")
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_12__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_10__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_14__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _data$data, _data$data2, _data$data3, _data$data4;
          dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_14__.setMMmappingData)(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.tenant_defaults[0].material));
          dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_14__.setBomMappingData)(data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.tenant_defaults[0].bom));
          dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setMMmappingTempData2)(data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.tenant_defaults[0].material));
          dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setBomMappingTempData2)(data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : _data$data4.tenant_defaults[0].bom));
          dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setUploadLoader)(false));
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
        dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setUploadLoader)(false));
      });
    } catch (error) {
      console.log(error);
    } finally {}
  };

  //function  reserveSelectedSpace  which stores selected address into MMmapping data (state in redux)
  // you have to select what kind of region you are looking for ,if we want select entire colummn then need to select "column" from range type
  // if first column of the excel has selected the the address by default  "A:A" or "A1:Ax" or (if you selected a region like "A10:C20") will be changed to "A"
  //mappingConfig is an object will store the selected address
  // mappingConfig={
  // custom_material_id:{ name: "Custom Material Id* ", address: "A" }
  //}
  var reserveSelectedSpace = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.t0 = rangeFor === null || rangeFor === void 0 ? void 0 : rangeFor.label;
            if (!_context2.t0) {
              _context2.next = 5;
              break;
            }
            _context2.next = 5;
            return Excel.run( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
                var range, selectedAddress;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      range = context.workbook.getSelectedRange();
                      range.load("address");
                      _context.next = 4;
                      return context.sync();
                    case 4:
                      selectedAddress = (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__.getProperColumnAddress)(range.address); //checkAlreadyReserved is for checking whether the selelcted colum is reserved or
                      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.checkAlreadyReserved)(mappingConfig, selectedAddress).then(function (columncheck) {
                        if (nextPage === "bom" ? selectedAddress !== "A" && !columncheck : true) {
                          dispatch(setmappingConfig({
                            name: rangeFor.label,
                            value: rangeFor.value,
                            address: selectedAddress,
                            columnNumber: (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_3__.getExcelColumnNumber)(selectedAddress)
                          }));
                          var selectedRange = context.workbook.worksheets.getActiveWorksheet().getRange(String(selectedAddress + 1));
                          selectedRange.format.fill.color = "#FFF0D9";
                          nextPage === "bom" && (selectedRange.values = [[rangeFor.label]]);
                          selectedRange.format.autofitRows();
                          selectedRange.format.autofitColumns();
                          return context.sync();
                        } else {
                          (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("reserved-column-error", " Column ".concat(selectedAddress, "  is a reserved space"), "apply-button");
                        }
                      });
                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }());
          case 5:
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t1 = _context2["catch"](0);
            console.log("Error:", _context2.t1);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function reserveSelectedSpace() {
      return _ref2.apply(this, arguments);
    };
  }();
  var saveMMmappingConfig = function saveMMmappingConfig() {
    console.log(bomMappingDataTemp, MMmappingDataTemp);
    var body = {
      operationName: "mappingConfigDataMutation",
      variables: {
        tenant_id: parseInt(localStorage.getItem("tenantId")),
        bom: bomMappingDataTemp,
        material: MMmappingDataTemp
      },
      query: _api_graphQlMutation__WEBPACK_IMPORTED_MODULE_11__.mappingConfigDataMutation
    };
    (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runMutation)(_config__WEBPACK_IMPORTED_MODULE_12__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
      if (data !== null && data !== void 0 && data.errors) {
        data.errors.map(function (element) {
          if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_10__.JWT_ERROR_MESSAGE)) {
            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.logout)();
            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_14__.setNextPage)("homeLogin"));
          } else {
            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("mapping-updation-warning", "Something went wrong");
          }
        });
      } else {
        (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.successMessage)("mapping-updation-success", "Mapping configuration added Successfully!");
        getLatestMappingData();
      }
    }).catch(function (error) {
      dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_13__.setUploadLoader)(false));
      console.log("Error", error);
      (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_6__.showErrorMessage)("bom-name-check-warning", "Something went wrong");
    });
  };

  // deleteCurrentRow == > deletes the selected row from mapping data
  var deleteCurrentRow = function deleteCurrentRow(key) {
    Excel.run(function (context) {
      var selectedRange = context.workbook.worksheets.getActiveWorksheet().getRange(String(mappingConfig[key].address + 1));
      selectedRange.format.fill.clear("color");
      nextPage === "bom" ? selectedRange.clear() : selectedRange.format.fill.clear("color");
      selectedRange.format.autofitRows();
      selectedRange.format.autofitColumns();
      return context.sync();
    });
    var MMconfigDataCopy = _objectSpread({}, mappingConfig);
    delete MMconfigDataCopy[key];
    if (Object.keys(MMconfigDataCopy).length) {
      dispatch(setmappingConfig2(MMconfigDataCopy));
    } else {
      dispatch(setmappingConfig2({}));
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
    options: fieldFor,
    handleChange: selectRangeFor,
    value: rangeFor,
    label: "Selelct the field",
    noOptionMessage: "No mapping fields availble"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "warning",
    id: "warning"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: reserveSelectedSpace,
    id: "apply-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Apply"
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
    src: _assets_icons_editLogo_svg__WEBPACK_IMPORTED_MODULE_8__
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, mappingConfig && ((_Object$entries = Object.entries(mappingConfig)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      key = _ref5[0],
      value = _ref5[1];
    return (value === null || value === void 0 ? void 0 : value.address) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, value.name, key === "custom_material_id" || key === "material_name" || key === "plm_material_id" || key === "unit_of_material" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sup", null, "*") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, value.address), nextPage === "bom" ? edit && (value === null || value === void 0 ? void 0 : value.address) !== "A" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      onClick: function onClick() {
        deleteCurrentRow(key);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "sidebar-logo-img",
      src: _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_7__
    })) : edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      onClick: function onClick() {
        deleteCurrentRow(key);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "sidebar-logo-img",
      src: _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_7__
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: function onClick() {
      saveMMmappingConfig();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Save"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    id: "mapping-updation-warning",
    className: "mapping-updation-warning"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", {
    id: "mapping-updation-success",
    className: "mapping-updation-success"
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (MaterialMap);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n .material-map-box {\r\n   width: 100%;\r\n   height: 100%;\r\n   margin: 0px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n }\r\n .app-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n }\r\n .app-body table{\r\n    padding: 5px;\r\n }\r\n\r\n .action{\r\n    display: flex;\r\n    flex-direction:row;\r\n    align-items: center; \r\n    justify-content:space-around;\r\n    gap: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n }\r\n /* .action button{\r\n    border:none;\r\n    border-radius: 3px;\r\n    height: 23px;\r\n    width: 50px;\r\n    padding-inline:8px ;\r\n } */\r\n .action button:active{\r\n    background-color: #383332;\r\n    color: #FFC467;\r\n    font-weight: bold\r\n\r\n }\r\n .warning{\r\n    color:red;\r\n    display:none;\r\n\r\n }\r\n .apply{\r\n    background-color: #FFC467\r\n }\r\n .clear {\r\nbackground-color: azure;\r\n }\r\n .select-map-feild table {\r\n   /* border:1px solid black; */\r\n   width: 100%;\r\n   border-collapse: collapse;\r\n   font-size: 12px;\r\n}\r\n#configure-table th, td{\r\n   border:1px solid black;\r\n   text-align: center;\r\n}\r\n\r\n.select-map-feild{\r\n   width: fit-content;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n}\r\n\r\n\r\n.select-map-feild p{\r\n    margin-bottom: 7px;\r\n}\r\n p:nth-child(2){\r\n    margin-top: 10px;\r\n}\r\n.upload{\r\n   margin-top: 10px;\r\n   display: flex;\r\n   justify-content: center;\r\n}\r\n/* .upload button{\r\n   background-color: #FFC467;\r\n   border:none;\r\n   border-radius: 3px;\r\n   height: 23px;\r\n   width: 70px;\r\n\r\n} */\r\n.warnings{\r\n   color: red;\r\n}\r\n#configure-table td:nth-child(3) {\r\n    border :none;\r\n  }\r\n  #configure-table th:last-child {\r\n    border :none;\r\n  }\r\n  .selectType{\r\n    z-index:-1 ;\r\n  }\r\nsup{\r\n   color: red;\r\n}\r\n.reserved-column-error{\r\n   margin:5px 0 10px 0;\r\n   color: red;\r\n   display: none;\r\n   font-size: smaller;\r\n}\r\n.mapping-updation-warning{\r\n   color: red;\r\n   font-size: smaller;\r\n   display: none;\r\n   flex-wrap: wrap;\r\n\r\n}\r\n.mapping-updation-success{\r\n   color: green;\r\n   display: none;\r\n   font-size: smaller;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css"],"names":[],"mappings":";CACC;GACE,WAAW;GACX,YAAY;GACZ,WAAW;GACX,aAAa;GACb,sBAAsB;GACtB,mBAAmB;CACrB;CACA;IACG,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;CACnB;CACA;IACG,YAAY;CACf;;CAEA;IACG,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,4BAA4B;IAC5B,SAAS;IACT,mBAAmB;IACnB,WAAW;CACd;CACA;;;;;;IAMG;CACH;IACG,yBAAyB;IACzB,cAAc;IACd;;CAEH;CACA;IACG,SAAS;IACT,YAAY;;CAEf;CACA;IACG;CACH;CACA;AACD,uBAAuB;CACtB;CACA;GACE,4BAA4B;GAC5B,WAAW;GACX,yBAAyB;GACzB,eAAe;AAClB;AACA;GACG,sBAAsB;GACtB,kBAAkB;AACrB;;AAEA;GACG,kBAAkB;GAClB,aAAa;GACb,sBAAsB;GACtB,mBAAmB;AACtB;;;AAGA;IACI,kBAAkB;AACtB;CACC;IACG,gBAAgB;AACpB;AACA;GACG,gBAAgB;GAChB,aAAa;GACb,uBAAuB;AAC1B;AACA;;;;;;;GAOG;AACH;GACG,UAAU;AACb;AACA;IACI,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;GACG,UAAU;AACb;AACA;GACG,mBAAmB;GACnB,UAAU;GACV,aAAa;GACb,kBAAkB;AACrB;AACA;GACG,UAAU;GACV,kBAAkB;GAClB,aAAa;GACb,eAAe;;AAElB;AACA;GACG,YAAY;GACZ,aAAa;GACb,kBAAkB;AACrB","sourcesContent":["\r\n .material-map-box {\r\n   width: 100%;\r\n   height: 100%;\r\n   margin: 0px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n }\r\n .app-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n }\r\n .app-body table{\r\n    padding: 5px;\r\n }\r\n\r\n .action{\r\n    display: flex;\r\n    flex-direction:row;\r\n    align-items: center; \r\n    justify-content:space-around;\r\n    gap: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n }\r\n /* .action button{\r\n    border:none;\r\n    border-radius: 3px;\r\n    height: 23px;\r\n    width: 50px;\r\n    padding-inline:8px ;\r\n } */\r\n .action button:active{\r\n    background-color: #383332;\r\n    color: #FFC467;\r\n    font-weight: bold\r\n\r\n }\r\n .warning{\r\n    color:red;\r\n    display:none;\r\n\r\n }\r\n .apply{\r\n    background-color: #FFC467\r\n }\r\n .clear {\r\nbackground-color: azure;\r\n }\r\n .select-map-feild table {\r\n   /* border:1px solid black; */\r\n   width: 100%;\r\n   border-collapse: collapse;\r\n   font-size: 12px;\r\n}\r\n#configure-table th, td{\r\n   border:1px solid black;\r\n   text-align: center;\r\n}\r\n\r\n.select-map-feild{\r\n   width: fit-content;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n}\r\n\r\n\r\n.select-map-feild p{\r\n    margin-bottom: 7px;\r\n}\r\n p:nth-child(2){\r\n    margin-top: 10px;\r\n}\r\n.upload{\r\n   margin-top: 10px;\r\n   display: flex;\r\n   justify-content: center;\r\n}\r\n/* .upload button{\r\n   background-color: #FFC467;\r\n   border:none;\r\n   border-radius: 3px;\r\n   height: 23px;\r\n   width: 70px;\r\n\r\n} */\r\n.warnings{\r\n   color: red;\r\n}\r\n#configure-table td:nth-child(3) {\r\n    border :none;\r\n  }\r\n  #configure-table th:last-child {\r\n    border :none;\r\n  }\r\n  .selectType{\r\n    z-index:-1 ;\r\n  }\r\nsup{\r\n   color: red;\r\n}\r\n.reserved-column-error{\r\n   margin:5px 0 10px 0;\r\n   color: red;\r\n   display: none;\r\n   font-size: smaller;\r\n}\r\n.mapping-updation-warning{\r\n   color: red;\r\n   font-size: smaller;\r\n   display: none;\r\n   flex-wrap: wrap;\r\n\r\n}\r\n.mapping-updation-success{\r\n   color: green;\r\n   display: none;\r\n   font-size: smaller;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css":
/*!****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MaterialMap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./MaterialMap.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Material/MaterialMap/MaterialMap.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MaterialMap_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_MaterialMap_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MaterialMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MaterialMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/icons/editLogo.svg":
/*!***********************************!*\
  !*** ./assets/icons/editLogo.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/editLogo.svg";

/***/ })

}]);
//# sourceMappingURL=src_taskpane_commonComponents_Material_MaterialMap_MaterialMap_js.js.map