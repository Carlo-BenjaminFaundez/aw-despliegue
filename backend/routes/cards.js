const express = require("express");
const router = express.Router();

var data = require("../data");
var cardsData = data.users;
var indexOfUser = data.indexOfUser;
var indexOfCard = data.indexOfCard;

// Listado de cromos
router.get("/:user/cards", async function (req, res) {
  var index = indexOfUser(req.params.user);
  //res.send("el usuario se llama " + req.params.user +  " y su id es "+ index);

  if (index >= 0) {
    res.send(cardsData[index].cards);
    } else {  
      res.sendStatus(400);
  }
});
// Crear cromo
router.post("/:user/cards", async function (req, res) {
  var index = indexOfUser(req.params.user);
  var lcards = cardsData[index].cards.length;
  if (index >= 0) {
    cardsData[index].cards[lcards] = req.body.card;
    //cardsData[index].cards[lcards] = "_id";
    cardsData[index].cards[lcards]["_id"] = lcards;
    //console.log(cardsData[index].cards[1]);
    res.json(cardsData[index].cards);
    } else {  
      res.sendStatus(400);
  }
});

// Editar cromo
router.put("/:user/cards/:id_cromo", async function (req, res) {
  var userIndex = indexOfUser(req.params.user);
  var cardIndex = indexOfCard(req.params.user, parseInt(req.params.id_cromo));

  if (userIndex === -1 || cardIndex === -1) {
    // Si el usuario o el cromo no existen, devolvemos un error 404
    res.sendStatus(404);
    return;
  }

  // Actualizamos el objeto del cromo con los datos enviados en la solicitud
  var card = cardsData[userIndex].cards[cardIndex];
  Object.assign(card, req.body);

  // Devolvemos el cromo actualizado
  res.json(card);
});

// Eliminar cromo
router.delete("/:user/cards/:id_cromo", async function (req, res) {
  var userIndex = indexOfUser(req.params.user);
  var cardIndex = indexOfCard(req.params.user, parseInt(req.params.id_cromo));

  if (userIndex === -1 || cardIndex === -1) {
    // Si el usuario o el cromo no existen, devolvemos un error 404
    res.sendStatus(404);
    return;
  }

  // Eliminamos el cromo del arreglo de cromos del usuario
  cardsData[userIndex].cards.splice(cardIndex, 1);

  // Devolvemos un código de estado HTTP 200
  res.sendStatus(200);  
});

module.exports = router;
