const mongoose= require("mongoose");
const stuSchema= new mongoose.Schema({
     rollno:String,
     name:String,
     city:String,
     photo:String
});
module.exports=mongoose.model("student",stuSchema);
