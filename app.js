var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const blogRouter = require("./routes/blog");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nutthawatkklpp:reonardo415@cluster0.sjka86b.mongodb.net/node-api?retryWrites=true&w=majority"
);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/blog", blogRouter);

module.exports = app;
