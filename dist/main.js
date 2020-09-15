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

/***/ "./src/arrowArrays/soldTheWorld.js":
/*!*****************************************!*\
  !*** ./src/arrowArrays/soldTheWorld.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet soldTheWorld = [];\n\nsoldTheWorld = soldTheWorld.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\nsoldTheWorld = soldTheWorld.concat(\n    [[12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"],\n    [12345, \"ArrowRight\"], [13345, \"ArrowRight\"], [14345, \"ArrowRight\"]]\n);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (soldTheWorld);\n\n//# sourceURL=webpack:///./src/arrowArrays/soldTheWorld.js?");

/***/ }),

/***/ "./src/arrowQueue.js":
/*!***************************!*\
  !*** ./src/arrowQueue.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ArrowQueue(context) {\n    this.arrows = [];\n}\n\nArrowQueue.prototype.spawn = function spawn(direction, bpm) {\n    let arrow = {\n        direction: direction,\n        pos: 600,\n        spd: bpm / 4,\n        combo: true\n    }\n    this.arrows.push(arrow);\n\n}\n\nArrowQueue.prototype.move = function move(context) {\n    if (this.arrows[0]) {\n        this.arrows.forEach( arrow => {\n            arrow.pos -= arrow.spd;\n            if (arrow.pos <= -100) {\n                // debugger;\n                this.arrows.splice(this.arrows.indexOf(arrow),1);\n                //draw 'missed' using context\n            }\n        });\n    }\n}\n\nArrowQueue.prototype.judge = function judge(key) {\n\n}\n\n\n\n\nmodule.exports = ArrowQueue;\n\n//# sourceURL=webpack:///./src/arrowQueue.js?");

/***/ }),

/***/ "./src/game_util.js":
/*!**************************!*\
  !*** ./src/game_util.js ***!
  \**************************/
/*! exports provided: screenFade, playSelectMusic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"screenFade\", function() { return screenFade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playSelectMusic\", function() { return playSelectMusic; });\nfunction screenFade() {\n  let bgFade = document.createElement(\"div\");\n  bgFade.id = \"fader\";\n  document.getElementById(\"gameScreen\").appendChild(bgFade);\n}\n\nfunction playSelectMusic() {\n  let fXSelectMusic = document.createElement(\"audio\");\n  fXSelectMusic.id = \"fXSelectMusic\";\n  fXSelectMusic.src = \"./dist/assets/sounds/selectMusic.ogg\";\n  document.getElementById(\"gameScreen\").appendChild(fXSelectMusic);\n  fXSelectMusic.play();\n  fXSelectMusic.addEventListener(\"ended\", function() {\n      fXSelectMusic.remove();\n  }, {once: true} );\n}\n\n// import * as level_util from \"./level\";\n\n// export default class EventListener_Revolution {\n//   constructor(canvas){\n//     this.ctx = canvas.getContext(\"2d\");\n//     this.dimensions = { width: canvas.width, height: canvas.height };\n//     this.displayMenu.bind(this);\n//     this.displayMenu();\n    \n//   }\n  \n//   displayMenu(){\n\n//     this.ctx.beginPath();\n//     this.ctx.rect(250, 350, 200, 100);\n//     this.ctx.fillStyle = 'green';\n//     this.ctx.fill();\n//     this.ctx.lineWidth = 2;\n//     this.ctx.strokeStyle = '#000000';\n//     this.ctx.stroke();\n//     this.ctx.closePath();\n//     this.ctx.font = '40pt Kremlin Pro Web';\n//     this.ctx.fillStyle = '#222222';\n//     this.ctx.fillText('Start', 300, 415);\n    \n//     //var canvas = document.getElementById('dance-game');\n\n//   }\n\n//   play(canvas, eLF, chosenSong){ level_util.dibujar(canvas, eLF, chosenSong); }\n  \n// }\n\n\n//# sourceURL=webpack:///./src/game_util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_util */ \"./src/game_util.js\");\n/* harmony import */ var _songList_v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./songList_v1 */ \"./src/songList_v1.js\");\n\n\n\nlet parentDiv = document.getElementById(\"gameScreen\");\n\nlet fXSelect = document.createElement(\"audio\");\nfXSelect.id = \"fXSelect\";\nfXSelect.src = \"./dist/assets/sounds/select.ogg\";\ndocument.getElementById(\"audioChannel\").appendChild(fXSelect);\nfXSelect.addEventListener(\"ended\", function () { fXSelect.load(); });\n\nlet introText1 = document.createElement(\"div\");\nintroText1.id = \"theIntro1\";\nintroText1.innerText = \"eventListener Revolution\";\n\nlet introText2 = document.createElement(\"div\");\nintroText2.id = \"theIntro2\";\nintroText2.innerText = \"click to begin\";\n\nsetTimeout(function () { parentDiv.appendChild(introText1); }, 1500);\nsetTimeout(function () { parentDiv.appendChild(introText2); }, 4500);\nparentDiv.addEventListener('click', loadMenu, {once: true} );\n\n\nfunction loadMenu(evt = null) {\n    fXSelect.play();\n    _game_util__WEBPACK_IMPORTED_MODULE_0__[\"screenFade\"]();\n    setTimeout( function() {\n        if (introText1) { introText1.remove(); }\n        if (introText2) { introText2.remove(); }\n        _game_util__WEBPACK_IMPORTED_MODULE_0__[\"playSelectMusic\"]();\n        let bgSongList = document.createElement(\"img\");\n        bgSongList.id = \"menuBackground\"\n        bgSongList.src = \"./dist/assets/gui/bg.png\";\n        parentDiv.appendChild(bgSongList);\n        bgSongList.addEventListener( \"animationend\", () => {\n            Object(_songList_v1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentDiv)}, {once: true} \n        );\n\n    }, 2000);\n\n}\n\n\n    // setTimeout(() => {\n    //     trackList.forEach((track) => {\n    //         debugger\n    //         track.className = \"trackSelectable\";\n    //     });\n    // })\n\n\n// Testing Codes\n\n{/* <script>\nvar currentPlayer;\nfunction EvalSound(soundobj) {\n\n var thissound=document.getElementById(soundobj);\n if(currentPlayer  && currentPlayer != thissound) {\n  currentPlayer.pause(); \n }\n if (thissound.paused)\n        thissound.play();\n    else\n    thissound.pause();\n    thissound.currentTime = 0;\n     currentPlayer = thissound;\n}\n</script> */}\n\n// function initButtonTest(evt) {\n//     fXSelect.play();\n//     const offset = canvas.getBoundingClientRect();\n//     let rect = {\n//         x: 250 + offset.x,\n//         y: 350 + offset.y,\n//         width: 200,\n//         height: 100\n//     };\n//     const pos = {\n//         x: evt.clientX,\n//         y: evt.clientY\n//     };\n    \n\n//     if (pos.x > rect.x &&\n//         pos.x < rect.x + rect.width &&\n//         pos.y < rect.y + rect.height &&\n//         pos.y > rect.y) {\n\n\n//         game.play(canvas, initButtonTest, \"testSong\");\n\n//     } else {\n//         console.log(\"Outside\");\n//     }\n// }\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dibujar; });\nconst ArrowQueue = __webpack_require__(/*! ./arrowQueue */ \"./src/arrowQueue.js\");\nconst soldTheWorld = __webpack_require__(/*! ./arrowArrays/soldTheWorld */ \"./src/arrowArrays/soldTheWorld.js\");\n\nfunction dibujar(canvas, eLF, chosenSong) {\n    \n    canvas.removeEventListener( 'click', eLF );\n    let context = canvas.getContext(\"2d\");\n    let particles = [];\n    let newVideo = document.createElement(\"video\");\n    newVideo.id = \"playing\"; newVideo.controls = false;\n    newVideo.muted = false;\n    newVideo.width = \"800\";\n    newVideo.height = \"600\";\n    let speed = 0;\n    let stageQueue = [];\n\n    switch (chosenSong) {\n        default:\n            newVideo.src = \"./dist/assets/songs/hallAndOats.mp4\";\n            stageQueue = soldTheWorld.default;\n            speed = 20;\n            break;\n    }\n\n    stageQueue.forEach( note => { note[0] -= 2700; })\n\n    let parentDiv = document.getElementById(\"theCanvas\");\n    parentDiv.appendChild(newVideo);\n    parentDiv.insertBefore(newVideo, canvas);\n    let stageArrow = new Image();\n    let queueArrow = new Image();\n    stageArrow.src = \"./dist/assets/gui/arrows/aStage.png\";\n    queueArrow.src = \"./dist/assets/gui/arrows/aNote.png\";\n\n    newVideo.play();\n    \n\n    function Particle( x, y ) {\n        this.x = x;\n        this.y = y;\n        this.coordinates = [];\n        this.coordinateCount = 7;\n        while( this.coordinateCount-- ) {\n            this.coordinates.push( [ this.x, this.y ] );\n        }\n\n        this.angle = Math.random() * Math.PI * 2;\n        this.speed = 1 + Math.random() * 9 ;\n        this.friction = 0.95;\n        this.gravity = 1;\n        this.hue = 70 + Math.random() * 100;\n        this.brightness = 50 + Math.random() * 30\n        this.alpha = 1;\n        this.decay = 0.015 + Math.random() * 0.015;\n    }\n\n    Particle.prototype.update = function( index ) {\n        this.coordinates.pop();\n        this.coordinates.unshift( [ this.x, this.y ] );\n        this.speed *= this.friction;\n        this.x += Math.cos( this.angle ) * this.speed;\n        this.y += Math.sin( this.angle ) * this.speed + this.gravity;\n        this.alpha -= this.decay;\n        if( this.alpha <= this.decay ) { particles.splice( index, 1 ); }\n    }\n\n    Particle.prototype.draw = function() {\n        context.beginPath();\n        context.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], \n            this.coordinates[ this.coordinates.length - 1 ][ 1 ] );\n        context.lineTo( this.x, this.y );\n        context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' \n            + this.brightness + '%, ' + this.alpha + ')';\n        context.stroke();\n    }\n\n    function createParticles( x, y ) {\n        var particleCount = 30;\n        while( particleCount-- ) { \n            particles.push( \n                new Particle( x, y ) \n            ); \n        }\n    }\n\n    newVideo.onplaying = function () { console.log(Date.now()); animate(); }    \n    \n    function animate() {\n        let theQueue = new ArrowQueue(context);\n        let origin = Date.now();\n        console.log(Date.now() - origin);\n        document.addEventListener(\"keydown\", registerPress);\n        let numColumns = 5;\n        let numRows = 20;\n        let frameWidth = stageArrow.width / numColumns;;\n        let frameHeight = stageArrow.height / numRows;;\n        let currentFrame = 0;\n        let maxFrame = numColumns * numRows - 1;\n        let column = currentFrame % numColumns;\n        let row = Math.floor(currentFrame / numColumns);\n\n        function registerPress(evt) {\n            evt.preventDefault();\n            switch (evt.key) {\n                case \"ArrowLeft\": createParticles(218, 69); break;\n                case \"ArrowDown\": createParticles(342, 69); break;\n                case \"ArrowUp\": createParticles(458, 69); break;\n                case \"ArrowRight\": createParticles(587, 69); break;\n                default: break;\n            }\n            console.log([(Date.now() - origin) / 1000, evt.key]);\n        }\n\n\n        function drawGameObject(type, direction, pos = 0) {\n            if (type === \"stageArrow\" || \"queueArrow\") {\n                let arrowParams = [];\n\n                switch (direction) {\n                    case \"ArrowLeft\":\n                        arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);\n                        arrowParams.push([pos * -1,0]);\n                        break;\n                    case \"ArrowDown\":\n                        arrowParams.push([335, 69, Math.PI, -66, -59]);\n                        arrowParams.push([0,pos * -1]);\n                        break;\n                    case \"ArrowUp\":\n                        arrowParams.push([400, 10, 0, 0, 0]);\n                        arrowParams.push([0,pos]);\n                        break;\n                    case \"ArrowRight\":\n                        arrowParams.push([592, 69, Math.PI / 2, -59, -44]);\n                        arrowParams.push([pos,0]);\n                        break;\n                    default:\n                }\n\n                context.save();\n                context.translate(arrowParams[0][0], arrowParams[0][1]);\n                context.rotate(arrowParams[0][2]);\n                context.translate(arrowParams[0][3], arrowParams[0][4]);\n                context.drawImage(\n                    type, column * frameWidth, row * frameHeight,\n                    frameWidth, frameHeight, arrowParams[1][0], arrowParams[1][1], \n                    frameWidth, frameHeight);\n                context.restore();\n            } else {\n\n            }\n        }\n\n        let stageLoop = setInterval(function() {\n            // console.log((Date.now() - origin) / 1000);\n            currentFrame++;\n            if (currentFrame > maxFrame) { currentFrame = 0; }\n            column = currentFrame % numColumns;\n            row = Math.floor(currentFrame / numColumns);\n            context.clearRect(0, 0, canvas.width, canvas.height);\n            \n            drawGameObject(stageArrow, \"ArrowLeft\");\n            drawGameObject(stageArrow, \"ArrowDown\");\n            drawGameObject(stageArrow, \"ArrowUp\");\n            drawGameObject(stageArrow, \"ArrowRight\");\n            \n            let i = particles.length;\n            while( i-- ) { particles[i].draw(); particles[i].update( i ); }\n            // debugger\n            theQueue.move(context);\n            if (stageQueue[0]) {\n                if (Date.now() - origin >= stageQueue[0][0]) {\n                    theQueue.spawn(stageQueue[0][1], speed);\n                    stageQueue.shift();\n                }\n            }\n\n            if (theQueue.arrows[0]) {\n                theQueue.arrows.forEach( arrow => {\n                    drawGameObject(queueArrow, arrow.direction, arrow.pos);\n                })\n            }  \n        }, speed);\n        newVideo.onended = function () { clearInterval(stageLoop); }\n    }\n}\n\n\n// const ArrowQueue = require(\"./arrowQueue\");\n// const soldTheWorld = require(\"./arrowArrays/soldTheWorld\");\n\n// export function dibujar(canvas, eLF, chosenSong) {\n    \n//     canvas.removeEventListener( 'click', eLF );\n//     let context = canvas.getContext(\"2d\");\n//     let particles = [];\n//     let newVideo = document.createElement(\"video\");\n//     newVideo.id = \"playing\"; newVideo.controls = false;\n//     newVideo.muted = false;\n//     newVideo.width = \"800\";\n//     newVideo.height = \"600\";\n//     let speed = 0;\n//     let stageQueue = [];\n\n//     switch (chosenSong) {\n//         default:\n//             newVideo.src = \"./dist/assets/songs/hallAndOats.mp4\";\n//             stageQueue = soldTheWorld.default;\n//             speed = 20;\n//             break;\n//     }\n\n//     stageQueue.forEach( note => { note[0] -= 2700; })\n\n//     let parentDiv = document.getElementById(\"theCanvas\");\n//     parentDiv.appendChild(newVideo);\n//     parentDiv.insertBefore(newVideo, canvas);\n//     let stageArrow = new Image();\n//     let queueArrow = new Image();\n//     stageArrow.src = \"./dist/assets/gui/arrows/aStage.png\";\n//     queueArrow.src = \"./dist/assets/gui/arrows/aNote.png\";\n\n//     newVideo.play();\n    \n\n//     function Particle( x, y ) {\n//         this.x = x;\n//         this.y = y;\n//         this.coordinates = [];\n//         this.coordinateCount = 7;\n//         while( this.coordinateCount-- ) {\n//             this.coordinates.push( [ this.x, this.y ] );\n//         }\n\n//         this.angle = Math.random() * Math.PI * 2;\n//         this.speed = 1 + Math.random() * 9 ;\n//         this.friction = 0.95;\n//         this.gravity = 1;\n//         this.hue = 70 + Math.random() * 100;\n//         this.brightness = 50 + Math.random() * 30\n//         this.alpha = 1;\n//         this.decay = 0.015 + Math.random() * 0.015;\n//     }\n\n//     Particle.prototype.update = function( index ) {\n//         this.coordinates.pop();\n//         this.coordinates.unshift( [ this.x, this.y ] );\n//         this.speed *= this.friction;\n//         this.x += Math.cos( this.angle ) * this.speed;\n//         this.y += Math.sin( this.angle ) * this.speed + this.gravity;\n//         this.alpha -= this.decay;\n//         if( this.alpha <= this.decay ) { particles.splice( index, 1 ); }\n//     }\n\n//     Particle.prototype.draw = function() {\n//         context.beginPath();\n//         context.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], \n//             this.coordinates[ this.coordinates.length - 1 ][ 1 ] );\n//         context.lineTo( this.x, this.y );\n//         context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' \n//             + this.brightness + '%, ' + this.alpha + ')';\n//         context.stroke();\n//     }\n\n//     function createParticles( x, y ) {\n//         var particleCount = 30;\n//         while( particleCount-- ) { \n//             particles.push( \n//                 new Particle( x, y ) \n//             ); \n//         }\n//     }\n\n//     newVideo.onplaying = function () { console.log(Date.now()); animate(); }    \n    \n//     function animate() {\n//         let theQueue = new ArrowQueue(context);\n//         let origin = Date.now();\n//         console.log(Date.now() - origin);\n//         document.addEventListener(\"keydown\", registerPress);\n//         let numColumns = 5;\n//         let numRows = 20;\n//         let frameWidth = stageArrow.width / numColumns;;\n//         let frameHeight = stageArrow.height / numRows;;\n//         let currentFrame = 0;\n//         let maxFrame = numColumns * numRows - 1;\n//         let column = currentFrame % numColumns;\n//         let row = Math.floor(currentFrame / numColumns);\n\n//         function registerPress(evt) {\n//             evt.preventDefault();\n//             switch (evt.key) {\n//                 case \"ArrowLeft\": createParticles(218, 69); break;\n//                 case \"ArrowDown\": createParticles(342, 69); break;\n//                 case \"ArrowUp\": createParticles(458, 69); break;\n//                 case \"ArrowRight\": createParticles(587, 69); break;\n//                 default: break;\n//             }\n//             console.log([(Date.now() - origin) / 1000, evt.key]);\n//         }\n\n\n//         function drawGameObject(type, direction, pos = 0) {\n//             if (type === \"stageArrow\" || \"queueArrow\") {\n//                 let arrowParams = [];\n\n//                 switch (direction) {\n//                     case \"ArrowLeft\":\n//                         arrowParams.push([206, 69, Math.PI * 3 / 2, -59, -42]);\n//                         arrowParams.push([pos * -1,0]);\n//                         break;\n//                     case \"ArrowDown\":\n//                         arrowParams.push([335, 69, Math.PI, -66, -59]);\n//                         arrowParams.push([0,pos * -1]);\n//                         break;\n//                     case \"ArrowUp\":\n//                         arrowParams.push([400, 10, 0, 0, 0]);\n//                         arrowParams.push([0,pos]);\n//                         break;\n//                     case \"ArrowRight\":\n//                         arrowParams.push([592, 69, Math.PI / 2, -59, -44]);\n//                         arrowParams.push([pos,0]);\n//                         break;\n//                     default:\n//                 }\n\n//                 context.save();\n//                 context.translate(arrowParams[0][0], arrowParams[0][1]);\n//                 context.rotate(arrowParams[0][2]);\n//                 context.translate(arrowParams[0][3], arrowParams[0][4]);\n//                 context.drawImage(\n//                     type, column * frameWidth, row * frameHeight,\n//                     frameWidth, frameHeight, arrowParams[1][0], arrowParams[1][1], \n//                     frameWidth, frameHeight);\n//                 context.restore();\n//             } else {\n\n//             }\n//         }\n\n//         let stageLoop = setInterval(function() {\n//             // console.log((Date.now() - origin) / 1000);\n//             currentFrame++;\n//             if (currentFrame > maxFrame) { currentFrame = 0; }\n//             column = currentFrame % numColumns;\n//             row = Math.floor(currentFrame / numColumns);\n//             context.clearRect(0, 0, canvas.width, canvas.height);\n            \n//             drawGameObject(stageArrow, \"ArrowLeft\");\n//             drawGameObject(stageArrow, \"ArrowDown\");\n//             drawGameObject(stageArrow, \"ArrowUp\");\n//             drawGameObject(stageArrow, \"ArrowRight\");\n            \n//             let i = particles.length;\n//             while( i-- ) { particles[i].draw(); particles[i].update( i ); }\n//             // debugger\n//             theQueue.move(context);\n//             if (stageQueue[0]) {\n//                 if (Date.now() - origin >= stageQueue[0][0]) {\n//                     theQueue.spawn(stageQueue[0][1], speed);\n//                     stageQueue.shift();\n//                 }\n//             }\n\n//             if (theQueue.arrows[0]) {\n//                 theQueue.arrows.forEach( arrow => {\n//                     drawGameObject(queueArrow, arrow.direction, arrow.pos);\n//                 })\n//             }  \n            \n//         }, speed);\n\n//         newVideo.onended = function () { clearInterval(stageLoop); }\n\n//     }\n\n\n\n// }\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/songList_v1.js":
/*!****************************!*\
  !*** ./src/songList_v1.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displaySongList_v1; });\n/* harmony import */ var _game_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_util */ \"./src/game_util.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n\n\n\nfunction displaySongList_v1(parentDiv) {\n\n    document.getElementById(\"fader\").remove();\n    \n    let menuTitle = document.createElement(\"div\");\n    menuTitle.id = \"txtSelectMusic\";\n    menuTitle.innerText = \"Select Music\";\n    parentDiv.appendChild(menuTitle);\n\n    let fXClick = document.createElement(\"audio\");\n    fXClick.id = \"fXClick\";\n    fXClick.src = \"./dist/assets/sounds/click.ogg\";\n    document.getElementById(\"audioChannel\").appendChild(fXClick);\n    \n    let subTxt = document.createElement(\"div\");\n    subTxt.id = \"txtSubTxt\";\n    subTxt.innerText = \"Hover to preview and click to begin!\";\n    parentDiv.appendChild(subTxt);\n\n    let trackList = [];\n    setTimeout( () => {\n        trackList.push(createTrack(\"nirvana\", \"trackNirvana\"));\n    }, 750);\n\n    setTimeout( () => {\n        trackList.push(createTrack(\"danzaKaduro\", \"trackDanzaKaduro\"));\n    }, 1500);\n\n    setTimeout( () => {\n        trackList.push(createTrack(\"cebuana\", \"trackCebuana\"));\n        trackList[trackList.length - 1].addEventListener(\"animationend\", \n            makeSelection(), {once: true});\n    }, 2250);\n    \n    function createTrack(tSrc, tID) {\n        let newTrack = document.createElement(\"img\");\n        let newPrev = document.createElement(\"audio\");\n        newTrack.src = \"./dist/assets/gui/banners/\" + tSrc + \".png\";\n        newPrev.src = \"./dist/assets/songs/previews/\" + tSrc + \".ogg\";\n        newTrack.className = \"trackImg\";\n        newTrack.id = tID;\n        newPrev.id = tID + \"a\";\n        newPrev.loop = true;\n        parentDiv.appendChild(newTrack);\n        document.getElementById(\"audioChannel\").appendChild(newPrev);\n        newTrack.onmouseover = () => { newPrev.play(); };\n        newTrack.onmouseout = () => { newPrev.pause(); newPrev.load(); };\n        return newTrack;\n    }\n    \n    function makeSelection() {\n        setTimeout( () => {\n            subTxt.style.animationName = \"intro4\";\n            trackList.forEach( (track) => {\n                track.onclick = () => { beginStage(track.id); };\n                track.classList.remove(\"trackImg\");\n                track.className = \"trackSelectable\";\n            });\n        }, 750);\n    }\n\n    function beginStage(trackID) {\n        document.getElementById(\"fXSelect\").play();\n        debugger\n    }\n}\n\n    // function deleteChild() { \n    //     var e = document.querySelector(\"ul\"); \n        \n    //     //e.firstElementChild can be used. \n    //     var child = e.lastElementChild;  \n    //     while (child) { \n    //         e.removeChild(child); \n    //         child = e.lastElementChild; \n    //     } \n    // } \n\n\n    // let nirvana = document.createElement(\"img\");\n    // nirvana.src = \"./dist/assets/gui/banners/nirvana.png\";\n    // nirvana.className = \"trackImg\";\n    // nirvana.id = \"trackNirvana\";\n    \n    // let danzaKaduro = document.createElement(\"img\");\n    // danzaKaduro.src = \"./dist/assets/gui/banners/danzaKaduro.png\";\n    // danzaKaduro.className = \"trackImg\";\n    // danzaKaduro.id = \"trackDanzaKaduro\";\n    \n    // let cebuana = document.createElement(\"img\");\n    // cebuana.src = \"./dist/assets/gui/banners/cebuana.png\";\n    // cebuana.className = \"trackImg\";\n    // cebuana.id = \"trackCebuana\";\n\n    // parentDiv.appendChild(nirvana);\n\n    // setTimeout(function () { parentDiv.appendChild(danzaKaduro); }, 2000);\n\n    // setTimeout(function () { parentDiv.appendChild(cebuana); }, 4000);\n\n//# sourceURL=webpack:///./src/songList_v1.js?");

/***/ })

/******/ });