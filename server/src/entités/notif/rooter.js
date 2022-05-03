const express = require("express");
const auth = require("../../../middleware/auth");
import Api from "./api.js"
import { connection } from "../../../connectionMongoDB";
const rooter = express.Router();
rooter.use(express.json());
const db = await connection()
const api = Api(db)
rooter
  .get("/:login", async function (req, res) {


  })
