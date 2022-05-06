
  const userFile = require("./modele");
  const crypto = require("crypto");
  const jwt = require('jsonwebtoken')

  const user =  new userFile.User()
  class Api {
      constructor(db) {
        user.setDataBase(db)
      }
      
      async signup(req,res) {
          const {login ,date,email,motDePasse} = req.body
          if(!login || !motDePasse || !date || !email)
          {
            res.status(401).send({message : "mot de passe ou le login est incorrect"})
            return
          }
          user.create(login,motDePasse,email,date).then(() =>{     
              console.log("then signup");
              res.send({token : jwt.sign({login : login},"RANDOM_TOKEN_SECRET",{expiresIn: '24h'}), login : login})
              console.log("token envoye signup")
              return

            }).catch(err => 
              {
                console.log("catch signup ")
                res.sendStatus(404).send({message : err})
              }
            )
      }

      async signin (req, res) {
        const {login , password} = req.body
        if(login == "" || password == ""){
          res.status(401).send({message : "mot de passe ou le login est incorrect"})
          return
        }
        user.find(login).then(res => {
            console.log(res)
            if(crypto.
              createHash("sha256").
              update(password).
              digest("hex") == res.motDePasse
            ){
              console.log("password correct signin")
              res.send({token : jwt.sign({login : login},"RANDOM_TOKEN_SECRET",{expiresIn: '1H'}), login : login})
              console.log("token envoye signin")
              return
            }
            res.sendStatus(401).send({message : "Mot de passe incorrect"})
            return 
          }
          ).catch(err => 
            res.sendStatus(404).send({message : err})
          )
    
      }

      async signout(req, res) {
        console.log("signout")
        res.sendStatus(200).send({token : "",login : ""})
        console.log("signout out")

      }

      async edit(req, res) {
        const {login , nickName, password, biographie, photo} = req.body
        user.update(login , nickName, password, biographie, photo).then((resp) => {
          console.log("then edit")
          res.sendStatus(200).send({message : resp})
          console.log("fin edit")
          return
        }).catch(err => res.sendStatus(500).send({message : err}))
      }

      async delete(req, res) {
        const {login} = req.params
        user.delete(login).then((resp) => {
          console.log("then delete")
          res.sendStatus(200).send({message : resp})
          console.log("fin delete")
          return
        }).catch(err => res.sendStatus(500).send({message : err}))
      }


      async get(req, res) {
        const {login} = req.params
        user.find(login).then((resp) => {
          console.log("then get")
          res.sendStatus(200).send({message : resp})
          console.log("then get")
          return
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfos(req, res) {
        user.getAll().then((resp) => {
          console.log("then getInfos")
          res.sendStatus(200).send({message : resp})
          console.log("fin getInfos")
          return
        }).catch(err => res.sendStatus(500).send({message : err}))
      }

      async getInfo(req, res) {
        const {login} = req.params
        user.getInfo(login).then((resp) => {
          console.log("then getInfo")
          res.sendStatus(200).send({message : resp})
          console.log("fin getInfo")
          return
        }
        ).catch(err => res.sendStatus(500).send({message : err}))
      }
  }



module.exports = {Api}