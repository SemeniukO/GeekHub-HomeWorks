function Animal (){
	this._move = false;
	var self = this;

	this.enable = function(){
		self._move = true;
	}

	this.disable = function(){
		self._move = false;
	}
}   

function Mouse(){
	Animal.apply(this, arguments);
	this.func = function(){
			console.log(this._move);
		    }
}

function Eagle(){
	Animal.apply(this, arguments);
	this.func = function(){
			console.log(this._move);
		    }
}

function Deer(){
	Animal.apply(this, arguments);
	this.func = function(){
			console.log(this._move);
		    }
}

function Human(){
	Animal.apply(this, arguments);
	this.func = function(){
			console.log(this._move);
		    }
}

function Hunter(){
	Human.apply(this, arguments);
	this.doSomething = function(){
				console.log('do something');
			   }
}

function Aborigine(){
	Human.apply(this, arguments);
	this.doSomething = function(){
				console.log('do something');
			   }
}

var mouse = new Mouse();
mouse.enable();
mouse.func();

var eagle = new Eagle();
eagle.func();

var deer = new Deer();
deer.enable();
deer.func();

var human = new Human();
human.enable();
human.func();

var hunter = new Hunter();
hunter.enable();
hunter.func();
hunter.doSomething();

var aborigine = new Aborigine();
aborigine.func();
aborigine.doSomething();
