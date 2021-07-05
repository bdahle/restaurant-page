/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homeComponent.js":
/*!******************************!*\
  !*** ./src/homeComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\n\nfunction homeComponent() {\n  // const content = document.getElementById(\"content\");\n\n  const tab = document.createElement(\"div\");\n  const introduction = document.createElement(\"p\");\n  const image = document.createElement(\"img\");\n\n  introduction.innerHTML =\n    \"Hos Ristorante Fantastico lager vi autentisk italiensk mat med en moderne vri.\";\n  image.src = _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  tab.appendChild(introduction);\n  tab.appendChild(image);\n  // content.appendChild(tab);\n\n  return tab;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/homeComponent.js?");

/***/ }),

/***/ "./src/images/lasagna.jpg":
/*!********************************!*\
  !*** ./src/images/lasagna.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cef985337a2f10c87c34.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lasagna.jpg?");

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43a48feed9acac019273.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pasta.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31ead191fa44a9c548ae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0996ac1fa46030ac1235.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeComponent */ \"./src/homeComponent.js\");\n/* harmony import */ var _menuComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuComponent */ \"./src/menuComponent.js\");\n\n\n\nconst header = document.createElement(\"div\");\nheader.id = \"header\";\ndocument.body.appendChild(header);\n\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"Ristorante Fantastico\";\nheader.appendChild(headline);\n\nconst tabSwitcher = document.createElement(\"div\");\nconst homeButton = document.createElement(\"button\");\nhomeButton.addEventListener(\"click\", function () {\n  currentTab.innerHTML = \"\";\n  currentTab.appendChild((0,_homeComponent__WEBPACK_IMPORTED_MODULE_0__.default)());\n});\nconst menuButton = document.createElement(\"button\");\nmenuButton.addEventListener(\"click\", function () {\n  currentTab.innerHTML = \"\";\n  currentTab.appendChild((0,_menuComponent__WEBPACK_IMPORTED_MODULE_1__.default)());\n});\nhomeButton.innerHTML = \"Hjem\";\nmenuButton.innerHTML = \"Meny\";\ntabSwitcher.appendChild(homeButton);\ntabSwitcher.appendChild(menuButton);\n\nheader.appendChild(tabSwitcher);\n\nconst currentTab = document.createElement(\"div\");\ncurrentTab.id = \"currentTab\";\ndocument.body.appendChild(currentTab);\n\ncurrentTab.appendChild((0,_homeComponent__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuComponent.js":
/*!******************************!*\
  !*** ./src/menuComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pasta.jpg */ \"./src/images/pasta.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/lasagna.jpg */ \"./src/images/lasagna.jpg\");\n\n\n\n\nfunction createMenuItem(name, image) {\n  const menuItem = document.createElement(\"div\");\n  const nameElement = document.createElement(\"p\");\n  const imageElement = document.createElement(\"img\");\n\n  nameElement.innerHTML = name;\n  imageElement.src = image;\n\n  menuItem.appendChild(nameElement);\n  menuItem.appendChild(imageElement);\n  return menuItem;\n}\n\nfunction menuComponent() {\n  const menu = document.createElement(\"div\");\n\n  menu.appendChild(createMenuItem(\"Pasta Straordinaria\", _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__));\n  menu.appendChild(createMenuItem(\"Pizza Eccezionale\", _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__));\n  menu.appendChild(createMenuItem(\"Lasagna Fenomenale\", _images_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__));\n\n  return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuComponent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;