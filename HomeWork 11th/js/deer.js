import {Animal} from './animal.js';
import {matrixSize} from "./configuration.js";

export class Deer extends Animal {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
        this.setAnimal(this.fir, this.sec, 'deer');
        //console.log('The deer stands here arr[' + this.fir + '][' + this.sec + ']');
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
        let deerSatiety = document.querySelector('#' + this.BarSatiety);
        let deerHealth = document.querySelector('#' + this.BarHealth);
        let x,y;

        let arr = [];
        let arrEmpty = [];
        let i=0;
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

        if ((checkClassEmpty.length == 0) && (parseInt(deerSatiety.style.width, 10) == 100)) {
            clearInterval(_self.timerId);
            return console.log('The '+_self.name+' Game Over');
        }

        if (this.htmlMatrix[lastX][lastY].className == 'deerShot') {
            deerSatiety.innerHTML = '0%';
            deerSatiety.style.width = 0;
            deerHealth.innerHTML = '0%';
            deerHealth.style.width = 0;
        }

        function checkMeels() {
            for (let i = 0; i < arr.length; i++) {
                if ((_self.deerFood.indexOf(arr[i].classMatrix) != -1) && (parseInt(deerSatiety.style.width, 10) < 100)) {
                    if ((arr[i].x - lastX <= 1) && (arr[i].y - lastY <= 1) && (arr[i].x - lastX > -2) && (arr[i].y - lastY > -2)) {

                        x = arr[i].x;
                        y = arr[i].y;
                        if ((_self.htmlMatrix[x][y].className == 'tree')&&(_self.htmlMatrix[x][y].style.backgroundSize !== '80% 80%')){
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
                        }
                        if ((_self.htmlMatrix[x][y].className == 'bush')&&(_self.htmlMatrix[x][y].style.backgroundSize !== '80% 80%')){
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

                        if ((_self.htmlMatrix[x][y].className == 'tree3')||(_self.htmlMatrix[x][y].className == 'leafBush')||(_self.htmlMatrix[x][y].className == 'leafTree')||(_self.htmlMatrix[x][y].className == 'deer')||(_self.htmlMatrix[x][y].className == 'mouse')) {
                            rememberLastStep();
                            x = _self.stepX();
                            y = _self.stepY();
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

        if (parseInt(deerHealth.style.width, 10) == 0) {
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
        if ((x == -1) || (x == matrixSize) || (y == -1) || (y == matrixSize) ) {
            //console.log('This is the fence. The deer can\'t go beyond the fence');
            rememberLastStep();
            return this.move();
        }
        if (this.htmlMatrix[x][y].className == 'empty') {
            this.htmlMatrix[x][y].style.backgroundSize = '';
            deerSatiety.innerHTML = (parseInt(deerSatiety.style.width, 10) - 5) + '%';
            deerSatiety.style.width = (parseInt(deerSatiety.style.width, 10) - 5) + '%';
            if (deerSatiety.style.width == '0%') {
                deerSatiety.innerHTML = '0%';
                if ((parseInt(deerHealth.style.width, 10) > 0)) {
                    deerHealth.innerHTML = (parseInt(deerHealth.style.width, 10) - 10) + '%';
                    deerHealth.style.width = (parseInt(deerHealth.style.width, 10) - 10) + '%';
                } else {
                    this.animalD++;
                    this.fir = x;
                    this.sec = y;
                    return;
                }
            }
            this.htmlMatrix[x][y].className = 'deer';
            //console.log('The deer is here right now htmlMatrix[' + x + '][' + y + ']');
            this.htmlMatrix[lastX][lastY].className = 'empty';
            this.fir = x;
            this.sec = y;
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == 'bush')&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = 'bushHalf';
            //console.log('The bush is front of. The deer is eating the bush htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == 'bushHalf')&&(parseInt(deerSatiety.style.width, 10) != 100)){
            this.htmlMatrix[x][y].className = 'empty';
            //console.log('The bush was eaten. htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == 'tree')&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = 'tree1';
           // console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == 'tree1')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = 'tree2';
           // console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == 'tree2')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = 'tree3';
           // console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        if ((this.fruitsAndBerries.indexOf(this.htmlMatrix[x][y].className) !== -1)&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = 'empty';
           // console.log('The deer has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        else {
            rememberLastStep();
            return this.move();
        }
    }
}