import React from "react";

import '../../Styles/Student/sidebar.css'
import Close from'../../images/close.svg'
import logoutIcon from '../../images/power.svg'
import { Link, NavLink} from "react-router-dom";
import {ReactComponent as HomeIcon} from '../../images/dashboard-icon.svg'
import {ReactComponent as ApptIcon} from '../../images/appointments-icon.svg'
import {ReactComponent as MsgIcon} from '../../images/messages-icon.svg'

const StudentSidebar = ({open, setOpen}) => {
    let activeClassName = "active"
    let inactiveClassName ="inactive"

   /* const logout = async () => {

    }*/

    return ( 

        <div>
            <div className = "student-sidebar-container">
                <div className = "student-sidebar-wrapper">
                    <div>
                        <img src={Close} alt="close"
                        onClick = { () => setOpen(!open)}  />
                    </div>

                    <div className = "student-nav-details">
                        <NavLink 
                            to="/student/dashboard"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                            
                            <HomeIcon className="home-svg" stroke="white"/>
                            <span> Home</span>
                        </NavLink>

                        <NavLink 
                            to="/student/appointment"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                            
                            <ApptIcon className="appt-svg"  fill="white" />
                            <span> Appointments </span>  
                        </NavLink>

                        <NavLink 
                            to ="/student/messages"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                            <MsgIcon className="msg-svg" fill="white"/>
                            <span> Messages </span>
                        </NavLink>
                    </div>

                    <Link className="link" to="/">
                        <div className = "student-logout-btn">
                            <img src={logoutIcon} alt="logout"/>
                            <span>Log out</span>
                        </div>
                    </Link>
                </div>

                <div className = "overlay"  onClick = { () => setOpen(!open)}></div>
           </div>

           
        </div>

 
     );
}
 
export default StudentSidebar;