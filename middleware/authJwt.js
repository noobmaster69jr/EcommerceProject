
const jwt = require("jsonwebtoken");
const {User} = require('../models')

async function verifyToken(req, res, next){
   const token = req.headers['access-token']
   
    if(token){
        try{
            const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log("result : ", result);
            if (result) {
                req.userId = result.id;
                next();
            } else {
                res.status(400).send({ msg: "auth token has expired" });
                return;
            }
        }catch(err){
                res.status(400).send({ msg: "auth token has expired" });
                return;
        }
        
   }else{
     res.status(401).send({ msg: "auth token is missing" });
    return
   }
}

async function isAdmin(req, res, next){
    const userId = req.userId
    try{
        const user = await User.findByPk(userId);
        console.log('user', user)
        const userRoles = await user.getRoles();
        console.log('user roles', userRoles)

        for(let i = 0; i < userRoles.length;i++){
            if(userRoles[i].dataValues.name == 'Admin'){
                next()
                return
            }
        }
        res.status(400).send({msg:'User does not have admin access'})
        return
    }catch(err){
        res.status(500).send({msg:'Internal server error ', err})
        return
    }
}
   module.exports ={
    verifyToken, isAdmin
   }