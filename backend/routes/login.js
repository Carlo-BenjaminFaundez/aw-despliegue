const express = require("express");
const router = express.Router();
const User =  require("../models/User");


router.post("/", async function (req, res) {
  //var index = indexOfUser(req.body.user);

  const user = req.body.user;
  const password = req.body.password;

  //Comprobar si el usuario ya esta registeado
  const logedUser = await User.findOne({username: user}).exec();
  if (logedUser) return res.sendStatus(409);


// Crear y guardar un nuevo usuario
  try{

    const newUser = new User({
      "username": user,
      "password":password
    });
    
    console.log(newUser);
    res.status(201).json({'success':`usuario ${user} creado!`});

    newUser.save();

  } catch(err){
    res.status(500).json({'message':err.message});//conflict
  }

  


});
module.exports = router;
