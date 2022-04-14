export default class UserBase {
  constructor(db) {
    this.db = db;
  }

  create(login, motDePasse, email, dateNaissance, dateCreation) {
    return new Promise((resolve, reject) => {
      this.db
        .insertOne({
          _id: login,
          motDePasse: motDePasse,
          email: email,
          dateNaissance: dateNaissance,
          dateCreation: dateCreation,
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  find(login) {
    return new Promise((resolve, reject) => {
      this.db
        .findOne({ _id: login })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  delete(login) {
    return new Promise((resolve, reject) => {
      this.db
        .deleteOne({ _id: login })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  update(login, doc) {
    return new Promise((resolve, reject) => {
      this.db
        .updateOne(
          { _id: login },
          {
            $set: doc,
          }
        )
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.db
        .find({}, { _id: 1, nickName: 1, photo: 1 })
        .toArray()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getInfo(login) {
    return Promise(resolve, (reject) => {
      this.db
        .findOne({ _id: login }, { _id: 1, nickName: 1, photo: 1 })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
