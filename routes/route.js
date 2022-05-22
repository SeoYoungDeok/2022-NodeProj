"use strict";

const express = require("express");
const route = express.Router();

// 컨트롤러 가져오기
const ctrl = require(__dirname + "/controller");

// 경로와 컨트롤러 연결
route.get('/', ctrl.main);

// app.js에 모듈로 넘기기
module.exports = route;