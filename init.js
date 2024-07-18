const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("connectiono successfull");
    }) 
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');
}

let allChats=[
    {
    from : "praveen",
    to : "aniket",
    msg : "kahiya aaiba mardawa",
    date : new Date(),
    },

    {
    from : "chhote",
    to : "raj",
    msg : "main 1 ko aunga",
    date : new Date(),
    },

    {
    from : "alan",
    to : "raj",
    msg : "main tumhare sath chalunga",
    date : new Date(),
    },

    {
    from : "piyush",
    to : "praveen",
    msg : "mujhe course kab doge",
    date : new Date(),
    },

    {
    from : "arun",
    to : "nagendra",
    msg : "mera paisa kab doge",
    date : new Date(),
    },

    {
    from : "ritik",
    to : "aniket",
    msg : "kya hal hai",
    date : new Date(),
    },
];

Chat.insertMany(allChats);

