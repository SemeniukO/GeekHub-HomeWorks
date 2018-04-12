import '../css/style.css';

var buttonCheck = document.querySelector('button[name=check]');
buttonCheck.addEventListener("click", check);

var buttonhowAll = document.querySelector('button[name=showAll]');
buttonhowAll.addEventListener("click", showAll);

var input = document.querySelector('input');
input.addEventListener('focus', reset);

function reset() {
    document.getElementById('result').innerHTML = '';
    phone.value = ''
}

function check(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var PhoneNubmer = document.querySelector('#phone');
    var operator = PhoneNubmer.value.toString();
    operator = operator.slice(0, 3);
    let msg = {phone: operator};

    xhr.open('post', '/check', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(msg));
    var result = xhr.responseText;

    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').innerHTML = result;
}


function showAll(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var res = '';
    xhr.open('get', '/showAll', false);
    xhr.send();
    var result = JSON.parse(xhr.responseText);
    result = function () {
        for (var key in result) {
            res += key + ': ' + result[key] + '<br>';
        }
        return res;
    }();

    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').innerHTML = result;
}