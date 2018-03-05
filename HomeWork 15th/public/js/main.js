var form = document.querySelector('#operator');
form.addEventListener("submit", function (event) {
    event.preventDefault()
});
phone.onfocus = function () {
    document.getElementById('result').innerHTML = '';
    phone.value = ''
};


function test(get) {
    var xhr = new XMLHttpRequest();
    var PhoneNubmer = document.querySelector('#phone');
    var operator = PhoneNubmer.value.toString();
    operator = operator.slice(0, 3);
    let msg = {phone: operator};
    if (!get) {
        xhr.open('post', '/check', false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(msg));
        var result = xhr.responseText;
    } else {
        var res = '';
        xhr.open('get', '/showAll', false);
        xhr.send();
        result = JSON.parse(xhr.responseText);
        result = function () {
            for (key in result) {
                res += key + ': ' + result[key] + '<br>';
            }
            return res;
        }();

    }

    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('result').innerHTML = result;

}
