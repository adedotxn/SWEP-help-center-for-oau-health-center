import React, {useState} from "react";
import '../../../Styles/Student/headers/header.css'
import hamburger from '../../../images/hamburger-icon.svg'
import StudentSidebar from "../sidebar";
import '../../../Styles/Student/headers/student_header.css'

const StudentHeader = () => {
    const[open, setOpen] = useState(false) //opening and closing the sidebar

    //should be the name used to login and when the name matches the one in the database, it only display things relating to that name
    const studentName = "StudentID" 
    const initials = "SI"

    return ( 
        <div className = "student_header">
            <div className = "hamburger">
                <img src={hamburger} alt=""
                    onClick = {() => setOpen(!open)} 
                />
            </div>
            

            <div className = "student-dashboard-profile">
                <span>{studentName}</span>

                <div>
                    <span> {initials} </span>
                    {/* This is supposed to be replaced by an image if the image is set but set as initials until image is set */}
                </div>
            </div>

            <div className = {open ? 'show' : 'hide'}>
                    <StudentSidebar open = {open} setOpen = {setOpen} />
            </div>
        </div>
     );
}
 
export default StudentHeader;