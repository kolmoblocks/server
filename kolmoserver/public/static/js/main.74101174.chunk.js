(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KBserver; });
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
var isBrowser=typeof process==='object'?false:true;var KBserver=/*#__PURE__*/function(){function KBserver(){Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,KBserver);}Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(KBserver,[{key:"GetDataExpressionByCID",value:function(){var _GetDataExpressionByCID=Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cid){var jsondata,i,data,data_cids,j;return C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;jsondata={};if(!isBrowser){_context.next=8;break;}_context.next=5;return fetch(Object({"NODE_ENV":"production","PUBLIC_URL":""}).API_URL+'search?cid='+cid);case 5:jsondata=_context.sent;_context.next=9;break;case 8:jsondata=__webpack_require__(79);case 9:if(!(jsondata==null)){_context.next=13;break;}console.log("Fetching messed up.");_context.next=28;break;case 13:_context.t0=C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(jsondata);case 14:if((_context.t1=_context.t0()).done){_context.next=28;break;}i=_context.t1.value;data=jsondata[i];if(!data.hasOwnProperty("cids")){_context.next=26;break;}data_cids=data["cids"];_context.t2=C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(data_cids);case 20:if((_context.t3=_context.t2()).done){_context.next=26;break;}j=_context.t3.value;if(!(data_cids[j]==cid)){_context.next=24;break;}return _context.abrupt("return",Promise.resolve(data));case 24:_context.next=20;break;case 26:_context.next=14;break;case 28:_context.next=33;break;case 30:_context.prev=30;_context.t4=_context["catch"](0);console.log(_context.t4);case 33:console.log("Requested cid not found in fetched object, or something else went wrong");return _context.abrupt("return",Promise.resolve(null));case 35:case"end":return _context.stop();}}},_callee,this,[[0,30]]);}));function GetDataExpressionByCID(_x){return _GetDataExpressionByCID.apply(this,arguments);}return GetDataExpressionByCID;}()},{key:"GetRawDataByRef",value:function(){var _GetRawDataByRef=Object(C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(/*#__PURE__*/C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ref){var data;return C_Users_Samuel_Dev_kolmojs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:data=null;_context2.prev=1;if(!isBrowser){_context2.next=8;break;}_context2.next=5;return fetch(Object({"NODE_ENV":"production","PUBLIC_URL":""}).API_URL+'raw/'+ref);case 5:data=_context2.sent;_context2.next=9;break;case 8:data=__webpack_require__(80)("./"+ref);case 9:return _context2.abrupt("return",Promise.resolve(new Uint8Array(data)));case 12:_context2.prev=12;_context2.t0=_context2["catch"](1);console.log(_context2.t0);case 15:console.log("Raw data is null. Something wrong happened.");return _context2.abrupt("return",Promise.resolve(data));case 17:case"end":return _context2.stop();}}},_callee2,this,[[1,12]]);}));function GetRawDataByRef(_x2){return _GetRawDataByRef.apply(this,arguments);}return GetRawDataByRef;}()}]);return KBserver;}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 79:
/***/ (function(module) {

module.exports = {"hellobanana":{"MIME":"utf8/text","size":11,"cids":{"SHA256":"7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C"},"data_expression1":{"exec":{"wasm":{"cid":"_wasm_concat_"},"arg1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"arg2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}},"data_expression2":{"seq":{"block1":{"cid":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"block2":{"cid":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"}}}},"hello":{"MIME":"utf8/text","size":5,"cids":{"SHA256":"2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"},"data_expression1":{"ref":"file1.txt"}},"banana":{"MIME":"utf8/text","size":6,"cids":{"SHA256":"B493D48364AFE44D11C0165CF470A4164D1E2609911EF998BE868D46ADE3DE4E"},"data_expression1":{"ref":"file2.txt"}},"wasm_concat":{"MIME":"wasm","size":10251,"cids":{"SHA256":"_wasm_concat_"},"data_expression1":{"ref":"buffers_concat.wasm"}}};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./file1.txt": 81,
	"./file2.txt": 82
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
webpackContext.id = 80;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/file1.86c56c00.txt";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/file2.62ded210.txt";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(18);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js + 2 modules
var BrowserRouter = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Link.js
var Link = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js + 2 modules
var Route = __webpack_require__(88);

// EXTERNAL MODULE: ./src/App.css
var src_App = __webpack_require__(48);

// CONCATENATED MODULE: ./src/components/Home.js
var Home_Home=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Home,_Component);function Home(){Object(classCallCheck["a" /* default */])(this,Home);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Home).apply(this,arguments));}Object(createClass["a" /* default */])(Home,[{key:"render",value:function render(){return react_default.a.createElement("div",null,"You are home now.");}}]);return Home;}(react["Component"]);/* harmony default export */ var components_Home = (Home_Home);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/lodash/values.js
var values = __webpack_require__(35);
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs
var fa = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(17);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./src/components/TreeNode.js
function _templateObject3(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  float: right;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  font-size: 12px;\n  margin-right: ","px;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px 8px;\n  padding-left: ","px;\n  &:hover {\n    background: lightgray;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var getPaddingLeft=function getPaddingLeft(level,type){var paddingLeft=level*20;if(type==='file')paddingLeft+=20;return paddingLeft;};var StyledTreeNode=styled_components_browser_esm["a" /* default */].div(_templateObject(),function(props){return getPaddingLeft(props.level,props.type);});var NodeIcon=styled_components_browser_esm["a" /* default */].div(_templateObject2(),function(props){return props.marginRight?props.marginRight:5;});var NodeProp=styled_components_browser_esm["a" /* default */].div(_templateObject3());var TreeNode_TreeNode=function TreeNode(props){var node=props.node,getChildNodes=props.getChildNodes,level=props.level,onToggle=props.onToggle,onNodeSelect=props.onNodeSelect,loc=props.loc;var cNodes=getChildNodes(loc);//console.log(cNodes);
if(cNodes['type']=='property'){console.log(node);}return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(StyledTreeNode,{level:level,type:node.type},react_default.a.createElement(NodeIcon,{onClick:function onClick(){return onToggle(node);}},node.type=='node'&&(node.isOpen?react_default.a.createElement(fa["a" /* FaChevronDown */],null):react_default.a.createElement(fa["b" /* FaChevronRight */],null))),react_default.a.createElement(NodeIcon,{marginRight:10},node.type==='property'&&react_default.a.createElement(fa["c" /* FaFile */],null),node.type==='node'&&node.isOpen===true&&react_default.a.createElement(fa["e" /* FaFolderOpen */],null),node.type==='node'&&!node.isOpen&&react_default.a.createElement(fa["d" /* FaFolder */],null)),react_default.a.createElement("span",{role:"button",onClick:function onClick(){return onNodeSelect(node);}},loc),react_default.a.createElement(NodeProp,null,node.type==='property'?" = "+node.val:'')),node.isOpen&&keys_default()(node).map(function(nkey){return react_default.a.createElement(TreeNode,{getChildNodes:getChildNodes,onNodeSelect:onNodeSelect,onToggle:onToggle,node:cNodes[nkey],level:level+1,loc:nkey});})/*work needed here to complete kolmoblock recipe display logic!!! */);};TreeNode_TreeNode.defaultProps={level:0};/* harmony default export */ var components_TreeNode = (TreeNode_TreeNode);
// EXTERNAL MODULE: ./src/proto/Server/KBserver.js
var KBserver = __webpack_require__(38);

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
var KBStore=new KBstorage_KBstorage();console.log(KBStore);function ExpressionInCache(expr){return KBStore.ExpressionInCache(expr);}function ParseExpression(_x){return _ParseExpression.apply(this,arguments);}function _ParseExpression(){_ParseExpression=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(expr){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return KBStore.ParseExpression(expr);case 2:return _context.abrupt("return",_context.sent);case 3:case"end":return _context.stop();}}},_callee,this);}));return _ParseExpression.apply(this,arguments);}function GetData(_x2){return _GetData.apply(this,arguments);}function _GetData(){_GetData=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(expr){return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return KBStore.GetData(expr);case 2:return _context2.abrupt("return",_context2.sent);case 3:case"end":return _context2.stop();}}},_callee2,this);}));return _GetData.apply(this,arguments);};function loadBlock(_x3){return _loadBlock.apply(this,arguments);}function _loadBlock(){_loadBlock=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(manifest){var wasm_response,buffer,huffmanTableResponse,huffmanTableRaw,huffmanTable,datablockResponse,datablockRaw,datablock,module,instance,mm,huffmanOffset,strBuf,i,encodedDataOffset,encodedDataBuf,_i,memory,offset,size,outBuf;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return fetch('/raw/'+manifest['wasm_id']);case 2:wasm_response=_context3.sent;_context3.next=5;return wasm_response.arrayBuffer();case 5:buffer=_context3.sent;_context3.next=8;return fetch('/raw/'+manifest["encoding_table_id"]);case 8:huffmanTableResponse=_context3.sent;_context3.next=11;return huffmanTableResponse.arrayBuffer();case 11:huffmanTableRaw=_context3.sent;huffmanTable=new Uint8Array(huffmanTableRaw,0,huffmanTableRaw.byteLength);console.log("serialized huffman-table size:",huffmanTableRaw.byteLength);_context3.next=16;return fetch('/raw/'+manifest["encoded_data"]);case 16:datablockResponse=_context3.sent;_context3.next=19;return datablockResponse.arrayBuffer();case 19:datablockRaw=_context3.sent;datablock=new Uint8Array(datablockRaw,0,datablockRaw.byteLength);console.log("serialized encoded data size:",datablockRaw.byteLength);_context3.next=24;return WebAssembly.compile(buffer);case 24:module=_context3.sent;_context3.next=27;return WebAssembly.instantiate(module,{env:{consoleLog:function consoleLog(num){return console.log("value is: ",num);},consoleLevelLog:function consoleLevelLog(num){return console.log("level is:",num);},consoleRightmostLog:function consoleRightmostLog(num){return console.log("rightmost is:",num);}}});case 27:instance=_context3.sent;mm=instance.exports;huffmanOffset=mm.getHuffmanOffset();strBuf=new Uint8Array(mm.memory.buffer,huffmanOffset,huffmanTable.length);for(i=0;i<huffmanTable.length;i++){strBuf[i]=huffmanTable[i];}encodedDataOffset=mm.get_encoded_data_offset();console.log("the size of the encoded data is:",datablock.byteLength);console.log("the offset for encoded data is:",encodedDataOffset);mm.set_encoded_data_size(datablock.byteLength);encodedDataBuf=new Uint8Array(mm.memory.buffer,encodedDataOffset,datablock.byteLength);for(_i=0;_i<datablock.byteLength;_i++){encodedDataBuf[_i]=datablock[_i];}mm.decodeHuffman();memory=mm.memory;offset=mm.get_decoded_data_offset();size=mm.get_decoded_data_size();outBuf=new Uint8Array(memory.buffer,offset,size);return _context3.abrupt("return",outBuf);case 44:case"end":return _context3.stop();}}},_callee3,this);}));return _loadBlock.apply(this,arguments);}function lookupBlock(){return _lookupBlock.apply(this,arguments);}function _lookupBlock(){_lookupBlock=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var cid,theUrl,_args4=arguments;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:cid=_args4.length>0&&_args4[0]!==undefined?_args4[0]:'';theUrl=cid===''?'/search':'/search?cid=';return _context4.abrupt("return",Promise.all([fetch('http://'+window.location.host+theUrl,{headers:{'Content-Type':'application/json','Accept':'application/json'}}).then(function(response){return response.json();})// response format is fucked up - fix it!
]));case 3:case"end":return _context4.stop();}}},_callee4,this);}));return _lookupBlock.apply(this,arguments);};// export function renderBlock(cid, kb, target) {
//     var manifest = this.blocks[cid]['kolmoblocks'][kb];
//     loadKolmoblock(manifest, $(target));
// };
// CONCATENATED MODULE: ./src/components/Tree.js
function Tree_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  overflow: hidden;\n  overflow-y: scroll;\n  max-height: 50vh;\n"]);Tree_templateObject=function _templateObject(){return data;};return data;}var StyledTree=styled_components_browser_esm["a" /* default */].div(Tree_templateObject());var Tree_Tree=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Tree,_Component);function Tree(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,Tree);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(Tree)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={nodes:{}};_this.getRootNodes=function(){var nodes=_this.state.nodes;return values_default()(nodes);};_this.getChildNodes=function(key){var nodes=_this.state.nodes;var mani=nodes[key];//console.log(mani);
var content={};if(mani){Object.keys(mani).forEach(function(nkey){if(nkey=='kolmoblocks'){content[nkey]={// CHANGE THIS!
type:'node',isOpen:false,val:mani['kolmoblocks']};}else{content[nkey]={type:'property',isOpen:false,val:mani[nkey]};}});}return content;};_this.onToggle=function(node){var nodes=_this.state.nodes;nodes[node.target_id].isOpen=!node.isOpen;_this.setState({nodes:nodes});};_this.onNodeSelect=function(node){var onSelect=_this.props.onSelect;onSelect(node);};return _this;}Object(createClass["a" /* default */])(Tree,[{key:"componentDidMount",// initial object population
value:function(){var _componentDidMount=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var nodes,tmp;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;nodes={};_context.next=4;return lookupBlock();case 4:tmp=_context.sent;//lookupBlock().then(function(res) {
// object with keys same as CIDs of the manifests in /out/public
// fix this response format!!
tmp[0].forEach(function(val){nodes[val.target_id]=val;nodes[val.target_id]['isOpen']=false;nodes[val.target_id]['type']='node';});this.setState({nodes:nodes});//});
_context.next=12;break;case 9:_context.prev=9;_context.t0=_context["catch"](0);console.log("err!");case 12:case"end":return _context.stop();}}},_callee,this,[[0,9]]);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()// recurrent object population
},{key:"render",value:function render(){var _this2=this;var rootNodes=this.getRootNodes();return react_default.a.createElement(StyledTree,null,rootNodes.map(function(node){return react_default.a.createElement(components_TreeNode,{node:node,getChildNodes:_this2.getChildNodes,onToggle:_this2.onToggle,onNodeSelect:_this2.onNodeSelect,loc:node['target_id']});}));}}]);return Tree;}(react["Component"]);
// CONCATENATED MODULE: ./src/components/File.js
var File_File=function File(props){var selected=props.selected,renderSelected=props.renderSelected;console.log(renderSelected);return react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"card"},react_default.a.createElement("div",{id:"file-options",className:"card-body"},react_default.a.createElement("pre",{className:"card-text text-left"},JSON.stringify(selected,null,2)),selected['kolmoblocks']?keys_default()(selected['kolmoblocks']).map(function(recipe,i){return react_default.a.createElement("button",{type:"button",className:"btn btn-success m-1",onClick:function onClick(){return renderSelected(selected['kolmoblocks'][recipe]);}},"Render w/ Recipe ",i);}):react_default.a.createElement("button",{type:"button",className:"btn btn-warning"},"No Recipes"))));};/* harmony default export */ var components_File = (File_File);
// CONCATENATED MODULE: ./src/components/Render.js
function Render_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 400px;\n"]);Render_templateObject=function _templateObject(){return data;};return data;}var TreeWrapper=styled_components_browser_esm["a" /* default */].div(Render_templateObject());var Render_Render=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Render,_Component);function Render(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,Render);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(Render)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={selected:null,rendered:null};_this.onSelect=function(file){_this.setState({selected:file});};_this.renderSelected=function(recipe){console.log(recipe);loadBlock(recipe).then(function(data){var decoded=new TextDecoder("utf-8").decode(data);console.log(decoded);_this.setState({rendered:decoded},function(){console.log("state set");});});};return _this;}Object(createClass["a" /* default */])(Render,[{key:"render",value:function render(){var _this$state=this.state,selected=_this$state.selected,rendered=_this$state.rendered;return react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-12"},react_default.a.createElement("div",{id:"rendered-content",className:"jumbotron"},rendered?rendered:react_default.a.createElement("h3",null,"Rendered content will appear here")))),react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-12 col-md-5"},react_default.a.createElement(TreeWrapper,null,react_default.a.createElement(Tree_Tree,{onSelect:this.onSelect}))),react_default.a.createElement("div",{className:"col-12 col-md-7"},selected&&selected.type==='node'?react_default.a.createElement(components_File,{renderSelected:this.renderSelected,selected:selected}):react_default.a.createElement("h5",null,"Select a file to view options"))));}}]);return Render;}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/react-icons/md/index.mjs
var md = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/react-icons/io/index.mjs
var io = __webpack_require__(26);

// CONCATENATED MODULE: ./src/components/DataNode.js
function _templateObject6(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    ","\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function DataNode_templateObject3(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    ","\n"]);DataNode_templateObject3=function _templateObject3(){return data;};return data;}function DataNode_templateObject2(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    ","\n"]);DataNode_templateObject2=function _templateObject2(){return data;};return data;}function DataNode_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    ","\n"]);DataNode_templateObject=function _templateObject(){return data;};return data;}// possible failure in either
var StyledDataNode=styled_components_browser_esm["a" /* default */].div(DataNode_templateObject(),function(props){return props.dataNodeStyle;});var StyledDataProp=styled_components_browser_esm["a" /* default */].pre(DataNode_templateObject2(),function(props){return props.dataPropStyle;});var DataExprWrapper=styled_components_browser_esm["a" /* default */].pre(DataNode_templateObject3(),function(props){return props.dataExprWrapperStyle;});var DataNode_NodeIcon=styled_components_browser_esm["a" /* default */].div(_templateObject4(),function(props){return props.nodeIconStyle;});var NodeLabel=styled_components_browser_esm["a" /* default */].pre(_templateObject5());var FitToParent=styled_components_browser_esm["a" /* default */].div(_templateObject6());var DataNode_DataNode=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(DataNode,_Component);function DataNode(props){var _this;Object(classCallCheck["a" /* default */])(this,DataNode);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DataNode).call(this,props));_this.state={requested:false,inCache:false,// ADD SOMETHING TO DETERMINE IN CACHE OR NOT
loaded:false,alreadyLoaded:false,expr:{data_expressions:[]},refs:[]};_this.loadContent=_this.loadContent.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(DataNode,[{key:"componentDidMount",value:function(){var _componentDidMount=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var exp,isInCache;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:exp="{ \"cid\" : \""+this.props.cid+"\" }";_context.next=3;return ExpressionInCache(exp);case 3:isInCache=_context.sent;this.setState({inCache:isInCache});case 5:case"end":return _context.stop();}}},_callee,this);}));function componentDidMount(){return _componentDidMount.apply(this,arguments);}return componentDidMount;}()},{key:"loadContent",value:function(){var _loadContent=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(cid){var myExpr,myRefs;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(this.state.alreadyLoaded&&this.state.loaded)){_context2.next=4;break;}this.setState({loaded:false});_context2.next=21;break;case 4:if(this.state.alreadyLoaded){_context2.next=20;break;}_context2.prev=5;_context2.next=8;return ParseExpression("{ \"cid\" : \""+cid+"\" }");case 8:myExpr=_context2.sent;myRefs=[];myExpr['data_expressions'].forEach(function(val,key){myRefs[key]=react_default.a.createRef();});this.setState({refs:myRefs});this.setState({expr:myExpr});this.setState({loaded:true});_context2.next=19;break;case 16:_context2.prev=16;_context2.t0=_context2["catch"](5);console.log(_context2.t0);case 19:this.setState({alreadyLoaded:true});case 20:this.setState({loaded:true});case 21:case"end":return _context2.stop();}}},_callee2,this,[[5,16]]);}));function loadContent(_x){return _loadContent.apply(this,arguments);}return loadContent;}()},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,cid=_this$props.cid,dataNodeStyle=_this$props.dataNodeStyle,dataPropStyle=_this$props.dataPropStyle,nodeIconStyle=_this$props.nodeIconStyle,dataExprWrapperStyle=_this$props.dataExprWrapperStyle,renderContent=_this$props.renderContent;// data to send to the data properties component (not yet a separate component)
var noDataExpr=JSON.parse(JSON.stringify(this.state.expr));delete noDataExpr['data_expressions'];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(StyledDataNode,{dataNodeStyle:dataNodeStyle},react_default.a.createElement(NodeLabel,null,react_default.a.createElement(DataNode_NodeIcon,{nodeIconStyle:nodeIconStyle,onClick:function onClick(){return renderContent(cid);}},this.state.inCache?react_default.a.createElement(md["a" /* MdCloudDone */],null):react_default.a.createElement(md["b" /* MdCloudDownload */],null)),react_default.a.createElement(DataNode_NodeIcon,{nodeIconStyle:nodeIconStyle,onClick:function onClick(){return _this2.loadContent(cid);}},this.state.loaded?react_default.a.createElement(io["b" /* IoMdRemove */],null):react_default.a.createElement(io["a" /* IoMdAdd */],null)),react_default.a.createElement(FitToParent,null,JSON.stringify(cid,null,2))),this.state.loaded?"Properties: ":"",this.state.loaded?react_default.a.createElement(StyledDataProp,{dataPropStyle:dataPropStyle},JSON.stringify(noDataExpr,null,2),";"):"",this.state.loaded?"Dependencies: ":"",this.state.loaded?this.state.refs.map(function(ref){return react_default.a.createElement(DataExprWrapper,{dataExprWrapperStyle:dataExprWrapperStyle,ref:ref},JSON.stringify(_this2.state.expr['data_expressions'][_this2.state.refs.indexOf(ref)],null,2));}):""));}}]);return DataNode;}(react["Component"]);DataNode_DataNode.defaultProps={inCache:false,requested:false,dataNodeStyle:"display: flex; flex-direction: column;  border: 1px solid; text-align: left; text-sized: ",dataPropStyle:"overflow-y: hidden;  border: 1px solid;",nodeIconStyle:"margin-right: 5px;",dataExprWrapperStyle:"border: 1px solid;"};/* harmony default export */ var components_DataNode = (DataNode_DataNode);
// CONCATENATED MODULE: ./src/components/DataComponent.js
function DataComponent_templateObject(){var data=Object(taggedTemplateLiteral["a" /* default */])(["\n    ","\n"]);DataComponent_templateObject=function _templateObject(){return data;};return data;}var DataTreeWrapper=styled_components_browser_esm["a" /* default */].div(DataComponent_templateObject(),function(props){return props.dataTreeStyle;});var DataComponent_DataComponent=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(DataComponent,_Component);function DataComponent(props){var _this;Object(classCallCheck["a" /* default */])(this,DataComponent);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DataComponent).call(this,props));_this.state={rendered:null};_this.renderContent=_this.renderContent.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(DataComponent,[{key:"renderContent",value:function(){var _renderContent=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(cid){var data_exp,content;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return ParseExpression("{ \"cid\" : \""+cid+"\" }");case 3:data_exp=_context.sent;_context.next=6;return GetData(data_exp['data_expressions'][1]);case 6:content=_context.sent;this.setState({rendered:content});_context.next=13;break;case 10:_context.prev=10;_context.t0=_context["catch"](0);console.log(_context.t0);case 13:case"end":return _context.stop();}}},_callee,this,[[0,10]]);}));function renderContent(_x){return _renderContent.apply(this,arguments);}return renderContent;}()},{key:"render",value:function render(){var _this$props=this.props,dataTreeStyle=_this$props.dataTreeStyle,root=_this$props.root;return react_default.a.createElement("div",{className:"container"},react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-12"},react_default.a.createElement("h5",null,"label = ",root.label))),react_default.a.createElement("div",{className:"row"},react_default.a.createElement("div",{className:"col-4"},react_default.a.createElement(DataTreeWrapper,{dataTreeStyle:dataTreeStyle},react_default.a.createElement(components_DataNode,{cid:root.cid,renderContent:this.renderContent}))),react_default.a.createElement("div",{className:"col-8"},react_default.a.createElement("div",{id:"rendered-content",className:"jumbotron"},this.state.rendered?this.state.rendered:react_default.a.createElement("h5",null,"Rendered content will appear here")))));}}]);return DataComponent;}(react["Component"]);DataComponent_DataComponent.defaultProps={dataTreeStyle:"max-width: 50vw;"};
// CONCATENATED MODULE: ./src/components/Demo.js
var Demo_Demo=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Demo,_Component);function Demo(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,Demo);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(Demo)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={demos:[{label:'Hello Banana',cid:'7E1D8D6609499A1A5FB67C6B9E7DD34CF7C6C4355259115FC7161F47266F5F3C'}]};return _this;}Object(createClass["a" /* default */])(Demo,[{key:"render",value:function render(){return react_default.a.createElement("div",{className:"container-fluid"},react_default.a.createElement(DataComponent_DataComponent,{root:this.state.demos[0]}));}}]);return Demo;}(react["Component"]);/* harmony default export */ var components_Demo = (Demo_Demo);
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

},[[41,2,1]]]);
//# sourceMappingURL=main.74101174.chunk.js.map