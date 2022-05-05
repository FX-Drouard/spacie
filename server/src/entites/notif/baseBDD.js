class NotificationsBase {
    constructor(db) {
      this.db = db;
    }
  
    create(login1, message) {
      return new Promise((resolve, reject) => {
        this.db.findOne({ notifier: login1, messages: message }).then((res) => {reject("Cette demande est deja presente")})
        this.db
          .insertOne({
            notifier: login1,
            messages: message,
            Date: new Date()
          })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
  
    find(login) {
      
    }
  
    delete(login) {
      return new Promise((resolve, reject) => {
        this.db
          .deleteMany({ notifier: login })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
  
    update(login, doc) {
      
    }
  
    getAll(login) {
      return new Promise((resolve, reject) => {
        this.friend
          .getAll({ notifier: login })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
  
    getInfo(login) {
      
    }
  }
  
module.exports = {NotificationsBase}