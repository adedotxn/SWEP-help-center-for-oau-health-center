import React,{ useState } from "react";
import '../../../Styles/Staff/messages.css'
import search from '../../../images/search.svg'
import StaffHeader from "../header";
import StaffSidebar from "../sidebar";
import Texts from "./texts";
import Chat from "./chat";

const StaffMessages = () => {

    const [displayMessage, setDisplayMessage ]  = useState(false)

    const studentID = "[Student ID]"

    return ( 
        <div className="messages_container">
            <div className="desktop_sidebar">
                <StaffSidebar />
            </div>

            <div>
                <header>
                    <StaffHeader />
                </header>

                {/* MOBILE */}
                <main className="mobile_message_content">
                    <div>
                        <img src={search} alt="" />
                        <h3>Messages</h3>
                    </div>

                    <div>
                        <Texts/>
                    </div>
                </main>

                {/* DESKTOP */}
                <main className="desktop_message_content">
                    <div>
                        <div className="message_search">
                            <div>
                                <input type="text" />
                            </div>
                        </div>

                        <div>
                            <Texts displayMessage={displayMessage} setDisplayMessage={setDisplayMessage}  />
                        </div>
                    </div>

                    <div className="text_area">
                        {displayMessage ? 
                            <div>
                                <div className="chatbox_header">
                                    <div>
                                        <span>{studentID}</span>

                                        <div className="chat_search">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="chatbox_wrapper">
                                    <Chat />
                                </div>  
                            </div>
                        : 
                            <div className="empty_chat">
                                <span> Click on a chat to start messaging</span>
                            </div> 

                          }
                        </div> 


                </main>
            </div>
           
        </div>
     );
}
 
export default StaffMessages;