import React from "react";
import '../../../Styles/Student/positive_feedback.css'
//import spikyCircle from '../../images/spiky.svg'
import checkmark from "../../../images/checkmark.svg"
import { Link, useNavigate } from "react-router-dom";

const PositiveFeedback = () => {
    let navigate = useNavigate();
    
    //const studentMail = "[studentmail]@student.oauife.edu.ng"
    return ( 
        <div className="feedback_container">
            
            <div className="feedback_wrapper">
                <div className="feedback_card">

                    <div className="spiky">
                        <img src={checkmark} alt="" />
                    </div>

                    <div className="feedback_text">
                        <p>
                        Welldone completing the examination. A prescription of drugs has been sent to your email 
                        If symptoms persist after completing the dosage of the prescribed drugs please meet your doctor.
                        </p>
                    </div>

                    <div className="feedback_btn">
                        <Link  to ="/prescription" className="link"> 
                            <button className="view_pres"> View Prescription</button>
                        </Link>

                        <button className="return" onClick={() => {
                                    navigate("/home")
                                }}>
                             Return to Homepage 
                        </button>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default PositiveFeedback;