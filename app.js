
var express = require("express");
var app = express();
const mongodb = require("./server/mongo/config");
var cors = require("cors");
// const socketio = require("socket.io");
var bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);


var corsOptions = {
	origin: [
		// "https://demo.business.i-pay.com.au",
		"http://localhost:3000",
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


var api_wallet_router = require("./server/routes/wallet");


app.use("/api/wallet", api_wallet_router);


server.listen(5000);
console.log("Listening to PORT 5000");