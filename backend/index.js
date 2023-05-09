const express = require("express");
const cors = require("cors");

//Coneccion a base de datos
const connectDB = require("./config/db");
connectDB();
//
var app = express();
app.use(express.json());
app.use(cors());

app.use("/api/login", require("./routes/login"));
app.use("/", require("./models/Card"));

app.listen(3000, function () {
  console.log("Servidor arrancado en el puerto 3000!");
});

