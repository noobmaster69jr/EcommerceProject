const { serverPort } = require("./config/server.config");
const { Categories, sequelize, Products, Role} = require("./models");
const express = require("express");
const {categoryRoutes, productRoutes, authRoutes} = require("./routes");
const app = express();

app.use(express.json());
app.use(authRoutes)
app.use(categoryRoutes);
app.use(productRoutes)

app.listen(serverPort, async () => {
  console.log("server is running on this port", serverPort);
  await init();
});

async function init() {
  try {
    await sequelize.sync({ force: true });
    const defaultProducts = [
      {
        description: "Bathing soap",
        name: "Soap",
        cost: 870,
        quantity: 20,
        CategoryId: 1,
      },
      {
        name: "Axe ",
        cost: 1200,
        description: "Fragnance for men",
        quantity: 20,
        CategoryId: 2,
      },
      {
        name: "T-shirt",
        cost: 1200,
        description: "For both men and women",
        quantity: 20,
        CategoryId: 3,
      },
    ];

    const defaultCategories = [
      {
        name: "Beauty",
        description: "All Beauty products",
      },
      {
        name: "Fragnance",
        description: "All Fragnance products",
      },
      {
        name: "clothes",
        description: "All Clothing products",
      },
    ];

    const defaultRoles = [{name:'User'},{name:'Admin'}]

    await Categories.bulkCreate(defaultCategories);
    await Products.bulkCreate(defaultProducts)
    await Role.bulkCreate(defaultRoles)
  } catch (err) {
    console.log(err);
  }
}
