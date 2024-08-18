const express = require("express");
const socket = require("socket.io");
const http = require("http");
const {Chess} = require("chess.js"); //we accuired all this in this file.
const path = require("path");

const app = express(); //cereated express app instance:- routing part; middleware setup.  //initialise http server with express

const server = http.createServer(app);//http model se server create karna hai {express ko call kr ke jo instance mila tha usko pass kar dena hai createServer ke ander }
const io = socket(server);  // socket ko chaiye http ka server jo ki express pe base hota hai

const chess= new Chess();
let players = {};
let curentPlayer = "W";

app.set("view engine", "ejs"); //- we can use ejs:- very simlar to html
app.use(express.static(path.join(__dirname, "public")));// static file use kar payenge.

app.get("/", (req, res) => {
    res.render("index", {title: "Chess Game"});
});

io.on("connection", function(uniquesocket){
     console.log("connected");
});

server.listen(3002, function() {
    console.log("listening on port 3002");
})
