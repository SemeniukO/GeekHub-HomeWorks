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
        		while(y < x){
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
    let rand = Math.round(Math.random()*10);
    let className = 'empty';
    if (rand < 1) className = 'tree';
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

let createAnimal = function setAnimal(){
	if (arr[fir][sec] == `<span class=tree>&nbsp; </span>`){return setAnimal()}
	arr[fir][sec] = `<span class=animal>&nbsp; </span>`;
}
createAnimal();
htmlWrite();

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

function move(){
	let lastX = fir;
	let lastY = sec;
	let x = stepX();
	let y = stepY()
	
	if ((x==lastX)&&(y==lastY)){return move()}
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		htmlWrite();
		document.close();
		fir = lastX;
		sec = lastY;
		return;
	}
					
	if (arr[x][y] == `<span class=empty>&nbsp; </span>`){ 
		arr[x][y] = `<span class=animal>&nbsp; </span>`;
		arr[lastX][lastY] = `<span class=color>&nbsp; </span>`;
		console.log('The animal is here right now arr['+x+']['+y+']');
		htmlWrite();
		document.close();
		arr[lastX][lastY] = `<span class=empty>&nbsp; </span>`;
        return;
		}
		else { 
			clearInterval(timerId);
			console.log('The tree is front of. The animal is thinking where to go');
			arr[x][y] = `<span class=treeColor>&nbsp; </span>`;
			htmlWrite();
			document.close();
			arr[x][y] = `<span class=tree>&nbsp; </span>`;
			fir = lastX;
			sec = lastY;
			setTimeout(function(){timerId = setInterval(move,1000)},5000);
			
			return;
	} 
} 

let timerId = setInterval(move,1000);


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
document.body.innerHTML = outPut;
document.querySelector('html').style.fontFamily = "monospace"
  outPut = '';
}

 //clearInterval(timerId);
