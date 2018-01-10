import {insertDom} from './insDom.js';
import {matrixSize} from "./configuration.js";

export class Animal {
    constructor(htmlMatrix, timerId, name) {
        this.name = name;
        this.BarSatiety = 'BarSatiety' + Math.floor(Math.random() * 100000);
        this.BarHealth = 'BarHealth' + Math.floor(Math.random() * 100000);
        this.steps = 'steps' + Math.floor(Math.random() * 10000);
        this.stepCounter = 0;
        insertDom(this.name, this.BarSatiety, this.BarHealth,this.steps);
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
        this.fruitsAndBerries = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5','berry','berry1', 'berry2', 'berry3'];
        this.deerFood = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5','berry','berry1', 'berry2', 'berry3','tree','tree1','tree2','bush','bushHalf'];
        this.mouseFood = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5','berry','berry1', 'berry2', 'berry3'];

    }

    health() {
        let Satiety = document.querySelector('#' + this.BarSatiety);
        let Health = document.querySelector('#' + this.BarHealth);

        if (parseInt(Satiety.style.width, 10) <= 0) {
            Health.innerHTML = (parseInt(Health.style.width, 10) + 20) + '%';
            Health.style.width = (parseInt(Health.style.width, 10) + 20) + '%';
            if (parseInt(Health.style.width, 10) > 100) {
                Health.innerHTML = '100%';
                Health.style.width = '100%';
            }
        }
        if ((parseInt(Satiety.style.width, 10) < 100) && (parseInt(Health.style.width, 10) == 100)) {
            Satiety.innerHTML = (parseInt(Satiety.style.width, 10) - 5) + '%';
            Satiety.style.width = (parseInt(Satiety.style.width, 10) - 5) + '%';
            Satiety.innerHTML = (parseInt(Satiety.style.width, 10) + 10) + '%';
            Satiety.style.width = (parseInt(Satiety.style.width, 10) + 10) + '%';
            if (parseInt(Satiety.style.width, 10) > 100) {
                Satiety.innerHTML = '100%';
                Satiety.style.width = '100%';
            }

        }
    }
    stepsCounter(){
        let steps = document.querySelector('#' + this.steps);
        this.stepCounter++;
        steps.innerHTML = this.stepCounter;
    }
}