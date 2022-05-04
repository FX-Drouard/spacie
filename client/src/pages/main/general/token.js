
exports.getToken = function () {
    return document.cookie
    .split(";")
    .find((it) => it.includes("token="))
    .split("=")[1];
}

exports.setToken = function (token) {
     document.cookie = "token=" + token;
    }