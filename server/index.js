const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Routes
const authRoutes = require('./route/authRoutes');
<<<<<<< HEAD
const contactRoutes = require('./route/contactRoute');
=======
const contactRoutes = require('./route/contactRoutes');

>>>>>>> 051e886f9d05b0b8cb318ec9ee0ac006324704a2
// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});