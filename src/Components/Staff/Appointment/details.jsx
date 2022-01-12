import React from "react";

import '../../../Styles/Staff/details.css'
import http from "../../../http-config";
import { useState } from "react";
//import { useState } from "react";


//might have to create separate for mobile and desktop 'cause of props but i'll do that later
const StaffAppointmentDetails = () => {
    

    const [details, setDetails] = useState({studentId : "", date: "", time: ""})
    
    const postAppointment = async () => {
        try {
            const {data} = await http.post('/staff/appointment', details);
            console.log(data)

        } catch (error) {
            console.log(error.response?.data || error.message)
        }
    }

    const addStudent = (e) => {
        setDetails({...details, studentId: e.target.value});
    }
    const addDate = (e) => {
        setDetails({...details, date: e.target.value});
    }

    const addTime = (e) => {
        setDetails({...details, time: e.target.value})
    }

    /*const [reshedule, setReshedule] = useState(false)*/

    return ( 
        <div className="appt-details-container">
            <div className="appt-details">
                <div className="appt-inputs">
                       <label > <strong>Student ID :</strong>  </label>
                        <input className="id-input" type="text" placeholder="ID Of student to set appointment with"
                            onChange={addStudent}
                        />


                        <label > <strong>Pick a date :</strong>  </label>
                        <input  className="date-input" type="date"
                            onChange={addDate}
                        />


                        <label > <strong>Pick a time :</strong>  </label>
                        <input  className="time-input" type="time" 
                            onChange={addTime}
                        />

                        <button onClick={postAppointment}> Set Appointment </button>
                    </div>
            </div>
        </div>
       
     );
}

export default StaffAppointmentDetails;