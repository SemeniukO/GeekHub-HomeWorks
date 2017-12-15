import {insertDom} from './insDom.js';

export class Mouse {
    constructor(htmlMatrix,timerId,name) {
        this.name = name;
        this.deerBarS = 'deerBarS'+Math.floor(Math.random() * 10000);
        this.deerBarH = 'deerBarH'+Math.floor(Math.random() * 10000);
        insertDom(this.name,this.deerBarS,this.deerBarH);
        this.putAnimal = function putAnimal() {
            return Math.floor(Math.random()*20);
        };
        this.eatX = 0;
        this.eatY = 0;
        this.eatFlag = false;
        this.fir = this.putAnimal();
        this.sec = this.putAnimal();
        this.htmlMatrix = htmlMatrix;
        this.timerId = timerId;
        this.setAnimal = function(fir,sec,animal){
            this.htmlMatrix[this.fir][this.sec].className = animal;
        };
        this.setAnimal(this.fir,this.sec,'mouse');
        console.log('The animal stands here arr['+this.fir+']['+this.sec+']');
        this.animalD = 0;
        this.getInteger = function(min, max){
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        };
        this.stepX =  function stepX(){
            this.fir+= this.getInteger(-1, 1);
            if ((this.fir<-1) || (this.fir>20)){
                return this.stepX();
            }
            return this.fir;
        };

        this.stepY = function stepY(){
            this.sec+= this.getInteger(-1, 1);
            if ((this.sec<-1) || (this.sec>20)){
                return this.stepY();
            }
            return this.sec;
        }
    }

    health(){
        let mouseSatiety = document.querySelector('#'+this.deerBarS);
        let mouseHealth = document.querySelector('#'+this.deerBarH);

        if (parseInt(mouseSatiety.style.width,10)<=0){
            mouseHealth.innerHTML = (parseInt(mouseHealth.style.width,10)+20)+'%';
            mouseHealth.style.width = (parseInt(mouseHealth.style.width,10)+20)+'%';
            if (parseInt(mouseHealth.style.width,10)>100){
                mouseHealth.innerHTML = '100%';
                mouseHealth.style.width =  '100%';
            }
        }
        if ((parseInt(mouseSatiety.style.width,10)<100)&&(parseInt(mouseHealth.style.width,10)==100)) {
            mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width, 10) - 5) + '%';
            mouseSatiety.style.width = (parseInt(mouseSatiety.style.width, 10) - 5) + '%';
            mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width, 10) + 10) + '%';
            mouseSatiety.style.width = (parseInt(mouseSatiety.style.width, 10) + 10) + '%';
            if (parseInt(mouseSatiety.style.width,10)>100){
                mouseSatiety.innerHTML = '100%';
                mouseSatiety.style.width =  '100%';
            }

        }
    }

    move(){
	let lastX = this.fir;
	let lastY = this.sec;
    let eatX = this.eatX;
    let eatY = this.eatY;
    let mouseSatiety = document.querySelector('#'+this.deerBarS);
    let mouseHealth = document.querySelector('#'+this.deerBarH);
    let mouseClass = document.querySelector('.mouse');

    if (this.animalD!=0){
        if ((this.animalD%3 == 0)){
            this.htmlMatrix[lastX][lastY].className = `empty`;
            clearInterval(this.timerId);
            this.animalD=0;
        }
    }

    if (parseInt(mouseHealth.style.width,10)==0){
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
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)&&(parseInt(mouseHealth.style.width,10)>0)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
		}

	if (this.htmlMatrix[x][y].className == `empty`){
        this.htmlMatrix[x][y].style.backgroundSize = '';
		mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)-5)+'%';
		mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)-5)+'%';
		if (mouseSatiety.style.width=='0%'){
			mouseSatiety.innerHTML = '0%';
			if ((parseInt(mouseHealth.style.width,10)>0)){
				mouseHealth.innerHTML = (parseInt(mouseHealth.style.width,10)-10)+'%';
				mouseHealth.style.width =  (parseInt(mouseHealth.style.width,10)-10)+'%';
			}else{
                this.animalD++;
                this.fir = x;
                this.sec = y;
			return;
			}
		}
        this.htmlMatrix[x][y].className = 'mouse';
		console.log('The mouse is here right now htmlMatrix['+x+']['+y+']');
        this.htmlMatrix[lastX][lastY].className = `empty`;
		return;
	}
	if (this.htmlMatrix[x][y].className == `tree`){
		console.log('The tree is front of. The mouse is moving to another way['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
	}
	if (this.htmlMatrix[x][y].className == `bush`){
		console.log('The bush is front of. The mouse is moving to another way['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
		return this.move();
	}
	if ((this.htmlMatrix[x][y].className == `fruit`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `fruit1`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
		this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `fruit1`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `fruit2`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
        return;
	}
	if ((this.htmlMatrix[x][y].className == `fruit2`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `fruit3`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `fruit3`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `fruit4`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `fruit4`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `fruit5`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `fruit5`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `empty`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
		return;
	}
	if ((this.htmlMatrix[x][y].className == `berry`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `berry1`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `berry1`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `berry2`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `berry2`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `berry3`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		this.fir = lastX;
		this.sec = lastY;
        this.health();
        this.eatX = x;
        this.eatY = y;
        this.eatFlag = true;
		return;
	}
	if ((this.htmlMatrix[x][y].className == `berry3`)&&(parseInt(mouseHealth.style.width,10)>0)){
        this.htmlMatrix[x][y].className = `empty`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
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