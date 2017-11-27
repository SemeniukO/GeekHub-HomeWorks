let matrix = [];
let i = 0;
while(matrix.length!=20){
	matrix[i] = i;
	i++;
}

let arr = [];

for (let num of matrix) {
  	arr[num] = [];
	for (let key of matrix){
		arr[num][key] = fillArray();
	}
}

function fillArray() {
    var rand = Math.round(Math.random()*10);
    if (rand>=1){return `<span class='empty'>&nbsp; </span>`};
    if (rand<1){return `<span class='tree' >&nbsp; </span>`};
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
arr[fir][sec] = `<span class='animal'>&nbsp; </span>`;
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
	var lastX = fir;
	var lastY = sec;
	var x = stepX();
	var y = stepY()
	
	if ((x==lastX)&&(y==lastY)){return move()}
	
	if ((x==-1)||(x==20)||(y==-1)||(y==20)){
		console.log('This is the fence. The animal can\'t go beyond the fence');
		htmlWrite();
		document.close();
		fir = lastX;
		sec = lastY;
		return;
	}
	
	if (arr[x][y] == `<span class='empty'>&nbsp; </span>`){ 
		arr[x][y] = `<span class='animal'>&nbsp; </span>`;
		arr[lastX][lastY] = `<span class='color'>&nbsp; </span>`;
		console.log('The animal is here right now arr['+x+']['+y+']');
		htmlWrite();
		document.close();
		arr[lastX][lastY] = `<span class='empty'>&nbsp; </span>`;
        return;
		}
		else { 
			clearInterval(timerId);
			console.log('The tree is front of. The animal is thinking where to go');
			arr[x][y] = `<span class='treeColor'>&nbsp; </span>`;
			htmlWrite();
			document.close();
			arr[x][y] = `<span class='tree'>&nbsp; </span>`;
			fir = lastX;
			sec = lastY;
			setTimeout(function(){timerId = setInterval(move,1000)},5000);
			
			return;
	} 
} 

var timerId = setInterval(move,1000);


function htmlWrite(){
var outPut = "";
var length = arr.length;
for (var i = 0; i < length; i++) {
  var l = arr[i].length;
  for (var j = 0; j < l; j++) {
    outPut += arr[i][j] + " ";
  }
  outPut += '</br>';
  
}
document.body.innerHTML = outPut;
document.querySelector('html').style.fontFamily = "monospace"
  outPut = '';
}

 //clearInterval(timerId);
