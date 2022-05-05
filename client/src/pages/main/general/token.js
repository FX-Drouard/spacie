// import { verify } from "jsonwebtoken";

export function getToken () {
    return document.cookie
    .split(";")
    .find((it) => it.includes("token="))
    .split("=")[1];
}

export function setToken (token) {
     document.cookie = "token=" + token;
}

export function getLoginFromToken (token) {
    // const decodedToken = verify(token, 'RANDOM_TOKEN_SECRET');
    // return decodedToken.login;
    return token
}

export function testToken (token) {
    return token !== "";
}