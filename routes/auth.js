const express = require('express')
const {signUp} = require('../controller/auth')
const routes =express.Router()

routes.post('/ecomm/api/v1/auth/signup',signUp)

module.exports={authRoutes: routes}