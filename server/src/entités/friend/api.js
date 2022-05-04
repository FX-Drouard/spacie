import Friends from "./modele";
import Notif from "../notif/modele";
import User from "../user/modele";
const jwt = require('jsonwebtoken')
export class Api {

  constructor(user, notif, friend) {
    this.friends = Friends(friend);
    this.user = User(user);
    this.notif = Notif(notif);
  }

  async delFriends(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    this.friends.delete(login_emeteur, login_recepteur).then((resp) => {
      res.sendStatus(200).send({ message: "Validé" })}).catch((err) => {
        res.status(500).send({ message: "Erreur suppression amis" })
      })
  }

  async addFriends(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    this.friends.create(login_emeteur, login_recepteur).then((resp) => {
      res.sendStatus(200).send({ message: "Validé" })
      this.notif.addNotif(login_recepteur,login_emeteur+" vous as ajouté en amis",resp._id)

    }).catch(err => res.sendStatus(402).send({ message: err }))
  }
  async acceptFriends(req, res) {
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