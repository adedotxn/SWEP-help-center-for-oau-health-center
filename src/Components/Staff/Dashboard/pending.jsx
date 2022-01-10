import React, { useState } from "react";
import '../../../Styles/Staff/pending.css'
import expand from '../../../images/expand-icon.svg'
import contract from '../../../images/contract-icon.svg'
import { doctorData } from "../../../data/doctordata"
import { studentData } from "../../../data/studentdata";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'


const Pending = () => {

    const date = new Date()

    const [value, onChange] = useState(date);

    //ideally this should be the time message was dent/appointment was made
    const time = date.getHours() + ':' + date.getUTCMinutes() 

    //idelly this should be the date the doctor set the appointment?
    const mmyy = date.getMonth() + " " + date.getDay() + "," + date.getFullYear() 


    const [expandPending, setExpandPending] = useState(false) //to display pending appointments
    const [expandAppointments, setExpandApp] = useState(false) // to display active appointments


    return ( 
    <div className="pending_container">

        {/* MOBILE */}
        <div>
            {/* Pending card */}
            <div className = "wrapper request-wrapper">
                <div className = "pending-card">
                    <div className = "title" onClick= {() => setExpandPending(!expandPending)}>
                        <span> Pending Message Requests</span>

                    {expandPending ? 
                        <img src={contract} alt=""
                            onClick= {() => setExpandPending(!expandPending)} />
                        :
                        <img src={expand} alt=""
                            onClick= {() => setExpandPending(!expandPending)} />
                    }
                    </div>
                    

                    <div className = {`pending-body ${expandPending ? 'expand' : 'contract'}`}>
                            {studentData.map((patient) => (
                                <div key={patient.id}>
                                    <div className = "pending-details">
                                        <div className = "student-details">
                                            <h3> {patient.studentID}</h3>
                                            <p> {patient.ailment}</p>
                                        </div>
                                
                                        <div className = "time-sent">
                                            <strong>{time}</strong> 
                                        </div>
                                    </div>
                                </div>

                            ))}
                    </div>
                </div>


                {/* DESKTOP */}

                <div className="desktop_pending_card">
                    <div className = "desktop_title">
                            <span> Pending Message Requests</span>
                    </div>
                    
                    <div className = "desktop_pending_body">
                            {studentData.map((patient) => (
                                <div key={patient.id}>
                                    <div className = "pending-details">
                                        <div className = "student-details">
                                            <h3> {patient.studentID}</h3>
                                            <p> {patient.ailment}</p>
                                        </div>
                                
                                        <div className = "time-sent">
                                            <strong>{time}</strong> 
                                        </div>
                                    </div>
                                </div>

                            ))}
                    </div>

                </div>
            </div> 
        </div>

        
        <div className="left">
            <div className="pending_calender">
            <Calendar 
                    onChange={onChange}
                    value = {value}
                />
            </div>

            {/* MY Appointments card */}
            <div className = "wrapper appointment-wrapper">
                <div className = "appointment-card">
                    <div className = "title" onClick = {() => setExpandApp(!expandAppointments)}>
                        <span>My appointments <h2>adrety</h2></span>

                        {expandAppointments ?
                            <img src={contract} alt="close" 
                                onClick = {() => setExpandApp(!expandAppointments)} />
                            :
                            <img src={expand} alt="open"
                                onClick = {() => setExpandApp(!expandAppointments)} />
                        }
                    </div>

                    <div className = {`appointment-body ${expandAppointments ? 'expand' : 'contract'}`}>
                        {doctorData.map((doctor) => (
                            <div className = "appointment-details" key={doctor.id}>
                                <div>
                                    <h3> {doctor.name}</h3>
                                <p> {mmyy} </p>
                                </div>

                                <div>
                                    {studentData.map((patient) => (
                                        <div key={patient.id}>
                                            <h3> {patient.studentID}</h3>
                                            <span> {time} </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 

                <div className="desktop_appointment_card">
                    <div className = "desktop_title">
                            <span>My appointments</span>
                    </div>

                    <div className = "desktop_appointment_body">
                        {doctorData.map((doctor) => (
                            <div className = "appointment-details" key={doctor.id}>
                                <div>
                                    <h3> {doctor.name}</h3>
                                <p> {mmyy} </p>
                                </div>

                                <div>
                                    {studentData.map((patient) => (
                                        <div key={patient.id}>
                                            <h3> {patient.studentID}</h3>
                                            <span> {time} </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>

    </div>
    )

}
 
export default Pending;