const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {connection}  = require("../../../connectionMongoDB");
const rooter = express.Router();
rooter.use(express.json());
const db = connection()
const api = new apiFile.Api(db)
rooter
 .get("/:login", api.getAll)//Accueil
 .post('/commentaire/:messqge_id', auth, api.newCommentaire)//NewMessage
 .post('/update/:messqge_id', auth, api.update)//NewMessage
 .post('/create', auth, api.newMessage)//NewMessage
 .get("/commentaire/:message_id", api.getCommentaire)//CommentePage
 .post("/repost/:messqge_id", auth, api.repost)//RepostButton
 .post("/star", auth, api.star)//StarButton
 .delete("/:message_id", auth,api.delete)// SupprimerButton
 .get("/recherche/:login", api.get)//ResultatReacherche
 .get("/recherche/hashtags/:login", api.getHashtags)//ResultatReacherche

 exports.default = rooter