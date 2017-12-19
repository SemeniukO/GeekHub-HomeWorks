import {Animal} from './animal.js';

export class Deer extends Animal {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
        this.setAnimal(this.fir, this.sec, 'deer');
        console.log('The deer stands here arr[' + this.fir + '][' + this.sec + ']');
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
        let deerSatiety = document.querySelector('#' + this.deerBarS);
        let deerHealth = document.querySelector('#' + this.deerBarH);
        let x,y;

        let arr = [];
        let i = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if ((lastX + x != -1) && (lastX + x != 20) && (lastY + y != -1) && (lastY + y != 20)) {
                    arr[i] = {
                        class: this.htmlMatrix[lastX + x][lastY + y].className,
                        style: this.htmlMatrix[lastX + x][lastY + y].style,
                        x: lastX + x,
                        y: lastY + y
                    };
                    i++;
                }
            }
        }

        let checkClassEmpty = arr.filter(function (number) {
            return number.class == 'empty';
        });

        if ((checkClassEmpty.length == 0) && (parseInt(deerSatiety.style.width, 10) == 100)) {
            clearInterval(_self.timerId);
            return console.log('The '+_self.name+' Game Over');
        }

        function checkMeels() {
            for (let i = 0; i < arr.length; i++) {
                if ((_self.deerFood.indexOf(arr[i].class) != -1) && (parseInt(deerSatiety.style.width, 10) < 100)) {
                    if ((arr[i].class == 'tree') && (arr[i].style.backgroundSize != '80% 80%')) {
                        continue;
                    }
                    else if ((arr[i].class == 'bush') && (arr[i].style.backgroundSize != '80% 80%')) {
                        continue;
                    }
                    else {
                        x = arr[i].x;
                        y = arr[i].y;
                        return;
                    }
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
        if ((x == -1) || (x == 20) || (y == -1) || (y == 20) ) {
            console.log('This is the fence. The deer can\'t go beyond the fence');
            rememberLastStep();
            return this.move();
        }
        if (this.htmlMatrix[x][y].className == `empty`) {
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
           console.log('The deer is here right now htmlMatrix[' + x + '][' + y + ']');
            this.htmlMatrix[lastX][lastY].className = `empty`;
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `bush`)&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `bushHalf`;
            console.log('The bush is front of. The deer is eating the bush htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `bushHalf`)&&(parseInt(deerSatiety.style.width, 10) != 100)){
            this.htmlMatrix[x][y].className = `empty`;
            console.log('The bush was eaten. htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `tree`)&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `tree1`;
            console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `tree1`)&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `tree2`;
            console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `tree2`)&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `tree3`;
            console.log('The tree is front of. The deer is eating the tree htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        if ((this.fruitsAndBerries.indexOf(this.htmlMatrix[x][y].className) !== -1)&&(parseInt(deerSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `empty`;
            console.log('The deer has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
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