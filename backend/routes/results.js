const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Endpoint do dodawania wyników
router.post('/', async (req, res) => {
    const { result } = req.body;
    const db = admin.database();
    const ref = db.ref('results');
    
    try {
        await ref.push(result);
        res.status(200).send("Wynik dodany!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Wystąpił błąd.");
    }
});

// Endpoint do pobierania wyników
router.get('/', async (req, res) => {
    const db = admin.database();
    const ref = db.ref('results');
    
    try {
        const snapshot = await ref.once('value');
        const results = snapshot.val();
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Wystąpił błąd.");
    }
});

module.exports = router;