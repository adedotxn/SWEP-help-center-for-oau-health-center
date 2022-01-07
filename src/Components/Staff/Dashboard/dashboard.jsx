import React from "react";
import '../../../Styles/Staff/dashboard.css'
import StaffHeader from "../header";
import StaffSidebar from "../sidebar";
import Pending from "./pending";



const Dashboard = () => {

    return (
        <div className = "dashboard">

            <div className="desktop-sidebar">
                <StaffSidebar />
            </div>

            <div>
                <header>
                    <StaffHeader/>
                </header>

                <main>
                    <Pending />
                </main>
            </div>
        </div>
      );
}
 
export default Dashboard;