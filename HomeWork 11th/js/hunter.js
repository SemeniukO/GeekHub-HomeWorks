import {Animal} from './animal.js';
import {matrixSize} from "./configuration.js";

export class Hunter extends Animal {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
        this.setAnimal(this.fir, this.sec, 'hunter');
        //console.log('The hunter stands here arr[' + this.fir + '][' + this.sec + ']');
    }

    health() {
        super.health();
    }

    move() {
        let _self = this;
        let lastX = this.fir;
        let lastY = this.sec;
        let eatX = this.eatX;
        let eatY = this.eatY;
        let Satiety = document.querySelector('#' + this.BarSatiety);
        let Health = document.querySelector('#' + this.BarHealth);
        let x, y;

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

        function checkMeels() {
            for (let i = 0; i < arr.length; i++) {
                if ((arr[i].classMatrix == 'deer') && (parseInt(Satiety.style.width, 10) < 100)) {
                    _self.htmlMatrix[arr[i].x][arr[i].y].className = 'deerShot';
                    break
                }
                if (arr[i].classMatrix == 'deerShot') {

                    let stepsFoodX = arr[i].x - lastX;
                    let stepsFoodY = arr[i].y - lastY;

                    if (stepsFoodY < 0) {y = lastY - 1}
                    if (stepsFoodY > 0) {y = lastY + 1}
                    if (stepsFoodY == 0) {y = lastY}
                    if (stepsFoodX < 0) {x = lastX - 1}
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
        }

        if (this.animalD != 0) {
            if ((this.animalD % 3 == 0)) {
                this.htmlMatrix[lastX][lastY].className = `empty`;
                clearInterval(this.timerId);
                this.animalD = 0;
            }
        }

        if (parseInt(Health.style.width, 10) == 0) {
            this.animalD++;
            return
        }

        x = this.stepX();
        y = this.stepY();

        function rememberLastStep() {
            _self.fir = lastX;
            _self.sec = lastY;
        }

        checkMeels();

        if ((x == lastX) && (y == lastY)) {
            rememberLastStep();
            return this.move();
        }
        if ((x == -1) || (x == matrixSize) || (y == -1) || (y == matrixSize)) {
            rememberLastStep();
            return this.move();
        }
        if (this.htmlMatrix[x][y].className == `empty`) {
            this.htmlMatrix[x][y].style.backgroundSize = '';
            Satiety.innerHTML = (parseInt(Satiety.style.width, 10) - 5) + '%';
            Satiety.style.width = (parseInt(Satiety.style.width, 10) - 5) + '%';
            if (Satiety.style.width == '0%') {
                Satiety.innerHTML = '0%';
                if ((parseInt(Health.style.width, 10) > 0)) {
                    Health.innerHTML = (parseInt(Health.style.width, 10) - 10) + '%';
                    Health.style.width = (parseInt(Health.style.width, 10) - 10) + '%';
                } else {
                    this.animalD++;
                    this.fir = x;
                    this.sec = y;
                    return;
                }
            }
            this.htmlMatrix[x][y].className = 'hunter';
            this.htmlMatrix[lastX][lastY].className = `empty`;
            this.fir = x;
            this.sec = y;
            super.stepsCounter();
            return;
        }
        if (this.htmlMatrix[x][y].className == `deerShot`) {
            Satiety.innerHTML = '100%';
            Satiety.style.width = '100%';
            Health.innerHTML = '100%';
            Health.style.width = '100%';
            this.htmlMatrix[x][y].className = 'hunter';
            this.htmlMatrix[lastX][lastY].className = `empty`;
            this.fir = x;
            this.sec = y;
            super.stepsCounter();
            return;
        } else {
            rememberLastStep();
            return this.move();
        }

    }
}