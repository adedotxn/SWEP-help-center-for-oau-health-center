import React, {useState} from "react";
import '../../../Styles/Staff/reschedule.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const Rescheduling = ({resheduleDialog, setResheduleDialog}) => {

    const date = new Date()

    const [value, onChange] = useState(date)

    return ( 
    <div>
        <div className={`reschedule_container ${resheduleDialog ? 'show' : 'hide'}`}>
                <div className="reschedule_wrapper">
                    <div>
                        <span>Pick a new date</span>

                        <div >
                            <Calendar className="reschedule-calender"
                                onChange={onChange}
                                value = {value}
                            />
                        </div>

                        <div className="reschedule_ctas">
                            <button onClick={() => setResheduleDialog(!resheduleDialog)}> Reschedule Appointment </button>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
    );
}
 
export default Rescheduling;