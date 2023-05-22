const express = require("express");
const routes = express.Router();
const {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controller/category");

const {checkForCategoryName, verifyToken, isAdmin} = require('../middleware')

routes.post("/ecomm/api/v1/categories",[checkForCategoryName, verifyToken, isAdmin], createCategory);
routes.get("/ecomm/api/v1/categories", getAllCategory);
routes.get("/ecomm/api/v1/categories/:id", getCategoryById);
routes.put("/ecomm/api/v1/categories/:id",[verifyToken, isAdmin], updateCategory);
routes.delete("/ecomm/api/v1/categories/:id", [verifyToken, isAdmin],deleteCategory);

module.exports = {categoryRoutes : routes};
