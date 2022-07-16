/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/basket/basket.ts":
/*!*********************************!*\
  !*** ./src/ts/basket/basket.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketAdd": () => (/* binding */ basketAdd)
/* harmony export */ });
function basketAdd() {
  var item = document.querySelectorAll(".catalog__flex-item");
  var counter = document.querySelector(".basket-num");
  item.forEach(function (element) {
    return element.addEventListener("click", function () {
      if (element.className === "catalog__flex-item") {
        element.classList.add("active");
        var value = counter.innerHTML;
        counter.innerHTML = +value + 1;
      } else {
        element.classList.remove("active");
        var _value = counter.innerHTML;
        counter.innerHTML = _value - 1;
      }
    });
  });
}

/***/ }),

/***/ "./src/ts/createPage/createPage.ts":
/*!*****************************************!*\
  !*** ./src/ts/createPage/createPage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catalog": () => (/* binding */ catalog),
/* harmony export */   "createPage": () => (/* binding */ createPage)
/* harmony export */ });
function createPage() {
  var body = document.querySelector("body");

  if (body) {
    body.innerHTML = "\n        <header class=\"header\">\n          <div class=\"header__flex-container\">\n            <div class=\"header__flex-item__logo\">\n              <div class=\"item__logo-img\"></div>\n              <div class=\"item__logo-title\"> \n                <h1>Online Shop</h1>\n              </div>\n            </div>\n            <div class=\"header__basket\">\n              <img class=\"header__flex-item__basket\" src=\"/src/img/basket.svg\">\n              <div class=\"basket-num\">0</div>\n            </div>\n          </div>\n        </header>\n        <main>\n          <section class=\"filters\">\n          <div class=\"filters__flex-container\">\n            <div class=\"filters__flex-item\">\n              <h3>\u0424\u0438\u043B\u044C\u0442\u0440\u044B \u043F\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044E</h3>\n              <div>\n                <div class=\"filter-brand\">\n                  <span> \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: </span>\n                  <ul class=\"filter-brand__list\">\n                    <button class=\"button btn-brand\" id=\"brand\" value=\"Samsung\">Samsung</button>\n                    <button class=\"button btn-brand\" id=\"brand\" value=\"Apple\">Apple</button>\n                    <button class=\"button btn-brand\" id=\"brand\" value=\"Xiaomi\">Xiaomi</button>\n                  </ul>\n                </div>\n                <div class=\"filter-quantity\">\n                  <span> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043C\u0435\u0440: </span>\n                  <ul class=\"filter-quantity__list\">\n                    <button class=\"button btn-quantity three\" id=\"quantity\" value=\"3\">3</button>\n                    <button class=\"button btn-quantity two\" id=\"quantity\" value=\"2\">2</button>\n                    <button class=\"button btn-quantity one\" id=\"quantity\" value=\"1\">1</button>\n                  </ul>\n                </div>\n                <div class=\"filter-color\">\n                  <span> \u0426\u0432\u0435\u0442: </span>\n                  <ul class=\"filter-color__list\">\n                    <button class=\"filter-color__button type-white\" id=\"color\" value=\"\u0431\u0435\u043B\u044B\u0439\"></button>\n                    <button class=\"filter-color__button type-yellow\" id=\"color\" value=\"\u0436\u0435\u043B\u0442\u044B\u0439\"></button>\n                    <button class=\"filter-color__button type-red\" id=\"color\" value=\"\u043A\u0440\u0430\u0441\u043D\u044B\u0439\"></button>\n                  </ul>\n                </div>\n                <div class=\"filter-favorite\">\n                  <span> \u0422\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435: </span>\n                  <button class=\"filter-favorite__button\" id=\"favorite\" value=\"true\"></button>\n                </div>\n              </div>\n            </div>\n            <div class=\"filters__flex-item\" id=\"price\">\n              <div class=\"wrapper\">\n                <header>\n                <h2>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435:</h2>\n                </header>\n                <div class=\"price-input\">\n                  <div class=\"field\">\n                    <span>Min</span>\n                    <input type=\"number\" class=\"input-min\" value=\"0\">\n                  </div>\n                  <div class=\"separator\">-</div>\n                  <div class=\"field\">\n                  <span>Max</span>\n                  <input type=\"number\" class=\"input-max\" value=\"10\">\n                  </div>\n                </div>\n                <div class=\"slider\">\n                  <div class=\"progress\"></div>\n                </div>\n                <div class=\"range-input\">\n                  <input type=\"range\" class=\"range-min\" min=\"0\" max=\"10\" value=\"0\" step=\"1\">\n                  <input type=\"range\" class=\"range-max\" min=\"0\" max=\"10\" value=\"10\" step=\"1\">\n                </div>\n              </div>\n              <div class=\"wrapper\">\n                <header>\n                <h2>\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0430 \u0440\u044B\u043D\u043E\u043A:</h2>\n                </header>\n                <div class=\"price-input-num\">\n                  <div class=\"field\">\n                    <span>Min</span>\n                    <input type=\"number\" class=\"input-min\" value=\"2000\">\n                  </div>\n                  <div class=\"separator\">-</div>\n                  <div class=\"field\">\n                  <span>Max</span>\n                  <input type=\"number\" class=\"input-max\" value=\"2022\">\n                  </div>\n                </div>\n                <div class=\"slider-num\">\n                  <div class=\"progress\"></div>\n                </div>\n                <div class=\"range-input-num\">\n                  <input type=\"range\" class=\"range-min\" min=\"2000\" max=\"2022\" value=\"2000\" step=\"1\">\n                  <input type=\"range\" class=\"range-max\" min=\"2000\" max=\"2022\" value=\"2022\" step=\"1\">\n                </div>\n              </div>\n            </div>\n            <div class=\"filters__flex-item\">\n              <h3>\u041F\u043E\u0438\u0441\u043A</h3>\n              <input class=\"search\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\" type=\"text\" value></input>\n              <div class=\"reset\">\n                <button class=\"reset__filters\">\u0421\u0431\u0440\u043E\u0441 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432</button>\n                <button class=\"reset__setting\">\u0421\u0431\u0440\u043E\u0441 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A</button>\n              </div>\n            </div>\n          </div>\n          </section>\n          <section class=\"catalog\">\n            <div class=\"catalog__flex-container\"></div>\n          </section>\n        </main>\n      ";
  }
}
function catalog(data) {
  var catalogFlexContainer = document.querySelector(".catalog__flex-container");

  if (catalogFlexContainer) {
    catalogFlexContainer.innerHTML = data.map(function (_ref) {
      var color = _ref.color,
          name = _ref.name,
          shape = _ref.shape,
          year = _ref.year,
          favorite = _ref.favorite,
          num = _ref.num,
          size = _ref.size;
      return "\n            <div class=\"catalog__flex-item\">\n            <h4>".concat(name, "</h4>\n            <div class=\"flex-item__img-container\">\n              <img class=\"item__img\">\n            </div>\n            <ul class=\"flex-item__list\">\n              <li> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(num, " </li>\n              <li> \u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430: ").concat(year, "</li>\n              <li> \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ").concat(shape, "</li>\n              <li> \u0426\u0432\u0435\u0442: ").concat(color, "</li>\n              <li> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043C\u0435\u0440: ").concat(size, "</li>\n              <li> \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439: ").concat(favorite === "false" ? "нет" : "да", "</li>\n            </ul>\n            </div>\n            ");
    }).join("");
  }
}

/***/ }),

/***/ "./src/ts/data/data.ts":
/*!*****************************!*\
  !*** ./src/ts/data/data.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
var data = [{
  num: 1,
  name: "Samsung Galaxy S21",
  quantity: "2",
  year: 2019,
  shape: "Samsung",
  color: "белый",
  size: "3",
  favorite: "false"
}, {
  num: 2,
  name: "Samsung Galaxy A03",
  quantity: "5",
  year: 2000,
  shape: "Samsung",
  color: "красный",
  size: "2",
  favorite: "false"
}, {
  num: 3,
  name: "Samsung Galaxy S20",
  quantity: "3",
  year: 2022,
  shape: "Samsung",
  color: "желтый",
  size: "1",
  favorite: "false"
}, {
  num: 4,
  name: "Xiaomi Poco X4 pro",
  quantity: "1",
  year: 2014,
  shape: "Xiaomi",
  color: "желтый",
  size: "2",
  favorite: "false"
}, {
  num: 5,
  name: "Xiaomi Redmi Note 11",
  quantity: "4",
  year: 2012,
  shape: "Xiaomi",
  color: "белый",
  size: "1",
  favorite: "true"
}, {
  num: 6,
  name: "Xiaomi Redmi 9C 3/64gb",
  quantity: "6",
  year: 2010,
  shape: "Xiaomi",
  color: "красный",
  size: "2",
  favorite: "false"
}, {
  num: 7,
  name: "Apple iPhone 11",
  quantity: "12",
  year: 2018,
  shape: "Apple",
  color: "белый",
  size: "3",
  favorite: "true"
}, {
  num: 8,
  name: "Apple iPhone 13",
  quantity: "10",
  year: 2009,
  shape: "Apple",
  color: "красный",
  size: "3",
  favorite: "false"
}, {
  num: 9,
  name: "Apple iPhone 12",
  quantity: "2",
  year: 2010,
  shape: "Apple",
  color: "желтый",
  size: "3",
  favorite: "false"
}, {
  num: 10,
  name: "Apple iPhone SE",
  quantity: "7",
  year: 2004,
  shape: "Apple",
  color: "белый",
  size: "1",
  favorite: "false"
}];

/***/ }),

/***/ "./src/ts/filters/filters.ts":
/*!***********************************!*\
  !*** ./src/ts/filters/filters.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filters": () => (/* binding */ filters)
/* harmony export */ });
/* harmony import */ var _slider_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slider/slider */ "./src/ts/slider/slider.ts");
/* harmony import */ var _createPage_createPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createPage/createPage */ "./src/ts/createPage/createPage.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ "./src/ts/data/data.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function filters() {
  var filters = document.querySelector(".filter-color__list");
  filters.addEventListener("click", filterGoods);
  var quantity = document.querySelector(".filter-quantity");
  quantity.addEventListener("click", filterGoods);
  var brand = document.querySelector(".filter-brand");
  brand.addEventListener("click", filterGoods);
  var favorite = document.querySelector(".filter-favorite");
  favorite.addEventListener("click", filterGoods);
  var price = document.querySelector("#price");
  price.addEventListener("input", filterGoods);
  var search = document.querySelector(".search");
  search.addEventListener("input", filterGoods);

  function filterGoods(event) {
    var point = event.target;
    point.classList.toggle("active");

    var sizes = _toConsumableArray(document.querySelectorAll("#color.active")).map(function (element) {
      return element.value;
    });

    var numbers = _toConsumableArray(document.querySelectorAll("#quantity.active")).map(function (element) {
      return element.value;
    });

    var brandAll = _toConsumableArray(document.querySelectorAll("#brand.active")).map(function (element) {
      return element.value;
    });

    var favoriteAll = _toConsumableArray(document.querySelectorAll("#favorite.active")).map(function (element) {
      return element.value;
    });

    var searchValue = search === null || search === void 0 ? void 0 : search.value;
    console.log(searchValue);
    var resSlider = (0,_slider_slider__WEBPACK_IMPORTED_MODULE_0__.slider)();
    var minNum = resSlider[0];
    var maxNum = resSlider[1];
    var minYear = resSlider[2];
    var maxYear = resSlider[3];
    (0,_createPage_createPage__WEBPACK_IMPORTED_MODULE_1__.catalog)(_data_data__WEBPACK_IMPORTED_MODULE_2__.data.filter(function (_ref) {
      var color = _ref.color,
          size = _ref.size,
          shape = _ref.shape,
          favorite = _ref.favorite,
          num = _ref.num,
          year = _ref.year,
          name = _ref.name;
      return (!sizes.length || sizes.includes(color)) && (!numbers.length || numbers.includes(size)) && (!brandAll.length || brandAll.includes(shape)) && (!favoriteAll.length || favoriteAll.includes(favorite)) && (!minNum || minNum <= num) && (!maxNum || maxNum >= num) && (!minYear || minYear <= year) && (!maxYear || maxYear >= year) && (!searchValue || name.includes(searchValue));
    }));
  }
}

/***/ }),

/***/ "./src/ts/reset/reset.ts":
/*!*******************************!*\
  !*** ./src/ts/reset/reset.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _createPage_createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createPage/createPage */ "./src/ts/createPage/createPage.ts");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ "./src/ts/data/data.ts");


function reset() {
  var filtersWhite = document.querySelector(".filter-color__button.type-white.active");
  var filtersYellow = document.querySelector(".filter-color__button.type-yellow.active");
  /*const filtersRed: any = document.querySelector(
    ".filter-color__button.type-red.active"
  );*/

  filtersWhite.classList.remove("active");
  filtersYellow.classList.remove("active"); //filtersRed.classList.remove("active");

  (0,_createPage_createPage__WEBPACK_IMPORTED_MODULE_0__.catalog)(_data_data__WEBPACK_IMPORTED_MODULE_1__.data);
}

/***/ }),

/***/ "./src/ts/slider/slider.ts":
/*!*********************************!*\
  !*** ./src/ts/slider/slider.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function slider() {
  var rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
  var priceGap = 1;
  var rangeInputNum = document.querySelectorAll(".range-input-num input"),
      priceInputNum = document.querySelectorAll(".price-input-num input"),
      rangeNum = document.querySelector(".slider-num .progress");
  var priceGapNum = 1;

  var resPrice = _toConsumableArray(priceInput).map(function (input) {
    input.addEventListener("input", function (e) {
      var minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = minPrice / rangeInput[0].max * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - maxPrice / rangeInput[1].max * 100 + "%";
        }
      }
    });
  });

  var resRange = _toConsumableArray(rangeInput).map(function (input) {
    //input.addEventListener("input", (e: any) => {
    var minVal = parseInt(rangeInput[0].value);
    var maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = minVal / rangeInput[0].max * 100 + "%";
      range.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
    }

    var newLocal = [minVal, maxVal];
    return newLocal; //});
  });

  var min = resRange[0][0];
  var max = resRange[1][1];

  var resPriceNum = _toConsumableArray(priceInputNum).map(function (input) {
    input.addEventListener("input", function (e) {
      var minPriceNum = parseInt(priceInputNum[0].value),
          maxPriceNum = parseInt(priceInputNum[1].value);

      if (maxPriceNum - minPriceNum >= priceGapNum && maxPriceNum <= rangeInputNum[1].max) {
        if (e.target.className === "input-min") {
          rangeInputNum[0].value = minPriceNum;
          rangeNum.style.left = minPriceNum / rangeInputNum[0].max * 10 + "%";
        } else {
          rangeInputNum[1].value = maxPriceNum;
          rangeNum.style.right = 10 - maxPriceNum / rangeInputNum[1].max * 10 + "%";
        }
      }
    });
  });

  var resRangeNum = _toConsumableArray(rangeInputNum).map(function (input) {
    //input.addEventListener("input", (e: any) => {
    var minVal = parseInt(rangeInputNum[0].value);
    var maxVal = parseInt(rangeInputNum[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInputNum[0].value = maxVal - priceGap;
      } else {
        rangeInputNum[1].value = minVal + priceGap;
      }
    } else {
      priceInputNum[0].value = minVal;
      priceInputNum[1].value = maxVal;
      rangeNum.style.left = (minVal - 2000) / (rangeInputNum[0].max - 2000) * 100 + "%";
      rangeNum.style.right = 100 - (maxVal - 2000) / (rangeInputNum[1].max - 2000) * 100 + "%";
    }

    var newLocal = [minVal, maxVal];
    return newLocal; //});
  });

  var minNum = resRangeNum[0][0];
  var maxNum = resRangeNum[1][1];
  return [min, max, minNum, maxNum];
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_createPage_createPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/createPage/createPage */ "./src/ts/createPage/createPage.ts");
/* harmony import */ var _ts_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/data/data */ "./src/ts/data/data.ts");
/* harmony import */ var _ts_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/filters/filters */ "./src/ts/filters/filters.ts");
/* harmony import */ var _ts_basket_basket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/basket/basket */ "./src/ts/basket/basket.ts");
/* harmony import */ var _ts_reset_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/reset/reset */ "./src/ts/reset/reset.ts");





(0,_ts_createPage_createPage__WEBPACK_IMPORTED_MODULE_0__.createPage)();
(0,_ts_filters_filters__WEBPACK_IMPORTED_MODULE_2__.filters)();
(0,_ts_createPage_createPage__WEBPACK_IMPORTED_MODULE_0__.catalog)(_ts_data_data__WEBPACK_IMPORTED_MODULE_1__.data);
(0,_ts_basket_basket__WEBPACK_IMPORTED_MODULE_3__.basketAdd)();

var resetBtn = document.querySelector(".reset__filters");
resetBtn.addEventListener("click", _ts_reset_reset__WEBPACK_IMPORTED_MODULE_4__.reset);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************!*\
  !*** ./src/sass/global.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map