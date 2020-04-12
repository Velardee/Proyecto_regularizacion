var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [5, "El nombre es muy corto: min 5 caracteres"],
        maxlength: [12, "El sabor es muy largo: max 12 caracteres"],
        unique: [true, "Este nombre de usuario ya ha sido registrado"]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"]
    },
    type: {
        type: String,
        enum: ["Administrador", "Usuario Normal"]
    }
});

var Usuario = mongoose.model("Usuarios", modelSchema);
module.exports = Usuario;