const express = require('express')

function init() {
  const router = express.Router()
  router.use(express.json())
  router.use((req, res, next) => {
    console.log('API: method %s, path %s', req.method, req.path)
    console.log('Body', req.body)
    next()
  })
  return router
}
exports.default = init
