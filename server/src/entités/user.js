const crypto = require("crypto");

class User {
  constructor(db) {
    this.db = db;
  }

  create(login, motDePasse, email, date) {
    return new Promise((resolve, reject) => {
      this.db.user.insert(
        {
          _id: login,
          motDePasse: crypto
            .createHash("sha256")
            .update(motDePasse)
            .digest("hex"),
          email: email,
          dateNaissance: date,
        },
        (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        }
      );
    });
  }

  find(login) {
    return new Promise((resolve, reject) => {
      this.db.user.find({ _id: login }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  delete(login) {
    return new Promise((resolve, reject) => {
      this.db.user.remove({ _id: login }, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  update(login, nickName, motDePasse, biographie, photo) {
    return new Promise((resolve, reject) => {
      this.db.user.update(
        { _id: login },
        {
          $set: {
            motDePasse: crypto
              .createHash("sha256")
              .update(motDePasse)
              .digest("hex"),
            email: email,
            dateNaissance: date,
            biographie: biographie,
            photo: photo,
            nickName: nickName,
          },
        },
        (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        }
      );
    });
  }

  getAll() {
    new Promise((resolve, reject) => {
      this.db.user.find({}, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      });
    });
  }
}
