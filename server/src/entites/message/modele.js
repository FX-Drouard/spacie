const  messageBase = require("./baseBDD");
const userBase = require("../user/baseBDD")
class Message {
  constructor() {
  }

  setDataBase(db) {
    this.dbMessage = new messageBase.MessageBase(db.Messages);
    this.dbUser = new userBase.UserBase(db.Users)
  }

  getAll(login) {
    return new Promise((resolve, reject) => {
      this.dbMessage.getAll(login).then(messages => {
        this.dbUser.find(login).then(res => {
          messages = res.filter(message => 
            res.amis.filter(ami => ami == message.sender)>length > 0 || !message.private)
          resolve(messages)
        }).catch(err => reject(err))
      }).catch(err => {reject(err); console.log(err)});
    })
  }

  newMessage(login,message,priv,image,message_id) {
    return new Promise((resolve, reject) => {
      this.dbUser.find(login)
        .then((resUser) => {
          resUser.messages.push(resMessage._id)
          this.dbMessage.create(message,priv,image,resUser._id,message_id)
              .then((resMessage) => {
                this.dbUser.update(login,{messages : resUser.messages}).
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

  update(message_id, message, image, priv){
    return new Promise((resolve, reject) => {
      const doc = { _id: message_id };
      if (message) doc[message] = message;
      if (image) doc[image] = image;
      if (priv) doc[priv] = priv;
      this.dbMessage
        .update(message_id, doc)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  getMessageById(message_id){
    return new Promise((resolve, reject)=>{
      this.dbMessage.getMessageById(message_id)
      .then((res) => resolve(res))
      .catch((err) => reject(err));

    })
  }

  getMessageByMotif(message,login){
    return new Promise((resolve, reject) => {
      this.dbMessage.getMessageByMotif(message)
      .then(messages => {
        this.dbUser.find(login).then(res => {
          messages = res.filter(message => res.amis.
            filter(ami => ami == message.sender)>length > 0 || !message.private)
          resolve(messages)
        })
      })
      .catch((err) => reject(err));
    })
  }

  star(login, message_id,isLiked){
    return new Promise((resolve, reject) => {
      this.getMessageById(message_id).then( res =>{
            let stars = res.stars
            if(isLiked)
              stars = stars.filter(item => item !== login)
            else
              stars.push(login)

            this.dbMessage.update(message_id,{stars:stars}).then(() =>
              resolve(!isLiked)
            ).catch(err => reject(err))
        }).catch(err => reject(err))
    })
  }

  repost(login,message_id){
    new Promise((resolve, reject) =>{
      this.getMessageById(message_id).then( res =>{
        this.newMessage(login,res.message,res.private,res.image)
        .then(res =>resolve("le message est reposte"))
        .catch(err => reject(err))
      }).catch(err => reject(err))
    }
    )
  }

  delete(message_id) {
    new Promise((resolve, reject) => {
      this.dbMessage.delete(message_id)
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }

}

module.exports = { Message };
