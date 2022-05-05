const message =  require("./modele");
const notifications = require("../notif/modele");
const token = require('../../../tools/token.js');
class Api {

    constructor(db) {
      this.message = new message.Message(db)
      this.notif = new notifications.Notifications(db)
    }
    
    async getAll(req, res) {
        const {login} = req.params

        this.message.getAll(login).then(resp => 
          res.sendStatus(200).send(resp)
        ).catch(err => res.sendStatus(404).send(err))
    }

    
    async newMessage(req, res) {
      // const {message , image , private} = req.body

      const message = req.body.message
      const image = req.body.image
      const priv = req.body.priv
      const login = token.getLoginFromToken()
      this.message.newMessage(login, message,priv, image).then(resp => 
          res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
    }

    async update(req, res) {
      const message = req.body.message
      const image = req.body.image
      const priv = req.body.priv
      const {message_id} = req.params
      this.message.update(message_id, message, image, priv).then(resp => 
          res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
    }

    async getCommentaire(req, res) {
      const {message_id} = req.params
      this.message.getMessageById(message_id)
      .then(resp=> res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async get(req, res) {
      const message = req.body.message
      const login = req.params.login
      this.message.getMessageByMotif(message,login)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async getHashtags(req, res) {
     
      const login = req.params.login
      const message = req.params.message_id
      this.message.getMessageByMotif('#'+message,login)
      .then((resp) => {res.sendStatus(200).send(resp)})
      .catch((err) => {res.sendStatus(500).send(err)})
    }

    async star(req, res) {
      const login = token.getLoginFromToken()
      const {message_id,isLiked} = req.body
      this.message.getMessageById(message_id).then((message) => {
        this.notif.addNotif(message.sender,token.getLoginFromToken() + ' a star votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      this.message.star(login, messageID,isLiked)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async newCommentaire(req, res) {
      const { message , image, priv } = req.body
      const {message_id} = req.params
      const login = token.getLoginFromToken()

      this.message.getMessageById(message_id).then((message) => {
        this.notif.addNotif(message.sender, login + ' a commente votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      this.message.newMessage(login, message, image,priv, message_id).
      then(resp => 
        res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
  }

    async repost(req, res) {
      const {message_id} = req.params
      const login = token.getLoginFromToken()
      this.message.getMessageById(message_id).then((message) => {
        this.notif.addNotif(message.sender,login+ ' a reposte votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })
      this.message.repost(login,message_id)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

   
    async delete(req, res) {
      const message_id = req.params.message_id
      this.message.delete(message_id)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }


} 


module.exports = {Api}