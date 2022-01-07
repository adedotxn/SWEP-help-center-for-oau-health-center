import React from "react";
import { Link } from "react-router-dom";
import { studentData } from '../../../data/studentdata'
import '../../../Styles/Staff/texts.css'

const Texts = ({displayMessage, setDisplayMessage }) => {
    return ( 
        <div>
            {studentData.map((patient) => (
                <Link className="link" to="/staff_chat" key={patient.id}>
                    <div className="mobile_texts" >
                        <div>
                            <span> {patient.studentID} </span>

                            <p>I have a mild headache</p> {/*should be the text that was sent by the patient, shouold be gotten from the database too, i think?  */}
                        </div>

                        <div>
                            <span> 10: 30</span> {/* this should be the time tha text got in and should most likely be gotten from th database  */}
                        </div>
                    </div>
                </Link>
            ))}

            {studentData.map((patient) => (
                    <div className="desktop_texts" key={patient.id} onClick={() => setDisplayMessage(!displayMessage)}>
                        <div>
                            <span> {patient.studentID} </span>

                            <p>I have a mild headache</p> {/*should be the text that was sent by the patient, shouold be gotten from the database too, i think?  */}
                        </div>

                        <div>
                            <span> 10: 30</span> {/* this should be the time tha text got in and should most likely be gotten from th database  */}
                        </div>
                    </div>
            ))}
        </div>

     );
}
 
export default Texts;