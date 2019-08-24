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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Couldn't find preset \"es2015\" relative to directory \"C:\\\\Users\\\\User\\\\PhpstormProjects\\\\task\\\\src\\\\js\"\n    at C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (C:\\Users\\User\\PhpstormProjects\\task\\node_modules\\babel-loader\\lib\\index.js:173:20)");

/***/ }),

/***/ "./src/scss/banner.scss":
/*!******************************!*\
  !*** ./src/scss/banner.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/btn.scss":
/*!***************************!*\
  !*** ./src/scss/btn.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/color.scss":
/*!*****************************!*\
  !*** ./src/scss/color.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/font.scss":
/*!****************************!*\
  !*** ./src/scss/font.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/form.scss":
/*!****************************!*\
  !*** ./src/scss/form.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/helper.scss":
/*!******************************!*\
  !*** ./src/scss/helper.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home-menu.scss":
/*!*********************************!*\
  !*** ./src/scss/home-menu.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home-social.scss":
/*!***********************************!*\
  !*** ./src/scss/home-social.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home-city.scss":
/*!**************************************!*\
  !*** ./src/scss/home/home-city.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home-contacts.scss":
/*!******************************************!*\
  !*** ./src/scss/home/home-contacts.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home-history.scss":
/*!*****************************************!*\
  !*** ./src/scss/home/home-history.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home-partner.scss":
/*!*****************************************!*\
  !*** ./src/scss/home/home-partner.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home-service.scss":
/*!*****************************************!*\
  !*** ./src/scss/home/home-service.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/home/home.scss":
/*!*********************************!*\
  !*** ./src/scss/home/home.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/menu.scss":
/*!****************************!*\
  !*** ./src/scss/menu.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/modal.scss":
/*!*****************************!*\
  !*** ./src/scss/modal.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/tabs.scss":
/*!****************************!*\
  !*** ./src/scss/tabs.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/banner.scss ./src/scss/style.scss ./src/scss/color.scss ./src/scss/home/home.scss ./src/scss/home-menu.scss ./src/scss/home/home-service.scss ./src/scss/home/home-city.scss ./src/scss/home/home-history.scss ./src/scss/home/home-partner.scss ./src/scss/home/home-contacts.scss ./src/scss/font.scss ./src/scss/menu.scss ./src/scss/form.scss ./src/scss/modal.scss ./src/scss/home-social.scss ./src/scss/btn.scss ./src/scss/helper.scss ./src/scss/footer.scss ./src/scss/tabs.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
__webpack_require__(/*! ./src/scss/banner.scss */"./src/scss/banner.scss");
__webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");
__webpack_require__(/*! ./src/scss/color.scss */"./src/scss/color.scss");
__webpack_require__(/*! ./src/scss/home/home.scss */"./src/scss/home/home.scss");
__webpack_require__(/*! ./src/scss/home-menu.scss */"./src/scss/home-menu.scss");
__webpack_require__(/*! ./src/scss/home/home-service.scss */"./src/scss/home/home-service.scss");
__webpack_require__(/*! ./src/scss/home/home-city.scss */"./src/scss/home/home-city.scss");
__webpack_require__(/*! ./src/scss/home/home-history.scss */"./src/scss/home/home-history.scss");
__webpack_require__(/*! ./src/scss/home/home-partner.scss */"./src/scss/home/home-partner.scss");
__webpack_require__(/*! ./src/scss/home/home-contacts.scss */"./src/scss/home/home-contacts.scss");
__webpack_require__(/*! ./src/scss/font.scss */"./src/scss/font.scss");
__webpack_require__(/*! ./src/scss/menu.scss */"./src/scss/menu.scss");
__webpack_require__(/*! ./src/scss/form.scss */"./src/scss/form.scss");
__webpack_require__(/*! ./src/scss/modal.scss */"./src/scss/modal.scss");
__webpack_require__(/*! ./src/scss/home-social.scss */"./src/scss/home-social.scss");
__webpack_require__(/*! ./src/scss/btn.scss */"./src/scss/btn.scss");
__webpack_require__(/*! ./src/scss/helper.scss */"./src/scss/helper.scss");
__webpack_require__(/*! ./src/scss/footer.scss */"./src/scss/footer.scss");
module.exports = __webpack_require__(/*! ./src/scss/tabs.scss */"./src/scss/tabs.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map