const friendsFile =  require("./modele");
const notifFile = require("../notif/modele");
const userFile = require("../user/modele");
const jwt = require('jsonwebtoken')

const friends = new friendsFile.Friends();
const user = new userFile.User();
const notif = new notifFile.Notifications();
class Api {

  constructor(db) {
      friends.setDataBase(db);
      user.setDataBase(db);
      notif.setDataBase(db);
  }

  async delFriend(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    friends.delete(login_emeteur, login_recepteur).then((resp) => {
      res.status(200).send({ message: "Validé" })}).catch((err) => {
        res.status(500).send({ message: "Erreur suppression amis" })
      })
  }

  async addFriend(req, res) {
    const { login_recepteur } = req.body
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    friends.create(login_emeteur, login_recepteur).then((resp) => {
      res.status(200).send({ message: "Validé" })
      notif.addNotif(login_recepteur,login_emeteur+" vous as ajouté en amis",resp._id)

    }).catch(err => res.status(402).send({ message: err }))
  }
  async acceptFriend(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login_emeteur = decodedToken.userId;
    const { id_demande } = req.params;
    friends.delete(id_demande).then((resp) => { 
    const login_emeteur = resp.login_emeteur; 
    const login_recepteur = resp.login_recepteur;
    user.addFriends(login_emeteur, login_recepteur).then(() => {
      user.addFriends(login_recepteur, login_emeteur).then(() => {resp.status(200).send({ message: "Validé" })}).catch((err) => {user.removeFriends(login_emeteur, login_recepteur).catch((err) => {status(503).send({message: err})}); resp.status(402).send({ message: err })})
      notif.addNotif(login_recepteur,login_emeteur+" vous as ajouté en amis",resp._id)
    }).catch((err) => {status(503).send({message: err})})
  }).catch((err) => {
    res.status(402).send({ message: err })})
  }

  async getFriends(req, res) {
    const { login_emeteur } = req.params;
    user.getFriends(login_emeteur).then((resp) => {
      res.status(200).send({ friends: resp })
    }).catch((err) => {
      res.status(402).send({ message: err })
    })
  }
}

module.exports = {Api}

