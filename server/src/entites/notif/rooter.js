const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {getConnection}  = require("../../../connectionMongoDB");

function notificationRoute(){
  return new Promise((resolve, reject) => {
    const rooter = express.Router();
    rooter.use(express.json());
    getConnection().then(db => {
      const api = new apiFile.Api(db)
      rooter
        .get("/",auth, api.getNotif) // get notif
        .post("/",auth, api.addNotif) // add notif
        .delete("/",auth, api.clearNotif) // clear notif
      console.log("notif")
      resolve(rooter)
    }).catch(err => {
      console.log(err)
    })
  })
}

module.exports = {notificationRoute}
