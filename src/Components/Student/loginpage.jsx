import React, {useState} from 'react'
import { Link } from "react-router-dom";
import '../../Styles/Student/loginpage.css'



function StudentLogin() {

    const login = async () => {

    }

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    return (
        <div className='student_login_container'>
            
            <div className = "empty-left">

            </div>

        
            <div className = "login_wrapper">
                <header>
                    <h2>Log in</h2>
                    <p>Please enter the following information</p>
                </header>

                <form className = "student_login_form">

                    <label htmlFor="">Student Email</label>
                        <input type="text" placeholder = "Student Email"
                            onChange={(e) => {
                                setLoginEmail(e.target.value)
                            }}
                        />
                    
                    <label htmlFor="">Health Center Number</label>
                        <input type="text" placeholder = "Health Center Number" 
                            onChange={(e) => {
                                setLoginPassword(e.target.value)
                            }}    
                        />

                    
                </form>
            
                <footer className="student_login_footer">
                        <Link className = "link" to = "/home">
                            <button>
                                LOG IN
                            </button>
                        </Link>

                        <h4> Don't have an account  <Link className="signlink" to="/signup"> Sign up</Link>  </h4>
                </footer>
                
            </div>
        </div>
    )
}

export default StudentLogin;
