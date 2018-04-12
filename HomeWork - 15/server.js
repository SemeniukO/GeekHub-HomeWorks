var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(express.static('dist'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

var phoneOperatorMobile = {
    '050':'Vodafone',
    '063':'lifecell',
    '066':'Vodafone',
    '067':'Київстар',
    '068':'Київстар',
    '073':'lifecell',
    '089':'Укртелеком',
    '091':'ТриМоб',
    '092':'PEOPLEnet',
    '093':'lifecell',
    '094':'Інтертелеком',
    '095':'Vodafone',
    '096':'Київстар',
    '097':'Київстар',
    '098':'Київстар',
    '099':'Vodafone',
};


server.post('/check', function (request, response) {
    for (key in phoneOperatorMobile) {
        if (request.body.phone == key) {
            return response.send('Your operator is: ' + phoneOperatorMobile[key]);
        }
    }
    response.send('try again');
});

server.get('/showAll', function (req,res) {
    res.send(phoneOperatorMobile);
})


server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

