import React, { useState } from "react";
//import { doctorData } from "../../../data/doctordata";
//import { studentData } from "../../../data/studentdata";
//import forward//Icon from '../../..///images/forward.svg'
import calenderIcon from '../../../images/calender-icon.svg'
import '../../../Styles/Staff/appointment.css'
import StaffSidebar from "../sidebar";
import StaffHeader from "../header";
import StaffAppointmentDetails from "./details";
import CalenderCard from "./calender_card";

const StaffAppointment = () => {

    const date = "November 29, 2021"
    const [openCard, setCard] = useState(false)

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
                            <h3>{date}</h3>

                        
                            <img src={calenderIcon} alt="calender-icon" 
                                onClick = {() => setCard(!openCard)}/>
                        </div>

                    </div>
                    
                    {/* Calender card to change date that opens when the bar is clicked */}
                    <div className = {openCard ? 'show' : "hide"}>
                        <CalenderCard date = {date} openCard={openCard} setCard={setCard}/>
                    </div>
                    

                    {/* The Appointment Details */}
                    <StaffAppointmentDetails />

                    <div className="desktop_calender_bar">
                        <div className="bar-title">
                            <h3>[Current Date MM//DD/YY]</h3>
                        </div>

                        <div className="calender-box">

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default StaffAppointment;