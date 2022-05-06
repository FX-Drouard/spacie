const express = require("express");
const auth = require("../../../middleware/auth");
const apiFile = require("./api.js")
const  {getConnection}  = require("../../../connectionMongoDB");

function messageRoute(){
    return new Promise((resolve, reject) => {
        const rooter = express.Router();
        rooter.use(express.json());
        getConnection().then(db => {
            const api = new apiFile.Api(db)
            rooter
                .get("/", async function (req, res,next){ console.log("haha"); next()},api.getAll)//Accueil
                .post('/commentaire/:message_id', auth, api.newCommentaire)//NewMessage
                .post('/update/:message_id', auth, api.update)//NewMessage
                .post('/create', auth, api.newMessage)//NewMessage
                .get("/commentaire/:message_id", api.getCommentaire)//CommentePage
                .post("/repost/:messqge_id", auth, api.repost)//RepostButton
                .post("/star", auth, api.star)//StarButton
                .delete("/:message_id", auth,api.delete)// SupprimerButton
                .get("/recherche/:login", api.get)//ResultatReacherche
                .get("/recherche/hashtags/:login", api.getHashtags)//ResultatReacherche

            console.log("message")
            resolve(rooter)
        }).catch(err => {
            console.log(err)
        })
    })
}
module.exports = {messageRoute}
