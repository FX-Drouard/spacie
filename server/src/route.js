const userRoute  = require("./entites/user/rooter")
const messageRoute  = require('./entites/message/rooter')
const notificationRoute  = require('./entites/notif/rooter')
const friendRoute  = require('./entites/friend/rooter')


function router(app) {
  app.use('/api/user', userRoute)
  app.use('/api/message', messageRoute)
  app.use('/api/friend', friendRoute)
  app.use('/api/notification', notificationRoute)
}

exports.default = router
