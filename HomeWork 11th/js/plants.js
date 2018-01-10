import {matrixSize} from "./configuration.js";

export class Plant {
    constructor(htmlMatrix) {
        this.putPlant = function () {
            return Math.floor(Math.random() * matrixSize);
        };
        this.x = this.putPlant();
        this.y = this.putPlant();
        this.htmlMatrix = htmlMatrix;
        this.setPlant = function (x, y, Plant) {
            this.htmlMatrix[this.x][this.y].style.backgroundSize = '';
            this.htmlMatrix[this.x][this.y].className = Plant;
        };
        this.moveNumber = 0;
        this.emptyTreeStep = 0;
        this.fruitsDown = this.fruitDown('fruit', 'tree', 'leafTree');
        this.berriesDown = this.fruitDown('berry', 'bush', 'leafBush');
        this.bushClass = document.querySelectorAll('.bush');
        this.treeClass = document.querySelectorAll('.tree');

    }

    cutTheTree() {
        let emptyTree = document.querySelector('.tree3');
        if (emptyTree) {
            if (this.emptyTreeStep == 2) {
                emptyTree.className = 'empty';
                this.emptyTreeStep = 0;
                return;
            }
            this.emptyTreeStep++;
        }
    }

    allGrow() {
        this.cutTheTree();

        this.moveNumber++;
        if (this.moveNumber == 1) {
            this.classGrow(this.bushClass, 70);
            this.classGrow(this.treeClass, 55);
        }
        if (this.moveNumber == 2) {
            this.classGrow(this.bushClass, 80)
            this.classGrow(this.treeClass, 80);
        }

        let treeClasses = document.querySelectorAll('.tree');
        let bushClasses = document.querySelectorAll('.bush');

        if (this.moveNumber % 2 == 0) {
            this.classGrow(treeClasses, 80);
            this.classGrow(bushClasses, 80);
        }

        this.fruitsDown();
        this.berriesDown();

        if (this.moveNumber % 5 == 0) {
            this.growPlant('tree', 'fruit');
            this.growPlant('bush', 'berry');
        }
    }


    classGrow(plantClass, size) {

        for (let i = 0; i < plantClass.length; i++) {
            plantClass[i].style.backgroundSize = `${size}% ${size}%`;
        }
    }

    growPlant(plamt, fruit) {
        let _self = this;
        _self.htmlMatrix.forEach(function (item, q) {
            let i = q;
            _self.htmlMatrix[i].forEach(function (items, y) {
                if ((items.className == plamt) && (items.style.backgroundSize == '80% 80%')) {
                    if ((y - 1 != -1) && (_self.htmlMatrix[i][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((y + 1 != matrixSize) && (_self.htmlMatrix[i][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i][y + 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (_self.htmlMatrix[i - 1][y].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != matrixSize) && (_self.htmlMatrix[i + 1][y].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != matrixSize) && (y - 1 != -1) && (_self.htmlMatrix[i + 1][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i + 1 != matrixSize) && (y + 1 != matrixSize) && (_self.htmlMatrix[i + 1][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i + 1][y + 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (y - 1 != -1) && (_self.htmlMatrix[i - 1][y - 1].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y - 1].className = `${fruit}`;
                        return;
                    }
                    else if ((i - 1 != -1) && (y + 1 != matrixSize) && (_self.htmlMatrix[i - 1][y + 1].className == `empty`)) {
                        _self.htmlMatrix[i - 1][y + 1].className = `${fruit}`;
                        return;
                    } else {
                        return
                    }
                }
            })
        })
    }

    fruitDown(fruit, tree, leaf) {
        let fruitDownStep = 0;
        let DownStep = 0;
        let fruits = fruit;
        let fruitClass;
        return function () {
            if (fruits == 'fruit') {
                fruitClass = document.querySelectorAll('.fruit,.fruit1,.fruit2,.fruit3,.fruit4,.fruit5')
            } else {
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
                    this.classGrow(fruitClass, 75);
                    fruitDownStep++;
                    return;
                }
                if (fruitDownStep == 1) {
                    this.classGrow(fruitClass, 70);
                    fruitDownStep++;
                    return;
                }
                if (fruitDownStep == 2) {
                    this.classGrow(fruitClass, 65);
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
}

export class Tree extends Plant {
    constructor(htmlMatrix) {
        super(htmlMatrix);
        this.setPlant(this.x, this.y, 'tree');
    }
}

export class Bush extends Plant {
    constructor(htmlMatrix) {
        super(htmlMatrix);
        this.setPlant(this.x, this.y, 'bush');
    }
}







