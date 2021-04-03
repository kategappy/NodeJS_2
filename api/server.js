require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	return res.send("H");
});

module.exports = app;