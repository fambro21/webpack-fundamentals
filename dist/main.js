/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util.js"
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
(module) {

module.exports = {
  log: (message) => {
    console.log(message);
  },
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(function () {
  const util = __webpack_require__(/*! ./util */ "./src/util.js");
  const cart = [];

  function addToCart(item) {
    cart.push(item);
    util.log("added new item: " + item);
  }

  function removeFromCart(idx) {
    cart.splice(idx, 1);
    util.log("removed: ", idx);
  }

  addToCart("Waterproof Boots");
})();

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
const util = __webpack_require__(/*! ./util */ "./src/util.js");

function notificationRegister(email) {
  util.log("registering " + email);
  // send registration HTTP request
}

notificationRegister("joe@joe.com");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7OztBQzVCQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7OztBQ2ZELGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWZ1bmRhbWVudGFscy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZnVuZGFtZW50YWxzLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvZzogKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuICBjb25zdCBjYXJ0ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkVG9DYXJ0KGl0ZW0pIHtcbiAgICBjYXJ0LnB1c2goaXRlbSk7XG4gICAgdXRpbC5sb2coXCJhZGRlZCBuZXcgaXRlbTogXCIgKyBpdGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGlkeCkge1xuICAgIGNhcnQuc3BsaWNlKGlkeCwgMSk7XG4gICAgdXRpbC5sb2coXCJyZW1vdmVkOiBcIiwgaWR4KTtcbiAgfVxuXG4gIGFkZFRvQ2FydChcIldhdGVycHJvb2YgQm9vdHNcIik7XG59KSgpO1xuIiwiY29uc3QgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvblJlZ2lzdGVyKGVtYWlsKSB7XG4gIHV0aWwubG9nKFwicmVnaXN0ZXJpbmcgXCIgKyBlbWFpbCk7XG4gIC8vIHNlbmQgcmVnaXN0cmF0aW9uIEhUVFAgcmVxdWVzdFxufVxuXG5ub3RpZmljYXRpb25SZWdpc3RlcihcImpvZUBqb2UuY29tXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9