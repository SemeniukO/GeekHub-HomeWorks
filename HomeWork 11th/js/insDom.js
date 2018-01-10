function createString(Animal, BarS, BarH, steps) {
    let indicators = `<div class="text" >` + Animal + ` <span> steps: </span><span id=` + steps + ` >0</span></div>
        <div style="width: 700px">
        <div class="deerProgress">
        <div id=` + BarS + ` style="width: 100%;height: 20px;background-color: #33cc33;font-size: 15px;transition: width 0.5s;">100%</div>
        </div>
        <div class=deerProgress>
        <div id=` + BarH + ` style="width: 100%;height: 20px;background-color: #4dc3ff;font-size: 15px;transition: width 0.5s">100%</div>
        </div>
        </div>`;
    return indicators;
}

function readInner() {
    return document.getElementsByClassName('floatRight')[0].innerHTML;
}

export function insertDom(Deer, BarS, BarH,steps) {
    let readClass = readInner();
    let createStr = createString(Deer, BarS, BarH,steps);
    let insertDom = readClass + createStr;
    document.getElementsByClassName('floatRight')[0].innerHTML = insertDom;
}
