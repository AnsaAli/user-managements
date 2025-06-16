require('dotenv').config();

const connectToDatabase = require('./config/db.js');
const express = require('express');

connectToDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});