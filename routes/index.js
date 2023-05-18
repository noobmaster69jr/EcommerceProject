const express = require('express')
const routes = express.Router()
const {createCategory} = require('../controller/category')

routes.post('/ecomm/api/v1/categories', createCategory)
routes.get('/ecomm/api/v1/categories')
routes.put('/ecomm/api/v1/categories/:id')

module.exports = routes