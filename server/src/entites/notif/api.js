const notificationsFile =  require("./modele");
const jwt = require("jsonwebtoken");
const notif = new notificationsFile.Notifications();
class Api {
  constructor(db) {
   notif.setDataBase(db);
  }

  async getNotifs(req, res) {
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const login = decodedToken.userId;
    notif.getAllNotif(login).then((resp) => res.send(resp)).catch(err => res.stattus(503).send({ message: err }));
  }

}

module.exports = {Api}