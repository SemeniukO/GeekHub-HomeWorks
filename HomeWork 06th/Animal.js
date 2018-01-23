export default class Animal {
	constructor(){
		this._move = false;
	}

	enable() {
		this._move = true;
	}

	disable() {
		this._move = false;
	}   
}
