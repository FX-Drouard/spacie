const notificationsBase = require("./baseBDD");
 class Notifications {
  constructor(db) {
    this.notif = new  notificationsBase.NotificationsBase(db.Notifications);
  }

  addNotif(login1, message) {
    return new Promise((resolve, reject) => {
      this.notif.create(login1, message).then((res) => resolve(res)).catch((err) => reject(err));
    })
  }

  getAllNotif(login) {
    return new Promise((resolve, reject) => {
      this.notif
        .getAll(login)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  clearNotif(login) {
    return new Promise((resolve, reject) => {
      this.notif
        .delete(login)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

}

module.exports = {Notifications}
