import {Hunter} from './hunter.js';
import {Mouse} from './mouse.js';
import {Deer} from './deer.js';
import {Matrix} from './matrix.js';
import {Plant,Tree,Bush} from './plants.js';
import {amountBush,amountTree,speed,amountDeer,amountMouse,amountHunter} from "./configuration.js";

let htmlMatrix = new Matrix().matrix();
let plants =  new Plant(htmlMatrix);



for (let amount = 1; amount <= amountTree; amount++) {
    new Tree(htmlMatrix);
}

for (let amount = 1; amount <= amountBush; amount++) {
    new Bush(htmlMatrix);
}

for (let amount = 1; amount <= amountDeer; amount++) {
    let timerId = setInterval(function () {
        deerMovment.move();
    }, speed);
    let deerMovment = new Deer(htmlMatrix, timerId, 'Deer');

}

for (let amount = 1; amount <= amountMouse; amount++) {
    let timerId = setInterval(function () {
        mouseMovment.move();
    }, speed);
    let mouseMovment = new Mouse(htmlMatrix, timerId, 'Mouse');

}

for (let amount = 1; amount <= amountHunter; amount++) {
    let timeHunter = setInterval(function () {
        hunter1.move();
    }, speed);
    let hunter1 = new Hunter(htmlMatrix, timeHunter, 'Hunter');

}

setInterval(function(){plants.allGrow()}, speed);
