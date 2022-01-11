import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/Student/loginpage.css'
import http from "../../http-config";

const StudentLogin = () => {


    const handleLogin = async () => {
        try {
            const {data} = await http.post('/student/login', credentials);
            console.log(data)

        } catch (error) {
            console.log(error.response?.data || error.message)
        }
    }

    const handleMatric = (e) => {
        setCredentials({...credentials, matricNumber: e.target.value});
    }

    const handleHCNumber = (e) => {
        setCredentials({...credentials, HCNumber: e.target.value});
    }

    const [credentials, setCredentials] = useState({matricNumber: "", HCNumber: ""})


    /*const [studentID, setStudentId] = useState("")

    const handleStudentID = (e) => {
        setStudentId(e.target.value)
        console.log(studentID)
    }*/

    return ( 
        <div className = "student_login_container">

            <div className = "empty-left">

            </div>

            <div className = "login_wrapper">
                <header>
                    <h2>Log In</h2>
                    <p>Please enter the following information</p>
                </header>

                <form className = "student_login_form">
                    <label htmlFor="">Matric No</label>
                    <input type="text" placeholder = "Matric Number" 
                        value={credentials.matricNumber} 
                        onChange={handleMatric}    
                    />

                    <label htmlFor="">Surname</label>
                    <input type="text" placeholder = "Surname"/>

                    <label htmlFor="">Health Center Number</label>
                    <input type="text" placeholder = "Health Center Number" 
                        onChange={handleHCNumber}
                    />

                    <label htmlFor="">Student Email</label>
                    <input type="text" placeholder = "Student Email"/>
                </form>
            
                <footer className="student_login_footer">
                    
                            <button onClick = {handleLogin}>
                                Log In
                            </button>
                    <Link className = "link" to = "/home">
                        Logg in
                        </Link>

                    <Link className = "link" to="staff/login">
                        <span>
                            or continue as staff
                        </span>
                    </Link>
                </footer>
                
            </div>
        </div>
      
     );
}
 
export default StudentLogin;