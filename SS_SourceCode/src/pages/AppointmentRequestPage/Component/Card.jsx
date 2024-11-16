import React from 'react';

export default function Card({ patientId }) {
  return (
    <>
        <div className="appointment-request-card">
            <div className="appointment-request-card-info">
                <h2>New Appointment</h2>
                <p>PatientId: {patientId}</p> {/* Display patientId dynamically */}
            </div>
            <div>
                <button className="appointment-request-btn">View</button>
            </div>
        </div>
    </>
  );
}
