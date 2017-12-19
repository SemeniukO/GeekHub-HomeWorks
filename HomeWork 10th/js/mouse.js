import {Animal} from './animal.js';

export class Mouse extends Animal {
    constructor(htmlMatrix, timerId, name) {
        super(htmlMatrix, timerId, name);
        this.setAnimal(this.fir, this.sec, 'mouse');
        console.log('The mouse stands here arr[' + this.fir + '][' + this.sec + ']');
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
        let mouseSatiety = document.querySelector('#' + this.deerBarS);
        let mouseHealth = document.querySelector('#' + this.deerBarH);
        let x,y;

        let arr = [];
        let i=0;
        for (let x=-1;x<=1;x++){
            for (let y=-1;y<=1;y++){
                if ((lastX+x!=-1)&&(lastX+x!=20)&&(lastY+y!=-1)&&(lastY+y!=20)) {
                    arr[i] = {class:this.htmlMatrix[lastX+x][lastY+y].className,style:this.htmlMatrix[lastX+x][lastY+y].style,x:lastX+x,y:lastY+y};

                    i++;
                }
            }
        }

        let checkClassEmpty = arr.filter(function (number) {
            return number.class == 'empty';
        });

        if ((checkClassEmpty.length == 0) && (parseInt(mouseSatiety.style.width, 10) == 100)) {
            clearInterval(_self.timerId);
            return console.log('The '+_self.name+' Game Over');
        }

        function checkMeels() {
            for (let i = 0; i < arr.length; i++) {
                if ((_self.mouseFood.indexOf(arr[i].class) != -1) && (parseInt(mouseSatiety.style.width, 10) < 100)) {
                        x = arr[i].x;
                        y = arr[i].y;
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

        if (parseInt(mouseHealth.style.width, 10) == 0) {
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

        checkMeels();

        if (this.eatFlag == true) {
            x = eatX;
            y = eatY;
            this.eatFlag = false;
        }

        if ((x == lastX) && (y == lastY)) {
            rememberLastStep();
            return this.move();
        }
        if ((x == -1) || (x == 20) || (y == -1) || (y == 20)) {
            console.log('This is the fence. The mouse can\'t go beyond the fence');
            console.log('The mouse is here right now htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            return this.move();
        }
        if (this.htmlMatrix[x][y].className == `empty`) {
            this.htmlMatrix[x][y].style.backgroundSize = '';
            mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width, 10) - 5) + '%';
            mouseSatiety.style.width = (parseInt(mouseSatiety.style.width, 10) - 5) + '%';
            if (mouseSatiety.style.width == '0%') {
                mouseSatiety.innerHTML = '0%';
                if ((parseInt(mouseHealth.style.width, 10) > 0)) {
                    mouseHealth.innerHTML = (parseInt(mouseHealth.style.width, 10) - 10) + '%';
                    mouseHealth.style.width = (parseInt(mouseHealth.style.width, 10) - 10) + '%';
                } else {
                    this.animalD++;
                    this.fir = x;
                    this.sec = y;
                    return;
                }
            }
            this.htmlMatrix[x][y].className = 'mouse';
            console.log('The mouse is here right now htmlMatrix[' + x + '][' + y + ']');
            this.htmlMatrix[lastX][lastY].className = `empty`;
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `tree`)||(this.htmlMatrix[x][y].className == `bush`)) {
            rememberLastStep();
            return this.move();
        }
        if ((this.htmlMatrix[x][y].className == `fruit`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `fruit1`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `fruit1`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `fruit2`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `fruit2`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `fruit3`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `fruit3`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `fruit4`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `fruit4`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `fruit5`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `fruit5`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `empty`;
            console.log('The mouse has eaten the fruit htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `berry`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `berry1`;
            console.log('The mouse has eaten the berry htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `berry1`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `berry2`;
            console.log('The mouse has eaten the berry htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `berry2`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `berry3`;
            console.log('The mouse has eaten the berry htmlMatrix[' + x + '][' + y + ']');
            repeatEat();
            super.stepsCounter();
            return;
        }
        if ((this.htmlMatrix[x][y].className == `berry3`)&&(parseInt(mouseSatiety.style.width, 10) != 100)) {
            this.htmlMatrix[x][y].className = `empty`;
            console.log('The mouse has eaten the berry htmlMatrix[' + x + '][' + y + ']');
            rememberLastStep();
            this.health();
            super.stepsCounter();
            return;
        }else {
            rememberLastStep();
            return this.move();
        }
    }
}