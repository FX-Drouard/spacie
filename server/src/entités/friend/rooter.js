const express = require("express");
const auth = require("../../../middleware/auth");
import Api from "./api.js"
import { connection } from "../../../connectionMongoDB";
const rooter = express.Router();
rooter.use(express.json());
const db = await connection()
const api = Api(db)
rooter
  .get("/:login", api.getFriends) // get friends
  .post("/:id",auth, api.addFriend) // add Friend
  .delete("/:id",auth, api.delFriend) //del friend
  .post("/accept/:id",auth, api.acceptFriend); // accept friend