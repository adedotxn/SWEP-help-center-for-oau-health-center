import React from "react";
import '../../Styles/Staff/sidebar.css'
import Close from'../../images/close.svg'
import logout from '../../images/power.svg'
import { Link, NavLink} from "react-router-dom";
import {ReactComponent as HomeIcon} from '../../images/dashboard-icon.svg'
import {ReactComponent as ApptIcon} from '../../images/appointments-icon.svg'
import {ReactComponent as MsgIcon} from '../../images/messages-icon.svg'

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
                            <HomeIcon className="home-svg" stroke="white"/>
                            <span> Dashboard</span>
                        </NavLink>

                        <NavLink  
                            to="/staff/appointment"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>

                            <ApptIcon className="appt-svg"  fill="white" />
                            <span> Appointments </span>
                        </NavLink>

                        <NavLink  
                            to ="/staff_messages"
                            className={({ isActive }) => 
                                isActive ? activeClassName : inactiveClassName
                            }>
                                
                            <MsgIcon className="msg-svg" fill="white"/>
                            <span> Messages </span>
                        </NavLink>
                      
                    </div>

                    <Link className="link" to = "/">
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