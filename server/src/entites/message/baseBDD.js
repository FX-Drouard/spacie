export default class UserBase {
  constructor(db) {
    this.db = db;
  }

  create(message,private,image,sender,message_id) {
    return new Promise((resolve, reject) => {
      let doc = {
         message,
        private,
        image,
        sender
      }
      if(message_id)
        doc[message_id] = message_id

      this.db
        .insertOne(doc)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  delete(message_id) {
    return new Promise((resolve, reject) => {
      this.db
        .deleteOne({ _id: message_id })
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

  

  update(message_id, doc) {
    return new Promise((resolve, reject) => {
      this.db
        .updateOne(
          { _id: message_id },
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
        .find({})
        .toArray()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
       });
  }

  getMessageByMotif(message){
    return new Promise((resolve, reject) => {
      this.db
      .find({message : "/"+message+"/"})
      .toArray()
      .then((res) => resolve(res))
      .catch((err) => reject(err));
     });
  }

  getMessageById(message_id){
    return new Promise((resolve, reject) => {
      this.db
      .findOne({_id: message_id})
      .then((res) => resolve(res))
      .catch((err) => reject(err));
     });
  }
}

