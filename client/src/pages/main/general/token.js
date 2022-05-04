const jwt = require("jsonwebtoken");
exports.getToken = function () {
    return document.cookie
    .split(";")
    .find((it) => it.includes("token="))
    .split("=")[1];
}

exports.setToken = function (token) {
     document.cookie = "token=" + token;
}

exports.getLoginFromToken = function (token) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    return decodedToken.login
}