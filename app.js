
var express = require("express");
var app = express();
const mongodb = require("./server/mongo/connection");
var cors = require("cors");
// const socketio = require("socket.io");
var bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);
const path = require('path');


var corsOptions = {
	origin: [
		"https://dm.omakle.com",
		// "http://localhost:3000",
		"*",
	],
	credentials: true,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// const io = socketio(server);

app.use(bodyParser.json({ limit: "100mb", extended: true }));

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);


// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use("/static", express.static(__dirname + "/staticdata"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static-images", express.static(__dirname + "/static-images"));

var test_api_router = require("./server/routes/test_api");


app.use("/api", test_api_router);


server.listen(5000);
console.log("Listening to PORT 5000");