/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Karla:400,700&display=swap&subset=latin-ext);\", \"\"]);\n\n// Module\nexports.push([module.i, \"body, .nav-logo, .home, .welcome-a, .welcome-a h1 {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: center; }\\n\\nbody {\\n  margin: 0;\\n  background: #eceff1;\\n  font-family: 'Karla', sans-serif;\\n  color: #121212;\\n  align-items: flex-start; }\\n\\nh1 {\\n  color: #FFFFFF; }\\n\\n.main-nav {\\n  font-weight: 400;\\n  color: #121212;\\n  font-size: 1.4rem;\\n  width: 95vw;\\n  position: fixed;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  z-index: 9999; }\\n  .main-nav a {\\n    text-decoration: none;\\n    color: #121212; }\\n\\n.nav-logo {\\n  margin-top: 7px;\\n  font-weight: 1000;\\n  color: #121212;\\n  font-size: 56px; }\\n\\n.nav-logo-img {\\n  max-width: 8rem;\\n  margin-top: 7px; }\\n\\n.fillbar {\\n  width: 8rem; }\\n\\n.nav-links a {\\n  margin-left: 30px;\\n  letter-spacing: 2px; }\\n\\n.welcome-rectangle {\\n  width: 90vw;\\n  height: 80vh;\\n  border-width: 2px;\\n  border-color: #FFFFFF;\\n  border-style: solid;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  grid-template-areas: \\\". .\\\"; }\\n\\n.home {\\n  width: 100%;\\n  height: 100vh; }\\n\\n.welcome-a h1 {\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  font-size: 3rem;\\n  font-weight: 400;\\n  align-items: flex-start; }\\n\\n.welcome-a h1 > * {\\n  flex: 1; }\\n\\n#git {\\n  position: fixed;\\n  top: 480px;\\n  left: 1330px;\\n  z-index: 9999; }\\n\\n#lorem {\\n  position: absolute;\\n  top: 1000px; }\\n\\n#pixi {\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  z-index: 100; }\\n\", \"\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NDcxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsb0dBQW9HOztBQUUzSDtBQUNBLGNBQWMsUUFBUyxzREFBc0Qsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLHdCQUF3QixFQUFFLFVBQVUsY0FBYyx3QkFBd0IscUNBQXFDLG1CQUFtQiw0QkFBNEIsRUFBRSxRQUFRLG1CQUFtQixFQUFFLGVBQWUscUJBQXFCLG1CQUFtQixzQkFBc0IsZ0JBQWdCLG9CQUFvQixrQkFBa0IsbUNBQW1DLHdCQUF3QixrQkFBa0IsRUFBRSxpQkFBaUIsNEJBQTRCLHFCQUFxQixFQUFFLGVBQWUsb0JBQW9CLHNCQUFzQixtQkFBbUIsb0JBQW9CLEVBQUUsbUJBQW1CLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGdCQUFnQixFQUFFLGtCQUFrQixzQkFBc0Isd0JBQXdCLEVBQUUsd0JBQXdCLGdCQUFnQixpQkFBaUIsc0JBQXNCLDBCQUEwQix3QkFBd0Isa0JBQWtCLG1DQUFtQyw0QkFBNEIsaUNBQWlDLEVBQUUsV0FBVyxnQkFBZ0Isa0JBQWtCLEVBQUUsbUJBQW1CLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHFCQUFxQiw0QkFBNEIsRUFBRSx1QkFBdUIsWUFBWSxFQUFFLFVBQVUsb0JBQW9CLGVBQWUsaUJBQWlCLGtCQUFrQixFQUFFLFlBQVksdUJBQXVCLGdCQUFnQixFQUFFLFdBQVcsZ0JBQWdCLGtCQUFrQixvQkFBb0IsaUJBQWlCLEVBQUUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3Njc3MvbWFpbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhOjQwMCw3MDAmZGlzcGxheT1zd2FwJnN1YnNldD1sYXRpbi1leHQpO1wiLCBcIlwiXSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgLm5hdi1sb2dvLCAuaG9tZSwgLndlbGNvbWUtYSwgLndlbGNvbWUtYSBoMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI2VjZWZmMTtcXG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxMjEyMTI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLm1haW4tbmF2IHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzEyMTIxMjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG4gIC5tYWluLW5hdiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzEyMTIxMjsgfVxcblxcbi5uYXYtbG9nbyB7XFxuICBtYXJnaW4tdG9wOiA3cHg7XFxuICBmb250LXdlaWdodDogMTAwMDtcXG4gIGNvbG9yOiAjMTIxMjEyO1xcbiAgZm9udC1zaXplOiA1NnB4OyB9XFxuXFxuLm5hdi1sb2dvLWltZyB7XFxuICBtYXgtd2lkdGg6IDhyZW07XFxuICBtYXJnaW4tdG9wOiA3cHg7IH1cXG5cXG4uZmlsbGJhciB7XFxuICB3aWR0aDogOHJlbTsgfVxcblxcbi5uYXYtbGlua3MgYSB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7IH1cXG5cXG4ud2VsY29tZS1yZWN0YW5nbGUge1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiAuXFxcIjsgfVxcblxcbi5ob21lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbi53ZWxjb21lLWEgaDEge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcblxcbi53ZWxjb21lLWEgaDEgPiAqIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4jZ2l0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNDgwcHg7XFxuICBsZWZ0OiAxMzMwcHg7XFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuI2xvcmVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwMHB4OyB9XFxuXFxuI3BpeGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXCIsIFwiXCJdKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar style = __importStar(__webpack_require__(/*! ./scss/style */ \"./src/scss/style.js\"));\r\nvar renderer_1 = __webpack_require__(/*! ./pixi/renderer */ \"./src/pixi/renderer.ts\");\r\nvar styleFix = style;\r\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\r\nrenderer_1.initRenderer();\r\n// initMouseFollow()\r\n// initCircleSquare()\r\n// initAnimatedTriangles()\r\nvar graphics = new pixi_js_1.Graphics();\r\nvar sprite = pixi_js_1.Sprite.from('assets/hero_sp.jpg');\r\nrenderer_1.stage.addChild(sprite);\r\nvar w = window.document.body.getBoundingClientRect();\r\nvar scaleToWidth = w.width / sprite.width;\r\nsprite.width = sprite.width * scaleToWidth * 0.8;\r\nsprite.height = sprite.height * scaleToWidth * 0.8;\r\nsprite.position.x = (w.width - sprite.width) / 2;\r\nsprite.position.y = 0;\r\nrenderer_1.ticker.add(function (delta) {\r\n});\r\nrenderer_1.stage.addChild(graphics);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/NzFiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUJBQXlCLG1CQUFPLENBQUMseUNBQWM7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFDO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHN0eWxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Njc3Mvc3R5bGVcIikpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3BpeGkvcmVuZGVyZXJcIik7XHJcbnZhciBzdHlsZUZpeCA9IHN0eWxlO1xyXG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnJlbmRlcmVyXzEuaW5pdFJlbmRlcmVyKCk7XHJcbi8vIGluaXRNb3VzZUZvbGxvdygpXHJcbi8vIGluaXRDaXJjbGVTcXVhcmUoKVxyXG4vLyBpbml0QW5pbWF0ZWRUcmlhbmdsZXMoKVxyXG52YXIgZ3JhcGhpY3MgPSBuZXcgcGl4aV9qc18xLkdyYXBoaWNzKCk7XHJcbnZhciBzcHJpdGUgPSBwaXhpX2pzXzEuU3ByaXRlLmZyb20oJ2Fzc2V0cy9oZXJvX3NwLmpwZycpO1xyXG5yZW5kZXJlcl8xLnN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbnZhciB3ID0gd2luZG93LmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbnZhciBzY2FsZVRvV2lkdGggPSB3LndpZHRoIC8gc3ByaXRlLndpZHRoO1xyXG5zcHJpdGUud2lkdGggPSBzcHJpdGUud2lkdGggKiBzY2FsZVRvV2lkdGggKiAwLjg7XHJcbnNwcml0ZS5oZWlnaHQgPSBzcHJpdGUuaGVpZ2h0ICogc2NhbGVUb1dpZHRoICogMC44O1xyXG5zcHJpdGUucG9zaXRpb24ueCA9ICh3LndpZHRoIC0gc3ByaXRlLndpZHRoKSAvIDI7XHJcbnNwcml0ZS5wb3NpdGlvbi55ID0gMDtcclxucmVuZGVyZXJfMS50aWNrZXIuYWRkKGZ1bmN0aW9uIChkZWx0YSkge1xyXG59KTtcclxucmVuZGVyZXJfMS5zdGFnZS5hZGRDaGlsZChncmFwaGljcyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/pixi/renderer.ts":
/*!******************************!*\
  !*** ./src/pixi/renderer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar PIXI = __importStar(__webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\"));\r\nexports.ticker = PIXI.Ticker.shared;\r\nfunction initRenderer() {\r\n    var canvas = makeCanvas();\r\n    exports.renderer = new PIXI.Renderer({ width: window.innerWidth,\r\n        height: window.innerHeight,\r\n        // backgroundColor: 0x010101,\r\n        transparent: true,\r\n        forceFXAA: false,\r\n        powerPreference: 'high-performance',\r\n        view: canvas\r\n    });\r\n    exports.ticker = new PIXI.Ticker();\r\n    exports.ticker.maxFPS = 60;\r\n    exports.stage = new PIXI.Container();\r\n    exports.ticker.add(function () {\r\n        exports.renderer.render(exports.stage);\r\n    }, PIXI.UPDATE_PRIORITY.LOW);\r\n    exports.ticker.start();\r\n    document.body.appendChild(exports.renderer.view);\r\n    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;\r\n    window.addEventListener('resize', function () {\r\n        exports.renderer.resize(exports.renderer.screen.width, exports.renderer.screen.height);\r\n    });\r\n}\r\nexports.initRenderer = initRenderer;\r\nvar makeCanvas = function () {\r\n    var canvas = document.createElement('canvas');\r\n    canvas.id = 'pixi';\r\n    document.body.appendChild(canvas);\r\n    return canvas;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGl4aS9yZW5kZXJlci50cz8yMTA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQyxzREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BpeGkvcmVuZGVyZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQSVhJID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJwaXhpLmpzXCIpKTtcclxuZXhwb3J0cy50aWNrZXIgPSBQSVhJLlRpY2tlci5zaGFyZWQ7XHJcbmZ1bmN0aW9uIGluaXRSZW5kZXJlcigpIHtcclxuICAgIHZhciBjYW52YXMgPSBtYWtlQ2FudmFzKCk7XHJcbiAgICBleHBvcnRzLnJlbmRlcmVyID0gbmV3IFBJWEkuUmVuZGVyZXIoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAweDAxMDEwMSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICBmb3JjZUZYQUE6IGZhbHNlLFxyXG4gICAgICAgIHBvd2VyUHJlZmVyZW5jZTogJ2hpZ2gtcGVyZm9ybWFuY2UnLFxyXG4gICAgICAgIHZpZXc6IGNhbnZhc1xyXG4gICAgfSk7XHJcbiAgICBleHBvcnRzLnRpY2tlciA9IG5ldyBQSVhJLlRpY2tlcigpO1xyXG4gICAgZXhwb3J0cy50aWNrZXIubWF4RlBTID0gNjA7XHJcbiAgICBleHBvcnRzLnN0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICBleHBvcnRzLnRpY2tlci5hZGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGV4cG9ydHMucmVuZGVyZXIucmVuZGVyKGV4cG9ydHMuc3RhZ2UpO1xyXG4gICAgfSwgUElYSS5VUERBVEVfUFJJT1JJVFkuTE9XKTtcclxuICAgIGV4cG9ydHMudGlja2VyLnN0YXJ0KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGV4cG9ydHMucmVuZGVyZXIudmlldyk7XHJcbiAgICBQSVhJLnNldHRpbmdzLlNDQUxFX01PREUgPSBQSVhJLlNDQUxFX01PREVTLkxJTkVBUjtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZXhwb3J0cy5yZW5kZXJlci5yZXNpemUoZXhwb3J0cy5yZW5kZXJlci5zY3JlZW4ud2lkdGgsIGV4cG9ydHMucmVuZGVyZXIuc2NyZWVuLmhlaWdodCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmluaXRSZW5kZXJlciA9IGluaXRSZW5kZXJlcjtcclxudmFyIG1ha2VDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMuaWQgPSAncGl4aSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pixi/renderer.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/N2NhYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdOQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUiLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ "./src/scss/style.js":
/*!***************************!*\
  !*** ./src/scss/style.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5qcz84Y2U2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3NzL3N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3Njc3MvbWFpbi5zY3NzJyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.js\n");

/***/ })

/******/ });