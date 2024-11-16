import "./AppointmentRequests.css";
import Card from "./Component/Card"; // for importing card(new request)

export default function AppointmentRequests() {

  return (
    <>
        <div className="appointment-request-container">
            <div className="appointment-request-title">Appointment Requests</div>
            <div className="appointment-request-list">
            <Card patientId="6xxx9" />
            <Card patientId="9xxx9" /> 
            <Card patientId="6xxx9" />
             
                           

            </div>
        </div>
    </>
  )
}
