import React from "react";
import { Link } from "react-router-dom";
import "../Styles/start.css"

const Start = () => {
    return ( 
        <div className="start_container">
            <div className="empty-left">

            </div>

            <div className = "start_wrapper">
                <header>
                    <h1> Welcome </h1>
                    <p> Log in to continue using this website</p>
                </header>

                
                <Link className="link" to="student/login">  
                    <div className= "go-to">
                        <button className = "student-btn">
                            Continue as student
                        </button>
                    </div>
                </Link>

                <Link className  = "link" to="/staff"> 
                    <div className="go-to">
                        <button className = "staff-btn">
                            Continue as staff
                        </button>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Start;