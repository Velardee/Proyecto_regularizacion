var mongoose = require('mongoose');

/*var modelSchema = mongoose.Schema({
    name: String,
    email: String,
    type: String
})*/

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "El nombre es muy corto: min 4 caracteres"],
        maxlength: [12, "El nombre es muy largo: max 12 caracteres"]
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"],
        unique: true
    },
    type: {
        type: String,
        enum: ["Alumno zombie", "Profesor zombie"]
    },
    user:{
        type: String
    }
});

var Zombie = mongoose.model("Zombie", modelSchema)
module.exports = Zombie;