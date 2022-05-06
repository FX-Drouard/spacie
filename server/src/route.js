const {userRoute}  = require("./entites/user/rooter")
const {messageRoute}  = require('./entites/message/rooter')
const {notificationRoute}  = require('./entites/notif/rooter')
const {friendRoute}  = require('./entites/friend/rooter')


function router(app) {
  return new Promise((resolve, reject) => {
    messageRoute().then(message => {
      app.use('/message', message)
      friendRoute().then(friend => {
        app.use('/friend',friend )
        notificationRoute().then(notif => {
          app.use('/notif', notif)
          userRoute().then(user => {
            app.use('/user', user)
            resolve()
          })
        })
      })
    })
  })    
}

exports.default = router
