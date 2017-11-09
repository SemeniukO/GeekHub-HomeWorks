function Animal (){
	this._move = false;
}   

Animal.prototype.enable = function(){
		this._move = true;
	}

Animal.prototype.disable = function(){
		this._move = false;
	}

//___________________________________________________________
function Mouse(){
	Animal.apply(this, arguments);
}

Mouse.prototype = Object.create(Animal.prototype);
Mouse.prototype.constructor = Mouse;

Mouse.prototype.func = function(){
	console.log(this._move);
}

//_____________________________________________________________
function Eagle(){
	Animal.apply(this, arguments);
}

Eagle.prototype = Object.create(Animal.prototype);
Eagle.prototype.constructor = Eagle;

Eagle.prototype.func = function(){
	console.log(this._move);
}
//_____________________________________________________________
function Deer(){
	Animal.apply(this, arguments);
}

Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;

Deer.prototype.func = function(){
	console.log(this._move);
}

//_____________________________________________________________
function Human(){
	Animal.apply(this, arguments);
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;

Human.prototype.func = function(){
	console.log(this._move);
}

//_____________________________________________________________
function Hunter(){
	Human.apply(this, arguments);
}

Hunter.prototype = Object.create(Human.prototype);
Hunter.prototype.constructor = Hunter;

Hunter.prototype.func = function(){
	console.log(this._move);
}

Hunter.prototype.doSomething = function(){
	console.log('do something');
}


//______________________________________________________________
function Aborigine(){
	Human.apply(this, arguments);
}

Aborigine.prototype = Object.create(Human.prototype);
Aborigine.prototype.constructor = Aborigine;

Aborigine.prototype.func = function(){
	console.log(this._move);
}

Aborigine.prototype.doSomething = function(){
	console.log('do something');
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
