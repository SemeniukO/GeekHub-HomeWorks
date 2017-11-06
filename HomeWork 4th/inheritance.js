function Move(value){
	this._move = false;
	var self = this;

	this.enable = function(){
		self._move = true;
	}

	this.disable = function(){
		self._move = false;
	}
}   

function Creature(value){
	Move.apply(this, arguments);

	var parentEnable = this.enable;
	this.enable = function(){
		parentEnable(); 
		this.run();
	}

	this.run = function(){
		if (value == 'Mouse') {
			console.log('The Mouse is running');
		}
		if (value == 'Eagle') {
			console.log('The Eagle is flying');
		}
		if (value == 'Human') {
			console.log('The Human is walking');
		}

	}
}

function Hunter(value, name){
	Creature.apply(this, arguments);
	this.enable();
	this.name = name;
	console.log(name+' is a hunter');
        this.hasWeapon = false;
	this.weapon = function(){
		this.hasWeapon = true;
	};
	this.checkWeapon = function(){
		if (this.hasWeapon == true){
		   console.log('Hunter '+name+' has a weapon');
		}else{
		   console.log('Hunter '+name+' doesn\'t have a weapon');	
		}
	}
}

function Aborigine(value, name){
	Creature.apply(this, arguments);
	this.enable();
	this.name = name;
	console.log('Human name is '+name);
	this.canSpeak = false;
	this.checkSpeaking = function(){
		if (this.canSpeak == false){
			console.log(name+' is a Aborigine');
		} else {
			console.log(name+' has learned to speak');
		}
	}
	this.speak = function(){
		this.canSpeak = true;
	}
}

var eagle = new Creature('Eagle');
eagle.enable();

var hunter = new Hunter('Human','Marty');
hunter.weapon();

var aborigine = new Aborigine('Human','Colin');
aborigine.checkSpeaking();
aborigine.speak();
aborigine.checkSpeaking();
