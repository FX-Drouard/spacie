const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {getConnection}  = require("../../../connectionMongoDB");

function userRoute(){
  return new Promise((resolve, reject) => {
    const rooter = express.Router();
    rooter.use(express.json());
    getConnection().then(db => {
    const api = new apiFile.Api(db)
    rooter
      .get("/:login", api.get) // Profil , ResultatRecherche, Message
      .get("/info/all",auth,api.getInfos) //Suggestion
      .get("/info/:login", api.getInfo) // ProfilButton, StarPage
      .post("/signup", api.signup) // SignUp
      .post("/signin", api.signin) // LoginPage
      .delete("/signout",auth,api.signout) //Profil
      .post("/edit",auth, api.edit) //EditProfil
      .delete("/:login",auth, api.delete)//EditProfil

    console.log("user")
    resolve(rooter)
  }).catch(err => {
    console.log(err)
  })
 })
}
module.exports = {userRoute}
