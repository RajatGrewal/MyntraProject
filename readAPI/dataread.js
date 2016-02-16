var express = require('express');
var http = require("http");
var app = express();
var superagent = require('superagent');


url = "http://developer.myntra.com/forum/feed";

var request = http.get(url, function (response) {

    var buffer = "",
        data;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {
        console.log(buffer);
        console.log("\n");
        dat = JSON.parse(buffer);

    });

});


app.get('/api/*', function(req, res){
    var test = req.url;
    console.log("\n");
    console.log(test);
    var add = req.url.substr(5, req.url.length-4);



    superagent.get('developer.myntra.com/'+add).end( function(err, result){
        res.send(result);
    } )
});

app.get('/temp/', function(req, res) {
    console.log('temp');
    res.send('temp');
});


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});
