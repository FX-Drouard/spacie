export default class FriendsBase {
    constructor(db) {
      this.db = db;
    }
  
    create(login1, login2) {
      return new Promise((resolve, reject) => {
        this.db.findOne({ emeteur: login1, recepteur: login2 }).then((res) => {reject("Cette demande est deja presente")})
        this.db
          .insertOne({
            emeteur: login1,
            recepteur: login2,
          })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
  
    find(login) {
      
    }
  
    delete(login) {
      
    }
  
    update(login, doc) {
      
    }
  
    getAll() {
      
    }
  
    getInfo(login) {
      
    }
  }
  