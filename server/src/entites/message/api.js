const messageFile =  require("./modele");
const notificationsFile = require("../notif/modele");
const token = require('../../../tools/token.js');
const message = new messageFile.Message()
const  notif  = new notificationsFile.Notifications()
class Api {
   
    constructor(db) {
      message.setDataBase(db)
    }
    
    async getAll(req, res) {
        console.log("hqhq")
        const {login} = req.body
        
        message.getAll(login).then(resp => {
         
          res.sendStatus(200).send(resp)
        }
        ).catch(err =>
          res.send([]))
    }

    
    async newMessage(req, res) {
      const mesg = req.body.message
      const image = req.body.image
      const priv = req.body.priv
      const login = token.getLoginFromToken()
      message.newMessage(login, mesg,priv, image).then(resp => 
          res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
    }

    async update(req, res) {
      const mesg = req.body.message
      const image = req.body.image
      const priv = req.body.priv
      const {message_id} = req.params
      message.update(message_id, mesg, image, priv).then(resp => 
          res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
    }

    async getCommentaire(req, res) {
      const {message_id} = req.params
      message.getMessageById(message_id)
      .then(resp=> res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async get(req, res) {
      const mesg = req.body.message
      const login = req.params.login
      message.getMessageByMotif(mesg,login)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async getHashtags(req, res) {
     
      const login = req.params.login
      const mesg = req.params.message_id
      message.getMessageByMotif('#'+mesg,login)
      .then((resp) => {res.sendStatus(200).send(resp)})
      .catch((err) => {res.sendStatus(500).send(err)})
    }

    async star(req, res) {
      const login = token.getLoginFromToken()
      const {message_id,isLiked} = req.body
      message.getMessageById(message_id).then((message) => {
        notif.addNotif(message.sender,token.getLoginFromToken() + ' a star votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      message.star(login, messageID,isLiked)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async newCommentaire(req, res) {
      const { msg , image, priv } = req.body
      const {message_id} = req.params
      const login = token.getLoginFromToken()

      message.getMessageById(message_id).then((message) => {
        notif.addNotif(message.sender, login + ' a commente votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      this.message.newMessage(login, msg, image,priv, message_id).
      then(resp => 
        res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
  }

    async repost(req, res) {
      const {message_id} = req.params
      const login = token.getLoginFromToken()
      message.getMessageById(message_id).then((message) => {
        notif.addNotif(message.sender,login+ ' a reposte votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })
      message.repost(login,message_id)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

   
    async delete(req, res) {
      const message_id = req.params.message_id
      message.delete(message_id)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }


} 


module.exports = {Api}