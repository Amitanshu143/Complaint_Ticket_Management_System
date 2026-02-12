const mongoose = require('mongoose');
const Contactschema = new mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    message:{
        type: String
    },

})
