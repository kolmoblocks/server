(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KBserver; });
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
var isBrowser=typeof process==='object'?false:true;var KBserver=/*#__PURE__*/function(){function KBserver(){Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,KBserver);}Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(KBserver,[{key:"GetDataExpressionByCID",value:function(){var _GetDataExpressionByCID=Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cid){var jsondata,i,data,data_cids,j;return C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;jsondata={};if(!isBrowser){_context.next=8;break;}_context.next=5;return fetch(Object({"NODE_ENV":"production","PUBLIC_URL":""}).API_URL+'search?cid='+cid);case 5:jsondata=_context.sent;_context.next=9;break;case 8:jsondata=__webpack_require__(71);case 9:if(!(jsondata==null)){_context.next=13;break;}console.log("Fetching messed up.");_context.next=28;break;case 13:_context.t0=C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(jsondata);case 14:if((_context.t1=_context.t0()).done){_context.next=28;break;}i=_context.t1.value;data=jsondata[i];if(!data.hasOwnProperty("cids")){_context.next=26;break;}data_cids=data["cids"];_context.t2=C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(data_cids);case 20:if((_context.t3=_context.t2()).done){_context.next=26;break;}j=_context.t3.value;if(!(data_cids[j]==cid)){_context.next=24;break;}return _context.abrupt("return",Promise.resolve(data));case 24:_context.next=20;break;case 26:_context.next=14;break;case 28:_context.next=33;break;case 30:_context.prev=30;_context.t4=_context["catch"](0);console.log(_context.t4);case 33:console.log("Requested cid not found in fetched object, or something else went wrong");return _context.abrupt("return",Promise.resolve(null));case 35:case"end":return _context.stop();}}},_callee,this,[[0,30]]);}));function GetDataExpressionByCID(_x){return _GetDataExpressionByCID.apply(this,arguments);}return GetDataExpressionByCID;}()},{key:"GetRawDataByRef",value:function(){var _GetRawDataByRef=Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ref){var data;return C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;data=null;if(!isBrowser){_context2.next=8;break;}_context2.next=5;return fetch(Object({"NODE_ENV":"production","PUBLIC_URL":""}).API_URL+'raw/'+ref);case 5:data=_context2.sent;_context2.next=9;break;case 8:data=__webpack_require__(72)("./"+ref);case 9:return _context2.abrupt("return",Promise.resolve(new Uint8Array(data)));case 12:_context2.prev=12;_context2.t0=_context2["catch"](0);console.log(_context2.t0);case 15:console.log("Raw data is null. Something wrong happened.");return _context2.abrupt("return",null);case 17:case"end":return _context2.stop();}}},_callee2,this,[[0,12]]);}));function GetRawDataByRef(_x2){return _GetRawDataByRef.apply(this,arguments);}return GetRawDataByRef;}()}]);return KBserver;}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 71:
/***/ (function(module) {

module.exports = {"hellobanana":{"MIME":"utf8/text","size":11,"cids":{"SHA256":"7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C"},"data_expression1":{"exec":{"wasm":{"cid":"_wasm_concat_"},"arg1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"arg2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}},"data_expression2":{"seq":{"block1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"block2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}}},"hello":{"MIME":"utf8/text","size":5,"cids":{"SHA256":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"data_expression1":{"ref":"file1.txt"}},"banana":{"MIME":"utf8/text","size":6,"cids":{"SHA256":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"},"data_expression1":{"ref":"file2.txt"}},"wasm_concat":{"MIME":"wasm","size":10251,"cids":{"SHA256":"_wasm_concat_"},"data_expression1":{"ref":"buffers_concat.wasm"}}};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./file1.txt": 73,
	"./file2.txt": 74
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 72;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/file1.86c56c00.txt";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/file2.62ded210.txt";

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(16);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js + 2 modules
var BrowserRouter = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Link.js
var Link = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 2 modules
var Route = __webpack_require__(84);

// EXTERNAL MODULE: ./src/App.css
var src_App = __webpack_require__(46);

// CONCATENATED MODULE: ./src/components/Home.js
var Home_Home=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Home,_Component);function Home(){Object(classCallCheck["a" /* default */])(this,Home);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Home).apply(this,arguments));}Object(createClass["a" /* default */])(Home,[{key:"render",value:function render(){return react_default.a.createElement("div",null,"You are home now.");}}]);return Home;}(react["Component"]);/* harmony default export */ var components_Home = (Home_Home);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(31);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(32);

// EXTERNAL MODULE: ./src/proto/Server/KBserver.js
var KBserver = __webpack_require__(33);

// CONCATENATED MODULE: ./src/proto/BrowserScript/KBcache.js
var KBcache_KBcache=/*#__PURE__*/function(){function KBcache(){Object(classCallCheck["a" /* default */])(this,KBcache);this.KBserver=new KBserver["a" /* default */]();this.ref_cache=new Map();this.cid_cache=new Map();}Object(createClass["a" /* default */])(KBcache,[{key:"GetDataExpressionByCID",value:function GetDataExpressionByCID(cid){var cached_data=this.cid_cache.get(cid);if(null==cached_data){var server_data=this.KBserver.GetDataExpressionByCID(cid);if(null!=server_data){this.cid_cache.set(cid,server_data);return server_data;}}return cached_data;}},{key:"GetRawDataByRef",value:function GetRawDataByRef(ref){var cached_data=this.ref_cache.get(ref);if(null==cached_data){var server_data=this.KBserver.GetRawDataByRef(ref);if(null!=server_data){this.ref_cache.set(ref,server_data);return server_data;}}return cached_data;}},{key:"DataExpressionInCacheByCID",value:function DataExpressionInCacheByCID(cid){var cached_data=this.cid_cache.get(cid);if(null==cached_data)return false;else return true;}},{key:"RawDataInCacheByRef",value:function RawDataInCacheByRef(ref){var cached_data=this.ref_cache.get(ref);if(null==cached_data)return false;else return true;}}]);return KBcache;}();
// CONCATENATED MODULE: ./src/proto/BrowserScript/KBwasm.js
var KBwasm_KBWasm=/*#__PURE__*/function(){function KBWasm(raw_wasm,args){Object(classCallCheck["a" /* default */])(this,KBWasm);this.raw_wasm=raw_wasm;this.args=args;}Object(createClass["a" /* default */])(KBWasm,[{key:"Exec",value:function Exec(){// hard coded implementstion of concat buffers
var count=0;var result=new Array();for(var i in this.args){var arg=this.args[i];for(var j in arg){if(j=="MIME"||j=="size")continue;result.push(arg[j]);count++;}}result["MIME"]="utf8/text";result["size"]=count;return result;}}]);return KBWasm;}();
// CONCATENATED MODULE: ./src/proto/BrowserScript/KBstorage.js
var KBstorage_KBstorage=/*#__PURE__*/function(){function KBstorage(){Object(classCallCheck["a" /* default */])(this,KBstorage);// this.path = path;
console.log(KBcache_KBcache);this.cache=new KBcache_KBcache();}Object(createClass["a" /* default */])(KBstorage,[{key:"GetData",value:function GetData(data_expression){console.log(data_expression);try{return Promise.resolve(this.ExecExpression(data_expression));}catch(error){console.log('Error parsing expression to JSON:\n',error);}return Promise.resolve(null);}},{key:"ExecExpression",value:function ExecExpression(expression){if(expression.hasOwnProperty("cid"))return this._cid(expression);if(expression.hasOwnProperty("exec"))return this._exec(expression);if(expression.hasOwnProperty("ref"))return this._ref(expression);if(expression.hasOwnProperty("raw"))return this._raw(expression);if(expression.hasOwnProperty("seq"))return this._seq(expression);console.log("Not implemented for this type of expression");console.log(expression);return null;}},{key:"_cid",value:function _cid(expression){var data_by_cid=this.cache.GetDataExpressionByCID(expression["cid"]);var data_expressions=this.ExtractDataExpressions(data_by_cid);if(0==data_expressions.length){console.log("Empty expressions list for "+expression["cid"]);return null;}var exp_to_exec=this.ChooseExpression(data_expressions);return this.ExecExpression(exp_to_exec);}},{key:"_exec",value:function _exec(expression){var exec=expression["exec"];if(!exec.hasOwnProperty("wasm")){console.log("Expression exec does't contain wasm property");return null;}var wasm=this.ExecExpression(exec["wasm"]);if(null==wasm){console.log("Expression exec has empty wasm");return null;}var args=new Array();for(var index in exec){if("wasm"==index)continue;var arg=this.ExecExpression(exec[index]);if(null==arg){console.log("Expression exec has empty arg");return null;}args.push(arg);}var result=new KBwasm_KBWasm(wasm,args).Exec();if(null==result){console.log("Wasm execution result is empty");return null;}return result;}},{key:"_ref",value:function _ref(expression){var ref=expression["ref"];var result=this.cache.GetRawDataByRef(ref);if(null==result){console.log("Expression ref is empty");return null;}result["MIME"]=expression["MIME"];result["size"]=expression["size"];return result;}},{key:"_raw",value:function _raw(expression){var raw=expression["raw"];var utf8str=String(raw);// <-- utf8 string
var result=new Array();for(var i=0;i<utf8str.length;i++){var charcode=utf8str.charCodeAt(i);result.push(charcode);// ????
}return result;}},{key:"_seq",value:function _seq(expression){var result=new Array();var seq=expression["seq"];var MIME=expression["MIME"];var size=expression["size"];for(var index in seq){var _expression=seq[index];var data_block=this.ExecExpression(_expression);if(null==data_block){console.log("Empty data in sequences");return null;}for(var i in data_block){result.push(data_block[i]);}}result["MIME"]=MIME;result["size"]=size;return result;}},{key:"ExtractDataExpressions",value:function ExtractDataExpressions(data_by_cid){var result=new Array();var MIME=data_by_cid["MIME"];var size=data_by_cid["size"];for(var index in data_by_cid){if("cids"==index||"MIME"==index||"size"==index)continue;var expression=data_by_cid[index];expression["MIME"]=MIME;expression["size"]=size;if(expression.hasOwnProperty("exec")){result.push(expression);continue;}if(expression.hasOwnProperty("ref")){result.push(expression);continue;}if(expression.hasOwnProperty("raw")){result.push(expression);continue;}if(expression.hasOwnProperty("cid")){result.push(expression);continue;}if(expression.hasOwnProperty("seq")){result.push(expression);continue;}}return result;}},{key:"ChooseExpression",value:function ChooseExpression(data_expressions){// now it's always first
return data_expressions[0];}},{key:"GetDataExpressionByCID",value:function GetDataExpressionByCID(cid){return this.cache.GetDataExpressionByCID(cid);}},{key:"ParseExpression",value:function ParseExpression(exp){try{var expression=JSON.parse(exp);var result=new Object();if(expression.hasOwnProperty("cid")){var data_by_cid=this.cache.GetDataExpressionByCID(expression["cid"]);var data_expressions=this.ExtractDataExpressions(data_by_cid);Object.keys(data_by_cid).forEach(function(key){if(key.substr(0,15)!="data_expression"){result[key]=data_by_cid[key];console.log(key);}console.log(key);});console.log(result);result['data_expressions']=data_expressions;}if(expression.hasOwnProperty("exec")){var exec=expression["exec"];for(var i in exec){result.push(exec[i]);}}if(expression.hasOwnProperty("ref")){//let ref = expression["ref"];
//result.push(ref);
}if(expression.hasOwnProperty("raw")){var raw=expression["raw"];result.push(raw);}if(expression.hasOwnProperty("seq")){var seq=expression["seq"];for(var i in seq){result.push(seq[i]);}}return result;}catch(error){console.log(error);return null;}}},{key:"ExpressionInCache",value:function ExpressionInCache(expression){try{if(expression.hasOwnProperty("ref"))return this.cache.RawDataInCacheByRef(expression["ref"]);if(expression.hasOwnProperty("cid"))return this.cache.DataExpressionInCacheByCID(expression["cid"]);}catch(error){return false;}return false;}}]);return KBstorage;}();
// CONCATENATED MODULE: ./src/store.js
var KBStore=new KBstorage_KBstorage();var cacheProxy={"byCid":Object(defineProperty["a" /* default */])({"7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C":{cached:false,data:null},"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824":{cached:false,data:null},"_wasm_concat_":{cached:false,data:null},"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E":{cached:false,data:null}},"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E",{cached:false,data:null}),"byRef":{"file1.txt":{cached:false,data:null},"file2.txt":{cached:false,data:null}}};var lib={"hellobanana":{"MIME":"utf8/text","size":11,"cids":{"SHA256":"7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C"},"data_expressions":[{"exec":{"wasm":{"cid":"_wasm_concat_"},"arg1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"arg2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}},{"seq":{"block1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"block2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}}]},"hello":{"MIME":"utf8/text","size":5,"cids":{"SHA256":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"data_expressions":[{"ref":"file1.txt"}]},"banana":{"MIME":"utf8/text","size":6,"cids":{"SHA256":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"},"data_expressions":[{"ref":"file2.txt"}]},"wasm_concat":{"MIME":"wasm","size":10251,"cids":{"SHA256":"_wasm_concat_"},"data_expressions":[{"ref":"buffers_concat.wasm"}]}};function ExpressionInCache(expr){if(expr.hasOwnProperty('ref')){return cacheProxy.byRef[expr['ref']].cached;}else if(expr.hasOwnProperty('cid')){return cacheProxy.byCid[expr['cid']].cached;}else if(expr.hasOwnProperty('cids')){return cacheProxy.byCid[expr['cids']['SHA256']].cached;}console.log("I'm not supposed to be here");}function GetAndCacheExpr(_x){return _GetAndCacheExpr.apply(this,arguments);}function _GetAndCacheExpr(){_GetAndCacheExpr=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(expr){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!expr.hasOwnProperty('ref')){_context.next=5;break;}cacheProxy.byRef[expr['ref']].cached=true;cacheProxy.byRef[expr['ref']].data=GetRawDataByRef(expr['ref']);_context.next=14;break;case 5:if(!expr.hasOwnProperty('cid')){_context.next=14;break;}_context.t0=GenerateData;_context.next=9;return GetDataExpressionByCID(expr['cid']);case 9:_context.t1=_context.sent;_context.next=12;return(0,_context.t0)(_context.t1);case 12:_context.t2=_context.sent;cacheProxy.byCid[expr['cid']]={cached:true,data:_context.t2};case 14:case"end":return _context.stop();}}},_callee,this);}));return _GetAndCacheExpr.apply(this,arguments);}function GetDataExpressionByCID(_x2){return _GetDataExpressionByCID.apply(this,arguments);}function _GetDataExpressionByCID(){_GetDataExpressionByCID=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(cid){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(cid=="7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C")){_context2.next=4;break;}return _context2.abrupt("return",lib['hellobanana']);case 4:if(!(cid=="2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824")){_context2.next=8;break;}return _context2.abrupt("return",lib['hello']);case 8:if(!(cid=="B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E")){_context2.next=12;break;}return _context2.abrupt("return",lib['banana']);case 12:if(!(cid=="_wasm_concat_")){_context2.next=16;break;}return _context2.abrupt("return",lib['wasm_concat']);case 16:console.log("I'm not handling this one :/");console.log(cid);case 18:case"end":return _context2.stop();}}},_callee2,this);}));return _GetDataExpressionByCID.apply(this,arguments);}function GetRawDataByRef(ref){if(ref==='file1.txt')return"hello";else if(ref==='file2.txt')return"banana";else{return"invalid ref";}}function GenerateData(_x3){return _GenerateData.apply(this,arguments);}function _GenerateData(){_GenerateData=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(expr){return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!(expr==lib['hellobanana'])){_context3.next=5;break;}console.log("here!");return _context3.abrupt("return","hellobanana");case 5:if(!(expr==lib['hello'])){_context3.next=9;break;}return _context3.abrupt("return","hello");case 9:if(!(expr==lib['banana'])){_context3.next=11;break;}return _context3.abrupt("return","banana");case 11:case"end":return _context3.stop();}}},_callee3,this);}));return _GenerateData.apply(this,arguments);};function Execute(expr){//return new Uint8Array(await KBStore.ExecExpression(expr));
if(JSON.stringify(expr)===JSON.stringify(lib['hellobanana']['data_expressions'][0])||JSON.stringify(expr)===JSON.stringify(lib['hellobanana']['data_expressions'][1])){return"hellobanana";}else if(expr==lib['hello']['data_expressions'][0])return"hello";else if(expr==lib['banana']['data_expressions'][0])return"banana";else if(expr==lib['wasm_concat']['data_expressions'][0])return"___WASM_FILE___";console.log("something went wrong",expr);}function lookupBlock(_x4){return _lookupBlock.apply(this,arguments);}function _lookupBlock(){_lookupBlock=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(dum){return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",null);case 1:case"end":return _context4.stop();}}},_callee4,this);}));return _lookupBlock.apply(this,arguments);}function loadBlock(_x5){return _loadBlock.apply(this,arguments);}// export function renderBlock(cid, kb, target) {
//     var manifest = this.blocks[cid]['kolmoblocks'][kb];
//     loadKolmoblock(manifest, $(target));
// };
function _loadBlock(){_loadBlock=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(dum){return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:return _context5.abrupt("return",null);case 1:case"end":return _context5.stop();}}},_callee5,this);}));return _loadBlock.apply(this,arguments);}
// CONCATENATED MODULE: ./src/components/File.js
var File_File=function File(props){var selected=props.selected,renderSelected=props.renderSelected;console.log(renderSelected);return react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"card"},react_default.a.createElement("div",{id:"file-options",className:"card-body"},react_default.a.createElement("pre",{className:"card-text text-left"},JSON.stringify(selected,null,2)),selected['kolmoblocks']?keys_default()(selected['kolmoblocks']).map(function(recipe,i){return react_default.a.createElement("button",{type:"button",className:"btn btn-success m-1",onClick:function onClick(){return renderSelected(selected['kolmoblocks'][recipe]);}},"Render w/ Recipe ",i);}):react_default.a.createElement("button",{type:"button",className:"btn btn-warning"},"No Recipes"))));};/* harmony default export */ var components_File = (File_File);
// CONCATENATED MODULE: ./src/components/Render.js
function _templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 400px;\n"]);_templateObject=function _templateObject(){return data;};return data;}var TreeWrapper=styled_components_browser_esm["a" /* default */].div(_templateObject());var Render_Render=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Render,_Component);function Render(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,Render);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(Render)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={selected:null,rendered:null};_this.onSelect=function(file){_this.setState({selected:file});};_this.renderSelected=function(recipe){console.log(recipe);loadBlock(recipe).then(function(data){var decoded=new TextDecoder("utf-8").decode(data);console.log(decoded);_this.setState({rendered:decoded},function(){console.log("state set");});});};return _this;}Object(createClass["a" /* default */])(Render,[{key:"render",value:function render(){var _this$state=this.state,selected=_this$state.selected,rendered=_this$state.rendered;return react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-12"},react_default.a.createElement("div",{id:"rendered-content",className:"jumbotron"},rendered?rendered:react_default.a.createElement("h3",null,"Rendered content will appear here")))),react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-12 col-md-5"},react_default.a.createElement(TreeWrapper,null)),react_default.a.createElement("div",{className:"col-12 col-md-7"},selected&&selected.type==='node'?react_default.a.createElement(components_File,{renderSelected:this.renderSelected,selected:selected}):react_default.a.createElement("h5",null,"Select a file to view options"))));}}]);return Render;}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/react-icons/md/index.mjs + 2 modules
var md = __webpack_require__(13);

// CONCATENATED MODULE: ./src/components/DataExpr.js
function DataExpr_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    float: right;\n"]);DataExpr_templateObject=function _templateObject(){return data;};return data;}// possible failure in either
var FitToParent=styled_components_browser_esm["a" /* default */].div(DataExpr_templateObject());var floatLeft={float:'left'};var floatRight={float:'right',maxWidth:'55%'};var floatLeftCenter={position:'absolute',left:'30%',right:'70%'};var DataExpr_DataExpr=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(DataExpr,_Component);function DataExpr(props){var _this;Object(classCallCheck["a" /* default */])(this,DataExpr);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DataExpr).call(this,props));_this.state={executionRes:null,oldExpr:props.dataExpr};_this.onSelectExpr=_this.onSelectExpr.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.allDepsInCache=_this.allDepsInCache.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(DataExpr,[{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.props.dataExpr!=this.state.oldExpr){this.setState({executionRes:null,oldExpr:this.props.dataExpr});}}},{key:"allDepsInCache",value:function allDepsInCache(){var _this2=this;var type=Object.keys(this.props.dataExpr)[0];var stat=true;Object.keys(this.props.dataExpr[type]).forEach(function(key,index){var obj=JSON.parse(JSON.stringify(_this2.props.dataExpr[type][key]));if(!ExpressionInCache(obj)){stat=false;}});return stat;}},{key:"cacheExpression",value:function(){var _cacheExpression=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(expr){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return GetAndCacheExpr(expr);case 2:this.forceUpdate();case 3:case"end":return _context.stop();}}},_callee,this);}));function cacheExpression(_x){return _cacheExpression.apply(this,arguments);}return cacheExpression;}()},{key:"onSelectExpr",value:function(){var _onSelectExpr=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(dataExpr){var response;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:// when and expression is executed, call the api and set the new state
response={};if(!this.allDepsInCache()){_context2.next=8;break;}_context2.next=4;return this.props.onExecuteExpr(dataExpr);case 4:response['content']='Successfully executed expression!';response['status']='success';_context2.next=10;break;case 8:response['status']='danger';response['content']='Dependencies must all be in cache!';case 10:console.log("here!",response);this.setState({executionRes:response});case 12:case"end":return _context2.stop();}}},_callee2,this);}));function onSelectExpr(_x2){return _onSelectExpr.apply(this,arguments);}return onSelectExpr;}()},{key:"render",value:function render(){var _this3=this;var _this$props=this.props,dataExpr=_this$props.dataExpr,onChangeCurExpr=_this$props.onChangeCurExpr;var type=Object.keys(dataExpr)[0];return react_default.a.createElement("div",{className:"card mt-3"},react_default.a.createElement("div",{className:"card-header"},react_default.a.createElement("span",{style:floatLeft},"Expression Type: ",JSON.stringify(type)),react_default.a.createElement("a",{className:"ml-2",style:floatLeft,href:"#",onClick:function onClick(){return _this3.onSelectExpr(dataExpr);}},react_default.a.createElement(md["e" /* MdPlayArrow */],null))),react_default.a.createElement("div",{className:"card-body"},react_default.a.createElement("ul",{className:"list-group list-group-flush"},dataExpr['ref']?dataExpr['ref']:Object.keys(dataExpr[type]).map(function(key,index){return react_default.a.createElement("li",{className:"list-group-item"},react_default.a.createElement("div",{style:floatLeft},JSON.stringify(key)),react_default.a.createElement("div",{style:floatLeftCenter},"="),react_default.a.createElement("a",{className:"ml-2",href:"#",style:floatRight,onClick:function onClick(){return _this3.cacheExpression(dataExpr[type][key]);}},ExpressionInCache(dataExpr[type][key])?react_default.a.createElement(md["b" /* MdCloudDone */],null):react_default.a.createElement(md["c" /* MdCloudDownload */],null)),react_default.a.createElement("a",{href:"#",onClick:function onClick(){return onChangeCurExpr(dataExpr[type][key]['cid']);},style:floatRight},react_default.a.createElement(FitToParent,null,dataExpr[type][key]['cid'])));}))),this.state.executionRes?react_default.a.createElement("div",{className:"card-footer bg-"+this.state.executionRes.status},react_default.a.createElement("div",{className:"card-text text-light"},this.state.executionRes.content)):"");}}]);return DataExpr;}(react["Component"]);
// CONCATENATED MODULE: ./src/components/DataView.js
// possible failure in either
var DataView_floatLeft={float:'left'};var DataView_floatRight={float:'right'};var floatCenter={position:'absolute',left:'50%',right:'50%'};var DataView_DataView=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(DataView,_Component);function DataView(props){Object(classCallCheck["a" /* default */])(this,DataView);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DataView).call(this,props));}Object(createClass["a" /* default */])(DataView,[{key:"render",value:function render(){var _this=this;var _this$props=this.props,expr=_this$props.expr,onChangeCurExpr=_this$props.onChangeCurExpr;return react_default.a.createElement("div",{className:"card-body"},react_default.a.createElement("ul",{className:"list-group list-group-flush"},Object.keys(expr).map(function(key,index){return key=="cids"||key=="data_expressions"?"":react_default.a.createElement("li",{class:"list-group-item"},react_default.a.createElement("div",{style:DataView_floatLeft},JSON.stringify(key)),react_default.a.createElement("div",{style:floatCenter},"="),react_default.a.createElement("div",{style:DataView_floatRight},expr[key]));})),expr['data_expressions'].map(function(dataExpr){return react_default.a.createElement(DataExpr_DataExpr,{dataExpr:dataExpr,onExecuteExpr:_this.props.onExecuteExpr,onChangeCurExpr:onChangeCurExpr});}));}}]);return DataView;}(react["Component"]);
// CONCATENATED MODULE: ./src/components/DataController.js
function DataController_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    float: right;\n"]);DataController_templateObject=function _templateObject(){return data;};return data;}// possible failure in either
var DataController_FitToParent=styled_components_browser_esm["a" /* default */].div(DataController_templateObject());var constrainWidth={maxWidth:'100%'};var DataController_DataController=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(DataController,_Component);function DataController(props){var _this;Object(classCallCheck["a" /* default */])(this,DataController);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DataController).call(this,props));// set default state and expression stack
_this.state={curIndex:0,dataExprStack:[],cached:null};_this.state.dataExprStack.push(props.rootExpr);_this.onChangeCurExpr=_this.onChangeCurExpr.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onClickBack=_this.onClickBack.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.getRootExpr=_this.getRootExpr.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.flushDataExprs=_this.flushDataExprs.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onExecuteExpr=_this.onExecuteExpr.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(DataController,[{key:"getRootExpr",value:function getRootExpr(){return this.state.dataExprStack[0];}},{key:"getCurExpr",value:function getCurExpr(){return this.state.dataExprStack[this.state.curIndex];}},{key:"flushDataExprs",value:function flushDataExprs(){// clears stack above current element selected
if(this.state.dataExprStack.length<=this.state.curIndex){throw"Something went wrong. curIndex is out of range.";}var newStack=Object(toConsumableArray["a" /* default */])(this.state.dataExprStack);newStack.splice(this.state.curIndex+1);this.setState({dataExprStack:newStack});}},{key:"onChangeCurExpr",value:function(){var _onChangeCurExpr=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(cid){var newExpr;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return GetDataExpressionByCID(cid);case 2:newExpr=_context.sent;this.setState({dataExprStack:this.state.dataExprStack.concat([newExpr]),curIndex:this.state.curIndex+1});case 4:case"end":return _context.stop();}}},_callee,this);}));function onChangeCurExpr(_x){return _onChangeCurExpr.apply(this,arguments);}return onChangeCurExpr;}()},{key:"onClickBack",value:function onClickBack(){// decrement current index
if(this.state.curIndex>0){this.setState({curIndex:this.state.curIndex-1});}}},{key:"onExecuteExpr",value:function onExecuteExpr(expr){var executed=Execute(expr);this.setState({cached:executed});}},{key:"render",value:function render(){var _this2=this;var curExpr=this.getCurExpr();var rootExpr=this.getRootExpr();return react_default.a.createElement("div",{id:"dataController",className:"card"},react_default.a.createElement("div",{className:"card-header"},react_default.a.createElement("div",{className:"nav nav-pills card-header-pills"},react_default.a.createElement("li",{className:"nav-item"},react_default.a.createElement("a",{className:curExpr==rootExpr?"nav-link disabled":"nav-link",href:"#","aria-disabled":curExpr==rootExpr?"true":"false",onClick:function onClick(){return _this2.onClickBack();}},"Back")),react_default.a.createElement("li",{className:"nav-item"},react_default.a.createElement("a",{className:"nav-link",href:"#"},ExpressionInCache(curExpr)?react_default.a.createElement(md["b" /* MdCloudDone */],null):react_default.a.createElement(md["c" /* MdCloudDownload */],null))),react_default.a.createElement("li",{className:"nav-item"},react_default.a.createElement("a",{className:"nav-link",href:"#",onClick:function onClick(){return _this2.flushDataExprs();}},this.state.curIndex==this.state.dataExprStack.length-1?react_default.a.createElement(md["a" /* MdCheck */],null):react_default.a.createElement(md["d" /* MdLayersClear */],null))),react_default.a.createElement("li",{className:"nav-link",style:constrainWidth},react_default.a.createElement(DataController_FitToParent,null,curExpr['cids']['SHA256'])))),this.state.cached?react_default.a.createElement("div",{class:"card mt-3 ml-3 mr-3"},react_default.a.createElement("div",{class:"card-body"},react_default.a.createElement("div",{class:"card-text"},this.state.cached))):"",react_default.a.createElement(DataView_DataView,{onExecuteExpr:this.onExecuteExpr,onChangeCurExpr:this.onChangeCurExpr,expr:curExpr}));}}]);return DataController;}(react["Component"]);
// CONCATENATED MODULE: ./src/components/Demo.js
var Demo_Demo=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Demo,_Component);function Demo(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,Demo);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(Demo)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={rootExpr:{"MIME":"utf8/text","size":11,"cids":{"SHA256":"7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C"},"data_expressions":[{"exec":{"wasm":{"cid":"_wasm_concat_"},"arg1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"arg2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}},{"seq":{"block1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"block2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}}]}};return _this;}Object(createClass["a" /* default */])(Demo,[{key:"render",value:function render(){return react_default.a.createElement("div",{className:"container-fluid"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-6"},react_default.a.createElement(DataController_DataController,{rootExpr:this.state.rootExpr}))));}}]);return Demo;}(react["Component"]);/* harmony default export */ var components_Demo = (Demo_Demo);
// CONCATENATED MODULE: ./src/App.js
var App_App=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(App,_Component);function App(){Object(classCallCheck["a" /* default */])(this,App);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(App).apply(this,arguments));}Object(createClass["a" /* default */])(App,[{key:"render",value:function render(){return react_default.a.createElement("div",{className:"App p-3"},react_default.a.createElement("header",{className:"App-header"},react_default.a.createElement("h1",null,"KolmoBlocks")),react_default.a.createElement(BrowserRouter["a" /* default */],null,react_default.a.createElement("div",null,react_default.a.createElement("div",{className:"align-items-center p-2"},react_default.a.createElement(Link["a" /* default */],{to:"/",className:"btn"},"Home"),react_default.a.createElement(Link["a" /* default */],{to:"/demo",className:"btn"},"Demo"),react_default.a.createElement(Link["a" /* default */],{to:"/render",className:"btn"},"Render")),react_default.a.createElement(Route["a" /* default */],{exact:true,path:"/",component:components_Home}),react_default.a.createElement(Route["a" /* default */],{path:"/demo",component:components_Demo}),react_default.a.createElement(Route["a" /* default */],{path:"/render",component:Render_Render}))));}}]);return App;}(react["Component"]);/* harmony default export */ var src_App_0 = (App_App);
// CONCATENATED MODULE: ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit http://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See http://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// CONCATENATED MODULE: ./src/index.js
// HORRIBLE, but works for now..
// Will soon update with caching instead of variables
// this.blocks = {
//     _root: this,
//     _label: 'blocks'
// };
react_dom_default.a.render(react_default.a.createElement(src_App_0,null),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();

/***/ })

},[[39,2,1]]]);
//# sourceMappingURL=main.4d37f7c7.chunk.js.map