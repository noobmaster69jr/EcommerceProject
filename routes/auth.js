const express = require('express')
const {signUp, signIn} = require('../controller/auth')
const { checkDuplicateUsernameAndEmail, checkRoles } = require("../middleware");


const routes =express.Router()

routes.post(
  "/ecomm/api/v1/auth/signup",
  [checkDuplicateUsernameAndEmail, checkRoles],
  signUp
);

routes.post(
  "/ecomm/api/v1/auth/signin",
  signIn
);

module.exports={authRoutes: routes}