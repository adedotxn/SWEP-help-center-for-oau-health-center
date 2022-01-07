import React from "react";
import '../../Styles/Staff/sidebar.css'
import Close from'../../images/close.svg'
import dashIcon from'../../images/dashboard-icon.svg'
import appointmentIcon from '../../images/appointments-icon.svg'
import messagesIcon from'../../images/messages-icon.svg'
import logout from '../../images/power.svg'
import { Link, NavLink} from "react-router-dom";

const StaffSidebar = ({open, setOpen}) => {
    let activeClassName = "active"
    let inactiveClassName ="inactive"
    return ( 

        <div>
            <div className = "staff-sidebar-container">
                <div className = "staff-sidebar-wrapper">
                    <div>
                        <img src={Close} alt="close"
                        onClick = { () => setOpen(!open)}  />
                    </div>

                    <div className = "staff-nav-details">
                        <NavLink  
                            to="/dashboard"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>

                            <img src={dashIcon} alt="dashboard" />
                            <span> Dashboard</span>
                        </NavLink>

                        <NavLink  
                            to="/staff_appointment"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>

                            <img src={appointmentIcon} alt="appointments" />
                            <span> Appointments </span>
                        </NavLink>

                        <NavLink  
                            to ="/staff_messages"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                                
                            <img src={messagesIcon} alt="messages" />
                            <span> Messages </span>
                        </NavLink>
                      
                    </div>

                    <Link className  = "link" to = "/">
                        <div className = "staff-logout-btn">
                            <img src={logout} alt="logout"/>
                            <span>Log out</span>
                        </div>
                    </Link>
                </div>

                <div onClick = {() => setOpen(!open)} className = "overlay"></div>
           </div>

           
        </div>

 
     );
}
 
export default StaffSidebar;