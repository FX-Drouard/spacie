
export function getToken () {
    return document.cookie
    .split(";")
    .find((it) => it.includes("token="))
    .split("=")[1];
}

export function setToken (doc) {
     document.cookie = "token=" + doc.token;
     document.cookie = "login=" + doc.login;
}

export function getLoginFromToken () {
    return document.cookie
    .split(";")
    .find((it) => it.includes("login="))
    .split("=")[1];
}

export function testToken (token) {
    return token !== "";
}