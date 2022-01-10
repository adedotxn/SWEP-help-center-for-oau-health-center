import React from "react";
import '../../../Styles/Staff/cancel.css'

const CancelAppointment = ({cancelDialog,setCancelDialog}) => {
    return ( 
        <div>
            <div className={`cancel_container ${cancelDialog ? 'show' : 'hide'}`}>
                <div className="cancel_wrapper">
                    <div>
                        <span>Are you sure you want to cancel your appointment</span>

                        <div className="cancel_ctas">
                            <button> Yes </button>
                            <button onClick={() => setCancelDialog(!cancelDialog)}> No </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default CancelAppointment;