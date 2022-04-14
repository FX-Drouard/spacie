const express = require("express");
import User from "./modele";

const rooter = express.Router();
rooter.use(express.json());

rooter
  .get("/", async function (req, res, next) {})
  .get("/info", async function (req, res, next) {})
  .post("/signup", async function (req, res) {})
  .post("/signin", async function (req, res) {})
  .delete("/signout/:token", async function (req, res) {});
