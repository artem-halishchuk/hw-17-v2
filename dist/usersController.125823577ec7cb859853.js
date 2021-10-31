/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/usersController.js":
/*!************************************!*\
  !*** ./src/app/usersController.js ***!
  \************************************/
/***/ ((module) => {

eval("function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//let bodyParser = require('body-parser');\nmodule.exports = function (app, path) {\n  var jsonParser = bodyParser.json();\n  var controller = new UsersController(path); //app.post('/users', jsonParser, controller.ex.bind(controller));\n\n  app.get('/users', controller.getUsers.bind(controller));\n};\n\nvar User = function User(name) {\n  _classCallCheck(this, User);\n\n  this.name = name;\n  this.notes = [];\n};\n\nvar UsersController = /*#__PURE__*/function () {\n  function UsersController(path) {\n    _classCallCheck(this, UsersController);\n\n    this.path = path;\n    this.users = [];\n  }\n\n  _createClass(UsersController, [{\n    key: \"getUsers\",\n    value: function getUsers(request, response) {\n      response.send([]);\n    }\n  }]);\n\n  return UsersController;\n}(); // let vasia = new User('vasia', 0);\n// let petia = new User('petia55', 1);\n// controller.users.push(vasia);\n// controller.users.push(petia);\n// console.log(controller.users);\n\n//# sourceURL=webpack://webpack-example/./src/app/usersController.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/usersController.js");
/******/ 	
/******/ })()
;