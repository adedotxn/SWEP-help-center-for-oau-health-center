import React from "react";

import '../../Styles/Student/sidebar.css'
import Close from'../../images/close.svg'
import dashIcon from'../../images/dashboard-icon.svg'
import appointmentIcon from '../../images/appointments-icon.svg'
import messagesIcon from'../../images/messages-icon.svg'
import logout from '../../images/power.svg'
import { Link, NavLink} from "react-router-dom";

const StudentSidebar = ({open, setOpen}) => {
     let activeClassName = "active"
     let inactiveClassName ="inactive"

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
                            to="/home"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>

                            <img src={dashIcon} alt="dashboard" />
                            <span> Home</span>
                        </NavLink>

                        <NavLink 
                            to="/appointment"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>

                            <img src={appointmentIcon} alt="appointments" />
                            <span> Appointments </span>  
                        </NavLink>

                        <NavLink 
                            to ="/messages"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                            <img src={messagesIcon} alt="messages" />
                            <span> Messages </span>
                        </NavLink>
                    </div>

                    <Link className  = "link" to = "/">
                        <div className = "student-logout-btn">
                            <img src={logout} alt="logout"/>
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