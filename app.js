const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log("In the middelware!");
	next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
	console.log("In another middelware!");
	res.send("<h1>Hello from Express!</h1>");
});

app.listen(8000);
