const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {connection}  = require("../../../connectionMongoDB");
const rooter = express.Router();
rooter.use(express.json());
const db = connection()
const api = new apiFile.Api(db)
rooter
  .get("/:login", api.getFriends) // get friends
  .post("/:id",auth, api.addFriend) // add Friend
  .delete("/:id",auth, api.delFriend) //del friend
  .post("/accept/:id",auth, api.acceptFriend); // accept friend

  exports.default = rooter