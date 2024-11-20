const mongoose = require('mongoose');

const InjectionSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    brand: { type: String, required: true },
    dose: { type: String, required: true },
    frequency: { type: String, required: true },
    site: { type: String },
    nextDate: { type: Date },
    lastDate: { type: Date },
    adminBy: { type: String },
    status: { type: String, enum: ['administered', 'refused', 'discontinued', 'discharged'], required: true },
});

module.exports = mongoose.model('Injection', InjectionSchema);
