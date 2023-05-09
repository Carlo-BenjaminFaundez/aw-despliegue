const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const express = require("express");
const router = express.Router();

const ChromeSchema = 
    new Schema ({
        name: {
            type: String,
            required: true,
            unique: true
          },
          personality: {
            type: String,
            required: true
          },
          specie: {
            type: String,
            required: true
          },
          birthday: {
            type: String,
            required: true
          },
          catchphrase: {
            type: String,
            required: true
          },
          hobbie: {
            type: String,
            required: true
          },
          color: {
            type: String,
            required: true
          }
    }); 


// Crear el modelo de usuario
module.exports = mongoose.model('Chrome', ChromeSchema);
router.post("/", async function (req, res) {
    try{

        const newCrome = new Chrome({
            name: 'name',
            personality: 'personality',
            specie: 'specie',
            birthday: 'birthday',
            catchphrase: 'catchphrase',
            hobbie: 'hobbie',
            color: 'color'
        });
        
        const name = req.body.name;
        
        console.log(newChrome);
        res.status(201).json({'success':`cromo ${name} creado!`});

        newChrome.save();

    } catch(err){
        res.status(500).json({'message':err.message});//conflict
    }
});

/*
//Crear un nuevo cromo
const newCrome = new Chrome({
    name: 'name',
    personality: 'personality',
    specie: 'specie',
    birthday: 'birthday',
    catchphrase: 'catchphrase',
    hobbie: 'hobbie',
    color: 'color'
});

newCrome.save((err) => {
  if (err) {
    console.error('Error al guardar el cromo:', err);
  } else {
    console.log('Cromo guardado con éxito');
  }
});*/