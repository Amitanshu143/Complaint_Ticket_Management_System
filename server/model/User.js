const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, { timestamps: true });

<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema);

=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> 051e886f9d05b0b8cb318ec9ee0ac006324704a2
