const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Create a new patient
router.post('/', async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        const patient = await newPatient.save();
        res.json(patient);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all patients
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
