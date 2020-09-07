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

/***/ "./src/arrowQueue.js":
/*!***************************!*\
  !*** ./src/arrowQueue.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ArrowQueue() {\n    this.arrows = [];\n}\n\nArrowQueue.prototype.spawn = function spawn(direction, bpm) {\n    let arrow = {\n        direction: direction,\n        pos: 600,\n        spd: bpm,\n        combo: true\n    }\n    this.arrows.push(arrow);\n\n}\n\nArrowQueue.prototype.move = function move(canvas) {\n    this.arrows.forEach( arrow => {\n        arrow[pos] -= spd;\n        if (arrow[pos] <= 0) {\n            this.arrows.splice(this.arrows.indexOf(arrow),1);\n            //draw 'missed' using context\n        }\n    });\n}\n\nArrowQueue.prototype.judge = function judge(key) {\n\n}\n\n\n\n\nmodule.exports = ArrowQueue;\n\n//# sourceURL=webpack:///./src/arrowQueue.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventListener_Revolution; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n// import nirvana from \"./songs/nirvana\";\n// import hallAndOats from \"./songs/hallAndOats\";\n\n\nclass EventListener_Revolution {\n  constructor(canvas){\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.displayMenu.bind(this);\n    this.displayMenu();\n    \n  }\n  \n  displayMenu(){\n    // this.ctx.fillStyle = \"grey\";\n    // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n    \n    this.ctx.beginPath();\n    this.ctx.rect(250, 350, 200, 100);\n    this.ctx.fillStyle = 'green';\n    this.ctx.fill();\n    this.ctx.lineWidth = 2;\n    this.ctx.strokeStyle = '#000000';\n    this.ctx.stroke();\n    this.ctx.closePath();\n    this.ctx.font = '40pt Kremlin Pro Web';\n    this.ctx.fillStyle = '#222222';\n    this.ctx.fillText('Start', 300, 415);\n    \n    //var canvas = document.getElementById('dance-game');\n  }\n\n  hallAndOats(canvas, eLF){\n    _level__WEBPACK_IMPORTED_MODULE_0__[\"dibujar\"](canvas, eLF);\n\n  }\n  \n\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('dance-game');\n\n\nfunction initButtonTest(evt) {\n    {\n        const offset = canvas.getBoundingClientRect();\n        let rect = {\n            x: 250 + offset.x,\n            y: 350 + offset.y,\n            width: 200,\n            height: 100\n        };\n        const pos = {\n            x: evt.clientX,\n            y: evt.clientY\n        };\n        \n\n        if (pos.x > rect.x &&\n            pos.x < rect.x + rect.width &&\n            pos.y < rect.y + rect.height &&\n            pos.y > rect.y) {\n\n            // alert('clicked inside rect');\n            // console.log(\"Inside\");\n            game.hallAndOats(canvas, initButtonTest, \"testSong\");\n\n        } else {\n            console.log(\"Outside\");\n        }\n    }\n}\n\nlet game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ncanvas.addEventListener( 'click' , initButtonTest);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: dibujar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dibujar\", function() { return dibujar; });\nconst ArrowQueue = __webpack_require__(/*! ./arrowQueue */ \"./src/arrowQueue.js\");\n\nfunction dibujar(canvas, eLF, chosenSong) {\n\n    canvas.removeEventListener( 'click', eLF );\n    let context = canvas.getContext(\"2d\");\n    let newVideo = document.createElement(\"video\");\n    newVideo.id = \"playing\";\n    newVideo.controls = false;\n    newVideo.width = \"800\";\n    newVideo.height = \"600\";\n\n    switch (chosenSong) {\n        default:\n            newVideo.src = \"./dist/assets/songs/danzaKaduro.mp4\";\n    }\n    let parentDiv = document.getElementById(\"theCanvas\");\n    parentDiv.appendChild(newVideo);\n    parentDiv.insertBefore(newVideo, canvas);\n\n    let stageArrow = new Image();\n    let queueArrow = new Image();\n \n    stageArrow.src = \"./dist/assets/arrows/aStage.png\";\n    queueArrow.src = \"./dist/assets/arrows/aNote.png\"\n\n    newVideo.onloadeddata = function () {\n\n        newVideo.play();\n        console.log(Date.now());\n        animate();\n    }\n    \n    var shift = 0;\n    // var frameWidth = 118;\n    // var frameHeight = 118;\n    var totalFrames = 100;\n    // var currentFrame = 0;\n    \n    function animate() {\n        let origin = Date.now();\n        console.log(Date.now() - origin);\n        document.addEventListener(\"keydown\", registerPress);\n        let numColumns = 5;\n        let numRows = 20;\n        let frameWidth = stageArrow.width / numColumns;;\n        let frameHeight = stageArrow.height / numRows;;\n        let currentFrame = 0;\n        let maxFrame = numColumns * numRows - 1;\n        let column = currentFrame % numColumns;\n        let row = Math.floor(currentFrame / numColumns);\n\n        function registerPress(evt) {\n            evt.preventDefault();\n            console.log([(Date.now() - origin) / 1000, evt.key]);\n        }\n        function drawArrow(type, direction, pos = 0) {\n            let arrowParams = [];\n\n            switch (direction) {\n                case \"left\":\n                    arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);\n                    break;\n                case \"down\":\n                    arrowParams.push([335, 69, Math.PI, -66, -59]);\n                    break;\n                case \"up\":\n                    arrowParams.push([400, 10, 0, 0, 0]);\n                    break;\n                default:\n                    arrowParams.push([592, 69, Math.PI / 2, -59, -44]);\n                    break;\n            }\n\n            context.save();\n            context.translate(arrowParams[0][0], arrowParams[0][1]);\n            context.rotate(arrowParams[0][2]);\n            context.translate(arrowParams[0][3], arrowParams[0][4]);\n            context.drawImage(\n                type, column * frameWidth, row * frameHeight,\n                frameWidth, frameHeight, 0, pos, frameWidth, frameHeight);\n            context.restore();\n        }\n\n        let theQueue = new ArrowQueue(context);\n        //timed arrow array\n\n\n        setInterval(function() {\n            console.log((Date.now() - origin) / 1000);\n            // console.log(currentFrame);\n            // Pick a new frame\n            currentFrame++;\n\n            // Make the frames loop\n\n            if (currentFrame > maxFrame){\n                currentFrame = 0;\n            }\n\n            // Update rows and columns\n            column = currentFrame % numColumns;\n            row = Math.floor(currentFrame / numColumns);\n\n            context.clearRect(0, 0, canvas.width, canvas.height);\n\n\n\n            drawArrow(stageArrow, \"left\");\n            drawArrow(stageArrow, \"down\");\n            drawArrow(stageArrow, \"up\");\n            drawArrow(stageArrow, \"right\");\n\n            \n            // context.save();\n            // context.translate(206, 69);\n            // context.rotate(Math.PI*3/2);\n            // context.translate(-59, -42);\n            // context.drawImage(\n            //     stageArrow, column * frameWidth, row * frameHeight,\n            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);\n            // context.restore();\n\n            // context.save();\n            // context.translate(335, 69);\n            // context.rotate(Math.PI);\n            // context.translate(-66, -59);\n            // context.drawImage(\n            //     stageArrow, column * frameWidth, row * frameHeight,\n            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);\n            // context.restore();\n\n            // context.save();\n            // context.translate(400, 10);\n            // context.drawImage(\n            //     stageArrow, column * frameWidth, row * frameHeight,\n            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);\n            // context.restore();\n\n            // context.save();\n            // context.translate(592, 69);\n            // context.rotate(Math.PI / 2);\n            // context.translate(-59, -44);\n            // context.drawImage(\n            //     stageArrow, column * frameWidth, row * frameHeight,\n            //     frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);\n            // context.restore();  \n            \n            // theQueue.forEach( arrow => {\n                \n            // })\n\n\n        }, 15);\n\n\n    }\n\n\n\n}\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });