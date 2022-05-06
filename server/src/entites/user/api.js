
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
              res.send({token : jwt.sign({login : login},"RANDOM_TOKEN_SECRET",{expiresIn: '2h'}), login : login})
              console.log("token envoye signup")
              return

            }).catch(err => 
              {
                console.log("catch signup ")
                res.status(404).send({message : err})
              }
            )
      }

      async signin (req, res) {
        const {login , password} = req.body
        if(login == "" || password == ""){
          res.status(401).send({message : "mot de passe ou le login est incorrect"})
          return
        }
        user.find(login).then(resp => {
            if(crypto.
              createHash("sha256").
              update(password).
              digest("hex") == resp.motDePasse
            ){
              console.log("password correct signin",login)
              res.send({token : 'hqhq', login : login})
              console.log("token envoye signin")
              return
            }
            res.status(401).send({message : "Mot de passe incorrect"})
            return 
          }
          ).catch(err => {
            console.log(err)
            res.status(401).send({message : "login ou mot de passe incorrect"})
            }
          )
    
      }

      async signout(req, res) {
        console.log("signout")
        res.status(200).send({token : "",login : ""})
        console.log("signout out")

      }

      async edit(req, res) {
        const {login , nickName, password, biographie, photo} = req.body
        user.update(login , nickName, password, biographie, photo).then((resp) => {
          console.log("then edit")
          res.status(200).send({message : resp})
          console.log("fin edit")
          return
        }).catch(err => res.status(500).send({message : err}))
      }

      async delete(req, res) {
        const {login} = req.params
        user.delete(login).then((resp) => {
          console.log("then delete")
          res.status(200).send({message : resp})
          console.log("fin delete")
          return
        }).catch(err => res.status(500).send({message : err}))
      }


      async get(req, res) {
        const {login} = req.params
        user.find(login).then((resp) => {
          console.log("then get")
          res.status(200).send({user : resp})
          console.log("fin get")
          return
        }
        ).catch(err => res.status(500).send({message :  "erreur get"}))
      }

      async getInfos(req, res) {
        user.getAll().then((resp) => {
          console.log("then getInfos")
          res.status(200).send({message : resp})
          console.log("fin getInfos")
          return
        }).catch(err => res.status(500).send({message : err}))
      }

      async getInfo(req, res) {
        const {login} = req.params
        user.getInfo(login).then((resp) => {
          console.log("then getInfo")
          res.status(200).send({message : resp})
          console.log("fin getInfo")
          return
        }
        ).catch(err => res.status(500).send({message : "erreur getInfo"}))
      }
  }



module.exports = {Api}