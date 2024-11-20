const express = require('express');
const router = express.Router();
const Injection = require('../models/Injection');

// Add a new injection
router.post('/', async (req, res) => {
    try {
        const newInjection = new Injection(req.body);
        const injection = await newInjection.save();
        res.json(injection);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all injections
router.get('/', async (req, res) => {
    try {
        const injections = await Injection.find().populate('patient', ['name', 'age']);
        res.json(injections);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
