import {Mouse}  from './Mouse.js';
import {Eagle} from './Eagle.js';
import Hunter from './Hunter.js';

let mouse = new Mouse();
mouse.enable();
mouse.func();

let eagle = new Eagle();
eagle.func();

let hunter = new Hunter();
hunter.enable();
hunter.func();
hunter.doSomething();
