const express = require("express");
const auth = require("../../../middleware/auth");
import Api from "./api.js"
import { connection } from "../../../connectionMongoDB";
const rooter = express.Router();
rooter.use(express.json());
const db = await connection()
const api = Api(db)
rooter
 .get("/", api.getAll)//Accueil
 .post('/commentaire/:messqge_id', auth, api.newCommentaire)//NewMessage
 .post('/update/:messqge_id', auth, api.update)//NewMessage
 .post('/create', auth, api.newMessage)//NewMessage
 .get("/commentaire/:message_id", api.getCommentaire)//CommentePage
 .post("/repost/:messqge_id", auth, api.repost)//RepostButton
 .post("/star", auth, api.star)//StarButton
 .delete("/:message_id", auth,api.delete)// SupprimerButton
 .get("/:message", api.get)//ResultatReacherche
 .get("/hashtags/:message", api.getHashtags)//ResultatReacherche