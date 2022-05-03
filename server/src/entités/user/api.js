import User from "./modele";
const crypto = require("crypto");
const jwt = require('jsonwebtoken')
export class Api {

    constructor(db) {
         this.user = User(db)
    }

    async signin(req,res) {
        const {login ,date,email,motDePasse} = req.body
        if(!login || !motDePasse || !date || !email)
        {
          res.status(401).send({message : "mot de passe ou le login est incorrect"})
          return
        }
        user.create(login,motDePasse,email,date).then(() =>{     
            res.sendStatus(401).send({message : "Mot de passe incorrect"})
          }).catch(err => 
            res.sendStatus(404).send({message : err})
          )
    }
    async signup (req, res) {
      const {login , password} = req.body
      if(login == "" || password == ""){
        res.status(401).send({message : "mot de passe ou le login est incorrect"})
        return
      }
      user.find(login).then(res => 
        {
          if(crypto.
            createHash("sha256").
            update(password).
            digest("hex") == res.motDePasse
          )
          res.send({token : jwt.sign({login : login},"RANDOM_TOKEN_SECRET",{expiresIn: '24h'})})
        else
        res.sendStatus(401).send({message : "Mot de passe incorrect"})
        }
        ).catch(err => 
        res.sendStatus(404).send({message : err})
        )
  
    }

    async signout(req, res) {
      res.sendStatus(200).send({token : "0"})
    }

}