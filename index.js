const express = require("express");
const app = express();

const bodyparser=require("body-parser");
const studentcontroller=require("./controllers/studentcontrollers");
const mongoose=require("mongoose");
// const busboyBodyParser = require("busboy-body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/patna")
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
// app.use(busboyBodyParser());
const multer=require("multer");
app.use(express.static("public"));


const PORT = 8000;
app.set("view engine", "ejs");

const storage=multer.diskStorage({

    destination:function(req,file,cb){
        return cb(null,"public/images");
    },


    filename:function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const uploads =multer({storage:storage});

app.get("/",studentcontroller.index1);
app.get("/insert",studentcontroller.formDisplay);
app.post("/studentsave",uploads.single("stuimg"),studentcontroller.studentDatasave);
// app.use(busboyBodyParser());
app.get("/display",studentcontroller.studentDisplay);


app.listen(PORT, function () {
    console.log("8000 server is avtive");

})