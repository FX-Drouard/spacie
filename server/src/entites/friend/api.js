const friends =  require("./modele");
const notif = require("../notif/modele");
const user = require("../user/modele");
const jwt = require('jsonwebtoken')
class Api {

  constructor(db) {
    this.friends = new friends.Friends(db);
    this.user = new user.User(db);
    this.notif = new notif.Notifications(db);
  }

  async delFriend(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    this.friends.delete(login_emeteur, login_recepteur).then((resp) => {
      res.sendStatus(200).send({ message: "Validé" })}).catch((err) => {
        res.status(500).send({ message: "Erreur suppression amis" })
      })
  }

  async addFriend(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    this.friends.create(login_emeteur, login_recepteur).then((resp) => {
      res.sendStatus(200).send({ message: "Validé" })
      this.notif.addNotif(login_recepteur,login_emeteur+" vous as ajouté en amis",resp._id)

    }).catch(err => res.sendStatus(402).send({ message: err }))
  }
  async acceptFriend(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    const { id_demande } = req.params;
    this.friends.delete(id_demande).then((resp) => { 
    const login_emeteur = resp.login_emeteur; 
    const login_recepteur = resp.login_recepteur;
    this.user.addFriends(login_emeteur, login_recepteur).then(() => {
      this.user.addFriends(login_recepteur, login_emeteur).then(() => {resp.sendStatus(200).send({ message: "Validé" })}).catch((err) => {this.user.removeFriends(login_emeteur, login_recepteur).catch((err) => {sendStatus(503).send({message: err})}); resp.sendStatus(402).send({ message: err })})
      this.notif.addNotif(login_recepteur,login_emeteur+" vous as ajouté en amis",resp._id)
    }).catch((err) => {sendStatus(503).send({message: err})})
  }).catch((err) => {
    res.sendStatus(402).send({ message: err })})
  }

  async getFriends(req, res) {
    const { login_emeteur } = req.params;
    this.user.getFriends(login_emeteur).then((resp) => {
      res.sendStatus(200).send({ friends: resp })
    }).catch((err) => {
      res.sendStatus(402).send({ message: err })
    })
  }
}

module.exports = {Api}

