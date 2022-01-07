import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/Student/loginpage.css'

const StudentLogin = () => {

    const [studentID, setStudentId] = useState("")

    const handleStudentID = (e) => {
        setStudentId(e.target.value)
        console.log(studentID)
    }
    
    const [healthCenterNo, setHealthCenterNo] = useState("")

    const handleNumber = (e) => {
        setHealthCenterNo(e.target.value)
        console.log(healthCenterNo)
    }


    const [studentMail, setStudentMail] = useState("");

    const handleEmail = (e) =>{
        setStudentMail(e.target.value)
        console.log(studentMail)
    }
    return ( 
        <div className = "student_login_container">

            <div className = "empty-left">

            </div>

            <div className = "login_wrapper">
                <header>
                    <h2>Log in</h2>
                    <p>Please enter the following information</p>
                </header>

                <form className = "student_login_form">
                    <label htmlFor="">Matric No</label>
                    <input type="text" placeholder = "Matric Number" onChange={handleStudentID} required/>

                    <label htmlFor="">Surname</label>
                    <input type="text" placeholder = "Surname"/>

                    <label htmlFor="">Health Center Number</label>
                    <input type="text" placeholder = "Health Center Number" onChange= {handleNumber}/>

                    <label htmlFor="">Student Email</label>
                    <input type="text" placeholder = "Student Email"  onChange={handleEmail}/>
                </form>
            
                <footer className="student_login_footer">
                    <Link className = "link" to = "/home">
                        <button>
                            LOG IN
                        </button>
                    </Link>

                    <Link className = "link" to="/logIn">
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