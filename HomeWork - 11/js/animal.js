import {insertDom} from './insDom.js';
import {matrixSize} from "./configuration.js";
import {bSize} from "./configuration.js";

export class Animal {
    constructor(htmlMatrix, timerId, name) {
        this.name = name;
        this.BarSatiety = 'BarSatiety' + Math.floor(Math.random() * 100000);
        this.BarHealth = 'BarHealth' + Math.floor(Math.random() * 100000);
        this.steps = 'steps' + Math.floor(Math.random() * 10000);
        this.stepCounter = 0;
        insertDom(this.name, this.BarSatiety, this.BarHealth, this.steps);
        this.putAnimal = function putAnimal() {
            return Math.floor(Math.random() * matrixSize);
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
            if ((this.fir < -1) || (this.fir > matrixSize)) {
                return this.stepX();
            }
            return this.fir;
        };

        this.stepY = function stepY() {
            this.sec += this.getInteger(-1, 1);
            if ((this.sec < -1) || (this.sec > matrixSize)) {
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
                    if ((lastX + x >= 0) && (lastX + x < matrixSize) && (lastY + y >= 0) && (lastY + y < matrixSize)) {
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
                if ((lastX + x >= 0) && (lastX + x < matrixSize) && (lastY + y >= 0) && (lastY + y < matrixSize)) {
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
                        if ((_self.htmlMatrix[x][y].className == 'tree') && (_self.htmlMatrix[x][y].style.backgroundSize !== bSize)) {
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
                        }
                        if ((_self.htmlMatrix[x][y].className == 'bush') && (_self.htmlMatrix[x][y].style.backgroundSize !== bSize)) {
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
        if ((x == -1) || (x == matrixSize) || (y == -1) || (y == matrixSize)) {
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
                if (this.htmlMatrix[x][y].style.backgroundSize == bSize) {
                    repeatEat();
                    this.stepsCounter();
                    if (this.htmlMatrix[x][y].className == 'bush') {return this.htmlMatrix[x][y].className = 'bushHalf';}
                    if (this.htmlMatrix[x][y].className == 'tree') {return this.htmlMatrix[x][y].className = 'tree1';}
                }
                repeatEat();
                this.stepsCounter();
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