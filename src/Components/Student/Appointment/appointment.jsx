import React from "react";
import '../../../Styles/Student/appointment.css'
import StudentHeader from "../headers/header";
import StudentSidebar from "../sidebar";
import AppointmentDetails from "./details";

const StudentAppointment = () => {
    return ( 
        <div className="student_appointment_container">
            <div className="desktop_sidebar">
                <StudentSidebar />
            </div>
            
            <div>
                <header>
                    <StudentHeader/>
                </header>

                <main>
                    <AppointmentDetails />
                </main>
            </div>

        </div>
     );
}
export default StudentAppointment;