const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {connection}  = require("../../../connectionMongoDB");
const rooter = express.Router();
rooter.use(express.json());
connection().then((db) => {

const api = new apiFile.Api(db)
rooter
  .get("/:login", api.get) // Profil , ResultatRecherche, Message
  .get("/info",auth,api.getInfos) //Suggestion
  .get("/info/:login", api.getInfo) // ProfilButton, StarPage
  .post("/signup", api.signup) // SignUp
  .post("/signin", api.signin) // LoginPage
  .delete("/signout",auth,api.signout) //Profil
  .post("/edit",auth, api.edit) //EditProfil
  .delete("/:login",auth, api.delete)//EditProfil

  exports.default = rooter

})