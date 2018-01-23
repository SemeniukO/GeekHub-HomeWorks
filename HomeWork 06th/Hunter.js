import {Human}  from './Human.js';
export default class Hunter extends Human {
	func() {
		console.log(this._move);
	}
	doSomething () {
		console.log('do something');
	}
}
