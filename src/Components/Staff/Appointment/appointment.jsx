import React, { useState } from "react";
//import { doctorData } from "../../../data/doctordata";
//import { studentData } from "../../../data/studentdata";
//import forward//Icon from '../../..///images/forward.svg'
import '../../../Styles/Staff/appointment.css'
import StaffSidebar from "../sidebar";
import StaffHeader from "../header";
import StaffAppointmentDetails from "./details";
import CalenderCard from "./calender_card";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const StaffAppointment = () => {

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[date.getMonth()];
    const year = date.getFullYear()
    const day = date.getDay();

    const fullDate = month + '/' + day + '/' + year 

    const [openCard, setCard] = useState(false);

    const [value, onChange] = useState(new Date())

    return ( 
        <div className="appt_container">
            <div className="desktop_sidebar">
                <StaffSidebar />
            </div>

            <div className = "appt-wrapper">
                <header>
                    <StaffHeader />
                </header>

                <div className = "appt-info">
                    <div>
                        {/* The calendar bar with the grey bg */}
                        <div className="mobile_calender_bar">
                            <div className="current-date">
                                <h3>{fullDate} </h3>
                            </div>
                        </div>

                    </div>
                    
                    {/* Calender card to change date that opens when the bar is clicked */}
                    <div className = {openCard ? 'show' : "hide"}>
                        <CalenderCard date = {date} openCard={openCard} setCard={setCard}/>
                    </div>

                    
                    
                    

                    {/* The Appointment Details */}
                    <StaffAppointmentDetails  />

                    <div className="desktop_calender_bar">
                        <div className="bar-title">
                            <span> {fullDate} </span>
                        </div>

                        <div className="calender-box">

                        <Calendar 
                            onChange={onChange}
                            value = {value}
                        />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default StaffAppointment;