var mongoose = require("mongoose");

var groupSchema = new mongoose.Schema({
   
   threshold:Number,
   email_ids:[{type:String}],
   actual_location:[{"lat":{type:Number,default:20.5937},"lng":{type:Number,default:78.9629},"email":String,"image":String,
   "imageId":String,"icon":String}]            
    
});

module.exports = mongoose.model("Group",groupSchema);