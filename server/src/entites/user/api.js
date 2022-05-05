
  const user = require("./modele");
  const crypto = require("crypto");
  const jwt = require('jsonwebtoken')

  class Api {
      constructor(db) {
        this.user =  new user.User(db)
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
        res.sendStatus(200).send({token : ""})
      }

      async edit(req, res) {
        const {login , nickName, password, biographie, photo} = req.body
        this.user.update(login , nickName, password, biographie, photo).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }).catch(err => res.sendStatus(500).send({message : err}))
      }

      async delete(req, res) {
        const {login} = req.params
        this.user.delete(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }).catch(err => res.sendStatus(500).send({message : err}))
      }


      async get(req, res) {
        const {login} = req.params
        this.user.find(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfos(req, res) {
        this.user.getAll().then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfo(req, res) {
        const {login} = req.params
        this.user.getInfo(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }
  }



module.exports = {Api}