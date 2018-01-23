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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return amountTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return amountBush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return matrixSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return speed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return amountDeer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return amountMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return amountHunter; });
let amountTree,amountBush,matrixSize,speed,amountDeer,amountMouse,amountHunter;
amountDeer = 4;
amountMouse = 4;
amountHunter = 1;
amountTree = 7;
amountBush = 7;
matrixSize = 20;
speed = 1000;
const bSize = '80% 80%';
/* harmony export (immutable) */ __webpack_exports__["f"] = bSize;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__insDom_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_js__ = __webpack_require__(0);




class Animal {
    constructor(htmlMatrix, timerId, name) {
        this.name = name;
        this.BarSatiety = 'BarSatiety' + Math.floor(Math.random() * 100000);
        this.BarHealth = 'BarHealth' + Math.floor(Math.random() * 100000);
        this.steps = 'steps' + Math.floor(Math.random() * 10000);
        this.stepCounter = 0;
        Object(__WEBPACK_IMPORTED_MODULE_0__insDom_js__["a" /* insertDom */])(this.name, this.BarSatiety, this.BarHealth, this.steps);
        this.putAnimal = function putAnimal() {
            return Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */]);
        };
        this.eatX = 0;
        this.eatY = 0;
        this.eatFlag = false;
        this.fir = this.putAnimal();
        this.sec = this.putAnimal();
        this.htmlMatrix = htmlMatrix;
        this.timerId = timerId;
        this.setAnimal = function (fir, sec, animal) {
            this.htmlMatrix[this.fir][this.sec].style.backgroundSize = '';
            this.htmlMatrix[this.fir][this.sec].className = animal;
        };
        this.setAnimal(this.fir, this.sec, this.name.toLowerCase());
        this.animalD = 0;
        this.getInteger = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.stepX = function stepX() {
            this.fir += this.getInteger(-1, 1);
            if ((this.fir < -1) || (this.fir > __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */])) {
                return this.stepX();
            }
            return this.fir;
        };

        this.stepY = function stepY() {
            this.sec += this.getInteger(-1, 1);
            if ((this.sec < -1) || (this.sec > __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */])) {
                return this.stepY();
            }
            return this.sec;
        };
        this.fruitsAndBerries = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5', 'berry', 'berry1', 'berry2', 'berry3'];
        this.deerFood = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5', 'berry', 'berry1', 'berry2', 'berry3', 'tree', 'tree1', 'tree2', 'bush', 'bushHalf'];
        this.mouseFood = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5', 'berry', 'berry1', 'berry2', 'berry3'];

    }

    health() {
        let satiety = document.querySelector('#' + this.BarSatiety);
        let health = document.querySelector('#' + this.BarHealth);

        if (parseInt(satiety.style.width, 10) <= 0) {
            health.innerHTML = (parseInt(health.style.width, 10) + 20) + '%';
            health.style.width = (parseInt(health.style.width, 10) + 20) + '%';
            if (parseInt(health.style.width, 10) > 100) {
                health.innerHTML = '100%';
                health.style.width = '100%';
            }
        }
        if ((parseInt(satiety.style.width, 10) < 100) && (parseInt(health.style.width, 10) == 100)) {
            satiety.innerHTML = (parseInt(satiety.style.width, 10) - 5) + '%';
            satiety.style.width = (parseInt(satiety.style.width, 10) - 5) + '%';
            satiety.innerHTML = (parseInt(satiety.style.width, 10) + 10) + '%';
            satiety.style.width = (parseInt(satiety.style.width, 10) + 10) + '%';
            if (parseInt(satiety.style.width, 10) > 100) {
                satiety.innerHTML = '100%';
                satiety.style.width = '100%';
            }

        }
    }

    stepsCounter() {
        let steps = document.querySelector('#' + this.steps);
        this.stepCounter++;
        steps.innerHTML = this.stepCounter;
    }

    move() {
        let _self = this;
        let lastX = this.fir;
        let lastY = this.sec;
        let eatX = this.eatX;
        let eatY = this.eatY;
        let satiety = document.querySelector('#' + this.BarSatiety);
        let health = document.querySelector('#' + this.BarHealth);
        let x, y;
        let food;

        let arr = [];
        let arrEmpty = [];
        let i = 0;
        for (let see = 1; see <= 4; see++) {
            for (let x = -see; x <= see; x++) {
                for (let y = -see; y <= see; y++) {
                    if ((lastX + x >= 0) && (lastX + x < __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */]) && (lastY + y >= 0) && (lastY + y < __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */])) {
                        arr[i] = {
                            classMatrix: this.htmlMatrix[lastX + x][lastY + y].className,
                            style: this.htmlMatrix[lastX + x][lastY + y].style,
                            x: lastX + x,
                            y: lastY + y
                        };
                        i++;
                    }
                }
            }
        }

        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if ((lastX + x >= 0) && (lastX + x < __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */]) && (lastY + y >= 0) && (lastY + y < __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */])) {
                    arrEmpty[i] = {
                        classMatrix: this.htmlMatrix[lastX + x][lastY + y].className,
                    };
                    i++;
                }
            }
        }

        let checkClassEmpty = arrEmpty.filter(function (number) {
            return number.classMatrix == 'empty';
        });

        if ((checkClassEmpty.length == 0) && (parseInt(satiety.style.width, 10) == 100)) {
            clearInterval(_self.timerId);
            return console.log('The ' + _self.name + ' Game Over');
        }

        if (this.htmlMatrix[lastX][lastY].className == 'deerShot') {
            satiety.innerHTML = '0%';
            satiety.style.width = 0;
            health.innerHTML = '0%';
            health.style.width = 0;
        }

        function checkMeels() {
            for (let i = 0; i < arr.length; i++) {
                if (_self.name == 'Deer') {
                    food = _self.deerFood
                }
                if (_self.name == 'Mouse') {
                    food = _self.mouseFood
                }
                if (_self.name == 'Hunter') {
                    if ((arr[i].classMatrix == 'deer') && (parseInt(satiety.style.width, 10) < 100)) {
                        _self.htmlMatrix[arr[i].x][arr[i].y].className = 'deerShot';
                        break
                    }
                    if (arr[i].classMatrix == 'deerShot') {

                        let stepsFoodX = arr[i].x - lastX;
                        let stepsFoodY = arr[i].y - lastY;

                        if (stepsFoodY < 0) { y = lastY - 1}
                        if (stepsFoodY > 0) {y = lastY + 1}
                        if (stepsFoodY == 0) {y = lastY}
                        if (stepsFoodX < 0) { x = lastX - 1}
                        if (stepsFoodX > 0) {x = lastX + 1}
                        if (stepsFoodX == 0) {x = lastX}

                        if (_self.deerFood.indexOf(_self.htmlMatrix[x][y].className) !== -1) {
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
                        }

                        return;
                    }

                }
                if (_self.name == 'Hunter') {
                    continue
                }
                if ((food.indexOf(arr[i].classMatrix) != -1) && (parseInt(satiety.style.width, 10) < 100)) {
                    if ((arr[i].x - lastX <= 1) && (arr[i].y - lastY <= 1) && (arr[i].x - lastX > -2) && (arr[i].y - lastY > -2)) {

                        x = arr[i].x;
                        y = arr[i].y;
                        if ((_self.htmlMatrix[x][y].className == 'tree') && (_self.htmlMatrix[x][y].style.backgroundSize !== __WEBPACK_IMPORTED_MODULE_1__configuration_js__["f" /* bSize */])) {
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
                        }
                        if ((_self.htmlMatrix[x][y].className == 'bush') && (_self.htmlMatrix[x][y].style.backgroundSize !== __WEBPACK_IMPORTED_MODULE_1__configuration_js__["f" /* bSize */])) {
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
                        }
                        return;
                    }
                    else {
                        let stepsFoodX = arr[i].x - lastX;
                        let stepsFoodY = arr[i].y - lastY;

                        if (stepsFoodY < 0) {y = lastY - 1}
                        if (stepsFoodY > 0) {y = lastY + 1}
                        if (stepsFoodY == 0) {y = lastY}
                        if (stepsFoodX < 0) {x = lastX - 1}
                        if (stepsFoodX > 0) {x = lastX + 1}
                        if (stepsFoodX == 0) {x = lastX}

                        if (_self.name == 'Deer') {
                            if ((_self.htmlMatrix[x][y].className == 'tree3') || (_self.htmlMatrix[x][y].className == 'leafBush') || (_self.htmlMatrix[x][y].className == 'leafTree') || (_self.htmlMatrix[x][y].className == 'deer') || (_self.htmlMatrix[x][y].className == 'mouse')) {
                                rememberLastStep();
                                x = _self.stepX();
                                y = _self.stepY();
                            }
                        }
                        if (_self.name == 'Mouse') {
                            if ((_self.htmlMatrix[x][y].className == 'tree') || (_self.htmlMatrix[x][y].className == 'bush') || (_self.htmlMatrix[x][y].className == 'leafTree') || (_self.htmlMatrix[x][y].className == 'leafBush') || (_self.htmlMatrix[x][y].className == 'deer') || (_self.htmlMatrix[x][y].className == 'mouse')) {
                                rememberLastStep();
                                x = _self.stepX();
                                y = _self.stepY();
                            }
                        }
                    }
                    return;
                }
            }
        }

        if (this.animalD != 0) {
            if ((this.animalD % (5) == 0)) {
                this.htmlMatrix[lastX][lastY].className = `empty`;
                clearInterval(this.timerId);
                this.animalD = 0;
            }
        }

        if (parseInt(health.style.width, 10) == 0) {
            this.animalD++;
            return
        }

        x = this.stepX();
        y = this.stepY();

        function repeatEat() {
            _self.fir = lastX;
            _self.sec = lastY;
            _self.health();
            _self.eatX = x;
            _self.eatY = y;
            _self.eatFlag = true;
        }

        function rememberLastStep() {
            _self.fir = lastX;
            _self.sec = lastY;
        }

        if (this.eatFlag == true) {
            x = eatX;
            y = eatY;
            this.eatFlag = false;
        } else {
            checkMeels();
        }

        if ((x == lastX) && (y == lastY)) {
            rememberLastStep();
            return this.move();
        }
        if ((x == -1) || (x == __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */]) || (y == -1) || (y == __WEBPACK_IMPORTED_MODULE_1__configuration_js__["g" /* matrixSize */])) {
            rememberLastStep();
            return this.move();
        }
        if (this.htmlMatrix[x][y].className == 'empty') {
            this.htmlMatrix[x][y].style.backgroundSize = '';
            satiety.innerHTML = (parseInt(satiety.style.width, 10) - 5) + '%';
            satiety.style.width = (parseInt(satiety.style.width, 10) - 5) + '%';
            if (satiety.style.width == '0%') {
                satiety.innerHTML = '0%';
                if ((parseInt(health.style.width, 10) > 0)) {
                    health.innerHTML = (parseInt(health.style.width, 10) - 10) + '%';
                    health.style.width = (parseInt(health.style.width, 10) - 10) + '%';
                } else {
                    this.animalD++;
                    this.fir = x;
                    this.sec = y;
                    return;
                }
            }
            this.htmlMatrix[x][y].className = this.name.toLowerCase();
            this.htmlMatrix[lastX][lastY].className = 'empty';
            this.fir = x;
            this.sec = y;
            this.stepsCounter();
            return;
        }
        if (_self.name == 'Deer') {
            if (parseInt(satiety.style.width, 10) != 100) {
                repeatEat();
                this.stepsCounter();

                if (this.htmlMatrix[x][y].style.backgroundSize == __WEBPACK_IMPORTED_MODULE_1__configuration_js__["f" /* bSize */]) {
                    if (this.htmlMatrix[x][y].className == 'bush') {return this.htmlMatrix[x][y].className = 'bushHalf';}
                    if (this.htmlMatrix[x][y].className == 'tree') {return this.htmlMatrix[x][y].className = 'tree1';}
                }

                if (this.htmlMatrix[x][y].className == 'bushHalf') {return this.htmlMatrix[x][y].className = 'empty';}
                if (this.htmlMatrix[x][y].className == 'tree1') {return this.htmlMatrix[x][y].className = 'tree2';}
                if (this.htmlMatrix[x][y].className == 'tree2') {return this.htmlMatrix[x][y].className = 'tree3';}
                if (this.fruitsAndBerries.indexOf(this.htmlMatrix[x][y].className) !== -1) {return this.htmlMatrix[x][y].className = 'empty';}
            }
            else {
                rememberLastStep();
                return this.move();
            }
        }

        if (_self.name == 'Mouse') {
            if ((this.htmlMatrix[x][y].className == 'tree') || (this.htmlMatrix[x][y].className == `bush`)) {
                if (checkClassEmpty.length == 0) {
                    clearInterval(_self.timerId);
                    return console.log('The ' + _self.name + ' Game Over');
                } else {
                    rememberLastStep();
                    return this.move();
                }
            }
            if (parseInt(satiety.style.width, 10) != 100) {
                repeatEat();
                this.stepsCounter();
                if (this.htmlMatrix[x][y].className == 'fruit') {return this.htmlMatrix[x][y].className = 'fruit1';}
                if (this.htmlMatrix[x][y].className == 'fruit1') {return this.htmlMatrix[x][y].className = 'fruit2'; }
                if (this.htmlMatrix[x][y].className == 'fruit2') {return this.htmlMatrix[x][y].className = 'fruit3';}
                if (this.htmlMatrix[x][y].className == 'fruit3') {return this.htmlMatrix[x][y].className = 'fruit4';}
                if (this.htmlMatrix[x][y].className == 'fruit4') {return this.htmlMatrix[x][y].className = 'fruit5';}
                if (this.htmlMatrix[x][y].className == 'fruit5') {return this.htmlMatrix[x][y].className = 'empty';}
                if (this.htmlMatrix[x][y].className == 'berry') {return this.htmlMatrix[x][y].className = `berry1`;}
                if (this.htmlMatrix[x][y].className == 'berry1') {return this.htmlMatrix[x][y].className = 'berry2';}
                if (this.htmlMatrix[x][y].className == 'berry2') {return this.htmlMatrix[x][y].className = 'berry3';}
                if (this.htmlMatrix[x][y].className == 'berry3') {return this.htmlMatrix[x][y].className = 'empty';}
            } else {
                    rememberLastStep();
                    return this.move();
                }
        }

        if (_self.name == 'Hunter') {
            if (this.htmlMatrix[x][y].className == `deerShot`) {
                satiety.innerHTML = '100%';
                satiety.style.width = '100%';
                health.innerHTML = '100%';
                health.style.width = '100%';
                this.htmlMatrix[x][y].className = 'hunter';
                this.htmlMatrix[lastX][lastY].className = `empty`;
                this.fir = x;
                this.sec = y;
                this.stepsCounter();
                return;
            } else {
                rememberLastStep();
                return this.move();
            }
        }

    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Animal;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hunter_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mouse_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deer_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matrix_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plants_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_js__ = __webpack_require__(0);







let htmlMatrix = new __WEBPACK_IMPORTED_MODULE_3__matrix_js__["a" /* Matrix */]().matrix();
let plants =  new __WEBPACK_IMPORTED_MODULE_4__plants_js__["b" /* Plant */](htmlMatrix);



for (let amount = 1; amount <= __WEBPACK_IMPORTED_MODULE_5__configuration_js__["e" /* amountTree */]; amount++) {
    new __WEBPACK_IMPORTED_MODULE_4__plants_js__["c" /* Tree */](htmlMatrix);
}

for (let amount = 1; amount <= __WEBPACK_IMPORTED_MODULE_5__configuration_js__["a" /* amountBush */]; amount++) {
    new __WEBPACK_IMPORTED_MODULE_4__plants_js__["a" /* Bush */](htmlMatrix);
}

for (let amount = 1; amount <= __WEBPACK_IMPORTED_MODULE_5__configuration_js__["b" /* amountDeer */]; amount++) {
    let timerId = setInterval(function () {
        deerMovment.move();
    }, __WEBPACK_IMPORTED_MODULE_5__configuration_js__["h" /* speed */]);
    let deerMovment = new __WEBPACK_IMPORTED_MODULE_2__deer_js__["a" /* Deer */](htmlMatrix, timerId, 'Deer');

}

for (let amount = 1; amount <= __WEBPACK_IMPORTED_MODULE_5__configuration_js__["d" /* amountMouse */]; amount++) {
    let timerId = setInterval(function () {
        mouseMovment.move();
    }, __WEBPACK_IMPORTED_MODULE_5__configuration_js__["h" /* speed */]);
    let mouseMovment = new __WEBPACK_IMPORTED_MODULE_1__mouse_js__["a" /* Mouse */](htmlMatrix, timerId, 'Mouse');

}

for (let amount = 1; amount <= __WEBPACK_IMPORTED_MODULE_5__configuration_js__["c" /* amountHunter */]; amount++) {
    let timeHunter = setInterval(function () {
        hunter1.move();
    }, __WEBPACK_IMPORTED_MODULE_5__configuration_js__["h" /* speed */]);
    let hunter1 = new __WEBPACK_IMPORTED_MODULE_0__hunter_js__["a" /* Hunter */](htmlMatrix, timeHunter, 'Hunter');

}

setInterval(function(){plants.allGrow()}, __WEBPACK_IMPORTED_MODULE_5__configuration_js__["h" /* speed */]);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_js__ = __webpack_require__(1);


class Hunter extends __WEBPACK_IMPORTED_MODULE_0__animal_js__["a" /* Animal */] {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
    }

    health() {
        super.health();
    }

    move() {
        super.move();

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hunter;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = insertDom;
function createString(Animal, BarS, BarH, steps) {
    let indicators = `<div class="text" >` + Animal + ` <span> steps: </span><span id=` + steps + ` >0</span></div>
        <div style="width: 700px">
        <div class="deerProgress">
        <div id=` + BarS + ` style="width: 100%;height: 20px;background-color: #33cc33;font-size: 15px;transition: width 0.5s;">100%</div>
        </div>
        <div class=deerProgress>
        <div id=` + BarH + ` style="width: 100%;height: 20px;background-color: #4dc3ff;font-size: 15px;transition: width 0.5s">100%</div>
        </div>
        </div>`;
    return indicators;
}

function readInner() {
    return document.getElementsByClassName('floatRight')[0].innerHTML;
}

function insertDom(Deer, BarS, BarH,steps) {
    let readClass = readInner();
    let createStr = createString(Deer, BarS, BarH,steps);
    let insertDom = readClass + createStr;
    document.getElementsByClassName('floatRight')[0].innerHTML = insertDom;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_js__ = __webpack_require__(1);


class Mouse extends __WEBPACK_IMPORTED_MODULE_0__animal_js__["a" /* Animal */] {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
    }

    health() {
        super.health();
    }

    move() {
        super.move();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mouse;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_js__ = __webpack_require__(1);


class Deer extends __WEBPACK_IMPORTED_MODULE_0__animal_js__["a" /* Animal */] {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
    }

    health() {
        super.health();
    }

    move() {
    super.move();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Deer;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration_js__ = __webpack_require__(0);


class Matrix {
    matrix() {
        let matrix = {
            Size: __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */],
        };
        let arr = [];


        matrix[Symbol.iterator] = function () {
            let x = this.Size;
            let i = 0;
            return {
                next() {
                    if (i < x) {
                        arr[i] = [];
                        let y = 0;
                        while (y < x) {
                            arr[i][y] = '<span class="empty">&nbsp; </span>';
                            y++;
                        }
                        return {
                            done: false,
                            value: i++
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                }
            }
        };

        for (let num of matrix) {
        }
        ;

        htmlWrite();

        function htmlWrite() {
            let outPut = "";
            let length = arr.length;
            for (let i = 0; i < length; i++) {
                let l = arr[i].length;
                for (let j = 0; j < l; j++) {
                    outPut += arr[i][j] + " ";
                }
                outPut += '</br>';
            }
            document.getElementById('arr').innerHTML = outPut;
            document.querySelector('html').style.fontFamily = "monospace"
            outPut = '';
        }

        let elements = document.querySelectorAll('span');
        let htmlMatrix = [];
        let num = 0;

        for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]; i++) {
            htmlMatrix[i] = [];
            for (let y = 0; y < __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]; y++) {
                htmlMatrix[i][y] = elements[num];
                num++;
            }
        }

        return htmlMatrix;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration_js__ = __webpack_require__(0);


class Plant {
    constructor(htmlMatrix) {
        this.putPlant = function () {
            return Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]);
        };
        this.x = this.putPlant();
        this.y = this.putPlant();
        this.htmlMatrix = htmlMatrix;
        this.setPlant = function (x, y, Plant) {
            this.htmlMatrix[this.x][this.y].style.backgroundSize = '';
            this.htmlMatrix[this.x][this.y].className = Plant;
        };
        this.moveNumber = 0;
        this.emptyTreeStep = 0;
        this.fruitsDown = this.fruitDown('fruit', 'tree', 'leafTree');
        this.berriesDown = this.fruitDown('berry', 'bush', 'leafBush');
        this.bushClass = document.querySelectorAll('.bush');
        this.treeClass = document.querySelectorAll('.tree');

    }

    cutTheTree() {
        let emptyTree = document.querySelector('.tree3');
        if (emptyTree) {
            if (this.emptyTreeStep == 2) {
                emptyTree.className = 'empty';
                this.emptyTreeStep = 0;
                return;
            }
            this.emptyTreeStep++;
        }
    }

    allGrow() {
        this.cutTheTree();

        this.moveNumber++;
        if (this.moveNumber == 1) {
            this.classGrow(this.bushClass, 70);
            this.classGrow(this.treeClass, 55);
        }
        if (this.moveNumber == 2) {
            this.classGrow(this.bushClass, 80);
            this.classGrow(this.treeClass, 80);
        }

        let treeClasses = document.querySelectorAll('.tree');
        let bushClasses = document.querySelectorAll('.bush');

        if (this.moveNumber % 2 == 0) {
            this.classGrow(treeClasses, 80);
            this.classGrow(bushClasses, 80);
        }

        this.fruitsDown();
        this.berriesDown();

        if (this.moveNumber % 5 == 0) {
            this.growPlant('tree', 'fruit');
            this.growPlant('bush', 'berry');
        }
    }


    classGrow(plantClass, size) {

        for (let i = 0; i < plantClass.length; i++) {
            plantClass[i].style.backgroundSize = `${size}% ${size}%`;
        }
    }

    growPlant(plamt, fruit) {
        let _self = this;
        _self.htmlMatrix.forEach(function (item, q) {
            let i = q;
            _self.htmlMatrix[i].forEach(function (items, y) {
                if ((items.className == plamt) && (items.style.backgroundSize == '80% 80%')) {
                    if ((y - 1 != -1) && (_self.htmlMatrix[i][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((y + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (_self.htmlMatrix[i][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i][y + 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (_self.htmlMatrix[i - 1][y].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (_self.htmlMatrix[i + 1][y].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (y - 1 != -1) && (_self.htmlMatrix[i + 1][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (y + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (_self.htmlMatrix[i + 1][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y + 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (y - 1 != -1) && (_self.htmlMatrix[i - 1][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (y + 1 != __WEBPACK_IMPORTED_MODULE_0__configuration_js__["g" /* matrixSize */]) && (_self.htmlMatrix[i - 1][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y + 1].className = `${fruit}`;
                        return;
                    } else {
                        return
                    }
                }
            })
        })
    }

    fruitDown(fruit, tree, leaf) {
        let fruitDownStep = 0;
        let downStep = 0;
        let fruits = fruit;
        let fruitClass;
        return function () {
            if (fruits == 'fruit') {
                fruitClass = document.querySelectorAll('.fruit,.fruit1,.fruit2,.fruit3,.fruit4,.fruit5')
            } else {
                fruitClass = document.querySelectorAll('.berry,.berry1,.berry2,.berry3')
            }
            let leafClass = document.querySelectorAll('.' + leaf);

            downStep++;
            if (leafClass[0] != undefined) {
                if (downStep == 4) {
                    for (let w = 0; w < leafClass.length; w++) {
                        leafClass[w].className = tree;
                    }
                    downStep = 0;
                }
            }

            if (fruitClass[0] != undefined) {

                if (fruitDownStep == 3) {
                    for (let w = 0; w < fruitClass.length; w++) {
                        fruitClass[w].className = leaf;
                    }
                    fruitDownStep = 0;
                    downStep = 0;
                    return;
                } else {
                    this.classGrow(fruitClass, (75 - 5*fruitDownStep));
                    fruitDownStep++;
                    return;
                }
            }

        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Plant;


class Tree extends Plant {
    constructor(htmlMatrix) {
        super(htmlMatrix);
        this.setPlant(this.x, this.y, 'tree');
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Tree;


class Bush extends Plant {
    constructor(htmlMatrix) {
        super(htmlMatrix);
        this.setPlant(this.x, this.y, 'bush');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bush;










/***/ })
/******/ ]);