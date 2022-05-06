const notificationsFile =  require("./modele");
const jwt = require("jsonwebtoken");
const notif = new notificationsFile.Notifications();
class Api {
  constructor(db) {
   notif.setDataBase(db);
  }

  async getNotif(req, res) {
    const { message } = req.body;
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    notif.addNotif(login, message).then((res) => res.send(res));
  }

  async addNotif(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    notif.getAllNotif(login).then((resp) => res.send(resp));
  }

  async clearNotif(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    notif.clearNotif(login).then((resp) => res.send(resp));
  }
}

module.exports = {Api}