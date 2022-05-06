
  const userFile = require("./modele");
  const crypto = require("crypto");
  const jwt = require('jsonwebtoken')

  const user =  new userFile.User()
  class Api {
      constructor(db) {
        user.setDataBase(db)
      }
      
      async signup(req,res,next) {
          const {login ,date,email,motDePasse} = req.body
          if(!login || !motDePasse || !date || !email)
          {
            res.status(401).send({message : "mot de passe ou le login est incorrect"})
            return
          }
          user.create(login,motDePasse,email,date).then(() =>{     
              console.log("then signup");
              res.send({token : "hamid", login : login})
                next()
            }).catch(err => 
              {console.log("catch err ")}
            )
      }

      async signin (req, res) {
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
            res.send({token : jwt.sign({login : login},"RANDOM_TOKEN_SECRET",{expiresIn: '24h'}), login : login})
          else
          res.sendStatus(401).send({message : "Mot de passe incorrect"})
          }
          ).catch(err => 
          res.sendStatus(404).send({message : err})
          )
    
      }

      async signout(req, res) {
        res.sendStatus(200).send({token : "",login : ""})
      }

      async edit(req, res) {
        const {login , nickName, password, biographie, photo} = req.body
        user.update(login , nickName, password, biographie, photo).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }).catch(err => res.sendStatus(500).send({message : err}))
      }

      async delete(req, res) {
        const {login} = req.params
        user.delete(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }).catch(err => res.sendStatus(500).send({message : err}))
      }


      async get(req, res) {
        const {login} = req.params
        user.find(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfos(req, res) {
        user.getAll().then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfo(req, res) {
        const {login} = req.params
        user.getInfo(login).then((resp) => {
          res.sendStatus(200).send({message : resp})
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }
  }



module.exports = {Api}