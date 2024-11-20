import React, { useEffect, useState } from 'react';
import PatientList from '../components/PatientList';
import PatientForm from '../components/PatientForm';
import api from '../services/api';

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await api.get('/patients');
            setPatients(response.data);
        };
        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patients</h1>
            <PatientForm />
            <PatientList patients={patients} />
        </div>
    );
};

export default Patients;
