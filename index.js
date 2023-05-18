
const { serverPort } = require("./config/server.config");
const {Categories, sequelize} = require("./models")
const express = require("express");
const routes = require("./routes")
const app = express();

app.use(express.json())
app.use(routes)

app.listen(serverPort, async () => {
  console.log("server is running on this port", serverPort);
  await init()
});

async function init(){
  try{
     await Categories.sync({ force: true });

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

     const result = await Categories.bulkCreate(defaultCategories);
     console.log(result);

  }catch(err){
    console.log(err)
  }
   
}