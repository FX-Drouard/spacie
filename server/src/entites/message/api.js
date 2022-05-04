import Message from "./modele";
import Notifications from "../notif/modele";
const jwt = require('jsonwebtoken')
const token = require('../../../tools/token.js')
export default class Api {

    constructor(db) {
      this.message = Message(db)
      this.notif = Notifications(db)
    }
    
    async getAll(req, res) {
        const {login} = req.params

        this.message.getAll(login).then(resp => 
          res.sendStatus(200).send(resp)
        ).catch(err => res.sendStatus(404).send(err))
    }

    
    async newMessage(req, res) {
      const { message , image,private } = req.body
      const login = token.getLoginFromToken()
      this.message.newMessage(login, message,private, image).then(resp => 
          res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
    }

    async update(req, res) {
      const { message , image,private } = req.body
      const {message_id} = req.params
      this.message.update(message_id, message, image, private).then(resp => 
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
      const {messageID,isLiked} = req.body
      this.message.getMessageById(message_id).then((message) => {
        this.notif.addNotif(message.sender,token.getLoginFromToken() + ' a star votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      this.message.star(login, messageID,isLiked)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async newCommentaire(req, res) {
      const { message , image, private } = req.body
      const {message_id} = req.params
      this.message.getMessageById(message_id).then((message) => {
        this.notif.addNotif(message.sender,login + ' a commente votre message'  )
        .catch((err) => {sendStatus(503).send({message: err})})
      })     
      this.message.newMessage(login, message, image,private, message_id).
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