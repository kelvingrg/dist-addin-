"use strict";
(self["webpackChunkoffice_addin_taskpane_react_js"] = self["webpackChunkoffice_addin_taskpane_react_js"] || []).push([["src_taskpane_commonComponents_Bom_AddNewMaterail_AddNewMaterail_js"],{

/***/ "./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.js":
/*!****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewMaterail.css */ "./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css");
/* harmony import */ var _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/graphQlQuery */ "./src/taskpane/api/graphQlQuery.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constFunctions/constants */ "./src/taskpane/constFunctions/constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux-toolkit/slice/TaskpaneSlice */ "./src/taskpane/redux-toolkit/slice/TaskpaneSlice.js");
/* harmony import */ var _constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constFunctions/copmponentFunctions */ "./src/taskpane/constFunctions/copmponentFunctions.js");
/* harmony import */ var _constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constFunctions/excelFunction */ "./src/taskpane/constFunctions/excelFunction.js");
/* harmony import */ var _api_apiCalls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/apiCalls */ "./src/taskpane/api/apiCalls.js");
/* harmony import */ var _redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../redux-toolkit/slice/action */ "./src/taskpane/redux-toolkit/slice/action.js");
/* harmony import */ var _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../assets/icons/search-icon.svg */ "./assets/icons/search-icon.svg");
/* harmony import */ var _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../assets/icons/x-circle.svg */ "./assets/icons/x-circle.svg");
/* harmony import */ var _assets_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../assets/icons/close-icon.svg */ "./assets/icons/close-icon.svg");
/* harmony import */ var _constFunctions_tagHelpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../constFunctions/tagHelpers */ "./src/taskpane/constFunctions/tagHelpers.js");
/* harmony import */ var _PopOver_PopOver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PopOver/PopOver */ "./src/taskpane/commonComponents/Bom/PopOver/PopOver.js");
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var SelectLatestBom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_taskpane_commonComponents_Bom_SelectLatestBom_SelectLatestBom_js").then(__webpack_require__.bind(__webpack_require__, /*! ../SelectLatestBom/SelectLatestBom */ "./src/taskpane/commonComponents/Bom/SelectLatestBom/SelectLatestBom.js"));
});







function AddNewMaterail(_ref) {
  var _tagOptions$filter;
  var setAddNewBomMaterial = _ref.setAddNewBomMaterial;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
      return state.taskpane;
    }),
    bomMappingData = _useSelector.bomMappingData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchKeyword = _useState2[0],
    setSearchKeyword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    allMaterialData = _useState4[0],
    setAllMaterialData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    totalPage = _useState6[0],
    setTotalPage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    pageNumber = _useState8[0],
    setPageNumber = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    associatedBom = _useState10[0],
    setAssociatedBom = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    tagOptions = _useState12[0],
    setTagOptions = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    savedTags = _useState14[0],
    setSavedTags = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState16 = _slicedToArray(_useState15, 2),
    activeListItem = _useState16[0],
    setActiveListItem = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    tagSearch = _useState18[0],
    setTagSearch = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new _constFunctions_tagHelpers__WEBPACK_IMPORTED_MODULE_14__.TagTrie()),
    _useState20 = _slicedToArray(_useState19, 1),
    tagTrie = _useState20[0];
  var perPage = 10;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((savedTags === null || savedTags === void 0 ? void 0 : savedTags.length) > 0) {
      getChildrenTags();
    } else {
      getParentData("");
    }
  }, [savedTags]);
  var handleSearchQueryChange = function handleSearchQueryChange(e) {
    var _e$target, _e$target$value;
    setSearchKeyword(e.target.value);
    if ((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$value = _e$target.value) !== null && _e$target$value !== void 0 && _e$target$value.length) {
      getMaterialData();
    }
  };
  var getMaterialData = function getMaterialData() {
    var variables = {
      jump: (pageNumber - 1) * perPage,
      perPage: perPage,
      searchKeyword: "%".concat(searchKeyword, "%")
    };
    var token = localStorage.getItem("tenantToken");
    try {
      var body = {
        operationName: "GetMaterialMasterDataQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.GetMaterialMasterDataQuery,
        variables: variables
      };
      fetch(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, {
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
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _data$data, _data$data2, _data$data2$core_mate, _data$data2$core_mate2, _data$data3, _data$data3$core_mate, _data$data3$core_mate2;
          setAllMaterialData(data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.core_material_master);
          setTotalPage(Math.ceil((data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$core_mate = _data$data2.core_material_master_aggregate) === null || _data$data2$core_mate === void 0 ? void 0 : (_data$data2$core_mate2 = _data$data2$core_mate.aggregate) === null || _data$data2$core_mate2 === void 0 ? void 0 : _data$data2$core_mate2.count) / perPage));
          // if search is done when page number is 20 and and search result only have 5 pages then it throws empty page
          if (Math.ceil((data === null || data === void 0 ? void 0 : (_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : (_data$data3$core_mate = _data$data3.core_material_master_aggregate) === null || _data$data3$core_mate === void 0 ? void 0 : (_data$data3$core_mate2 = _data$data3$core_mate.aggregate) === null || _data$data3$core_mate2 === void 0 ? void 0 : _data$data3$core_mate2.count) / perPage) < pageNumber) {
            setPageNumber(1);
          }
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
      });
    } catch (error) {
      console.log(error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((savedTags === null || savedTags === void 0 ? void 0 : savedTags.length) > 0) {
      getMaterialDataWithTags();
    } else {
      getMaterialData();
    }
    getMaterialData();
  }, [pageNumber, searchKeyword, savedTags]);
  var writeBomMaterialToExcel = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(materialData) {
      var _materialData$materia, _materialData$materia2, body, lastUsedRow, sheetName;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(materialData !== null && materialData !== void 0 && (_materialData$materia = materialData.material_product_code) !== null && _materialData$materia !== void 0 && _materialData$materia.id)) {
              _context2.next = 6;
              break;
            }
            body = {
              operationName: "GetAllBomListByProductCodeActive",
              query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.GetAllBomListByProductCodeActive,
              variables: {
                product_code: materialData === null || materialData === void 0 ? void 0 : (_materialData$materia2 = materialData.material_product_code) === null || _materialData$materia2 === void 0 ? void 0 : _materialData$materia2.id
              }
            };
            (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (data !== null && data !== void 0 && data.errors) {
                        data.errors.map(function (element) {
                          if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
                            (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
                            dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
                          }
                        });
                      } else {
                        setAssociatedBom(data === null || data === void 0 ? void 0 : data.data.core_bom);
                      }
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()).catch(function (error) {
              console.log("someThing went wrong");
              // dispatch(setUploadLoader(false));
            });
            _context2.next = 13;
            break;
          case 6:
            _context2.next = 8;
            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_8__.getLastUsedRowNumber)();
          case 8:
            lastUsedRow = _context2.sent;
            _context2.next = 11;
            return (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_8__.getactiveSheetName)();
          case 11:
            sheetName = _context2.sent;
            (0,_constFunctions_excelFunction__WEBPACK_IMPORTED_MODULE_8__.writeMaterilToExcel)(sheetName, lastUsedRow + 1, materialData, bomMappingData);
          case 13:
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            // dispatch(setUploadLoader(false));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function writeBomMaterialToExcel(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var activeTagbox = function activeTagbox() {
    document.getElementById("tag-option-box").style.display = "block";
  };
  var deactiveTagBox = function deactiveTagBox() {
    document.getElementById("tag-option-box").style.display = "none";
  };
  var getParentData = function getParentData(value) {
    try {
      var body = {
        operationName: "getParentTags",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.getParentTags,
        variables: {
          value: value
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _data$data4;
          setTagOptions(data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : _data$data4.tag);
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
      });
    } catch (error) {
      console.log(error);
    }
  };
  var getChildrenTags = function getChildrenTags() {
    try {
      var _savedTags$at;
      var body = {
        operationName: "getChildrenTagsQuery",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.getChildrenTagsQuery,
        variables: {
          value: "",
          parent_id: savedTags === null || savedTags === void 0 ? void 0 : (_savedTags$at = savedTags.at(-1)) === null || _savedTags$at === void 0 ? void 0 : _savedTags$at.id
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _data$data5;
          setTagOptions(data === null || data === void 0 ? void 0 : (_data$data5 = data.data) === null || _data$data5 === void 0 ? void 0 : _data$data5.tag);
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
      });
    } catch (error) {
      console.log(error);
    }
  };
  var addtoTag = function addtoTag(tag) {
    deactiveTagBox();
    if (tag) {
      tagTrie.insertTag({
        name: tag.name,
        id: tag.id,
        parentId: tag.parent_id
      });
      // this.suggestions = [];
      // this.value = "";

      var tags = tagTrie.getTagArray();
      setSavedTags(tags);
    }
  };
  var getMaterialDataWithTags = function getMaterialDataWithTags() {
    try {
      var body = {
        operationName: "getMaterialTags",
        query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.getMaterialTags,
        variables: {
          tags: savedTags.map(function (element) {
            return element === null || element === void 0 ? void 0 : element.id;
          })
        }
      };
      (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), body).then(function (data) {
        if (data.errors) {
          data.errors.map(function (element) {
            if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
              (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
              dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
            }
          });
        } else {
          var _body = {
            operationName: "GetMaterialMasterForBomQueryWithTagFilters",
            query: _api_graphQlQuery__WEBPACK_IMPORTED_MODULE_2__.GetMaterialMasterForBomQueryWithTagFilters,
            variables: {
              jump: (pageNumber - 1) * 10,
              perPage: 10,
              searchKeyword: "%".concat(searchKeyword, "%"),
              materialIds: data.data.tag_material.map(function (element) {
                return element === null || element === void 0 ? void 0 : element.material_id;
              })
            }
          };
          (0,_api_apiCalls__WEBPACK_IMPORTED_MODULE_9__.runQuery)(_config__WEBPACK_IMPORTED_MODULE_3__.DTX_GRAPHQL_URL, localStorage.getItem("tenantToken"), _body).then(function (data) {
            if (data.errors) {
              data.errors.map(function (element) {
                if (element !== null && element !== void 0 && element.message.includes(_constFunctions_constants__WEBPACK_IMPORTED_MODULE_4__.JWT_ERROR_MESSAGE)) {
                  (0,_constFunctions_copmponentFunctions__WEBPACK_IMPORTED_MODULE_7__.logout)();
                  dispatch((0,_redux_toolkit_slice_TaskpaneSlice__WEBPACK_IMPORTED_MODULE_6__.setNextPage)("homeLogin"));
                }
              });
            } else {
              var _data$data6, _data$data7, _data$data7$core_mate, _data$data7$core_mate2, _data$data8, _data$data8$core_mate, _data$data8$core_mate2;
              setAllMaterialData(data === null || data === void 0 ? void 0 : (_data$data6 = data.data) === null || _data$data6 === void 0 ? void 0 : _data$data6.core_material_master);
              setTotalPage(Math.ceil((data === null || data === void 0 ? void 0 : (_data$data7 = data.data) === null || _data$data7 === void 0 ? void 0 : (_data$data7$core_mate = _data$data7.core_material_master_aggregate) === null || _data$data7$core_mate === void 0 ? void 0 : (_data$data7$core_mate2 = _data$data7$core_mate.aggregate) === null || _data$data7$core_mate2 === void 0 ? void 0 : _data$data7$core_mate2.count) / perPage));
              if (Math.ceil((data === null || data === void 0 ? void 0 : (_data$data8 = data.data) === null || _data$data8 === void 0 ? void 0 : (_data$data8$core_mate = _data$data8.core_material_master_aggregate) === null || _data$data8$core_mate === void 0 ? void 0 : (_data$data8$core_mate2 = _data$data8$core_mate.aggregate) === null || _data$data8$core_mate2 === void 0 ? void 0 : _data$data8$core_mate2.count) / perPage) < pageNumber) {
                setPageNumber(1);
              }
            }
          }).catch(function (error) {
            console.log(error.message, "error.message");
          });
        }
      }).catch(function (error) {
        console.log(error.message, "error.message");
      });
    } catch (error) {
      console.log(error);
    }
  };
  var mouseEntered = function mouseEntered(num) {
    setActiveListItem(num);
  };
  var mouseGoesOut = function mouseGoesOut(num) {
    setActiveListItem(num);
  };

  // const removeTag = () => {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-addnew-material-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "serch-box-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "close-btn",
    onClick: function onClick() {
      return setAddNewBomMaterial(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "logo-img",
    src: _assets_icons_x_circle_svg__WEBPACK_IMPORTED_MODULE_12__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-search-bar-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "logo-img",
    src: _assets_icons_search_icon_svg__WEBPACK_IMPORTED_MODULE_11__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    className: "bom-mat-search-input",
    placeholder: "Search by name",
    value: searchKeyword,
    onChange: handleSearchQueryChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-search-bar-box-tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "search-box-tag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "search",
    className: "bom-mat-search-input",
    placeholder: "Tag name",
    value: tagSearch,
    onChange: function onChange(e) {
      setTagSearch(e.target.value);
    },
    onClick: activeTagbox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag-option-box",
    id: "tag-option-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "tag-option-ul",
    onMouseLeave: deactiveTagBox
  }, (tagOptions === null || tagOptions === void 0 ? void 0 : tagOptions.length) > 0 ? tagOptions === null || tagOptions === void 0 ? void 0 : (_tagOptions$filter = tagOptions.filter(function (element) {
    return element === null || element === void 0 ? void 0 : element.name.toLowerCase().includes(tagSearch.toLowerCase());
  })) === null || _tagOptions$filter === void 0 ? void 0 : _tagOptions$filter.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      onClick: function onClick() {
        addtoTag(element);
      },
      key: index,
      className: "tag-option-li"
    }, element === null || element === void 0 ? void 0 : element.name);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "no-tags-option-li"
  }, "No Tags"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tags-container"
  }, savedTags === null || savedTags === void 0 ? void 0 : savedTags.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "tags",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, element.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      className: "selected-tags-close",
      src: _assets_icons_close_icon_svg__WEBPACK_IMPORTED_MODULE_13__,
      onClick: function onClick() {
        tagTrie.deleteTagById(element === null || element === void 0 ? void 0 : element.id);
        setSavedTags(tagTrie.getTagArray());
      }
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, allMaterialData === null || allMaterialData === void 0 ? void 0 : allMaterialData.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "material-list-li ",
      onClick: function onClick() {
        dispatch((0,_redux_toolkit_slice_action__WEBPACK_IMPORTED_MODULE_10__.setSingleMaterialDataInitial)(element));
        writeBomMaterialToExcel(element);
      },
      key: index,
      onMouseOver: function onMouseOver() {
        mouseEntered(index);
      },
      onMouseLeave: mouseGoesOut
    }, activeListItem === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PopOver_PopOver__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: element
    })), index + 1 + pageNumber * 10 - 10, ". ", "".concat((element.custom_material_id.length > 6 ? element.custom_material_id.substring(0, 6) + "..." : element.custom_material_id) || "no id "), "-", "".concat((element.material_name.length > 30 ? element.material_name.substring(0, 30) + "..." : element.material_name) || "No Name"));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-addMaterial-pagination-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bom-addMaterial-pagination-box"
  }, pageNumber > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pageNo",
    onClick: function onClick() {
      return setPageNumber(1);
    }
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "...")), pageNumber - 1 > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pageNo",
    onClick: function onClick() {
      return setPageNumber(pageNumber - 1);
    }
  }, pageNumber - 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pageNo current-pageno",
    onClick: function onClick() {
      return setPageNumber(pageNumber);
    }
  }, pageNumber, " "), pageNumber + 1 <= totalPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pageNo",
    onClick: function onClick() {
      return setPageNumber(pageNumber + 1);
    }
  }, pageNumber + 1), pageNumber <= totalPage - 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "pageNo",
    onClick: function onClick() {
      return setPageNumber(totalPage);
    }
  }, totalPage)))), associatedBom !== null && associatedBom !== void 0 && associatedBom.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectLatestBom, {
    bomData: associatedBom,
    setAssociatedBom: setAssociatedBom
  })) : null);
}
/* harmony default export */ __webpack_exports__["default"] = (AddNewMaterail);

/***/ }),

/***/ "./src/taskpane/commonComponents/Bom/PopOver/PopOver.js":
/*!**************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/PopOver/PopOver.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PopOver_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopOver.css */ "./src/taskpane/commonComponents/Bom/PopOver/PopOver.css");


function PopOver(_ref) {
  var _data$custom_material, _data$material_name, _data$material_descri, _data$plm_material_id;
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popover-main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Material Id : ", (_data$custom_material = data === null || data === void 0 ? void 0 : data.custom_material_id) !== null && _data$custom_material !== void 0 ? _data$custom_material : "--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Material Name: ", (_data$material_name = data === null || data === void 0 ? void 0 : data.material_name) !== null && _data$material_name !== void 0 ? _data$material_name : "--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Material Description: ", (_data$material_descri = data === null || data === void 0 ? void 0 : data.material_description) !== null && _data$material_descri !== void 0 ? _data$material_descri : "--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "PLM material id : ", (_data$plm_material_id = data === null || data === void 0 ? void 0 : data.plm_material_id) !== null && _data$plm_material_id !== void 0 ? _data$plm_material_id : "--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "arrow-box"
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (PopOver);

/***/ }),

/***/ "./src/taskpane/constFunctions/tagHelpers.js":
/*!***************************************************!*\
  !*** ./src/taskpane/constFunctions/tagHelpers.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagTrie": function() { return /* binding */ TagTrie; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var TagNode = /*#__PURE__*/_createClass(function TagNode(_ref) {
  var _ref$name = _ref.name,
    name = _ref$name === void 0 ? null : _ref$name,
    _ref$parentId = _ref.parentId,
    parentId = _ref$parentId === void 0 ? null : _ref$parentId,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id;
  _classCallCheck(this, TagNode);
  this.name = name;
  this.parentId = parentId;
  this.isEndOfTag = true;
  this.id = id;
  this.children = {};
});
var TagTrie = /*#__PURE__*/function () {
  function TagTrie() {
    _classCallCheck(this, TagTrie);
    this.root = new TagNode({});
    this._tagArray = [];
  }
  _createClass(TagTrie, [{
    key: "insertTag",
    value: function insertTag(tag) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (level.children[tag.name] === undefined && tag.parentId === level.id) {
        level.children[tag.name] = new TagNode(tag);
        level.isEndOfTag = false;
        this._tagArray.push(tag);
        return;
      }
      for (var _i = 0, _Object$values = Object.values(level.children); _i < _Object$values.length; _i++) {
        var child = _Object$values[_i];
        this.insertTag(tag, child);
      }
    }
  }, {
    key: "_generateTagArray",
    value: function _generateTagArray() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      for (var _i2 = 0, _Object$values2 = Object.values(level.children); _i2 < _Object$values2.length; _i2++) {
        var child = _Object$values2[_i2];
        this._tagArray.push({
          name: child.name,
          parentId: child.parentId,
          id: child.id
        });
        this._generateTagArray(child);
      }
    }
  }, {
    key: "deleteTagById",
    value: function deleteTagById(id) {
      var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      for (var _i3 = 0, _Object$values3 = Object.values(current.children); _i3 < _Object$values3.length; _i3++) {
        var child = _Object$values3[_i3];
        if (child.id === id) {
          delete current.children[child.name];
          this._tagArray = [];
          this._generateTagArray();
          return;
        }
        this.deleteTagById(id, child);
      }
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.root.children = {};
      this._tagArray = [];
    }
  }, {
    key: "getTagArray",
    value: function getTagArray() {
      return JSON.parse(JSON.stringify(this._tagArray));
    }
  }]);
  return TagTrie;
}();
// export const tagTrie = new TagTrie()

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css ***!
  \*******************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bom-addnew-material-container{\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0px;\r\n  left: 0;\r\n  background-color: white;\r\n  min-height: -webkit-fill-available;\r\n  width: -webkit-fill-available;\r\n  z-index: 3;\r\n  margin-top: 40px;\r\n  \r\n}\r\n.bom-addnew-material-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    }\r\n    \r\n    .bom-addnew-material-container .bom-search-bar-box{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: -webkit-fill-available;\r\n        margin-top: .5rem;\r\n    }\r\n.search-box{\r\n  border: 1px solid;\r\n  padding: 2px;\r\n  margin: 0;\r\n  display: flex;\r\n  width: 13rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 3px;\r\n  background-color: white;\r\n    \r\n}\r\n.bom-search-bar-box input[type=\"search\"] {\r\n    border: none;\r\n  background: transparent;\r\n  margin: 0 0 0 10px;\r\n  font-size: 13px;\r\n  color: inherit;\r\n  border-radius: inherit;\r\nflex-grow: 1;\r\nwidth: 11rem;\r\n  }\r\n  input[type=\"search\"]:focus{\r\n    outline: none\r\n  }\r\n  \r\n  input[type=\"search\"]::placeholder {\r\n    color: #bbb;\r\n  }\r\n\r\n  .icon {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: transparent ;\r\n  transform: scaleX(-1);\r\n  }\r\n .bom-addnew-material-container ul{\r\n  margin: 0 0 0 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  box-sizing: border-box;\r\n  max-height: 100%;\r\n  width: -webkit-fill-available;\r\n  }\r\n  .bom-addnew-material-container li {\r\n    margin-top: 5px;\r\n    padding: 4px;\r\n    height: 10px;\r\n    z-index: 4;\r\n  }\r\n  .material-list-li:hover{\r\n    background-color:#FFC467;\r\n    cursor: pointer;\r\n  }\r\n  .tag-option-li{\r\n  font-weight: 400;\r\n  }\r\n  .tag-option-li:hover{\r\n    background-color:#FFC467;\r\n    cursor: pointer;\r\n  }\r\n  .bom-addMaterial-pagination-box{\r\n    width: -webkit-fill-available;\r\n    height: 30px;\r\n\r\n  }\r\n  .bom-addMaterial-pagination-parent{\r\n    /* height:  */\r\n    width: -webkit-fill-available;\r\n    display: flex;\r\n    align-self: end;\r\n    position: relative;\r\n    background-color: bisque;\r\n}\r\n.close-btn:active{\r\ncolor: #FFC467;\r\n\r\n}\r\n.close-btn{\r\n  border-radius: 100%;\r\n  margin-top: .5rem;\r\n position: absolute;\r\n right:-2rem;\r\n}\r\n.bom-addMaterial-pagination-box{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.bom-addMaterial-pagination-box .pageNo{\r\n  border-radius: 100%;\r\n  border: 1px solid #383838;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 17px;\r\n  height: 17px;\r\n  font-size: xx-small\r\n}\r\n.bom-addMaterial-pagination-box .current-pageno{\r\nbackground-color:#fff;\r\n}\r\n.logo-img{\r\n  width: 16px;\r\n  margin-left: 5px;\r\n    height: 16px;\r\n    transform: scaleX(-1);\r\n  \r\n}\r\n\r\n.bom-search-bar-box-tag{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  width: -webkit-fill-available;\r\n  margin-top: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.material-list-li{\r\n  margin-inline: 1.5rem;\r\n  position: relative;\r\n}\r\n.search-box-tag{\r\n  border:1px solid;\r\n  padding:2px;\r\n  margin:0;\r\n  display: flex;\r\n  width: 13rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 3px;\r\n   background-color: white;\r\n   align-self: center;\r\n   position: relative;\r\n}\r\n   .bom-search-bar-box-tag input[type=\"search\"] {\r\n    border: none;\r\n    background: transparent;\r\n    margin: 0px 0 0 7px;\r\n    font-size: 13px;\r\n    color: inherit;\r\n    border-radius: inherit;\r\n    flex-grow: 1;\r\n    width: 13rem;\r\n    padding: 0px;\r\n}\r\n\r\n.tag-option-box{\r\n  display: none;\r\n  position: absolute;\r\n  top: 23px;\r\n  z-index: 6;\r\n  left: 0;\r\n  width: 13rem;\r\n  max-height: 9rem;\r\n  background-color: white;\r\n  border-radius: 2px;\r\n  border: 1px solid ;\r\n  padding: 2px;\r\n  overflow-y: auto;\r\n}\r\n.tag-option-box::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.tag-option-ul{\r\n  list-style: none ;\r\n  min-height: 1rem;\r\n  padding: 5px;\r\n  margin: 0px;\r\n  width: 100%;\r\n\r\n}\r\n.tag-option-ul li {\r\n  padding: 5px;\r\n  margin: 0px;\r\n  width: 100%; \r\n}\r\n.tags {\r\n  background-color: #FFC467;\r\n  padding: 3px;\r\n  font-size: 11px;\r\n  border-radius: 3px;\r\n  padding-inline: 0.3rem;\r\n  display: flex;\r\n}\r\n.selected-tags-close{\r\n  color: white;\r\n  width: 13px;\r\n  height: 16px;\r\n  margin-left: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.tags-container{\r\n  margin-top: 5px;\r\n  display: flex;\r\n  gap: .2rem;\r\n  flex-wrap: wrap;\r\n}\r\n.serch-box-parent{\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n.no-tags-option-li{\r\n  font-weight: 400;\r\n  opacity: .7;\r\n}", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,QAAQ;EACR,OAAO;EACP,uBAAuB;EACvB,kCAAkC;EAClC,6BAA6B;EAC7B,UAAU;EACV,gBAAgB;;AAElB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;;IAE9B;;IAEA;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,6BAA6B;QAC7B,iBAAiB;IACrB;AACJ;EACE,iBAAiB;EACjB,YAAY;EACZ,SAAS;EACT,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,uBAAuB;;AAEzB;AACA;IACI,YAAY;EACd,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,sBAAsB;AACxB,YAAY;AACZ,YAAY;EACV;EACA;IACE;EACF;;EAEA;IACE,WAAW;EACb;;EAEA;EACA,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,qBAAqB;EACrB;CACD;EACC,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,6BAA6B;EAC7B;EACA;IACE,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,eAAe;EACjB;EACA;EACA,gBAAgB;EAChB;EACA;IACE,wBAAwB;IACxB,eAAe;EACjB;EACA;IACE,6BAA6B;IAC7B,YAAY;;EAEd;EACA;IACE,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,wBAAwB;AAC5B;AACA;AACA,cAAc;;AAEd;AACA;EACE,mBAAmB;EACnB,iBAAiB;CAClB,kBAAkB;CAClB,WAAW;AACZ;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ;AACF;AACA;AACA,qBAAqB;AACrB;AACA;EACE,WAAW;EACX,gBAAgB;IACd,YAAY;IACZ,qBAAqB;;AAEzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;GACjB,uBAAuB;GACvB,kBAAkB;GAClB,kBAAkB;AACrB;GACG;IACC,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,OAAO;EACP,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,WAAW;;AAEb;AACA;EACE,YAAY;EACZ,WAAW;EACX,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":[".bom-addnew-material-container{\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 0px;\r\n  left: 0;\r\n  background-color: white;\r\n  min-height: -webkit-fill-available;\r\n  width: -webkit-fill-available;\r\n  z-index: 3;\r\n  margin-top: 40px;\r\n  \r\n}\r\n.bom-addnew-material-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    }\r\n    \r\n    .bom-addnew-material-container .bom-search-bar-box{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: -webkit-fill-available;\r\n        margin-top: .5rem;\r\n    }\r\n.search-box{\r\n  border: 1px solid;\r\n  padding: 2px;\r\n  margin: 0;\r\n  display: flex;\r\n  width: 13rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 3px;\r\n  background-color: white;\r\n    \r\n}\r\n.bom-search-bar-box input[type=\"search\"] {\r\n    border: none;\r\n  background: transparent;\r\n  margin: 0 0 0 10px;\r\n  font-size: 13px;\r\n  color: inherit;\r\n  border-radius: inherit;\r\nflex-grow: 1;\r\nwidth: 11rem;\r\n  }\r\n  input[type=\"search\"]:focus{\r\n    outline: none\r\n  }\r\n  \r\n  input[type=\"search\"]::placeholder {\r\n    color: #bbb;\r\n  }\r\n\r\n  .icon {\r\n  overflow: hidden;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: transparent ;\r\n  transform: scaleX(-1);\r\n  }\r\n .bom-addnew-material-container ul{\r\n  margin: 0 0 0 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  box-sizing: border-box;\r\n  max-height: 100%;\r\n  width: -webkit-fill-available;\r\n  }\r\n  .bom-addnew-material-container li {\r\n    margin-top: 5px;\r\n    padding: 4px;\r\n    height: 10px;\r\n    z-index: 4;\r\n  }\r\n  .material-list-li:hover{\r\n    background-color:#FFC467;\r\n    cursor: pointer;\r\n  }\r\n  .tag-option-li{\r\n  font-weight: 400;\r\n  }\r\n  .tag-option-li:hover{\r\n    background-color:#FFC467;\r\n    cursor: pointer;\r\n  }\r\n  .bom-addMaterial-pagination-box{\r\n    width: -webkit-fill-available;\r\n    height: 30px;\r\n\r\n  }\r\n  .bom-addMaterial-pagination-parent{\r\n    /* height:  */\r\n    width: -webkit-fill-available;\r\n    display: flex;\r\n    align-self: end;\r\n    position: relative;\r\n    background-color: bisque;\r\n}\r\n.close-btn:active{\r\ncolor: #FFC467;\r\n\r\n}\r\n.close-btn{\r\n  border-radius: 100%;\r\n  margin-top: .5rem;\r\n position: absolute;\r\n right:-2rem;\r\n}\r\n.bom-addMaterial-pagination-box{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.bom-addMaterial-pagination-box .pageNo{\r\n  border-radius: 100%;\r\n  border: 1px solid #383838;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 17px;\r\n  height: 17px;\r\n  font-size: xx-small\r\n}\r\n.bom-addMaterial-pagination-box .current-pageno{\r\nbackground-color:#fff;\r\n}\r\n.logo-img{\r\n  width: 16px;\r\n  margin-left: 5px;\r\n    height: 16px;\r\n    transform: scaleX(-1);\r\n  \r\n}\r\n\r\n.bom-search-bar-box-tag{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  width: -webkit-fill-available;\r\n  margin-top: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.material-list-li{\r\n  margin-inline: 1.5rem;\r\n  position: relative;\r\n}\r\n.search-box-tag{\r\n  border:1px solid;\r\n  padding:2px;\r\n  margin:0;\r\n  display: flex;\r\n  width: 13rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 3px;\r\n   background-color: white;\r\n   align-self: center;\r\n   position: relative;\r\n}\r\n   .bom-search-bar-box-tag input[type=\"search\"] {\r\n    border: none;\r\n    background: transparent;\r\n    margin: 0px 0 0 7px;\r\n    font-size: 13px;\r\n    color: inherit;\r\n    border-radius: inherit;\r\n    flex-grow: 1;\r\n    width: 13rem;\r\n    padding: 0px;\r\n}\r\n\r\n.tag-option-box{\r\n  display: none;\r\n  position: absolute;\r\n  top: 23px;\r\n  z-index: 6;\r\n  left: 0;\r\n  width: 13rem;\r\n  max-height: 9rem;\r\n  background-color: white;\r\n  border-radius: 2px;\r\n  border: 1px solid ;\r\n  padding: 2px;\r\n  overflow-y: auto;\r\n}\r\n.tag-option-box::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.tag-option-ul{\r\n  list-style: none ;\r\n  min-height: 1rem;\r\n  padding: 5px;\r\n  margin: 0px;\r\n  width: 100%;\r\n\r\n}\r\n.tag-option-ul li {\r\n  padding: 5px;\r\n  margin: 0px;\r\n  width: 100%; \r\n}\r\n.tags {\r\n  background-color: #FFC467;\r\n  padding: 3px;\r\n  font-size: 11px;\r\n  border-radius: 3px;\r\n  padding-inline: 0.3rem;\r\n  display: flex;\r\n}\r\n.selected-tags-close{\r\n  color: white;\r\n  width: 13px;\r\n  height: 16px;\r\n  margin-left: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.tags-container{\r\n  margin-top: 5px;\r\n  display: flex;\r\n  gap: .2rem;\r\n  flex-wrap: wrap;\r\n}\r\n.serch-box-parent{\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: relative;\r\n}\r\n.no-tags-option-li{\r\n  font-weight: 400;\r\n  opacity: .7;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/PopOver/PopOver.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/PopOver/PopOver.css ***!
  \*****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popover-main-box{\r\n    position: absolute;\r\n    background-color:bisque;\r\n    left: 36px;\r\n   max-width: 70%;\r\n    border-radius: 1rem;\r\n    bottom: 1.5rem;\r\n    padding-inline: .7rem;\r\n    border: .1px solid black;\r\n    z-index: 9999;\r\n    word-break: break-all;\r\n  }\r\n  .arrow-box{\r\n    position: absolute;\r\n    background-color: bisque;\r\n    border: .1px solid black;\r\n    border-top: 0;\r\n    padding: .7rem;\r\n    border-left: 0;\r\n    transform: skew(20deg, 20deg);\r\n    transform: rotate(45deg);\r\n    bottom: -12px;\r\n    left: 2rem;\r\n    font-weight: 400;\r\n\r\n  }", "",{"version":3,"sources":["webpack://./src/taskpane/commonComponents/Bom/PopOver/PopOver.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;GACX,cAAc;IACb,mBAAmB;IACnB,cAAc;IACd,qBAAqB;IACrB,wBAAwB;IACxB,aAAa;IACb,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,wBAAwB;IACxB,wBAAwB;IACxB,aAAa;IACb,cAAc;IACd,cAAc;IACd,6BAA6B;IAC7B,wBAAwB;IACxB,aAAa;IACb,UAAU;IACV,gBAAgB;;EAElB","sourcesContent":[".popover-main-box{\r\n    position: absolute;\r\n    background-color:bisque;\r\n    left: 36px;\r\n   max-width: 70%;\r\n    border-radius: 1rem;\r\n    bottom: 1.5rem;\r\n    padding-inline: .7rem;\r\n    border: .1px solid black;\r\n    z-index: 9999;\r\n    word-break: break-all;\r\n  }\r\n  .arrow-box{\r\n    position: absolute;\r\n    background-color: bisque;\r\n    border: .1px solid black;\r\n    border-top: 0;\r\n    padding: .7rem;\r\n    border-left: 0;\r\n    transform: skew(20deg, 20deg);\r\n    transform: rotate(45deg);\r\n    bottom: -12px;\r\n    left: 2rem;\r\n    font-weight: 400;\r\n\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css":
/*!*****************************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css ***!
  \*****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./AddNewMaterail.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/AddNewMaterail/AddNewMaterail.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AddNewMaterail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskpane/commonComponents/Bom/PopOver/PopOver.css":
/*!***************************************************************!*\
  !*** ./src/taskpane/commonComponents/Bom/PopOver/PopOver.css ***!
  \***************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PopOver_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./PopOver.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskpane/commonComponents/Bom/PopOver/PopOver.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PopOver_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_PopOver_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_PopOver_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_PopOver_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./assets/icons/close-icon.svg":
/*!*************************************!*\
  !*** ./assets/icons/close-icon.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/close-icon.svg";

/***/ }),

/***/ "./assets/icons/search-icon.svg":
/*!**************************************!*\
  !*** ./assets/icons/search-icon.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/search-icon.svg";

/***/ })

}]);
//# sourceMappingURL=src_taskpane_commonComponents_Bom_AddNewMaterail_AddNewMaterail_js.js.map