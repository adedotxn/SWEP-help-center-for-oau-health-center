import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doctorData } from '../../../data/doctordata'
import StudentHeader from "../headers/header";
import StudentSidebar from "../sidebar";
import '../../../Styles/Student/message.css'
import Chat from "./chat";

const StudentMessages = () => {

    const [showMessage, setShowMessage] = useState(false)


    const doctorName = "[ Doctor's Name ]"

    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    return ( 
        <div className="student_message_container">
            <div className="student_sidebar">
                <StudentSidebar />
            </div>

            <div>
                <div>
                    <header>
                        <StudentHeader />
                    </header>
                </div>

                
                <section className="student_message_section">
                    <main className = "message-wrapper">
                        <div>
                            <h2>Messages</h2>
                        </div>
                        
                        {/* MOBILE */}
                        <Link className="link" to="/student/chat">
                            <div className="mobile_content_container">
                                <div>
                                    {doctorData.map((message)=> (
                                            <div className = "mobile_content_wrapper" key={message.id} onClick={() => setShowMessage(!showMessage) }>
                                                <div>
                                                    {message.name}
                                                </div>

                                                <div>
                                                    <p> I have a mild headache </p> {/* Should be message the doctor typed 🤔 */}

                                                    <span> 12: 30pm</span> {/* should be time message was sent from the doctor */}
                                                </div>
                                            </div>
                                    ))}
                                </div>

                            </div>
                        </Link>

                        {/* DESKTOP */}
                        <div>
                        {/* have to use react router to manipulate where this goes specific to the message clicked but for now, this is a dummy */}
                            {/*when i map here, i should be able to get the message matching the name of the student ID, no?🤔 */}
                            <div className="content_container">

                                <div className="message_search">
                                    <div>
                                        <input type="text" 
                                            onChange={handleSearch}
                                        />
                                    </div>
                                </div>

                                <div>
                                    {doctorData.map((message)=> (
                                            <div className = "content_wrapper" key={message.id} onClick={() => setShowMessage(!showMessage) }>
                                                <div>
                                                    {message.name}
                                                </div>

                                                <div>
                                                    <p> I have a mild headache </p> {/* Should be message the doctor typed 🤔 */}

                                                    <span> 12: 30pm</span> {/* should be time message was sent from the doctor */}
                                                </div>
                                            </div>
                                    ))}
                                </div>

                            </div>
                        </div>   

                        <div className="chatbox_container">
                        {showMessage ? 
                            <div>
                                <div className="chatbox_header">
                                    <div>
                                        <span>{doctorName}</span>

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
                </section>
                
            </div>
        </div>
     );
}
 
export default StudentMessages;