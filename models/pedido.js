var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    pedidito: {
        type: String
    },
    cantidad: {
        type: Number,
        required: true,
        min: [1, 'Necesitas pedir al menos uno para continuar']
    },
    fecha: {
        type: Date
    },
    tipo: {
        type: String,
        enum: ["GOLD", "SILVER", "BRONZE"]
    },
    fechaEntrega: {
        type: Date
    },
    user:{
        type: String
    }
});

var Zombie = mongoose.model("Pedido", modelSchema)
module.exports = Zombie;