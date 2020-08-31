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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventListener_Revolution; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n// import nirvana from \"./songs/nirvana\";\n// import hallAndOats from \"./songs/hallAndOats\";\n\n\nclass EventListener_Revolution {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.displayMenu.bind(this);\n    this.displayMenu();\n    \n  }\n  \n  displayMenu(){\n    this.ctx.fillStyle = \"yellow\";\n    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    this.ctx.beginPath();\n    this.ctx.rect(250, 350, 200, 100);\n    this.ctx.fillStyle = 'green';\n    this.ctx.fill();\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeStyle = '#000000';\n    this.ctx.stroke();\n    this.ctx.closePath();\n    this.ctx.font = '40pt Kremlin Pro Web';\n    this.ctx.fillStyle = '#222222';\n    this.ctx.fillText('Start', 300, 415);\n    \n    //var canvas = document.getElementById('dance-game');\n  }\n\n  hallAndOats(canvas){\n    _level__WEBPACK_IMPORTED_MODULE_0__[\"dibujar\"](canvas);\n\n  }\n  \n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('dance-game');\n\n\nfunction initButtonTest(evt) {\n    {\n        const offset = canvas.getBoundingClientRect();\n        let rect = {\n            x: 250 + offset.x,\n            y: 350 + offset.y,\n            width: 200,\n            height: 100\n        };\n        const pos = {\n            x: evt.clientX,\n            y: evt.clientY\n        };\n        \n        // console.log(offset);\n        // console.log(rect);\n        // console.log(pos);\n\n        if (pos.x > rect.x &&\n            pos.x < rect.x + rect.width &&\n            pos.y < rect.y + rect.height &&\n            pos.y > rect.y) {\n\n            // alert('clicked inside rect');\n            // console.log(\"Inside\");\n            game.hallAndOats(canvas);\n\n        } else {\n            // alert('clicked outside rect');\n            console.log(\"Outside\");\n        }\n    }\n}\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener( 'click' , initButtonTest);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: dibujar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dibujar\", function() { return dibujar; });\nfunction dibujar(canvas) {\n\n    let arrowLeft = new Image();\n    let arrowDown = new Image();\n    let arrowUp = new Image();\n    let arrowRight = new Image();\n\n    arrowLeft.src = \"./dist/assets/arrows/aStage3.png\"\n    // arrowDown.src = \"../dist/aStage2.png\"\n    // arrowUp.src = \"../dist/aStage3.png\"\n    // arrowRight.src = \"../dist/aStage4.png\"\n\n    arrowLeft.addEventListener(\"load\", loadImage, false);\n    // arrowDown.addEventListener(\"load\", loadImage, false);\n    // arrowUp.addEventListener(\"load\", loadImage, false);\n    // arrowRight.addEventListener(\"load\", loadImage, false);\n\n    let context = canvas.getContext(\"2d\");\n\n    function loadImage(evt) {\n        animate();\n    }\n    \n    var shift = 0;\n    // var frameWidth = 118;\n    // var frameHeight = 118;\n    var totalFrames = 100;\n    // var currentFrame = 0;\n    \n    function animate() {\n        // Define the number of columns and rows in the sprite\n        let numColumns = 5;\n        let numRows = 20;\n\n        // Define the size of a frame\n        let frameWidth = arrowLeft.width / numColumns;;\n        let frameHeight = arrowLeft.height / numRows;;\n\n        // The sprite image frame starts from 0\n        let currentFrame = 0;\n\n        setInterval(function()\n        {\n            console.log(currentFrame);\n            // Pick a new frame\n            currentFrame++;\n\n            // Make the frames loop\n            let maxFrame = numColumns * numRows - 1;\n            if (currentFrame > maxFrame){\n                currentFrame = 0;\n            }\n\n            // Update rows and columns\n            let column = currentFrame % numColumns;\n            let row = Math.floor(currentFrame / numColumns);\n\n            // Clear and draw\n            // context.clearRect(0, 0, canvas.width, canvas.height);\n            context.drawImage(arrowLeft, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);\n\n        //Wait for next step in the loop\n        }, 30);\n\n        // context.clearRect(120, 25, 300, 300);\n    \n        //draw each frame + place them in the middle\n        // context.drawImage(arrowLeft, shift, 0, frameWidth, frameHeight,\n        //                 120, 25, frameWidth, frameHeight);\n    \n        // shift += frameWidth + 1;\n    \n        // if (currentFrame == totalFrames) {\n        // shift = 0;\n        // currentFrame = 0;\n        // }\n        // currentFrame++;\n        \n        // requestAnimationFrame(animate);\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });