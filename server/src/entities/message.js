class Message{
    constructor(db){
        this.db = db
    }

    create(login, message, pathImage,hashtag,mentions){
        return new Promise((resolve,reject) =>{
            try{
                let id  = this.db.message.genererId()
                this.db.message.insert({id :id,login :login,message: message,pathImage:pathImage})
                for(h in hashtag)
                    this.db.hashtag.insert({h,id})
                for(m in mentions)
                    this.db.mention.insert({m,id})
                resolve("200")
            }catch(e){
                reject("probleme de creation")
            }

        })
    }

    delete(id,login){
        return new Promise((resolve,reject) => {
            try{
                this.db.message.delete(id)
                resolve("200")
            }catch{
                reject("probleme de delete")
            }
        })
    }


    getAll(login){
        return new Promise((resolve,reject) => {
            try{
                if(login == undefined)
                    resolve(this.db.message.getMessageAleatoire())

                resolve(this.db.message.getMessageAleatoire(login))
            }catch{
                reject("probleme de get message")
            }
        })
    }

    getMessagesProfil(loginName){
        return new Promise((resolve,reject) => {
            try{
                resolve(this.db.message.getMessageProfil(loginName))
            }catch{
                reject("probleme de get message")
            }
        })
    }




}