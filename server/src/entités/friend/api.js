import friend from "./modele";
const jwt = require('jsonwebtoken')
export class Api {

    constructor(db) {
         this.friend = Friend(db)
    }

    async delFriend(req,res) {
        const {login ,date,email,motDePasse} = req.body
        
    }

    async addFriend (req, res) {
      const {id} = req.body
      
  
    }


}