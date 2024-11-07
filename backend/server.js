// backend/server.js
require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const app = express();

// Inicjalizacja Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

app.use(express.json());
app.use(express.static('frontend'));

// Dodaj routes
app.use('/api/results', require('./routes/results'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});