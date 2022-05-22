"use strict";

// 모듈
const express = require("express");
let app = express();
const ejs = require("ejs");

// 라우팅
const route = require("./routes/route")

// 앱 세팅
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

// 미들웨어 등록
app.use("/", route);

module.exports = app;