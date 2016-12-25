var express =require('express');
var app=express();
var port=process.env.PORT || 6000;

app.use(express.static('public'));

app.get("/",function(req,res){
	res.sendFile(__dirname+'/index.html');
});

var server=app.listen(port,function(){
	console.log('node app funciona bien! y corre en el puerto - ' + port);
});