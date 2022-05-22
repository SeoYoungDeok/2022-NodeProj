"use strict";

// 메인화면 컨트롤러
const main = (req, res) => {
    res.render("index")
};

// 컨트롤러 모듈로 넘기기
module.exports = {
    main
};