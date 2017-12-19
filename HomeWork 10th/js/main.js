import {Mouse} from './mouse.js';
import {Deer} from './deer.js';
import {htmlMatrix} from './plants.js';
import {allGrow} from './plants.js';

allGrow();


let timerId = setInterval(function () {
    deerMovment.move();
}, 1000);

let timeMouse = setInterval(function () {
    mouseMovment.move();
}, 1000);

setInterval(allGrow, 1000);

let deerMovment = new Deer(htmlMatrix, timerId, 'Deer');
let mouseMovment = new Mouse(htmlMatrix, timeMouse, 'Mouse');