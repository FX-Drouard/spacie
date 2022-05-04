const crypto = require("crypto");
import MessageBase from "./baseBDD";
import UserBase  from "../user/baseBDD"
export default class Message {
  constructor(db) {
    this.dbMessage = MessageBase(db.Message);
    this.dbUser = UserBase(db.User)
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.dbMessage.getAll().then(res => resolve(res)).catch(err => reject(err));
    })
  }

  newMessage(login,message,private,image) {
    return new Promise((resolve, reject) => {

      this.dbUser.find(login)
        .then((resUser) => {
          resUser.messages.push(resMessage._id)
          this.dbMessage.create(message,private,image,resUser._id)
              .then((resMessage) => {
                this.dbUser.update(login,{messages :resUser.messages }).
                then(() => {
                  resolve("l'ajout est bien effectue")
                })  
                .catch((err) =>{
                  this.dbMessage.delete(resMessage._id)
                  reject(err)
                })
              })
              .catch(err => reject(err))
         
        }).catch(err => {
          reject(err)
        })

      
    })

  }

  update(message_id, message, image, private){
    return new Promise((resolve, reject) => {
      const doc = { _id: message_id };
      if (message) doc[message] = message;
      if (image) doc[image] = image;
      if (private) doc[private] = private;
      this.dbMessage
        .update(message_id, doc)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }


}

