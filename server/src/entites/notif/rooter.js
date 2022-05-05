const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {connection}  = require("../../../connectionMongoDB");
const rooter = express.Router();
rooter.use(express.json());
const db = connection()
const api = new apiFile.Api(db)
rooter
  .get("/",auth, api.getNotif) // get notif
  .post("/",auth, api.addNotif) // add notif
  .delete("/",auth, api.clearNotif) // clear notif

exports.default = rooter