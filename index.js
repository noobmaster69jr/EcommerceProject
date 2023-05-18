
const { serverPort } = require("./config/server.config");
const {Categories, sequelize} = require("./models")
const express = require("express");

const app = express();

app.listen(serverPort, async () => {
  console.log("server is running on this port", serverPort);
  await init()
});

async function init(){
    await Categories.sync({force:true})
    
    const defaultCategories = [{
      name:'Mobile', description:'communicate'
    },{
      name:'Laptop', description:'Browse'
    }]

    const result = await Categories.bulkCreate(defaultCategories)
    console.log(result)
}