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

/***/ "./src/app/book.js":
/*!*************************!*\
  !*** ./src/app/book.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bookView\": () => (/* binding */ bookView)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/app/clear.js\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ \"./src/app/listener.js\");\n\n\nfunction bookView() {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearView)();\n  let div = document.getElementById('content');\n  div.innerHTML = '<div class=\"delivery-container\"> <div class=\"nav\"> <div class=\"logo\"> <img src=\"./src/img/logo.png\"></img> </div><div class=\"menu\"></div></div><div class=\"delivery-contents\"> <div class=\"delivery-left\"> <h1>Bookings Currently Closed</h1> <p>Due to renovations taking place, we are currently not accepting any bookings. We will be announcing the grand re-opening soon through our newsletter and social media.</p><h2>Stay In The Know</h2> <div class=\"delivery-newsletter\"> <p>Sign up to our newsletter to be notified when we re-open!<p> <div class=\"delivery-signup\"> <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your email address..\"> <button class=\"sign-up\">Sign Up</button> </div></div></div><div class=\"delivery-right\"> <img class=\"delivery-pic\" src=\"../src/img/restaurant.jpg\"></img> </div></div></div>';\n  (0,_listener__WEBPACK_IMPORTED_MODULE_1__.addListener)();\n}\n\n//# sourceURL=webpack://restaurant/./src/app/book.js?");

/***/ }),

/***/ "./src/app/clear.js":
/*!**************************!*\
  !*** ./src/app/clear.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearView\": () => (/* binding */ clearView)\n/* harmony export */ });\nfunction clearView() {\n  \n  let div = document.getElementById('content');\n  div.innerHTML = '';\n}\n\n//# sourceURL=webpack://restaurant/./src/app/clear.js?");

/***/ }),

/***/ "./src/app/delivery.js":
/*!*****************************!*\
  !*** ./src/app/delivery.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deliveryView\": () => (/* binding */ deliveryView)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/app/clear.js\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ \"./src/app/listener.js\");\n\n\nfunction deliveryView() {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearView)();\n  let div = document.getElementById('content');\n  div.innerHTML = '<div class=\"delivery-container\"> <div class=\"nav\"> <div class=\"logo\"> <img src=\"./src/img/logo.png\"></img> </div><div class=\"menu\"></div></div><div class=\"delivery-contents\"> <div class=\"delivery-left\"> <h1>Delivery Coming Soon</h1> <p>At Glaze we are currently working to ensure that our customers receive the same quality they have come to know and love when ordering takeaway. We appreciate your patience, please check back soon!</p><h2>We Are Partnering With</h2> <div class=\"delivery-partners\"> <img src=\"../src/img/uber-eats.png\"></img> <img src=\"../src/img/deliveroo.png\"></img> <img src=\"../src/img/menulog.png\"></img> </div><div class=\"delivery-newsletter\"> <p>Sign up to our newsletter to be notified when delivery begins!<p> <div class=\"delivery-signup\"> <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your email address..\"> <button class=\"sign-up\">Sign Up</button> </div></div></div><div class=\"delivery-right\"> <img class=\"delivery-pic\" src=\"../src/img/delivery.jpg\"></img> </div></div></div>';\n  (0,_listener__WEBPACK_IMPORTED_MODULE_1__.addListener)();\n}\n\n//# sourceURL=webpack://restaurant/./src/app/delivery.js?");

/***/ }),

/***/ "./src/app/home.js":
/*!*************************!*\
  !*** ./src/app/home.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeView\": () => (/* binding */ homeView)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/app/clear.js\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ \"./src/app/listener.js\");\n\n\nfunction homeView() {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearView)();\n  let div = document.getElementById('content');\n  div.innerHTML = '<div class=\"home-hero\"> <div class=\"nav\"> <div class=\"logo\"> <img src=\"./src/img/logo.png\"></img> </div><div class=\"menu\"></div></div><div class=\"hero-items\"> <h1>Made With Love</h1> <h3>Inspiring taste buds is our business</h3> <button class=\"hero-btn\" id=\"tableBtn\">Book a Table</button> </div></div><div class=\"home-buttons\"> <div class=\"home-container-l\"> <div class=\"home-button-l\" id=\"leftBtn\"> <h2>MENU</h2> <p>View our menu</p></div></div><div class=\"home-container-m\"> <div class=\"home-button-m\" id=\"midBtn\"> <h2>DELIVERY</h2> <p>Enjoy home delivery</p></div></div><div class=\"home-container-r\"> <div class=\"home-button-r\" id=\"rightBtn\"> <h2>RESERVATIONS</h2> <p>Book a table</p></div></div></div>';\n  (0,_listener__WEBPACK_IMPORTED_MODULE_1__.addListener)();\n}\n\n//# sourceURL=webpack://restaurant/./src/app/home.js?");

/***/ }),

/***/ "./src/app/listener.js":
/*!*****************************!*\
  !*** ./src/app/listener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListener\": () => (/* binding */ addListener)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/app/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/app/menu.js\");\n/* harmony import */ var _delivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery */ \"./src/app/delivery.js\");\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book */ \"./src/app/book.js\");\n\n\n\n\n\nfunction addListener() {\n  let homeBtn = document.getElementById('homeBtn');\n  let menuBtn = document.getElementById('menuBtn');\n  let deliveryBtn = document.getElementById('deliveryBtn');\n  let bookBtn = document.getElementById('bookBtn');\n  let tableBtn = document.getElementById('tableBtn');\n  let leftBtn = document.getElementById('leftBtn');\n  let midBtn = document.getElementById('midBtn');\n  let rightBtn = document.getElementById('rightBtn');\n\n  homeBtn.addEventListener(\"click\", _home__WEBPACK_IMPORTED_MODULE_0__.homeView);\n  menuBtn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.menuView);\n  deliveryBtn.addEventListener(\"click\", _delivery__WEBPACK_IMPORTED_MODULE_2__.deliveryView);\n  bookBtn.addEventListener(\"click\", _book__WEBPACK_IMPORTED_MODULE_3__.bookView);\n  tableBtn.addEventListener(\"click\", _book__WEBPACK_IMPORTED_MODULE_3__.bookView);\n  leftBtn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_1__.menuView);\n  midBtn.addEventListener(\"click\", _delivery__WEBPACK_IMPORTED_MODULE_2__.deliveryView);\n  rightBtn.addEventListener(\"click\", _book__WEBPACK_IMPORTED_MODULE_3__.bookView);\n}\n\n//# sourceURL=webpack://restaurant/./src/app/listener.js?");

/***/ }),

/***/ "./src/app/menu.js":
/*!*************************!*\
  !*** ./src/app/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuView\": () => (/* binding */ menuView)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/app/clear.js\");\n/* harmony import */ var _listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener */ \"./src/app/listener.js\");\n\n\nfunction menuView() {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearView)();\n  let div = document.getElementById('content');\n  div.innerHTML = '<div class=\"menu-container\"> <div class=\"nav\"> <div class=\"logo\"> <img src=\"./src/img/logo.png\"></img> </div><div class=\"menu\"></div></div><div class=\"menu-board\"> <div class=\"menu-header\"> <img class=\"logo-dark\" src=\"../src/img/logo-notext-dark.png\"></img> </div><div class=\"menu-left\"> <div class=\"menu-title\"> <h2>Starters</h2> </div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/chips.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Hot Chips</h3> <em>$7</em> </div><p>Hot fried chips goes great with gravy!</p></div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/garlic-bread.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Garlic Bread</h3> <em>$4</em> </div><p>Creamy garlic and cheese on toasted white bread</p></div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/cheese-balls.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Cheese Balls</h3> <em>$8</em> </div><p>Oozing with melted mozzarella in a deep fried ball</p></div><div class=\"menu-title\"> <h2>Beverages</h2> </div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/lemonade.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Lemonade</h3> <em>$3</em> </div><p>Our own fresh made lemonade</p></div></div><div class=\"menu-right\"> <div class=\"menu-title\"> <h2>Mains</h2> </div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/ribeye-steak.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Ribeye Steak</h3> <em>$28</em> </div><p>Prime cut ribeye steak with a side of chips and salad</p></div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/brisket.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Smoked Brisket</h3> <em>$27</em> </div><p>Our famous smoked brisket with a side of chips and coleslaw</p></div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/pork-knuckle.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Pork Knuckle</h3> <em>$25</em> </div><p>Award winning pork knuckle with a side of chips and salad</p></div><div class=\"menu-title\"> <h2>Desserts</h2> </div><div class=\"menu-item\"> <div class=\"menu-item-img\"> <img src=\"../src/img/chocolate-cake.jpg\"></img> </div><div class=\"menu-item-text\"> <h3>Chocolate Fudge Cake</h3> <em>$12</em> </div><p>Delicious tiered chocolate cake with a fudge topping</p></div></div></div></div>';\n  (0,_listener__WEBPACK_IMPORTED_MODULE_1__.addListener)();\n}\n\n//# sourceURL=webpack://restaurant/./src/app/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/home */ \"./src/app/home.js\");\n/* harmony import */ var _app_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/clear */ \"./src/app/clear.js\");\n\n\n\n\n(0,_app_clear__WEBPACK_IMPORTED_MODULE_1__.clearView)();\n(0,_app_home__WEBPACK_IMPORTED_MODULE_0__.homeView)();\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;