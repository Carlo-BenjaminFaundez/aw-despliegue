const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = 
    new Schema ({
        username: {
            type: String,
            required: true,
            unique: true
          },
          password: {
            type: String,
            required: true
          }
    });

// Crear el modelo de usuario
module.exports = mongoose.model('User', UserSchema);

/* Crear un nuevo usuario
const newUser = new User({
  username: 'username',
  password: 'password'
});

newUser.save((err) => {
  if (err) {
    console.error('Error al guardar el usuario:', err);
  } else {
    console.log('Usuario guardado con éxito');
  }
});*/