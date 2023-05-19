const { serverPort } = require("./config/server.config");
const { Categories, sequelize, Products } = require("./models");
const express = require("express");
const {categoryRoutes, productRoutes} = require("./routes");
const app = express();

app.use(express.json());
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
        description: "For men",
        name: "summer shirts",
        cost: 870,
        quantity: 20,
      },
      {
        name: "female shirts",
        cost: 1200,
        description: "For women",
        quantity: 20,
      },
    ];

    const defaultCategories = [
      {
        name: "Mobile",
        description: "communicate",
      },
      {
        name: "Laptop",
        description: "Browse",
      },
    ];

    await Categories.bulkCreate(defaultCategories);
    await Products.bulkCreate(defaultProducts)
  } catch (err) {
    console.log(err);
  }
}
