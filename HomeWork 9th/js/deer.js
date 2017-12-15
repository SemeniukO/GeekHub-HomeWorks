import {insertDom} from './insDom.js';

export class Deer {
 	constructor(htmlMatrix,timerId,name) {
 	    this.name = name;
        this.deerBarS = 'deerBarS'+Math.floor(Math.random() * 10000);
        this.deerBarH = 'deerBarH'+Math.floor(Math.random() * 10000);
        insertDom(this.name,this.deerBarS,this.deerBarH);
        this.putAnimal = function putAnimal() {
            return Math.floor(Math.random() * 20);
        };
        this.eatX = 0;
        this.eatY = 0;
        this.eatFlag = false;
        this.fir = this.putAnimal();
        this.sec = this.putAnimal();
        this.htmlMatrix = htmlMatrix;
        this.timerId = timerId;
        this.setAnimal = function (fir, sec, animal) {
            this.htmlMatrix[this.fir][this.sec].className = animal;
        };
        this.setAnimal(this.fir, this.sec, 'animal');
        console.log('The animal stands here arr[' + this.fir + '][' + this.sec + ']');
        this.animalD = 0;
        this.getInteger = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        this.stepX = function stepX() {
            this.fir += this.getInteger(-1, 1);
            if ((this.fir < -1) || (this.fir > 20)) {
                return this.stepX();
            }
            return this.fir;
        };

        this.stepY = function stepY() {
            this.sec += this.getInteger(-1, 1);
            if ((this.sec < -1) || (this.sec > 20)) {
                return this.stepY();
            }
            return this.sec;
        }
        this.fruitArr = ['fruit', 'fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5'];
        this.berryArr = ['berry1', 'berry2', 'berry3'];

    }


health(){
    let deerSatiety = document.querySelector('#'+this.deerBarS);
    let deerHealth = document.querySelector('#'+this.deerBarH);

    if (parseInt(deerSatiety.style.width,10)<=0){
        deerHealth.innerHTML = (parseInt(deerHealth.style.width,10)+20)+'%';
        deerHealth.style.width = (parseInt(deerHealth.style.width,10)+20)+'%';
        if (parseInt(deerHealth.style.width,10)>100){
            deerHealth.innerHTML = '100%';
            deerHealth.style.width =  '100%';
        }
    }
    if ((parseInt(deerSatiety.style.width,10)<100)&&(parseInt(deerHealth.style.width,10)==100)) {
        deerSatiety.innerHTML = (parseInt(deerSatiety.style.width, 10) - 5) + '%';
        deerSatiety.style.width = (parseInt(deerSatiety.style.width, 10) - 5) + '%';
        deerSatiety.innerHTML = (parseInt(deerSatiety.style.width, 10) + 10) + '%';
        deerSatiety.style.width = (parseInt(deerSatiety.style.width, 10) + 10) + '%';
        if (parseInt(deerSatiety.style.width,10)>100){
            deerSatiety.innerHTML = '100%';
            deerSatiety.style.width =  '100%';
        }

    }
}

move(){

	let lastX = this.fir;
	let lastY = this.sec;
    let eatX = this.eatX;
    let eatY = this.eatY;
	let deerSatiety = document.querySelector('#'+this.deerBarS);
    let deerHealth = document.querySelector('#'+this.deerBarH);
	let animalClass = document.querySelector('.animal');

    if (this.animalD!=0){
        if ((this.animalD%3 == 0)){
            this.htmlMatrix[lastX][lastY].className = `empty`;
            clearInterval(this.timerId);
            this.animalD=0;
        }
    }

    if (parseInt(deerHealth.style.width,10)==0){
        this.animalD++;
        return
    }

    let x = this.stepX();
    let y = this.stepY();

    if(this.eatFlag ==true){
        x = eatX;
        y = eatY;
        this.eatFlag = false;
    }

	if ((x==lastX)&&(y==lastY)){
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
	}
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)&&(parseInt(deerHealth.style.width,10)>0)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
		}


	if (this.htmlMatrix[x][y].className == `empty`){
        this.htmlMatrix[x][y].style.backgroundSize = '';
		deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)-5)+'%';
		deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)-5)+'%';
		if (deerSatiety.style.width=='0%'){
			deerSatiety.innerHTML = '0%';
			if ((parseInt(deerHealth.style.width,10)>0)){
				deerHealth.innerHTML = (parseInt(deerHealth.style.width,10)-10)+'%';
				deerHealth.style.width =  (parseInt(deerHealth.style.width,10)-10)+'%';
			}else{
                this.animalD++;
                this.fir = x;
                this.sec = y;
				return;
			}
		}
        this.htmlMatrix[x][y].className = 'animal';
		console.log('The animal is here right now htmlMatrix['+x+']['+y+']');
        this.htmlMatrix[lastX][lastY].className = `empty`;
        return;
	}

	if ((this.htmlMatrix[x][y].className == `bush`)&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `bushHalf`;
		console.log('The bush is front of. The animal is eating the bush htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if (this.htmlMatrix[x][y].className == `bushHalf`){
        this.htmlMatrix[x][y].className = `empty`;
		console.log('The bush was eaten. htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}
	if ((this.htmlMatrix[x][y].className == `tree`)&&(this.htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `tree1`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if (this.htmlMatrix[x][y].className == `tree1`){
        this.htmlMatrix[x][y].className = `tree2`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if (this.htmlMatrix[x][y].className == `tree2`){
        this.htmlMatrix[x][y].className = `tree3`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}
	if (this.htmlMatrix[x][y].className == `tree3`){
		console.log('There are no leaves on the tree. The animal think what to do htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}
	if ((this.fruitArr.indexOf(this.htmlMatrix[x][y].className) !== -1)&&(parseInt(deerHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `empty`;
		console.log('The animal has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}	
	if ((this.berryArr.indexOf(this.htmlMatrix[x][y].className) !== -1)&&(parseInt(deerHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `empty`;
		console.log('The animal has eaten the berry htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}else {
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
		}		
	} 
}