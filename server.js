var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var user = require("./routes/users");
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost/group",{useNewUrlParser:true});
app.use(express.static(__dirname+"/public"));

app.use(user);




app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("App running , sir");
});