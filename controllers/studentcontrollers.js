
const stuModel=require("../models/studentModels");





const index1=(req,res)=>
{
    res.render("index1");

};
const formDisplay=(req,res)=>
{
    res.render("insert");
}
const  studentDatasave=(req,res)=>{
   let rollno=req.body.rno;
   let name=req.body.nm;
   let city=req.body.city;
  let studentimg=req.file.filename;
//    let studentimg="rahul.jpg"

   const  stuData= new stuModel({
    rollno:rollno,
    name:name,
    city:city,
    photo:studentimg

   });
   stuData.save().then((data)=>{
    res.render("index1");
    
   })
}
const studentDisplay=(rqs,res)=>{
    stuModel.find().then((data)=>{
        let myData=data;
        res.render("display",{stuData:myData})
    })
    
}


module.exports={
    index1,
    formDisplay,
    studentDatasave,
    studentDisplay
}