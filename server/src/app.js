const path = require('path')
const api = require('./api.js')
const { default: router } = require('./route.js')

const basedir = path.normalize(path.dirname(__dirname))
console.debug(`Base directory: ${basedir}`)

express = require('express')
const app = express()
api_1 = require('./api.js')


app.use('/api', api.default())
router(app).then(() => {

    app.on('close', () => {
    })

    console.log('serveur lancé')
})




exports.default = app
