import {Animal} from './animal.js';

export class Mouse extends Animal {
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