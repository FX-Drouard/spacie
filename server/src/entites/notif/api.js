const notif =  require("./modele");
const jwt = require("jsonwebtoken");
class Api {
  constructor(db) {
    this.notif = new notif.Notifications(db);
  }

  async addNotif(req, res) {
    const { message } = req.body;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    this.notif.addNotif(login, message).then((res) => res.send(res));
  }

  async getAllNotif(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    this.notif.getAllNotif(login).then((res) => res.send(res));
  }

  async clearNotif(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    this.notif.clearNotif(login).then((res) => res.send(res));
  }
}

module.exports = {Api}