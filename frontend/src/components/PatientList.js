import React from 'react';

const PatientList = ({ patients }) => {
    return (
        <div>
            <h3>Patient List</h3>
            <ul>
                {patients.map(patient => (
                    <li key={patient._id}>
                        {patient.name} - {patient.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
