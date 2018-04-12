import {Mouse} from './mouse.js';
import {Deer} from './deer.js';
import {htmlMatrix} from './plants.js';
import {allGrow} from './plants.js';


htmlMatrix;
allGrow();

let timerId = setInterval(function () {
  deerMovment.move();
},1000);
let timeMouse = setInterval(function () {
    mouseMovment.move();
}, 1000);

let timerId1 = setInterval(function () {
    deerMovment1.move();
},1000);

let timeMouse1 = setInterval(function () {
    mouseMovment1.move();
},1000);

setInterval(allGrow,1000);

let deerMovment = new Deer(htmlMatrix,timerId,'Deer');
let deerMovment1 = new Deer(htmlMatrix,timerId1,'Deer2');
let mouseMovment = new Mouse(htmlMatrix,timeMouse,'Mouse');
let mouseMovment1 = new Mouse(htmlMatrix,timeMouse1,'Mouse2');
