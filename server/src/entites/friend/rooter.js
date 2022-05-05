const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {getConnection}  = require("../../../connectionMongoDB");

function friendRoute(){
  return new Promise((resolve, reject) => {
    const rooter = express.Router();
    rooter.use(express.json());
    getConnection().then(db => {
    const api = new apiFile.Api(db)
    rooter
      .get("/:login", api.getFriends) // get friends
      .post("/:id",auth, api.addFriend) // add Friend
      .delete("/:id",auth, api.delFriend) //del friend
      .post("/accept/:id",auth, api.acceptFriend); // accept friend
      console.log("Friend")
      resolve(rooter)
    }).catch(err => {
      console.log(err)
    })
  })
}
module.exports = {friendRoute}
