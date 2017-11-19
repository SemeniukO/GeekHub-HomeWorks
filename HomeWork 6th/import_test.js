import {Mouse}  from './Mouse.js';
import {Eagle} from './Eagle.js';
import Hunter from './Hunter.js';

let mouse = new Mouse();
mouse.enable();
mouse.func();

let eagle = new Eagle();
eagle.func();

let deer = new Deer();
deer.enable();
deer.func();

let human = new Human();
human.enable();
human.func();

let hunter = new Hunter();
hunter.enable();
hunter.func();
hunter.doSomething();

let aborigine = new Aborigine();
aborigine.func();
aborigine.doSomething();
