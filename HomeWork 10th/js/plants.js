import {matrixX} from './matrix.js';

export let htmlMatrix = matrixX();

let moveNumber = 0;
let emptyTreeStep = 0;
let fruitsDown = fruitDown('fruit', 'tree', 'leafTree');
let berriesDown = fruitDown('berry', 'bush', 'leafBush');

export function allGrow() {
    let emptyTree = document.querySelector('.tree3');


    function cutTheTree() {
        if (emptyTree) {
            if (emptyTreeStep == 2) {
                emptyTree.className = 'empty';
                emptyTreeStep = 0;
                return;
            }
            emptyTreeStep++;
        }
    }

    cutTheTree();

    moveNumber++;
    if (moveNumber == 1) {
        classGrow(bushClass, 70);
        classGrow(treeClass, 55);
    }
    if (moveNumber == 2) {
        classGrow(bushClass, 80)
        classGrow(treeClass, 80);
    }

    let treeClasses = document.querySelectorAll('.tree');
    let bushClasses = document.querySelectorAll('.bush');

    if (moveNumber % 2 == 0) {
        classGrow(treeClasses, 80);
        classGrow(bushClasses, 80);
    }

    fruitsDown();
    berriesDown();

    if (moveNumber % 5 == 0) {
        growPlant('tree', 'fruit');
        growPlant('bush', 'berry');
    }
}

let bushClass = document.querySelectorAll('.bush');
let treeClass = document.querySelectorAll('.tree');

function classGrow(plantClass, size) {
    for (let i = 0; i < plantClass.length; i++) {
        plantClass[i].style.backgroundSize = `${size}% ${size}%`;
    }
}

function growPlant(plamt, fruit) {
    htmlMatrix.forEach(function (item, q) {
        let i = q;
        htmlMatrix[i].forEach(function (items, y) {
            if ((items.className == plamt) && (items.style.backgroundSize == '80% 80%')) {
                if ((y - 1 != -1) && (htmlMatrix[i][y - 1].className == `empty`)) {
                    htmlMatrix[i][y - 1].className = `${fruit}`;
                    return;
                }
                else if ((y + 1 != 20) && (htmlMatrix[i][y + 1].className == `empty`)) {
                    htmlMatrix[i][y + 1].className = `${fruit}`;
                    return;
                }
                else if ((i - 1 != -1) && (htmlMatrix[i - 1][y].className == `empty`)) {
                    htmlMatrix[i - 1][y].className = `${fruit}`;
                    return;
                }
                else if ((i + 1 != 20) && (htmlMatrix[i + 1][y].className == `empty`)) {
                    htmlMatrix[i + 1][y].className = `${fruit}`;
                    return;
                }
                else if ((i + 1 != 20) && (y - 1 != -1) && (htmlMatrix[i + 1][y - 1].className == `empty`)) {
                    htmlMatrix[i + 1][y - 1].className = `${fruit}`;
                    return;
                }
                else if ((i + 1 != 20) && (y + 1 != 20) && (htmlMatrix[i + 1][y + 1].className == `empty`)) {
                    htmlMatrix[i + 1][y + 1].className = `${fruit}`;
                    return;
                }
                else if ((i - 1 != -1) && (y - 1 != -1) && (htmlMatrix[i - 1][y - 1].className == `empty`)) {
                    htmlMatrix[i - 1][y - 1].className = `${fruit}`;
                    return;
                }
                else if ((i - 1 != -1) && (y + 1 != 20) && (htmlMatrix[i - 1][y + 1].className == `empty`)) {
                    htmlMatrix[i - 1][y + 1].className = `${fruit}`;
                    return;
                } else {
                    return
                }
                ;
            }
        })
    });
}

function fruitDown(fruit, tree, leaf) {
    let fruitDownStep = 0;
    let DownStep = 0;
    let fruits = fruit;
    let fruitClass;
        return function () {
        if (fruits=='fruit'){
            fruitClass = document.querySelectorAll('.fruit,.fruit1,.fruit2,.fruit3,.fruit4,.fruit5')
        }else{
            fruitClass = document.querySelectorAll('.berry,.berry1,.berry2,.berry3')
        }
        let leafClass = document.querySelectorAll('.' + leaf);

        DownStep++;
        if (leafClass[0] != undefined) {
            if (DownStep == 4) {
                for (let w = 0; w < leafClass.length; w++) {
                    leafClass[w].className = tree;
                }
                DownStep = 0;
            }
        }

        if (fruitClass[0] != undefined) {

            if (fruitDownStep == 0) {
                classGrow(fruitClass, 75);
                fruitDownStep++;
                return;
            }
            if (fruitDownStep == 1) {
                classGrow(fruitClass, 70);
                fruitDownStep++;
                return;
            }
            if (fruitDownStep == 2) {
                classGrow(fruitClass, 65);
                fruitDownStep++;
                return;
            }
            if (fruitDownStep == 3) {
                for (let w = 0; w < fruitClass.length; w++) {
                    fruitClass[w].className = leaf;
                }
                fruitDownStep = 0;
                DownStep = 0;
                return;
            }
        }

    }
}
