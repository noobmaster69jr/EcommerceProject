const {checkForCategoryName} = require('./category')
const {validateProductData} = require('./product')
const { checkDuplicateUsernameAndEmail, checkRoles} = require("./user");
const {verifyToken, isAdmin} = require('./authJwt')

module.exports = {
  checkForCategoryName,
  validateProductData,
  checkDuplicateUsernameAndEmail,
  checkRoles,
  verifyToken,
  isAdmin
};