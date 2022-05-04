import FriendsBase from "./baseBDD";
export default class Friends {
  constructor(db) {
    this.friend = FriendsBase(db);
  }
  addFriend(login1, login2) {
    return new Promise((resolve, reject) => {
      this.friend.create(login1, login2).then((res) => resolve(res)).catch((err) => reject(err));
    })
  }
  removeFriend(login1, login2) {
    return new Promise((resolve, reject) => {
      this.friend.delete(login1).then(this.friend.delete(login2)).then((res) => resolve(res)).catch((err) => reject(err));
    })
  }
}
