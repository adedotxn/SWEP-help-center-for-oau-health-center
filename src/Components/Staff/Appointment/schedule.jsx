import React from "react";
import '../../../Styles/Staff/schedule.css'
import back from '../../../images/back.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CancelAppointment from "./cancel";
import Rescheduling from "./reschedule";


const StaffSchedule = () => {

    const [cancelDialog, setCancelDialog] = useState(false)
    const [resheduleDialog,setResheduleDialog] = useState(false)

    
    let navigate = useNavigate()

    const studentName = "Adeyeye V.R"
    const currentStudentID = "TET/3535"
    const currentDate = "November 20, 2022"
    const scheduledTime = "10:00am"

    return ( 
        <div className="staff_schedule_container">
            <div className="staff_schedule_wrapper">
                {/* This returns to Staff Appointment, so i'll need to create another one for student so that it returns to Student Appointment when in student */}
                <div 
                    onClick = {() => {
                        navigate("/staff_appointment")
                    }} 
                >
                    <img src={back} alt="" />
                </div>
                
                <div className="staff_schedule_card">
                    <div className="staff_schedule_card_wrapper">
                        <span>{studentName}</span>
                        <span>{currentStudentID}</span>
                        <span>{currentDate}</span>
                        <span> {scheduledTime} </span>
                    </div>

                    <div className="schedule-ctas">
                        <button onClick={() => setResheduleDialog(!resheduleDialog)} className="reshedule-btn"> Reschedule Appointment</button>
                        <button onClick={() => setCancelDialog(!cancelDialog)}  className="cancel_appt"> Cancel Appointment</button>
                    </div>
                </div>

                <div className={`cancel_appt_container  ${cancelDialog ? 'show' : 'hide'}`}>
                    <CancelAppointment  cancelDialog={cancelDialog} setCancelDialog={setCancelDialog} />
                </div>
                
                <div className={`reshedule_appt_container ${resheduleDialog ? 'show' : 'hide'}`}>
                    <Rescheduling resheduleDialog={resheduleDialog} setResheduleDialog={setResheduleDialog}/>
                </div>
                
            </div>
                
        </div>
     );
}
 
export default StaffSchedule;