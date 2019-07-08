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

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Karla:400,700&display=swap&subset=latin-ext);\", \"\"]);\n\n// Module\nexports.push([module.i, \"body, .nav-logo, .home, .welcome-a, .welcome-a h1, .slidebarDots {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-content: center;\\n  align-items: center; }\\n\\n.slidebarDots span {\\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\\n\\nbody {\\n  margin: 0;\\n  background: #FFFFFF;\\n  font-family: 'Karla', sans-serif;\\n  color: #121212;\\n  align-items: flex-start;\\n  cursor: none; }\\n\\nh1 {\\n  color: #FFFFFF; }\\n\\n.main-nav {\\n  font-weight: 400;\\n  color: #121212;\\n  font-size: 1.4rem;\\n  width: 95vw;\\n  position: fixed;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  top: 5px;\\n  z-index: 9999; }\\n  .main-nav a {\\n    text-decoration: none;\\n    color: #121212; }\\n\\n.nav-logo {\\n  margin-top: 7px;\\n  font-weight: 1000;\\n  color: #121212;\\n  font-size: 63px; }\\n\\n.nav-logo-img {\\n  max-width: 8rem;\\n  margin-top: 7px; }\\n\\n.fillbar {\\n  width: 8rem; }\\n\\n.nav-links a {\\n  margin-left: 30px;\\n  letter-spacing: 2px; }\\n\\n.welcome-rectangle {\\n  width: 90vw;\\n  height: 80vh;\\n  border-width: 2px;\\n  border-color: #FFFFFF;\\n  border-style: solid;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  grid-template-areas: \\\". .\\\"; }\\n\\n.home {\\n  width: 100%;\\n  height: 100vh; }\\n\\n.welcome-a h1 {\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  font-size: 3rem;\\n  font-weight: 400;\\n  align-items: flex-start; }\\n\\n.welcome-a h1 > * {\\n  flex: 1; }\\n\\n.slidebarDots {\\n  position: absolute;\\n  width: 100%;\\n  bottom: 100px; }\\n  .slidebarDots span {\\n    background: #121212;\\n    border-radius: 15px;\\n    border-color: #eceff1;\\n    border-width: 1px;\\n    border-style: solid;\\n    width: 30px;\\n    height: 30px;\\n    z-index: 101;\\n    margin-right: 5px; }\\n  .slidebarDots .active {\\n    border-color: #121212;\\n    background: #eceff1; }\\n\\n.sliderbarArrows {\\n  position: absolute;\\n  top: 35vh;\\n  width: 100%;\\n  z-index: 101; }\\n  .sliderbarArrows span {\\n    position: absolute;\\n    font-size: 10rem;\\n    color: #cccccc;\\n    width: 100px; }\\n  .sliderbarArrows .left {\\n    left: 20px; }\\n  .sliderbarArrows .right {\\n    right: 0px; }\\n  .sliderbarArrows .left:before {\\n    content: '<'; }\\n  .sliderbarArrows .right:before {\\n    content: '>'; }\\n\\n#lorem {\\n  position: absolute;\\n  top: 1000px; }\\n\\n#pixi {\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  z-index: 100; }\\n\", \"\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NDcxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsb0dBQW9HOztBQUUzSDtBQUNBLGNBQWMsUUFBUyxxRUFBcUUsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLHdCQUF3QixFQUFFLHdCQUF3QixpRkFBaUYsRUFBRSxVQUFVLGNBQWMsd0JBQXdCLHFDQUFxQyxtQkFBbUIsNEJBQTRCLGlCQUFpQixFQUFFLFFBQVEsbUJBQW1CLEVBQUUsZUFBZSxxQkFBcUIsbUJBQW1CLHNCQUFzQixnQkFBZ0Isb0JBQW9CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGFBQWEsa0JBQWtCLEVBQUUsaUJBQWlCLDRCQUE0QixxQkFBcUIsRUFBRSxlQUFlLG9CQUFvQixzQkFBc0IsbUJBQW1CLG9CQUFvQixFQUFFLG1CQUFtQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxrQkFBa0Isc0JBQXNCLHdCQUF3QixFQUFFLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHNCQUFzQiwwQkFBMEIsd0JBQXdCLGtCQUFrQixtQ0FBbUMsNEJBQTRCLGlDQUFpQyxFQUFFLFdBQVcsZ0JBQWdCLGtCQUFrQixFQUFFLG1CQUFtQixvQkFBb0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsNEJBQTRCLEVBQUUsdUJBQXVCLFlBQVksRUFBRSxtQkFBbUIsdUJBQXVCLGdCQUFnQixrQkFBa0IsRUFBRSx3QkFBd0IsMEJBQTBCLDBCQUEwQiw0QkFBNEIsd0JBQXdCLDBCQUEwQixrQkFBa0IsbUJBQW1CLG1CQUFtQix3QkFBd0IsRUFBRSwyQkFBMkIsNEJBQTRCLDBCQUEwQixFQUFFLHNCQUFzQix1QkFBdUIsY0FBYyxnQkFBZ0IsaUJBQWlCLEVBQUUsMkJBQTJCLHlCQUF5Qix1QkFBdUIscUJBQXFCLG1CQUFtQixFQUFFLDRCQUE0QixpQkFBaUIsRUFBRSw2QkFBNkIsaUJBQWlCLEVBQUUsbUNBQW1DLG1CQUFtQixFQUFFLG9DQUFvQyxtQkFBbUIsRUFBRSxZQUFZLHVCQUF1QixnQkFBZ0IsRUFBRSxXQUFXLGdCQUFnQixrQkFBa0Isb0JBQW9CLGlCQUFpQixFQUFFIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zY3NzL21haW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYTo0MDAsNzAwJmRpc3BsYXk9c3dhcCZzdWJzZXQ9bGF0aW4tZXh0KTtcIiwgXCJcIl0pO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIC5uYXYtbG9nbywgLmhvbWUsIC53ZWxjb21lLWEsIC53ZWxjb21lLWEgaDEsIC5zbGlkZWJhckRvdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uc2xpZGViYXJEb3RzIHNwYW4ge1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMxMjEyMTI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogbm9uZTsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjRkZGRkZGOyB9XFxuXFxuLm1haW4tbmF2IHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzEyMTIxMjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRvcDogNXB4O1xcbiAgei1pbmRleDogOTk5OTsgfVxcbiAgLm1haW4tbmF2IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjMTIxMjEyOyB9XFxuXFxuLm5hdi1sb2dvIHtcXG4gIG1hcmdpbi10b3A6IDdweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgY29sb3I6ICMxMjEyMTI7XFxuICBmb250LXNpemU6IDYzcHg7IH1cXG5cXG4ubmF2LWxvZ28taW1nIHtcXG4gIG1heC13aWR0aDogOHJlbTtcXG4gIG1hcmdpbi10b3A6IDdweDsgfVxcblxcbi5maWxsYmFyIHtcXG4gIHdpZHRoOiA4cmVtOyB9XFxuXFxuLm5hdi1saW5rcyBhIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDsgfVxcblxcbi53ZWxjb21lLXJlY3RhbmdsZSB7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIC5cXFwiOyB9XFxuXFxuLmhvbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLndlbGNvbWUtYSBoMSB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLndlbGNvbWUtYSBoMSA+ICoge1xcbiAgZmxleDogMTsgfVxcblxcbi5zbGlkZWJhckRvdHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDEwMHB4OyB9XFxuICAuc2xpZGViYXJEb3RzIHNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICNlY2VmZjE7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB6LWluZGV4OiAxMDE7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuc2xpZGViYXJEb3RzIC5hY3RpdmUge1xcbiAgICBib3JkZXItY29sb3I6ICMxMjEyMTI7XFxuICAgIGJhY2tncm91bmQ6ICNlY2VmZjE7IH1cXG5cXG4uc2xpZGVyYmFyQXJyb3dzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAxOyB9XFxuICAuc2xpZGVyYmFyQXJyb3dzIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICAgIGNvbG9yOiAjY2NjY2NjO1xcbiAgICB3aWR0aDogMTAwcHg7IH1cXG4gIC5zbGlkZXJiYXJBcnJvd3MgLmxlZnQge1xcbiAgICBsZWZ0OiAyMHB4OyB9XFxuICAuc2xpZGVyYmFyQXJyb3dzIC5yaWdodCB7XFxuICAgIHJpZ2h0OiAwcHg7IH1cXG4gIC5zbGlkZXJiYXJBcnJvd3MgLmxlZnQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogJzwnOyB9XFxuICAuc2xpZGVyYmFyQXJyb3dzIC5yaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnPic7IH1cXG5cXG4jbG9yZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAwcHg7IH1cXG5cXG4jcGl4aSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/main.scss\n");

/***/ }),

/***/ "./src/core/style.ts":
/*!***************************!*\
  !*** ./src/core/style.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.colourScheme = function () {\r\n    return {\r\n        primary: 0x0f0f0f,\r\n        secondary: 0x00FFED,\r\n        tetriary: 0xFF00DC,\r\n        background: 0x000000,\r\n        text: 0xFFFFFF\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zdHlsZS50cz82N2RjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvcmUvc3R5bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNvbG91clNjaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJpbWFyeTogMHgwZjBmMGYsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAweDAwRkZFRCxcclxuICAgICAgICB0ZXRyaWFyeTogMHhGRjAwREMsXHJcbiAgICAgICAgYmFja2dyb3VuZDogMHgwMDAwMDAsXHJcbiAgICAgICAgdGV4dDogMHhGRkZGRkZcclxuICAgIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/style.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar style = __importStar(__webpack_require__(/*! ./scss/style */ \"./src/scss/style.js\"));\r\nvar renderer_1 = __webpack_require__(/*! ./pixi/renderer */ \"./src/pixi/renderer.ts\");\r\nvar styleFix = style;\r\nvar mouseFollow_1 = __webpack_require__(/*! ./pixi/mouseFollow */ \"./src/pixi/mouseFollow.ts\");\r\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\r\nrenderer_1.initRenderer();\r\n// initCircleSquare()\r\n// initAnimatedTriangles()\r\nvar graphics = new pixi_js_1.Graphics();\r\nvar sprite = pixi_js_1.Sprite.from('assets/hero_sp.jpg');\r\nrenderer_1.stage.addChild(sprite);\r\nvar w = window.document.body.getBoundingClientRect();\r\nvar scaleToWidth = w.width / sprite.width;\r\nsprite.width = sprite.width * scaleToWidth * 0.8;\r\nsprite.height = sprite.height * scaleToWidth * 0.8;\r\nsprite.position.x = (w.width - sprite.width) / 2;\r\nsprite.position.y = 0;\r\nrenderer_1.ticker.add(function (delta) {\r\n});\r\nrenderer_1.stage.addChild(graphics);\r\nmouseFollow_1.initMouseFollow();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/NzFiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQseUJBQXlCLG1CQUFPLENBQUMseUNBQWM7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFDO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMscURBQW9CO0FBQ2hELGdCQUFnQixtQkFBTyxDQUFDLHNEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzdHlsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zY3NzL3N0eWxlXCIpKTtcclxudmFyIHJlbmRlcmVyXzEgPSByZXF1aXJlKFwiLi9waXhpL3JlbmRlcmVyXCIpO1xyXG52YXIgc3R5bGVGaXggPSBzdHlsZTtcclxudmFyIG1vdXNlRm9sbG93XzEgPSByZXF1aXJlKFwiLi9waXhpL21vdXNlRm9sbG93XCIpO1xyXG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnJlbmRlcmVyXzEuaW5pdFJlbmRlcmVyKCk7XHJcbi8vIGluaXRDaXJjbGVTcXVhcmUoKVxyXG4vLyBpbml0QW5pbWF0ZWRUcmlhbmdsZXMoKVxyXG52YXIgZ3JhcGhpY3MgPSBuZXcgcGl4aV9qc18xLkdyYXBoaWNzKCk7XHJcbnZhciBzcHJpdGUgPSBwaXhpX2pzXzEuU3ByaXRlLmZyb20oJ2Fzc2V0cy9oZXJvX3NwLmpwZycpO1xyXG5yZW5kZXJlcl8xLnN0YWdlLmFkZENoaWxkKHNwcml0ZSk7XHJcbnZhciB3ID0gd2luZG93LmRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbnZhciBzY2FsZVRvV2lkdGggPSB3LndpZHRoIC8gc3ByaXRlLndpZHRoO1xyXG5zcHJpdGUud2lkdGggPSBzcHJpdGUud2lkdGggKiBzY2FsZVRvV2lkdGggKiAwLjg7XHJcbnNwcml0ZS5oZWlnaHQgPSBzcHJpdGUuaGVpZ2h0ICogc2NhbGVUb1dpZHRoICogMC44O1xyXG5zcHJpdGUucG9zaXRpb24ueCA9ICh3LndpZHRoIC0gc3ByaXRlLndpZHRoKSAvIDI7XHJcbnNwcml0ZS5wb3NpdGlvbi55ID0gMDtcclxucmVuZGVyZXJfMS50aWNrZXIuYWRkKGZ1bmN0aW9uIChkZWx0YSkge1xyXG59KTtcclxucmVuZGVyZXJfMS5zdGFnZS5hZGRDaGlsZChncmFwaGljcyk7XHJcbm1vdXNlRm9sbG93XzEuaW5pdE1vdXNlRm9sbG93KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/pixi/mouseFollow.ts":
/*!*********************************!*\
  !*** ./src/pixi/mouseFollow.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar pixi_js_1 = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\r\nvar renderer_1 = __webpack_require__(/*! ./renderer */ \"./src/pixi/renderer.ts\");\r\nvar style_1 = __webpack_require__(/*! ../core/style */ \"./src/core/style.ts\");\r\nvar math_1 = __webpack_require__(/*! ../util/math */ \"./src/util/math.ts\");\r\nexports.initMouseFollow = function () {\r\n    var graphics = new pixi_js_1.Graphics();\r\n    renderer_1.stage.addChild(graphics);\r\n    var counter = 0;\r\n    var point = [-200, -200];\r\n    var pointerCircles = [];\r\n    var lastNew = Date.now();\r\n    var c = document.getElementById('pixi');\r\n    var xScale = 1;\r\n    if (c) {\r\n        xScale = window.outerWidth / c.getBoundingClientRect().width;\r\n    }\r\n    window.addEventListener('pointermove', function (e) {\r\n        var movementRange = math_1.distance({ x: 0, y: 0 }, { x: e.movementX, y: e.movementY });\r\n        var circle = {\r\n            x: (e.pageX - window.scrollX),\r\n            y: e.pageY - window.scrollY,\r\n            radius: 25,\r\n            lastDraw: Date.now()\r\n        };\r\n        point = [circle.x, circle.y];\r\n        if (Date.now() - lastNew > 40 && movementRange > 1) {\r\n            pointerCircles.push(circle);\r\n            lastNew = Date.now();\r\n        }\r\n    });\r\n    // graphics.alpha = 0.3  \r\n    renderer_1.ticker.add(function (delta) {\r\n        graphics.clear();\r\n        var now = Date.now();\r\n        for (var _i = 0, pointerCircles_1 = pointerCircles; _i < pointerCircles_1.length; _i++) {\r\n            var circle = pointerCircles_1[_i];\r\n            if (circle.radius > 0 && now - circle.lastDraw > 0) {\r\n                var color = circle.radius < 20 ? 0xF0F0F0 : circle.radius < 40 ? 0xcccccc : style_1.colourScheme().secondary;\r\n                graphics.lineStyle(0);\r\n                graphics.beginFill(color);\r\n                graphics.drawCircle(circle.x, circle.y, circle.radius);\r\n                graphics.endFill();\r\n                circle.radius -= Math.pow(circle.radius, 1.3) / 100;\r\n                circle.lastDraw = Date.now();\r\n                if (circle.radius < 4) {\r\n                    circle.radius = 0;\r\n                }\r\n            }\r\n        }\r\n        graphics.lineStyle(2, 0xbcbcbc, 1);\r\n        graphics.beginFill(0xdddddd);\r\n        graphics.drawCircle(point[0], point[1], 25);\r\n        graphics.endFill();\r\n    });\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGl4aS9tb3VzZUZvbGxvdy50cz81MDdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQVM7QUFDakMsaUJBQWlCLG1CQUFPLENBQUMsMENBQVk7QUFDckMsY0FBYyxtQkFBTyxDQUFDLDBDQUFlO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhLEdBQUcsaUNBQWlDO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsOEJBQThCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIuL3NyYy9waXhpL21vdXNlRm9sbG93LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xyXG52YXIgc3R5bGVfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL3N0eWxlXCIpO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4uL3V0aWwvbWF0aFwiKTtcclxuZXhwb3J0cy5pbml0TW91c2VGb2xsb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ3JhcGhpY3MgPSBuZXcgcGl4aV9qc18xLkdyYXBoaWNzKCk7XHJcbiAgICByZW5kZXJlcl8xLnN0YWdlLmFkZENoaWxkKGdyYXBoaWNzKTtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHZhciBwb2ludCA9IFstMjAwLCAtMjAwXTtcclxuICAgIHZhciBwb2ludGVyQ2lyY2xlcyA9IFtdO1xyXG4gICAgdmFyIGxhc3ROZXcgPSBEYXRlLm5vdygpO1xyXG4gICAgdmFyIGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGl4aScpO1xyXG4gICAgdmFyIHhTY2FsZSA9IDE7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICAgIHhTY2FsZSA9IHdpbmRvdy5vdXRlcldpZHRoIC8gYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG1vdmVtZW50UmFuZ2UgPSBtYXRoXzEuZGlzdGFuY2UoeyB4OiAwLCB5OiAwIH0sIHsgeDogZS5tb3ZlbWVudFgsIHk6IGUubW92ZW1lbnRZIH0pO1xyXG4gICAgICAgIHZhciBjaXJjbGUgPSB7XHJcbiAgICAgICAgICAgIHg6IChlLnBhZ2VYIC0gd2luZG93LnNjcm9sbFgpLFxyXG4gICAgICAgICAgICB5OiBlLnBhZ2VZIC0gd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgICAgIHJhZGl1czogMjUsXHJcbiAgICAgICAgICAgIGxhc3REcmF3OiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb2ludCA9IFtjaXJjbGUueCwgY2lyY2xlLnldO1xyXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gbGFzdE5ldyA+IDQwICYmIG1vdmVtZW50UmFuZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgIHBvaW50ZXJDaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICAgICAgICAgICAgbGFzdE5ldyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBncmFwaGljcy5hbHBoYSA9IDAuMyAgXHJcbiAgICByZW5kZXJlcl8xLnRpY2tlci5hZGQoZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHBvaW50ZXJDaXJjbGVzXzEgPSBwb2ludGVyQ2lyY2xlczsgX2kgPCBwb2ludGVyQ2lyY2xlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgY2lyY2xlID0gcG9pbnRlckNpcmNsZXNfMVtfaV07XHJcbiAgICAgICAgICAgIGlmIChjaXJjbGUucmFkaXVzID4gMCAmJiBub3cgLSBjaXJjbGUubGFzdERyYXcgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBjaXJjbGUucmFkaXVzIDwgMjAgPyAweEYwRjBGMCA6IGNpcmNsZS5yYWRpdXMgPCA0MCA/IDB4Y2NjY2NjIDogc3R5bGVfMS5jb2xvdXJTY2hlbWUoKS5zZWNvbmRhcnk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMCk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShjaXJjbGUueCwgY2lyY2xlLnksIGNpcmNsZS5yYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZW5kRmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLnJhZGl1cyAtPSBNYXRoLnBvdyhjaXJjbGUucmFkaXVzLCAxLjMpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmxhc3REcmF3ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaXJjbGUucmFkaXVzIDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZS5yYWRpdXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweGJjYmNiYywgMSk7XHJcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZGRkZGRkKTtcclxuICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHBvaW50WzBdLCBwb2ludFsxXSwgMjUpO1xyXG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pixi/mouseFollow.ts\n");

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

/***/ }),

/***/ "./src/util/math.ts":
/*!**************************!*\
  !*** ./src/util/math.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar lineIntersect = __importStar(__webpack_require__(/*! line-intersect */ \"./node_modules/line-intersect/es/index.js\"));\r\nexports.polygonLines = function (points) {\r\n    var lines = [];\r\n    for (var i = 0; i < points.length; i++) {\r\n        var next = i + 1 == points.length ? 0 : i + 1;\r\n        lines.push({\r\n            p1: points[i],\r\n            p2: points[next]\r\n        });\r\n    }\r\n    return lines;\r\n};\r\nexports.checkIntersection = function (line1, line2) {\r\n    return lineIntersect.checkIntersection(line1.p1.x, line1.p1.y, line1.p2.x, line1.p2.y, line2.p1.x, line2.p1.y, line2.p2.x, line2.p2.y);\r\n};\r\nexports.pointsAngleRad = function (p1, p2) {\r\n    return Math.atan2(p2.y - p1.y, p2.x - p1.x);\r\n};\r\nexports.pointsAngleDeg = function (p1, p2) {\r\n    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;\r\n};\r\nexports.findNewPoint = function (start, angle, distance) {\r\n    return {\r\n        x: Math.round(Math.cos(angle * Math.PI / 180) * distance + start.x),\r\n        y: Math.round(Math.sin(angle * Math.PI / 180) * distance + start.y)\r\n    };\r\n};\r\nexports.findClosestPoint = function (from, points, ignorePoints) {\r\n    var closest = { x: 0, y: 0 };\r\n    var closestD;\r\n    var _loop_1 = function (point) {\r\n        var ignored = ignorePoints.find(function (p) {\r\n            return p.x == point.x && p.y == point.y;\r\n        });\r\n        var d = exports.distance(from, point);\r\n        if ((!closestD || d < closestD) && !ignored) {\r\n            closestD = d;\r\n            closest = point;\r\n        }\r\n    };\r\n    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {\r\n        var point = points_1[_i];\r\n        _loop_1(point);\r\n    }\r\n    return closest;\r\n};\r\nexports.distance = function (from, to) {\r\n    return Math.sqrt((Math.pow(from.x - to.x, 2)) + (Math.pow(from.y - to.y, 2)));\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9tYXRoLnRzPzYyZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGlDQUFpQyxtQkFBTyxDQUFDLGlFQUFnQjtBQUN6RDtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvdXRpbC9tYXRoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbGluZUludGVyc2VjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwibGluZS1pbnRlcnNlY3RcIikpO1xyXG5leHBvcnRzLnBvbHlnb25MaW5lcyA9IGZ1bmN0aW9uIChwb2ludHMpIHtcclxuICAgIHZhciBsaW5lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbmV4dCA9IGkgKyAxID09IHBvaW50cy5sZW5ndGggPyAwIDogaSArIDE7XHJcbiAgICAgICAgbGluZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHAxOiBwb2ludHNbaV0sXHJcbiAgICAgICAgICAgIHAyOiBwb2ludHNbbmV4dF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBsaW5lcztcclxufTtcclxuZXhwb3J0cy5jaGVja0ludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChsaW5lMSwgbGluZTIpIHtcclxuICAgIHJldHVybiBsaW5lSW50ZXJzZWN0LmNoZWNrSW50ZXJzZWN0aW9uKGxpbmUxLnAxLngsIGxpbmUxLnAxLnksIGxpbmUxLnAyLngsIGxpbmUxLnAyLnksIGxpbmUyLnAxLngsIGxpbmUyLnAxLnksIGxpbmUyLnAyLngsIGxpbmUyLnAyLnkpO1xyXG59O1xyXG5leHBvcnRzLnBvaW50c0FuZ2xlUmFkID0gZnVuY3Rpb24gKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIE1hdGguYXRhbjIocDIueSAtIHAxLnksIHAyLnggLSBwMS54KTtcclxufTtcclxuZXhwb3J0cy5wb2ludHNBbmdsZURlZyA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcclxuICAgIHJldHVybiBNYXRoLmF0YW4yKHAyLnkgLSBwMS55LCBwMi54IC0gcDEueCkgKiAxODAgLyBNYXRoLlBJO1xyXG59O1xyXG5leHBvcnRzLmZpbmROZXdQb2ludCA9IGZ1bmN0aW9uIChzdGFydCwgYW5nbGUsIGRpc3RhbmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSAqIGRpc3RhbmNlICsgc3RhcnQueCksXHJcbiAgICAgICAgeTogTWF0aC5yb3VuZChNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApICogZGlzdGFuY2UgKyBzdGFydC55KVxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy5maW5kQ2xvc2VzdFBvaW50ID0gZnVuY3Rpb24gKGZyb20sIHBvaW50cywgaWdub3JlUG9pbnRzKSB7XHJcbiAgICB2YXIgY2xvc2VzdCA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgdmFyIGNsb3Nlc3REO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICB2YXIgaWdub3JlZCA9IGlnbm9yZVBvaW50cy5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLnggPT0gcG9pbnQueCAmJiBwLnkgPT0gcG9pbnQueTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZCA9IGV4cG9ydHMuZGlzdGFuY2UoZnJvbSwgcG9pbnQpO1xyXG4gICAgICAgIGlmICgoIWNsb3Nlc3REIHx8IGQgPCBjbG9zZXN0RCkgJiYgIWlnbm9yZWQpIHtcclxuICAgICAgICAgICAgY2xvc2VzdEQgPSBkO1xyXG4gICAgICAgICAgICBjbG9zZXN0ID0gcG9pbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9pbnRzXzEgPSBwb2ludHM7IF9pIDwgcG9pbnRzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzXzFbX2ldO1xyXG4gICAgICAgIF9sb29wXzEocG9pbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb3Nlc3Q7XHJcbn07XHJcbmV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoKE1hdGgucG93KGZyb20ueCAtIHRvLngsIDIpKSArIChNYXRoLnBvdyhmcm9tLnkgLSB0by55LCAyKSkpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/math.ts\n");

/***/ })

/******/ });