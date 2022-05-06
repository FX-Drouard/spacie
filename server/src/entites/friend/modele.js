const friendsBase = require("./baseBDD");
const {getCollection} = require("../../../connectionMongoDB")

 class Friends {
  constructor() {
  }

  setDataBase(db) {
    this.friend = new friendsBase.FriendsBase(getCollection("Friends",db));
  }
  addFriend(login1, login2) {
    return new Promise((resolve, reject) => {
      this.friend.create(login1, login2).then((res) => resolve(res)).catch((err) => reject(err));
    })
  }
  removeFriend(login1, login2) {
    return new Promise((resolve, reject) => {
      this.friend.delete(login1, login2).then(this.friend.delete(login2, login1)).then((res) => resolve(res)).catch((err) => reject(err));
    })
  }
  getFriends(login) {
    return Promise((resolve, reject) => {
      this.friends
        .getInfo(login)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });}
}

module.exports = {Friends}