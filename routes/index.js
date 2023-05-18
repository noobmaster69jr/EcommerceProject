const express = require('express')
const routes = express.Router()
const {createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory} = require('../controller/category')

routes.post('/ecomm/api/v1/categories', createCategory)
routes.get('/ecomm/api/v1/categories', getAllCategory)
routes.get('/ecomm/api/v1/categories/:id', getCategoryById)
routes.put('/ecomm/api/v1/categories/:id', updateCategory)
routes.delete("/ecomm/api/v1/categories/:id", deleteCategory);

module.exports = routes