 function matrix()
{let matrix = {
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
};

for (let num of matrix){};

function fillArray() {
    let rand = Math.round(Math.random()*100);
    let className = 'empty';
    if (rand < 3) className = 'tree';
    if (rand < 2) className = 'bush';
    return `<span class=${className}>&nbsp; </span>`;
}

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
    return htmlMatrix;
}
export let matrixX = matrix;