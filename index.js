var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

var projectPath = __dirname + '/';

var port = process.env.PORT || 8081;

app.use(express.static('public'));

router.use(function (req,res,next) {
	next();
});

router.get("/",function(req,res){
	res.sendFile(projectPath + "index.html");
});

app.use("/",router);


app.listen(port, function () {
	console.log('Example app listening on port 8081!')
})
