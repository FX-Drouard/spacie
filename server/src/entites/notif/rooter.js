const express = require("express");
const auth = require("../../../middleware/auth");
import Api from "./api.js"
import { connection } from "../../../connectionMongoDB";
const rooter = express.Router();
rooter.use(express.json());
const db = await connection()
const api = Api(db)
rooter
  .get("/",auth, api.getNotif) // get notif
  .post("/",auth, api.addNotif) // add notif
  .delete("/",auth, api.clearNotif) // clear notif

  exports.default = router