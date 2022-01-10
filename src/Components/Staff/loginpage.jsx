import React from "react";
import '../../Styles/Staff/loginpage.css'
import { Link} from "react-router-dom";

const StaffLogin = () => {
    return ( 
        <div className = "staff_login_container">

            <div className = "empty-left">

            </div>

            <div className = "page-wrapper">
                <header>
                    <h2>Log in</h2>
                    <p> Please enter the following details </p>
                </header>
                    

                <form action="" className="staff_login_form">
                    <label htmlFor="staffID"> Staff ID </label>
                    <input type="text"   placeholder = "Staff ID"/>
                        
                    <label htmlFor="surname"> Surname </label>
                    <input type="text"   placeholder = "Surname"/>
                </form>
                
                <div>
                    <Link to="/dashboard">
                        <button> LOG IN </button>
                    </Link> 

                    <Link className="link" to="studentlogin">
                        <span> or continue as student </span>
                    </Link>
                </div>
            </div>
        </div>

     );
}
 
export default StaffLogin;