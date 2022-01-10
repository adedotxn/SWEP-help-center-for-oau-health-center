import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/Student/signuppage.css'

const StudentSignup = () => {

   /* const register = async () => {
        try { 
            const user =  await createUserWithEmailAndPassword(
                    auth, registerEmail, registerPassword
                )
                console.log(user)
            } catch(error) {
                console.log(error.message)
        }
    }
*/
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")


    /*const [studentID, setStudentId] = useState("")

    const handleStudentID = (e) => {
        setStudentId(e.target.value)
        console.log(studentID)
    }*/

    return ( 
        <div className = "student_signup_container">

            <div className = "empty-left">

            </div>

            <div className = "signup_wrapper">
                <header>
                    <h2>Sign Up</h2>
                    <p>Please enter the following information</p>
                </header>

                <form className = "student_signup_form">
                    <label htmlFor="">Matric No</label>
                    <input type="text" placeholder = "Matric Number"  required/>

                    <label htmlFor="">Surname</label>
                    <input type="text" placeholder = "Surname"/>

                    <label htmlFor="">Health Center Number</label>
                    <input type="text" placeholder = "Health Center Number" 
                        onChange={(e) => {
                            setRegisterPassword(e.target.value)
                        }}
                    />

                    <label htmlFor="">Student Email</label>
                    <input type="text" placeholder = "Student Email" 
                        onChange={(e) => {
                            setRegisterEmail(e.target.value)
                        }}
                    />
                </form>
            
                <footer className="student_signup_footer">
                        {<Link className = "link" to = "/home">
                            <button>
                                CREATE ACCOUNT
                            </button>
                    </Link>}

                    <button 
                    //onClick={register}
                    > CREATE ACCOUNT </button>



                    <Link className = "link" to="/logIn">
                        <span>
                            or continue as staff
                        </span>
                    </Link>

                    <h4> Already have an account? <Link className="signlink" to="/login"> Log In</Link>  </h4>
                </footer>
                
            </div>
        </div>
      
     );
}
 
export default StudentSignup;