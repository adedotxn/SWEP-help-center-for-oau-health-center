import React from "react";
//import HomeHeader from "../headers/HeaderWSearch";
import '../../../Styles/Student/home.css'
//import HomeContent from "./homeContent";
import StudentSidebar from "../sidebar";
import HomeContent from "./home_content";
import HomeHeader from "./home_header";

const StudentHome = () => {
    return ( 
        <div className="student_home_container">
            <div className="desktop_sidebar">
                <StudentSidebar />
            </div>

            <div className="desktop_content">
                <header >
                    <HomeHeader/>
                </header>

                 <main>
                    <HomeContent />
                </main>
            </div>
            
        </div>
     );
}
 
export default StudentHome;