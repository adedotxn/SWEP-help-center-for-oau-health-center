import React, {useState} from "react";
import '../../Styles/Staff/loginpage.css'
import { Link, useParams} from "react-router-dom";
import http from "../../http-config";

const StaffLogin = () => {

    const [credentials, setCredentials] = useState({staffID: ""});

    const handleLogin = async () => {
        try {
            const {data} = await http.post('/staff/login', credentials);
            console.log(data)

        } catch (error) {
            console.log(error.response?.data || error.message)
        }
    }

    const handleStaffID = (e) => {
        setCredentials({...credentials, staffID: e.target.value});
    }

    const { token } = useParams()

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

                    <input 
                        type="text"   
                        placeholder = "Staff ID"
                        value = {credentials.staffID}
                        onChange={handleStaffID}
                    />
                        
                    <label htmlFor="surname"> Surname </label>
                    <input type="text"   placeholder = "Surname"/>
                </form>
                
                <div>
                    <Link to={`verify/${token}`}>
                        <button onClick={handleLogin}> LOG IN </button>
                    </Link> 
                    <Link className="link" to="/student">
                        <span> or continue as student </span>
                    </Link>
                </div>
            </div>
        </div>

     );
}
 
export default StaffLogin;