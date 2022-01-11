import React from "react";
import '../../../Styles/Student/prescription.css'
import Label from '../../../images/prescription.svg'
import { useNavigate } from "react-router-dom";

const Prescription = ({prescription}) => {
    let navigate = useNavigate()
    return (
        <div className="prescription_container">

            <div className="prescription_card">
                <div className="prescription_details">
                    <h2>Prescriptions </h2>

                    
                    {prescription.map((prescription) => (
                        <div className="presciption" key={prescription.id}>
                            <div>
                                <img src={Label} alt="" />
                            </div>

                            <div>
                                <span className="drug">{prescription.title}</span>
                                <span className="dosage"> {prescription.usage} </span>
                            </div>
                        </div>
                    ))}
                        
                </div>

                <div className="prescription_btns">
                        <button className="download">Download Prescriptions</button>
                        <button className="return_home" onClick={() => {
                                navigate("/home")
                            }}> 
                                Return to Homepage 
                        </button>
                </div>
            </div>

        </div>
      );
}
 
export default Prescription;