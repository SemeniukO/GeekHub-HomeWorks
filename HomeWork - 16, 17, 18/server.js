let express = require('express');
let server = express();
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
let ObjectID = require('mongodb').ObjectID;

server.use(express.static('build'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.get('/load-list',(req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

server.post('/write-ticket',(req, response) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let ticket ={
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
            show: 'none',
            editShow:'none',
            showAll:''
        }
            dbo.collection("customers").insertOne(ticket, function(err, res) {
                dbo.collection("customers").find({}).toArray(function(err, result) {
                    if (err) throw err;
                    response.send(result[result.length-1]._id);
                })
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });

    });
});

server.post('/edit-ticket', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let myquery = {_id: ObjectID(req.body._id)};
        let newvalues = {
            $set: {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                date: req.body.date,
                show: 'none',
                editShow:'none',
                showAll:''
            }
        };
        dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log(res.result);
            db.close();
        });
        res.send('ok');
    });
});

server.get('/ticket/*', function(req, res) {
    res.sendFile( __dirname + "/build/" + "index.html" );
});

server.post('/ticket', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let myquery = {_id: ObjectID(req.body._id)};
        dbo.collection("customers").find(myquery).toArray(function(err, result) {
            if (err) throw err;
            res.send(result[0]);
            db.close();
        });
    });
});


server.post('/del-ticket',(req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let myquery = {_id: ObjectID(req.body._id)};
        dbo.collection("customers").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    });
});


server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});