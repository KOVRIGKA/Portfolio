/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\n__webpack_require__(/*! ./modules/map */ \"./src/assets/scripts/modules/map.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL21hcFwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/map.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/modules/map.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nymaps.ready(init);\n\nfunction init() {\n    var map = new ymaps.Map('mymap', {\n        center: [55.75, 37.62],\n        zoom: 12,\n        controls: ['zoomControl'],\n        behaviors: ['drag']\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tYXAuanM/YzkyMSJdLCJuYW1lcyI6WyJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImJlaGF2aW9ycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTUMsS0FBTixDQUFZQyxJQUFaOztBQUVBLFNBQVNBLElBQVQsR0FBZTtBQUNYLFFBQUlDLE1BQU0sSUFBSUgsTUFBTUksR0FBVixDQUFjLE9BQWQsRUFBdUI7QUFDN0JDLGdCQUFRLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FEcUI7QUFFN0JDLGNBQU0sRUFGdUI7QUFHN0JDLGtCQUFVLENBQUMsYUFBRCxDQUhtQjtBQUk3QkMsbUJBQVcsQ0FBQyxNQUFEO0FBSmtCLEtBQXZCLENBQVY7QUFNSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgdmFyIG1hcCA9IG5ldyB5bWFwcy5NYXAoJ215bWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogWzU1Ljc1LCAzNy42Ml0sXHJcbiAgICAgICAgem9vbTogMTIsXHJcbiAgICAgICAgY29udHJvbHM6IFsnem9vbUNvbnRyb2wnXSxcclxuICAgICAgICBiZWhhdmlvcnM6IFsnZHJhZyddXHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/map.js\n");

/***/ })

/******/ });