let matrix = {
    Size: 20,
}

let arr = [];

matrix[Symbol.iterator] = function(){
	let x = this.Size;
    let i = 0;
   	return {
    	next() {
      		if (i < x) {
        		arr[i] = [];
        		let y = 0;
        		while(y<x){
        			arr[i][y] = fillArray();
        			y++;
        		}
        		return {
          			done: false,
          			value: i++
        		};
    		} else {
        		return {
          		done: true
        		};
      		}
  		}
  	}
}

for (let num of matrix);

function fillArray() {
    let rand = Math.round(Math.random()*100);
    let className = 'empty';
    if (rand < 3) className = 'tree';
    if (rand < 2) className = 'bush';
    return `<span class=${className}>&nbsp; </span>`;
}

function putAnimal() {
    let rand = Math.floor(Math.random()*20);
    return rand;
  }

function getInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let fir = putAnimal();
let sec = putAnimal();
let firmouse = putAnimal();
let secmouse = putAnimal();

function setAnimal(fir,sec,animal){
	arr[fir][sec] = `<span class=${animal}>&nbsp; </span>`;
}

setAnimal(fir,sec,'animal');
setAnimal(firmouse,secmouse,'mouse');
htmlWrite();

let elements = document.querySelectorAll('span');
let htmlMatrix = [];
let num = 0;

for (let i=0;i<=19;i++){
	htmlMatrix[i] = [];
	for (let y = 0; y<=19;y++){
		htmlMatrix[i][y] = elements[num];
		num++;
	}
}

console.log('The animal stands here arr['+fir+']['+sec+']');

function stepX(){
	fir+= getInteger(-1, 1);
	if ((fir<-1) || (fir>20)){
		return stepX();
	}
	return fir;
}

function stepY(){
	sec+= getInteger(-1, 1);
	if ((sec<-1) || (sec>20)){
		return stepY();
	}
	return sec;
}

function stepXmouse(){
	firmouse+= getInteger(-1, 1);
	if ((firmouse<-1) || (firmouse>20)){
		return stepXmouse();
	}
	return firmouse;
}

function stepYmouse(){
	secmouse+= getInteger(-1, 1);
	if ((secmouse<-1) || (secmouse>20)){
		return stepYmouse();
	}
	return secmouse;
}

let moveNumber = 0;
let emptyTreeStep = 0;
let fruitDownStep = 0;
let berryDownStep = 0;
let animalD = 0;
let mouseD = 0;

let deerMovment = function move(){
	let lastX = fir;
	let lastY = sec;
	let x = stepX();
	let y = stepY();

	let emptyTree = document.querySelector('.tree3');
	let deerSatiety = document.querySelector('#deerBarS');
	let deerHealth = document.querySelector('#deerBarH');
	let animalClass = document.querySelector('.animal');
	
	function cutTheTree(){
		if (emptyTree){
			if (emptyTreeStep==1){
	    		emptyTree.className  = 'empty';
	    		emptyTreeStep = 0; 
	    		return;
    		}
    	emptyTreeStep++;
    	}
	};
	cutTheTree();

	moveNumber++;
	if (moveNumber==1){
		classGrow(bushClass,70);
		classGrow(treeClass,55);
	};
	if (moveNumber==2){
		classGrow(bushClass,80)
		classGrow(treeClass,80);
	};	
	
	let treeClasses = document.querySelectorAll('.tree');
	let bushClasses = document.querySelectorAll('.bush');
	
	if (moveNumber%2==0){
		classGrow(treeClasses,80);
		classGrow(bushClasses,80);
	};	

	fruitDown();
	berryDown();

	if (animalD!=0){
		if (animalD%3 == 0){
			animalClass.style.backgroundSize = '0% 0%';
		}
	}

	if (moveNumber%4 == 0){
		growPlant('tree','fruit');
		growPlant('bush','berry');
	};

	if ((x==lastX)&&(y==lastY)){
		fir = lastX;
		sec = lastY;
		return;
	};
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)&&(parseInt(deerHealth.style.width,10)>0)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		fir = lastX;
		sec = lastY;
		move(); 
		return;
		};

	if (htmlMatrix[x][y].className == `empty`){ 
		htmlMatrix[x][y].style.backgroundSize = '';
		deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)-5)+'%';
		deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)-5)+'%';
		if (deerSatiety.style.width=='0%'){
			deerSatiety.innerHTML = '0%';
			if ((parseInt(deerHealth.style.width,10)>0)){
				deerHealth.innerHTML = (parseInt(deerHealth.style.width,10)-10)+'%';
				deerHealth.style.width =  (parseInt(deerHealth.style.width,10)-10)+'%';
			}else{
				animalD++;
				return;
			}
		}
		htmlMatrix[x][y].className = 'animal';
		console.log('The animal is here right now htmlMatrix['+x+']['+y+']');
		htmlMatrix[lastX][lastY].className = `empty`;
        return;
	}

	if ((htmlMatrix[x][y].className == `bush`)&&(htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `bushHalf`;
		console.log('The bush is front of. The animal is eating the bush htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
		if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
			}	
		}
		return;
	}
	if (htmlMatrix[x][y].className == `bushHalf`){
		htmlMatrix[x][y].className = `empty`;
		console.log('The bush was eaten. htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
		if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}
	if ((htmlMatrix[x][y].className == `tree`)&&(htmlMatrix[x][y].style.backgroundSize == '80% 80%')&&(parseInt(deerHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `tree1`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}
	if (htmlMatrix[x][y].className == `tree1`){
		htmlMatrix[x][y].className = `tree2`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<=100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}
	if (htmlMatrix[x][y].className == `tree2`){
		htmlMatrix[x][y].className = `tree3`;
		console.log('The tree is front of. The animal is eating the tree htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}
	if (htmlMatrix[x][y].className == `tree3`){
		console.log('There are no leaves on the tree. The animal think what to do htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}
	if ((htmlMatrix[x][y].className == (`fruit`)||(`fruit1`)||(`fruit2`)||(`fruit3`)||(`fruit4`)||(`fruit5`))&&(parseInt(deerHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `empty`;
		console.log('The animal has eaten the fruit htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
	}	
	if ((htmlMatrix[x][y].className == (`berry`)||(`berry1`)||(`berry2`)||(`berry3`)||(`berry4`)||(`berry5`))&&(parseInt(deerHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `empty`;
		console.log('The animal has eaten the berry htmlMatrix['+x+']['+y+']');
		fir = lastX;
		sec = lastY;
			if (parseInt(deerSatiety.style.width,10)<100){
			deerSatiety.innerHTML = (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerSatiety.style.width =  (parseInt(deerSatiety.style.width,10)+10)+'%';
			deerHealth.innerHTML = '100%';
			deerHealth.style.width = '100%';
			if (parseInt(deerSatiety.style.width,10)>100){
				deerSatiety.innerHTML = '100%';
				deerSatiety.style.width =  '100%';
				}
			}
		return;
		}else {
		fir = lastX;
		sec = lastY;
	}		
} 

let mouseMovment = function moveMouse(){
	let lastX = firmouse;
	let lastY = secmouse;
	let x = stepXmouse();
	let y = stepYmouse();
	let mouseSatiety = document.querySelector('#mouseBarS');
	let mouseHealth = document.querySelector('#mouseBarH');
	let mouseClass = document.querySelector('.mouse');
	
	if (mouseD!=0){
		if (mouseD%3 == 0){
			mouseClass.className = 'empty'
			clearInterval(timerIdMouse);
		}
	}

	if ((x==lastX)&&(y==lastY)){
		moveMouse();
		return;
	}
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)&&(parseInt(mouseHealth.style.width,10)>0)){
		console.log('This is the fence. The mouse can\'t go beyond the fence');
		firmouse = lastX;
		secmouse = lastY;
		moveMouse();
		return;
	}

	if (htmlMatrix[x][y].className == `empty`){ 
		htmlMatrix[x][y].style.backgroundSize = '';
		mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)-5)+'%';
		mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)-5)+'%';
		if (mouseSatiety.style.width=='0%'){
			mouseSatiety.innerHTML = '0%';
			if ((parseInt(mouseHealth.style.width,10)>0)){
				mouseHealth.innerHTML = (parseInt(mouseHealth.style.width,10)-10)+'%';
				mouseHealth.style.width =  (parseInt(mouseHealth.style.width,10)-10)+'%';
			}else{
			mouseD++;
			return;
			}
		}
		htmlMatrix[x][y].className = 'mouse';
		console.log('The mouse is here right now htmlMatrix['+x+']['+y+']');
		htmlMatrix[lastX][lastY].className = `empty`;
		return;
	}
	if (htmlMatrix[x][y].className == `tree`){
		console.log('The tree is front of. The mouse is moving to another way['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		mouseMovment();
		return;
	}
	if (htmlMatrix[x][y].className == `bush`){
		console.log('The bush is front of. The mouse is moving to another way['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		mouseMovment();
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `fruit1`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit1`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `fruit2`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit2`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `fruit3`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit3`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `fruit4`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit4`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `fruit5`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `fruit5`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `empty`;
		console.log('The mouse has eaten the fruit htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `berry`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `berry1`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `berry1`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `berry2`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `berry2`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `berry3`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}
	if ((htmlMatrix[x][y].className == `berry3`)&&(parseInt(mouseHealth.style.width,10)>0)){
		htmlMatrix[x][y].className = `empty`;
		console.log('The mouse has eaten the berry htmlMatrix['+x+']['+y+']');
		firmouse = lastX;
		secmouse = lastY;
		if (parseInt(mouseSatiety.style.width,10)<100){
			mouseSatiety.innerHTML = (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseSatiety.style.width =  (parseInt(mouseSatiety.style.width,10)+10)+'%';
			mouseHealth.innerHTML = '100%';
			mouseHealth.style.width = '100%';
			if (parseInt(mouseSatiety.style.width,10)>100){
				mouseSatiety.innerHTML = '100%';
				mouseSatiety.style.width =  '100%';
			}
		}
		return;
	}else {
		firmouse = lastX;
		secmouse = lastY;
		}		
} 

let bushClass = document.querySelectorAll('.bush');
let treeClass = document.querySelectorAll('.tree');
function classGrow(plantClass,size){
	for (let i=0;i<plantClass.length;i++){
		plantClass[i].style.backgroundSize = `${size}% ${size}%`;
	}
}
 function growPlant(plamt, fruit){
 	htmlMatrix.forEach(function(item,q) {
 		let i = q;
  		htmlMatrix[i].forEach(function(items,y){
  		if ((items.className==plamt)&&(items.style.backgroundSize == '80% 80%')){
  			if ((y-1!=-1)&&(htmlMatrix[i][y-1].className == `empty`)){
  				htmlMatrix[i][y-1].className = `${fruit}`;
  				return;
  				}
  			else if ((y+1!=20)&&(htmlMatrix[i][y+1].className == `empty`)){
  				htmlMatrix[i][y+1].className = `${fruit}`;
  				return;
  			}
  			else if ((i-1!=-1)&&(htmlMatrix[i-1][y].className == `empty`)){
  				htmlMatrix[i-1][y].className = `${fruit}`;
  				return;
  			}
  			else if ((i+1!=20)&&(htmlMatrix[i+1][y].className == `empty`)){
  				htmlMatrix[i+1][y].className = `${fruit}`;
  				return;
  			}
  			else if ((i+1!=20)&&(y-1!=-1)&&(htmlMatrix[i+1][y-1].className == `empty`)){
  				htmlMatrix[i+1][y-1].className = `${fruit}`;
  				return;
  			}
  			else if ((i+1!=20)&&(y+1!=20)&&(htmlMatrix[i+1][y+1].className == `empty`)){
  				htmlMatrix[i+1][y+1].className = `${fruit}`;
  				return;
  			}
  			else if ((i-1!=-1)&&(y-1!=-1)&&(htmlMatrix[i-1][y-1].className == `empty`)){
  				htmlMatrix[i-1][y-1].className = `${fruit}`;
  				return;
  			}
  			else if ((i-1!=-1)&&(y+1!=20)&&(htmlMatrix[i-1][y+1].className == `empty`)){
  				htmlMatrix[i-1][y+1].className = `${fruit}`;
  				return;
  			}else {return};
  		}
  })
});}

function fruitDown(){
	let fruitClass = document.querySelectorAll('.fruit');
	if (fruitClass[0]!=undefined){
			
		if (fruitDownStep==0){
			classGrow(fruitClass,65);
			fruitDownStep++;
			return;
		}
		if (fruitDownStep == 1){
			classGrow(fruitClass,50);
			fruitDownStep++;
			return;
		}
		if (fruitDownStep == 2){
			classGrow(fruitClass,40);
			fruitDownStep++;
			return;
		}
		if (fruitDownStep == 3){
			for (let w = 0;w<fruitClass.length;w++){
				fruitClass[w].className = 'tree';
			}
			fruitDownStep = 0;
			return;
		}
	}
}

function berryDown(){
	let berryClass = document.querySelectorAll('.berry');
	if (berryClass[0]!=undefined){

		if (berryDownStep==0){
			classGrow(berryClass,65);
			berryDownStep++;
			return;
		}
		if (berryDownStep == 1){
			classGrow(berryClass,50);
			berryDownStep++;
			return;
		}
		if (berryDownStep == 2){
			classGrow(berryClass,40);
			berryDownStep++;
			return;
		}
		if (berryDownStep == 3){
			for (let w = 0;w<berryClass.length;w++){
				berryClass[w].className = 'bush';
			}
			berryDownStep = 0;
			return;
		}
	}
}
let timerId = setInterval(deerMovment,1000);
let timerIdMouse = setInterval(mouseMovment,1000);

function htmlWrite(){
	let outPut = "";
	let length = arr.length;
	for (let i = 0; i < length; i++) {
  		let l = arr[i].length;
  			for (let j = 0; j < l; j++) {
    			outPut += arr[i][j] + " ";
  			}
  		outPut += '</br>';
	}
document.getElementById('arr').innerHTML = outPut;
document.querySelector('html').style.fontFamily = "monospace"
 outPut = '';
}

 //clearInterval(timerId);
 //clearInterval(timerIdMouse);
