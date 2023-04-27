const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const port = 5000;
const app = express();

// setting the template engine
app.set("view engine", "ejs");

// routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log("server is running on port: " + port);
});
