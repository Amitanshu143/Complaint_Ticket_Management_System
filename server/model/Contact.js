<<<<<<< HEAD
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
=======
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
    },
    whatsapp:{
        type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);
>>>>>>> 051e886f9d05b0b8cb318ec9ee0ac006324704a2
