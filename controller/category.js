const {Categories} = require("../models")

async function createCategory(req, res){
    const data = req.body;
    if(!data.name){
        res.status(400).send({msg:'name is mandatory'})
    }
    const name = data.name
    const description = data.description

    try{
         const result = await Categories.create({name, description})
    console.log('result',result)
    res.send({msg:"Category has been created"})
    }catch(err){
        console.log('err in creation of categories')
        res.status(500).send({msg:"Internal sever error"})
    }
   
}


async function getAllCategory(req, res) {
  try {
    const result = await Categories.findAll();
    console.log("result", result);
    res.send(result);
  } catch (err) {
    console.log("err in retriving  categories");
    res.status(500).send({ msg: "Internal sever error" });
  }
}

async function getCategoryById(req, res) {
  try {
    const categoryId = req.params.id
    const result = await Categories.findOne({
        where :{
            id: categoryId
        }
    });
    console.log("result", result);
    res.send(result);
  } catch (err) {
    console.log("err in retriving category by id");
    res.status(500).send({ msg: "Internal sever error" });
  }
}

async function updateCategory(req, res){
    const categoryId = req.params.id
      try {
         const result = await Categories.findOne({
           where: {
             id: categoryId,
           },
         });
         if(result){
            result.name = req.body.name
            result.description = req.body.description
            result.save()
            res.send({msg:'Category got updated', updateCategory: result})
         }else{
             console.log("err in retriving  categories");
             res.status(500).send({ msg: "request id is not present" });
         }
        
      } catch (err) {
        console.log("err in retriving  categories");
        res.status(500).send({ msg: "Internal sever error" });
      }
}

async function deleteCategory(req, res){
    const categoryId = req.params.id;
    try {
      const result = await Categories.destroy({
        where: {
          id: categoryId,
        },
      });

      res.send({ msg: "catrgory deleted", result });
    } catch (err) {
      console.log(" error in deleting category");
      res.status(500).send({ msg: "Internal server error" });
    }
}
module.exports = {
    createCategory,
    getAllCategory, 
    getCategoryById, 
    updateCategory, 
    deleteCategory
}