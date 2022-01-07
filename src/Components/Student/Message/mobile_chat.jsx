import React from "react";
import goBack from '../../../images/goback.svg'
import search from '../../../images/search.svg'
import '../../../Styles/Student/mobile_chat.css'
import { useNavigate } from "react-router-dom";
import Chat from "./chat";

const MobileStudentChat = () => {
    const doctorName = "[Doctor Name]" /*This one should be the name of the doctor clicked */

    let navigate = useNavigate()
    
    return ( 
        <div className = "message_container">
            <header className = "message_header">
                <div> 
                    <img src={goBack} alt="back" 
                        onClick={() => navigate("/messages")}/>
                   
                    <h3>{doctorName}</h3>
                </div>

                <div>
                    <img src={search} alt="search" />
                </div>
            </header>

            <main>
                <Chat />
            </main>
        </div>
        
     );
}
 
export default MobileStudentChat;