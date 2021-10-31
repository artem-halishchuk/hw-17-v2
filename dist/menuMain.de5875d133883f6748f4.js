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

/***/ "./src/app/menuMain.js":
/*!*****************************!*\
  !*** ./src/app/menuMain.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMain)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MenuMain = /*#__PURE__*/function () {\n  function MenuMain(blockInsert, arrElem, removeBlock, container) {\n    _classCallCheck(this, MenuMain);\n\n    this.blockInsert = blockInsert;\n    this.arrElem = arrElem;\n    this.activeElement = null;\n    this.ul = null;\n    this.removeBlock = removeBlock;\n    this.container = container;\n    this.createMenu();\n  }\n\n  _createClass(MenuMain, [{\n    key: \"createMenu\",\n    value: function createMenu() {\n      var _this = this;\n\n      var container = document.createElement('div');\n      container.classList.add(this.container);\n      this.blockInsert.append(container);\n      var formWrapper = document.createElement('div');\n      formWrapper.classList.add('form');\n      container.append(formWrapper);\n      var massageDeactivate = document.createElement('p');\n      massageDeactivate.classList.add('massageDeactivate');\n      massageDeactivate.textContent = 'Клик по полю меню дективирует активный компонент';\n      container.append(massageDeactivate);\n      var input = document.createElement('input');\n      input.placeholder = 'Имя пользователя';\n      input.classList.add('input', 'form-name');\n      formWrapper.append(input);\n      var buttonAdd = document.createElement('button');\n      buttonAdd.classList.add('button', 'form-add');\n      buttonAdd.innerHTML = 'add';\n      formWrapper.append(buttonAdd);\n      buttonAdd.addEventListener('click', function () {\n        if (input.value.trim() === '') {\n          alert('Заполните поле имени.');\n          return;\n        }\n\n        _this.name = input.value;\n\n        _this.createElem();\n\n        input.value = '';\n\n        _this.show(_this.arrElem); //отображение созданого элемента\n\n      });\n      this.ul = document.createElement('ul');\n      this.ul.classList.add('content-list');\n      container.append(this.ul);\n      this.show();\n      this.deactivateElement();\n    }\n  }, {\n    key: \"createElem\",\n    value: function createElem() {\n      this.arrElem.push(new User(this.name, this.arrElem.length));\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      var _this2 = this;\n\n      this.ul.innerHTML = '';\n      if (!this.arrElem) return;\n      this.arrElem.map(function (e, i) {\n        var li = document.createElement('li');\n        li.classList.add('content-item');\n\n        _this2.ul.append(li);\n\n        var buttonShow = document.createElement('button');\n        buttonShow.classList.add('content-item-name');\n        buttonShow.innerHTML = e.name;\n        li.append(buttonShow);\n        li.addEventListener('click', function (event) {\n          if (event.target.matches('.content-item-name-active')) return;\n\n          _this2.activeElem(event.target);\n\n          if (e === _this2.activeElement) buttonShow.classList.add('content-item-name-active');\n        });\n        if (e === _this2.activeElement) buttonShow.classList.add('content-item-name-active');\n        var buttonDelete = document.createElement('button');\n        buttonDelete.classList.add('delete');\n        li.append(buttonDelete);\n        buttonDelete.addEventListener('click', function (event) {\n          event.stopPropagation();\n\n          _this2.deleteElem(event);\n\n          _this2.show();\n\n          if (!event.target.parentNode.firstChild.matches('.content-item-name-active')) return;\n\n          _this2.display();\n        });\n        li.dataset.index = i;\n      });\n    }\n  }, {\n    key: \"activeElem\",\n    value: function activeElem(event) {\n      if (!event) return;\n      var index = event.parentNode.dataset.index;\n      this.activeElement = this.arrElem[index];\n      this.ul.childNodes.forEach(function (e) {\n        e.firstChild.classList.remove('content-item-name-active');\n        if (e.dataset.index === index) e.firstChild.classList.add('content-item-name-active');\n      });\n      this.show();\n      this.display();\n    }\n  }, {\n    key: \"deleteElem\",\n    value: function deleteElem(event) {\n      var index = event.target.parentNode.dataset.index;\n      if (this.arrElem[index] === this.activeElement) this.activeElement = null;\n      this.arrElem.splice(event.target.parentNode.dataset.index, 1);\n\n      if (event.target.parentNode.firstChild.matches('.content-item-name-active')) {\n        if (document.querySelector('.menu-note')) document.querySelector('.menu-note').style.display = 'none';\n      }\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      if (!this.activeElement && document.querySelector(this.removeBlock)) {\n        document.querySelector(this.removeBlock).style.display = 'none';\n      }\n\n      var menuNotes;\n\n      if (this.activeElement) {\n        if (document.querySelector(this.removeBlock)) {\n          document.querySelector(this.removeBlock).remove();\n        }\n\n        menuNotes = new MenuNotes(getBlockApp, this.activeElement.notes, '.menu-note', 'menu-notes');\n        menuNotes.createMenu();\n        menuNotes.display();\n      }\n    }\n  }, {\n    key: \"deactivateElement\",\n    value: function deactivateElement() {\n      var _this3 = this;\n\n      var click = null;\n      document.addEventListener('click', function (event) {\n        click = event.target;\n        if (!click.matches(\".\".concat(_this3.container))) return;\n        _this3.activeElement = null;\n\n        _this3.show();\n\n        _this3.display();\n\n        if (document.querySelector('body .menu-note')) {\n          document.querySelector('.menu-note').style.display = 'none';\n        }\n      });\n    }\n  }]);\n\n  return MenuMain;\n}();\n\n\n\n//# sourceURL=webpack://webpack-example/./src/app/menuMain.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app/menuMain.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;