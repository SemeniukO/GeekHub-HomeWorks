export function insertDom(Deer,deerBarS,deerBarH){
    let node = document.createElement("div");
        node.className = 'text';
    let textnode = document.createTextNode(Deer);
        node.appendChild(textnode);
    document.getElementsByClassName("floatRight")[0].appendChild(node);
    let node1 = document.createElement("div");
        node1.style = "width: 700px";
        node1.className = 'st';
    document.getElementsByClassName("floatRight")[0].appendChild(node1);
    let node2 = document.createElement("div");
        node2.className = 'deerProgress';
    let eee = document.getElementsByClassName("st");
        eee[eee.length-1].appendChild(node2);
    let node3 = document.createElement("div");
        node3.id = deerBarS;
        node3.style = 'width: 100%;height: 20px;background-color: #33cc33;font-size: 15px;transition: width 0.5s;';
    let textnod1 = document.createTextNode("100%");
        node3.appendChild(textnod1);
    let sss = document.getElementsByClassName("deerProgress");
        sss[sss.length-1].appendChild(node3);

    let node4 = document.createElement("div");
        node4.className = 'deerProgress';
    let hhh = document.getElementsByClassName("st");
        hhh[hhh.length-1].appendChild(node4);

    let node5 = document.createElement("div");
        node5.id = deerBarH;
        node5.style = 'width: 100%;height: 20px;background-color: #4dc3ff;font-size: 15px;transition: width 0.5s;';
    let textnod5 = document.createTextNode("100%");
        node5.appendChild(textnod5);
    let aaa = document.getElementsByClassName("deerProgress");
        aaa[aaa.length-1].appendChild(node5);
    }