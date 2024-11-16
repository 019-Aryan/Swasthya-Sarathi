import React, { useState } from 'react';
import "./AppointmentDetails.css";

export default function AppointmentDetails() {
  const initialData = {
    name: 'John Doe',
    contact: '123-456-7890',
    ailment: 'Flu',
    description: 'Fever and sore throat',
  }; // intial data for example

  const [formInputs, setFormInputs] = useState({
    date: '',
    time: '',
  }); // setting the input fields data and time

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  }; // Updates the form input state dynamically based on user input.


  return (
    <div className='appointment-details-container'>
      <h1>Appointment Details</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={initialData.name} disabled />

        <label htmlFor="contact">Contact No.:</label>
        <input type="text" id="contact" name="contact" value={initialData.contact} disabled />

        <label htmlFor="ailment">Ailment:</label>
        <input type="text" id="ailment" name="ailment" value={initialData.ailment} disabled />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          cols={30}
          rows={7}
          value={initialData.description}
          disabled
        ></textarea>

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formInputs.date}
          onChange={handleInputChange}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formInputs.time}
          onChange={handleInputChange}
        />

        <button type="submit" id="appointment-details-btn-danger">Discard Appointment</button>  
        <button type="submit" id="appointment-details-btn-success">Confirm Appointment</button>
      </form>
    </div>
  );
}
