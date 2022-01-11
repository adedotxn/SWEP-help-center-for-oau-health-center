import React from "react";
import '../../../Styles/Student/positive_feedback.css'
import checkmark from '../../../images/checkmark.svg'
import { useNavigate } from "react-router-dom";

const PositiveFeedback = ({message, description, name, handlePrescription}) => {
    let navigate = useNavigate();
    
    return ( 
        <div className="feedback_container">
            
            <div className="feedback_wrapper">
                <div className="feedback_card">

                    <div className="spiky">
                        <img src={checkmark} alt="" />
                    </div>

                    <div className="feedback_text">
                        {message ? 
                            <p className="negative"> 
                                {message} 
                            </p> : 
                        <div className="positive">
                            <p>{name}</p>
                            <p>{description}</p> 
                        </div>}
                        
                    </div>

                    <div className="feedback_btn">
                        
                        {message ? <button className="view_pres"> Request a session </button> :
                        <button className="view_pres" onClick = {handlePrescription}> View Prescription</button>}

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