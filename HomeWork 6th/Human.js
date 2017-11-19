import Animal from './Animal.js';
export class Human extends Animal {
	func() {
		console.log(this._move);
	}
}
