var mongoose = require("mongoose");

var locationSchema = new mongoose.Schema({
   
   location:String,
   lat:Number,
   lng:Number
    
});

module.exports = mongoose.model("Location",locationSchema);