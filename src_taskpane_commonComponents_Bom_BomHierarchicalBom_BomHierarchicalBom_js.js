"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_commonComponents_Bom_BomHierarchicalBom_BomHierarchicalBom_js"],{

/***/ "./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.js":
/*!************************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Button/Button */ "./src/taskpane/commonComponents/Button/Button.js");
/* harmony import */ var _BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BomHierarchicalBom.css */ "./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css");
/* harmony import */ var _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/graphQlQuery */ "./src/taskpane/api/graphQlQuery.js");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _DropDown_DropDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../DropDown/DropDown */ "./src/taskpane/commonComponents/DropDown/DropDown.js");
/* harmony import */ var _ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ProjectIndicator/ProjectIndicator */ "./src/taskpane/commonComponents/ProjectIndicator/ProjectIndicator.js");
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















function BomHierarchicalBom() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.taskpane;
    }),
    nextPage = _useSelector.nextPage,
    bomMappingData = _useSelector.bomMappingData,
    activeProject = _useSelector.activeProject;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    productCodes = _useState2[0],
    setProductCodes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedProdCode = _useState4[0],
    setSelectedProdCode = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    allBomdetails = _useState6[0],
    setAllBomDetails = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedBom = _useState8[0],
    setSelectdBom = _useState8[1];
  // const [coreMaterialsBom, setCoreMaterailBom] = useState([]);
  // const [addNewBomMaterial, setAddNewBomMaterial] = useState(false);
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    prodCodeLoading = _useState10[0],
    setProdCodeLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    bomLoading = _useState12[0],
    setBomLoading = _useState12[1];

  // this useEffect fectches all product codes while loading this page
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master") {
      setProdCodeLoading(true);
      var token = localStorage.getItem("tenantToken");
      try {
        var body = {
          operationName: "GetAllProductCodes",
          query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__.GetAllProductCodes,
          variables: null
        };
        (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, token, body).then(function (data) {
          if (data.errors) {
            data.errors.map(function (element) {
              if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
                (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__.logout)();
                dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__.setNextPage)("homeLogin"));
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
    } else {
      try {
        var _body = {
          operationName: "GetAllProjectBomListQuery",
          query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__.GetAllProjectBomListQuery,
          variables: {
            projectId: activeProject === null || activeProject === void 0 ? void 0 : activeProject.id
          }
        };
        (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, localStorage.getItem("projectExchangeToken"), _body).then(function (data) {
          if (data.errors) {
            data.errors.map(function (element) {
              if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
                (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__.logout)();
                dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__.setNextPage)("homeLogin"));
              }
            });
          } else {
            var _data$data4;
            console.log(data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : _data$data4.core_bom, " data?.data?.core_bom?.");
            var _loop2 = function _loop2(i) {
              setAllBomDetails(function (prevState) {
                var _data$data6, _data$data6$core_bom$, _data$data7, _data$data7$core_bom$;
                return [].concat(_toConsumableArray(prevState), [{
                  label: data === null || data === void 0 ? void 0 : (_data$data6 = data.data) === null || _data$data6 === void 0 ? void 0 : (_data$data6$core_bom$ = _data$data6.core_bom[i]) === null || _data$data6$core_bom$ === void 0 ? void 0 : _data$data6$core_bom$.name,
                  value: data === null || data === void 0 ? void 0 : (_data$data7 = data.data) === null || _data$data7 === void 0 ? void 0 : (_data$data7$core_bom$ = _data$data7.core_bom[i]) === null || _data$data7$core_bom$ === void 0 ? void 0 : _data$data7$core_bom$.id
                }]);
              });
            };
            for (var i = 0; i < (data === null || data === void 0 ? void 0 : (_data$data5 = data.data) === null || _data$data5 === void 0 ? void 0 : (_data$data5$core_bom = _data$data5.core_bom) === null || _data$data5$core_bom === void 0 ? void 0 : _data$data5$core_bom.length); i++) {
              var _data$data5, _data$data5$core_bom;
              _loop2(i);
            }
          }
        }).catch(function (error) {
          console.log(error.message, "error.message");
        });
      } catch (error) {
        console.log(error);
      } finally {}
    }
  }, [true]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.getElementById("mappingWarning").style.display = "none";
  }, []);
  // when product code selection changes this fuction fecth bom associated with given selelctd producted code
  var handleProdCodeChange = function handleProdCodeChange(selectedProdCode) {
    // for loader in drop down
    setBomLoading(true);
    setAllBomDetails([]);
    setSelectdBom(null);
    setSelectedProdCode(selectedProdCode);
    var token = localStorage.getItem("tenantToken");
    try {
      var body = {
        operationName: "GetAllBomListByProductCodeQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__.GetAllBomListByProductCodeQuery,
        variables: {
          product_code: parseInt(selectedProdCode === null || selectedProdCode === void 0 ? void 0 : selectedProdCode.value)
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, token, body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _loop3 = function _loop3(i) {
            setAllBomDetails(function (prevState) {
              var _data$data9, _data$data9$core_bom$, _data$data10, _data$data10$core_bom;
              return [].concat(_toConsumableArray(prevState), [{
                label: data === null || data === void 0 ? void 0 : (_data$data9 = data.data) === null || _data$data9 === void 0 ? void 0 : (_data$data9$core_bom$ = _data$data9.core_bom[i]) === null || _data$data9$core_bom$ === void 0 ? void 0 : _data$data9$core_bom$.name,
                value: data === null || data === void 0 ? void 0 : (_data$data10 = data.data) === null || _data$data10 === void 0 ? void 0 : (_data$data10$core_bom = _data$data10.core_bom[i]) === null || _data$data10$core_bom === void 0 ? void 0 : _data$data10$core_bom.id
              }]);
            });
          };
          for (var i = 0; i < (data === null || data === void 0 ? void 0 : (_data$data8 = data.data) === null || _data$data8 === void 0 ? void 0 : (_data$data8$core_bom = _data$data8.core_bom) === null || _data$data8$core_bom === void 0 ? void 0 : _data$data8$core_bom.length); i++) {
            var _data$data8, _data$data8$core_bom;
            _loop3(i);
          }
        }
      }).catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setBomLoading(false);
    }
  };
  var getSelectedBomDetails = function getSelectedBomDetails(selectedBom) {
    setSelectdBom(selectedBom);
  };
  // get fulll details of selected bom
  var importBomMaterial = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var body;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!bomMappingData) {
              _context4.next = 7;
              break;
            }
            dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_11__.setUploadLoader)(true));
            _context4.next = 4;
            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_6__.deleteAllSheets)();
          case 4:
            try {
              body = {
                operationName: "GetBomdetailsByBomId",
                query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__.GetBomdetailsByBomId,
                variables: {
                  bom_id: selectedBom === null || selectedBom === void 0 ? void 0 : selectedBom.value,
                  active: true
                }
              };
              (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
                  var _data$data11, getHierarchiaclBomData, _getHierarchiaclBomData;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(data !== null && data !== void 0 && data.errors)) {
                          _context3.next = 4;
                          break;
                        }
                        data.errors.map(function (element) {
                          if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
                            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__.logout)();
                            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__.setNextPage)("homeLogin"));
                          }
                        });
                        _context3.next = 9;
                        break;
                      case 4:
                        _getHierarchiaclBomData = function _getHierarchiaclBomDa2() {
                          _getHierarchiaclBomData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bomVersionId) {
                            var prodCode,
                              body,
                              _args2 = arguments;
                            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                              while (1) switch (_context2.prev = _context2.next) {
                                case 0:
                                  prodCode = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                                  body = {
                                    operationName: "GetAllBomItemsByBomVersionIdQuery",
                                    query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_5__.GetAllBomItemsByBomVersionIdQuery,
                                    variables: {
                                      bom_version: bomVersionId
                                    }
                                  };
                                  _context2.next = 4;
                                  return (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_10__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_2__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then( /*#__PURE__*/function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
                                      var _data$data13, _data$data13$bom_item, i, _data$data12, _data$data12$bom_item, _data$data$bom_items$, _data$data$bom_items$2, _data$data$bom_items$3, _data$data$bom_items$4, _data$data14, _data$data14$bom_item, _data$data14$bom_item2, sheetName, _i2, _data$data15;
                                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                                        while (1) switch (_context.prev = _context.next) {
                                          case 0:
                                            if (!(data !== null && data !== void 0 && data.errors)) {
                                              _context.next = 4;
                                              break;
                                            }
                                            data.errors.map(function (element) {
                                              if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_7__.JWT_ERROR_MESSAGE)) {
                                                (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_9__.logout)();
                                                dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_8__.setNextPage)("homeLogin"));
                                              }
                                            });
                                            _context.next = 26;
                                            break;
                                          case 4:
                                            i = 0;
                                          case 5:
                                            if (!(i < (data === null || data === void 0 ? void 0 : (_data$data12 = data.data) === null || _data$data12 === void 0 ? void 0 : (_data$data12$bom_item = _data$data12.bom_items) === null || _data$data12$bom_item === void 0 ? void 0 : _data$data12$bom_item.length))) {
                                              _context.next = 12;
                                              break;
                                            }
                                            if (!data.data.bom_items[i].associated_product_code_bom) {
                                              _context.next = 9;
                                              break;
                                            }
                                            _context.next = 9;
                                            return getHierarchiaclBomData((_data$data$bom_items$ = data.data.bom_items[i]) === null || _data$data$bom_items$ === void 0 ? void 0 : _data$data$bom_items$.associated_product_code_bom, (_data$data$bom_items$2 = data.data.bom_items[i]) === null || _data$data$bom_items$2 === void 0 ? void 0 : (_data$data$bom_items$3 = _data$data$bom_items$2.core_material) === null || _data$data$bom_items$3 === void 0 ? void 0 : (_data$data$bom_items$4 = _data$data$bom_items$3.material_product_code) === null || _data$data$bom_items$4 === void 0 ? void 0 : _data$data$bom_items$4.product_code);
                                          case 9:
                                            i++;
                                            _context.next = 5;
                                            break;
                                          case 12:
                                            if (!((data === null || data === void 0 ? void 0 : (_data$data13 = data.data) === null || _data$data13 === void 0 ? void 0 : (_data$data13$bom_item = _data$data13.bom_items) === null || _data$data13$bom_item === void 0 ? void 0 : _data$data13$bom_item.length) > 0)) {
                                              _context.next = 25;
                                              break;
                                            }
                                            _context.next = 15;
                                            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_6__.createNewSheet)((data === null || data === void 0 ? void 0 : (_data$data14 = data.data) === null || _data$data14 === void 0 ? void 0 : (_data$data14$bom_item = _data$data14.bom_items[0]) === null || _data$data14$bom_item === void 0 ? void 0 : (_data$data14$bom_item2 = _data$data14$bom_item.core_bom) === null || _data$data14$bom_item2 === void 0 ? void 0 : _data$data14$bom_item2.name) + "_" + prodCode, true);
                                          case 15:
                                            sheetName = _context.sent;
                                            (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_6__.clearsheet)(sheetName); // to clear existing data from given sheet
                                            Object.entries(bomMappingData).map(function (_ref4, index) {
                                              var _ref5 = _slicedToArray(_ref4, 2),
                                                key = _ref5[0],
                                                value = _ref5[1];
                                              writeHeadings(index, key);
                                            });
                                            _i2 = 0;
                                          case 19:
                                            if (!(_i2 < data.data.bom_items.length)) {
                                              _context.next = 25;
                                              break;
                                            }
                                            _context.next = 22;
                                            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_6__.writeToExcelforBOM)(sheetName, _i2, data === null || data === void 0 ? void 0 : (_data$data15 = data.data) === null || _data$data15 === void 0 ? void 0 : _data$data15.bom_items[_i2], bomMappingData);
                                          case 22:
                                            _i2++;
                                            _context.next = 19;
                                            break;
                                          case 25:
                                            return _context.abrupt("return", data.data.bom_items);
                                          case 26:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }, _callee);
                                    }));
                                    return function (_x4) {
                                      return _ref3.apply(this, arguments);
                                    };
                                  }());
                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }, _callee2);
                          }));
                          return _getHierarchiaclBomData.apply(this, arguments);
                        };
                        getHierarchiaclBomData = function _getHierarchiaclBomDa(_x3) {
                          return _getHierarchiaclBomData.apply(this, arguments);
                        };
                        _context3.next = 8;
                        return getHierarchiaclBomData(data === null || data === void 0 ? void 0 : (_data$data11 = data.data) === null || _data$data11 === void 0 ? void 0 : _data$data11.bom_items[0].bom_version_id, selectedProdCode !== null && selectedProdCode !== void 0 && selectedProdCode.label ? selectedProdCode === null || selectedProdCode === void 0 ? void 0 : selectedProdCode.label : "parent");
                      case 8:
                        dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_11__.setUploadLoader)(false));
                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()).catch(function (error) {
                console.log("someThing went wrong", error);
                dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_11__.setUploadLoader)(false));
              });
            } catch (error) {
              console.log(error);
              dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_11__.setUploadLoader)(false));
            }
            _context4.next = 8;
            break;
          case 7:
            document.getElementById("mappingWarning").style.display = "block";
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function importBomMaterial() {
      return _ref.apply(this, arguments);
    };
  }();
  // writeToExcel ==> imports and pastes the imported data based on mapping configuration

  // write the headins of given imported data of bom
  var writeHeadings = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(i, key) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Excel.run(function (context) {
              var _bomMappingData$key, _bomMappingData$key2;
              var sheet = context.workbook.worksheets.getActiveWorksheet().getRange(String(((_bomMappingData$key = bomMappingData[key]) === null || _bomMappingData$key === void 0 ? void 0 : _bomMappingData$key.address) + 1));
              sheet.values = [[(_bomMappingData$key2 = bomMappingData[key]) === null || _bomMappingData$key2 === void 0 ? void 0 : _bomMappingData$key2.name]];
              sheet.format.fill.color = "#FFC467";
              sheet.format.autofitColumns();
              return context.sync();
            });
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function writeHeadings(_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " bom-import-container",
    id: "bom-import-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProjectIndicator_ProjectIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], null), (activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === "Master" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: productCodes,
    handleChange: handleProdCodeChange,
    value: selectedProdCode,
    label: "Selelct the Product Code",
    noOptionMessage: "No Product Codes availble",
    prodCodeLoading: prodCodeLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DropDown_DropDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: allBomdetails,
    handleChange: getSelectedBomDetails,
    value: selectedBom,
    label: "Selelct the Bill of Material",
    noOptionMessage: "No  Bom data availble",
    isLoading: bomLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-get-btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bom-import-button",
    onClick: selectedBom && importBomMaterial
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Get Hierarchical BOM"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mappingWarning",
    id: "mappingWarning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "you have to map first before importing data"))));
}
/* harmony default export */ __webpack_exports__["default"] = (BomHierarchicalBom);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css ***!
  \***************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.bom-get-btn-container{\r\n    display: flex;\r\n    margin-top: 20px;\r\n    gap: 10px;\r\n    }\r\n    .bom-import-container{\r\n        display: flex;\r\n       align-items: center;\r\n        flex-direction: column;\r\n        height: -webkit-fill-available;\r\n    }\r\n    .mappingWarning li{\r\n        color: red;\r\n        font-size: x-small;\r\n    }\r\n    .mappingWarning li:last-child{\r\n        list-style: none;\r\n    }\r\n    \r\n    .mappingWarning{\r\n    display: none;\r\n    }\r\n    ", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT;IACA;QACI,aAAa;OACd,mBAAmB;QAClB,sBAAsB;QACtB,8BAA8B;IAClC;IACA;QACI,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;;IAEA;IACA,aAAa;IACb","sourcesContent":["\r\n.bom-get-btn-container{\r\n    display: flex;\r\n    margin-top: 20px;\r\n    gap: 10px;\r\n    }\r\n    .bom-import-container{\r\n        display: flex;\r\n       align-items: center;\r\n        flex-direction: column;\r\n        height: -webkit-fill-available;\r\n    }\r\n    .mappingWarning li{\r\n        color: red;\r\n        font-size: x-small;\r\n    }\r\n    .mappingWarning li:last-child{\r\n        list-style: none;\r\n    }\r\n    \r\n    .mappingWarning{\r\n    display: none;\r\n    }\r\n    "],"sourceRoot":""}]);
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

/***/ "./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css":
/*!*************************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css ***!
  \*************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./BomHierarchicalBom.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/BomHierarchicalBom/BomHierarchicalBom.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_BomHierarchicalBom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=src_taskpane_commonComponents_Bom_BomHierarchicalBom_BomHierarchicalBom_js.js.map