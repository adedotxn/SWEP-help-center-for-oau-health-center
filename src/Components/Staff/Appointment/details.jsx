import React from "react";

import '../../../Styles/Staff/details.css'

import forwardIcon from '../../../images/forward.svg'
import { doctorData } from "../../../data/doctordata";
import { studentData } from "../../../data/studentdata";
import { Link } from "react-router-dom";
//import { useState } from "react";


//might have to create separate for mobile and desktop 'cause of props but i'll do that later
const StaffAppointmentDetails = () => {
    const date = "November 29, 2021"

    /*const [reshedule, setReshedule] = useState(false)*/

    return ( 
        <div className="appt-details-container">
            <div className="appt-details">
                <div className = "appt-details-doctor"> 
                    {doctorData.map((doctor) => (

                        <div key ={doctor.id}>
                            <h3>{doctor.name}</h3>
                            <span> {date} </span>
                        </div>
                
                    ))}
                </div>

                <div className="appt-details-student">
                    {studentData.map((patient) => (
                        <div className = "student_appt" key = {patient.id}>
                            <div>
                                <h3>{patient.studentID}</h3>
                                <span>{date}</span>
                            </div>

                            <Link className="link" to="/staff_reshedule">
                                <div className = "details-icon">
                                    <img src={forwardIcon} alt="appointment details" />
                                </div>
                            </Link>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
       
     );
}

export default StaffAppointmentDetails;