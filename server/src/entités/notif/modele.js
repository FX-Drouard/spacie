const crypto = require("crypto");
import NotificationsBase from "./baseBDD";
export default class Notifications {
  constructor(db) {
    this.friend = FriendBase(db);
  }

  create(login1) {
    return new Promise((resolve, reject) => {
      this.user
        .create(
          login,
          crypto.createHash("sha256").update(motDePasse).digest("hex"),
          email,
          date,
          new Date()
        )
        .then((res) => resolve(res))
        .catch((err) => reject("Ce login existe deja choisissez un autre"));
    });
  }

  find(login) {
    return new Promise((resolve, reject) => {
      this.user
        .find(login)
        .then((res) => resolve(res))
        .catch(() => reject("${login} n'existe pas"));
    });
  }

  delete(login) {
    return new Promise((resolve, reject) => {
      this.user
        .delete(login)
        .then((res) => resolve(res))
        .catch((err) =>
          reject("impossible de supprimer ${login} n'existe pas")
        );
    });
  }

  update(login, nickName, motDePasse, biographie, photo) {
    return new Promise((resolve, reject) => {
      const doc = { _id: login };
      if (nickName) doc[nickName] = nickName;
      if (motDePasse) doc[motDePasse] = motDePasse;
      if (biographie) doc[biographie] = biographie;
      if (photo) doc[photo] = photo;
      this.user
        .update(login, doc)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.user
        .getAll()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getInfo(login) {
    return Promise((resolve, reject) => {
      this.user
        .getInfo(login)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
