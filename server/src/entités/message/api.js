import Message from "./modele";
const jwt = require('jsonwebtoken')
const token = require('../../../tools/token.js')
export default class Api {

    constructor(db) {
      this.message = Message(db)
    }
    
    async getAll(req, res) {
        this.message.getAll().then(resp => 
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
      this.message.getCommentaire(message_id)
      .then(resp=> res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async get(req, res) {
      const message = req.params.message_id
      this.message.get(message)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async getHashtags(req, res) {
      const message = req.params.message_id
      this.message.getByHashtags(message)
      .then((resp) => {res.sendStatus(200).send(resp)})
      .catch((err) => {res.sendStatus(500).send(err)})
    }

    async star(req, res) {
      const login = token.getLoginFromToken()
      const {messageID,isLiked} = req.body

      this.message.star(login, messageID,isLiked)
      .then((resp) => res.sendStatus(200).send(resp))
      .catch((err) => res.sendStatus(500).send(err))
    }

    async newCommentaire(req, res) {
      const { message , image, private } = req.body
      const {message_id} = req.params
      
      const login = token.getLoginFromToken()
      this.message.newMessage(login, message, image,private, message_id).
      then(resp => 
        res.sendStatus(200).send(resp)
      ).catch(err => res.sendStatus(404).send(err))
  }

    async repost(req, res) {
      const {message_id} = req.params
      const login = token.getLoginFromToken()
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