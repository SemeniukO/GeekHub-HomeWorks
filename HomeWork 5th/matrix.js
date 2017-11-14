var arr = [];
var i = 0;
while(arr.length!=20){
	arr[i] = [];
	var j=0;
	while(j!=20){
		arr[i][j] = fillArray()
		j++;
	}
	i++;
}

function fillArray() {
	var rand = Math.round(Math.random()*10);
	if (rand>=1){return '.'};
	if (rand<1){return '*'};
  }

function putAnimal() {
	var rand = Math.floor(Math.random()*20);
	return rand;
  }

function getInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var fir = putAnimal();
var sec = putAnimal();
arr[fir][sec] = '@';

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
		return stepX();
	}
	return sec;
}

function move(){
	var lastX = fir;
	var lastY = sec;
	var x = stepX();
	var y = stepY()
	
	if ((x==lastX)&&(y==lastY)){return move()}
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		fir = lastX;
		sec = lastY;
		return;
	}
	
	if (arr[x][y] == '.'){ 
		arr[x][y] = '@';
		arr[lastX][lastY] = '.';
		console.log('The animal is here right now arr['+x+']['+y+']');
		return;
		}
		else { 
			console.log('The tree is front of. The animal is thinking where to go');
			fir = lastX;
			sec = lastY;
			return;
	} 
} 


var timerId = setInterval(move,3000);

//clearInterval(timerId);
