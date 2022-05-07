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
        const {login} = req.body
        message.getAll(login).then(resp => {
          res.status(200).send(resp)
        }
        ).catch(err =>
          res.status(404).send(err))
    }

    
    async newMessage(req, res) {
      const messageText = req.body.messageText
      const image = req.body.image
      const priv = req.body.priv
      const login = token.getLoginFromToken()
      // const login  = req.body.login
      message.newMessage(login, messageText,priv, image).then(resp => 
          res.status(200).send(resp)
      ).catch(err => res.status(404).send(err))
    }

    async update(req, res) {
      const messageText = req.body.messageText
      const image = req.body.image
      const priv = req.body.priv
      const {message_id} = req.params
      message.update(message_id, messageText, image, priv).then(resp => 
          res.status(200).send(resp)
      ).catch(err => res.status(404).send(err))
    }

    async getCommentaire(req, res) {
      const {message_id} = req.params
      message.getAll(undefined)
      .then(resp=> {res.status(200).send(resp.filter(message => message.message_id === message_id))})
      .catch((err) => res.status(500).send(err))
    }

    async get(req, res) {
      const mesg = req.body.message
      const login = req.body.login
      message.getMessageByMotif(mesg,login)
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(500).send(err))
    }

    async getHashtags(req, res) {
     
      const login = req.params.login
      const mesg = req.body.message_id
      message.getMessageByMotif('#'+mesg,login)
      .then((resp) => {res.status(200).send(resp)})
      .catch((err) => {res.status(500).send(err)})
    }

    async star(req, res) {
      const login = token.getLoginFromToken()
      const {message_id,isLiked} = req.body
      message.getMessageById(message_id).then((message) => {
        notif.addNotif(message.sender,token.getLoginFromToken() + ' a star votre message'  )
        .catch((err) => {res.status(503).send({message: err})})
      })     
      message.star(login, message_id,isLiked)
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(500).send(err))
    }

    async newCommentaire(req, res) {
      const { messageText , image, priv } = req.body
      const {message_id} = req.params
      const login = token.getLoginFromToken()
     
      message.getMessageById(message_id).then((message) => {
       
        notif.addNotif(message.sender, login + ' a commente votre message'  )
        .catch((err) => {res.status(503).send({message: err})})
      })     
      message.newMessage(login, messageText, image,priv, message_id).
      then(resp => 
        res.status(200).send(resp)
      ).catch(err => res.status(404).send(err))
  }

    async repost(req, res) {
      const {message_id} = req.params
      // const login = req.body.login
      const login = token.getLoginFromToken()
      message.getMessageById(message_id).then((message) => {
        notif.addNotif(message.sender,login+ ' a reposte votre message'  )
        .catch((err) => {res.status(503).send({message: err})})
      })
      message.repost(login,message_id)
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(500).send(err))
    }

   
    async delete(req, res) {
      const message_id = req.params.message_id
      message.delete(message_id)
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(500).send(err))
    }


} 


module.exports = {Api}