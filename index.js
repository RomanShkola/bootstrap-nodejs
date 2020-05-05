var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

var projectPath = __dirname + '/';

app.use(express.static('public'));

router.use(function (req,res,next) {
	next();
});

router.get("/",function(req,res){
	res.sendFile(projectPath + "index.html");
});

app.use("/",router);


app.listen(8081, function () {
	console.log('Example app listening on port 8081!')
})
