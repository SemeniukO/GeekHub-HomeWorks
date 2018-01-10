import {matrixSize} from "./configuration.js";

export class Matrix {
    matrix() {
        let matrix = {
            Size: matrixSize,
        };
        let arr = [];


        matrix[Symbol.iterator] = function () {
            let x = this.Size;
            let i = 0;
            return {
                next() {
                    if (i < x) {
                        arr[i] = [];
                        let y = 0;
                        while (y < x) {
                            arr[i][y] = '<span class="empty">&nbsp; </span>';
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

        for (let num of matrix) {
        }
        ;

        htmlWrite();

        function htmlWrite() {
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

        let elements = document.querySelectorAll('span');
        let htmlMatrix = [];
        let num = 0;

        for (let i = 0; i < matrixSize; i++) {
            htmlMatrix[i] = [];
            for (let y = 0; y < matrixSize; y++) {
                htmlMatrix[i][y] = elements[num];
                num++;
            }
        }

        return htmlMatrix;
    }
}