const express = require("express");
const app =express();
const mongoose= require("mongoose");
const path=require ("path");
const Chat = require("./models/chat.js");

app.set("views" , path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
    .then(()=>{
        console.log("connectiono successfull");
    }) 
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}


app.get("/",(req,res) => {
    res.send("route is working")
});

app.listen(8080,() => {
    console.log("listening to port 8080");
} ); 