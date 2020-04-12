var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor: {
        type: String,
        required: true,
        enum: ["Limón", "Fresa", "Sandia"]
    },
    description: {
        type: String,
        required: true,
        minlength: [6, "La descripción es muy corta: min 6 caracteres"],
        maxlength: [40, "La descripción es muy larga: max 40 caracteres"]
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    user:{
        type: String
    }
});

var Cerebro = mongoose.model("Cerebro", modelSchema);
module.exports = Cerebro;