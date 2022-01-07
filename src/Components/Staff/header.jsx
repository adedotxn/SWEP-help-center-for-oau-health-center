import React, {useState} from "react"
import '../../Styles/Staff/header.css'
import hamburger from '../../images/hamburger-icon.svg'
import StaffSidebar from "./sidebar"


const StaffHeader = () => {

    const[open, setOpen] = useState(false) //opening and closing the sidebar

    //should be the name used to login and when the name matches the one in the database, it only display things relating to that name
    const doctorName = "Dr Adebayo" 
    const initials = "DA"

    return ( 
        <div className = "header">
            <div>
                <div className = "hamburger">
                    <img src={hamburger} alt=""
                        onClick = {() => setOpen(!open)} />
                </div>


                <div className = "dashboard-profile">
                    <span>{doctorName}</span>

                    <div>
                        <span> {initials} </span>
                        {/* This is supposed to be replaced by an image if the image is set but set as initials until image is set */}
                    </div>
                </div>
            </div>

            <div className = {open ? 'show' : 'close'}>
                    <StaffSidebar open = {open} setOpen = {setOpen} />
            </div>
        </div>
     );
}
 
export default StaffHeader;
