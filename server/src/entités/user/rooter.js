const express = require("express");
const auth = require("../../../middleware/auth");
import Api from "./api.js"
import { connection } from "../../../connectionMongoDB";
const rooter = express.Router();
rooter.use(express.json());
const db = await connection()
const api = Api(db)
rooter
  .get("/", async function (req, res) {


  })
  .get("/info",auth, async function (req, res) {


  })
  .get("/info/:id", async function (req, res) {


  })
  .post("/signup", api.signup)
  .post("/signin", api.signin)
  .delete("/signout",auth,api.signout);