import React, {useState} from "react";
import send from '../../../images/send.svg'
//import microphone from '../../../images/microphone.svg'
import camera from '../../../images/camera.svg'
import '../../../Styles/Staff/chat.css'


const Chat = () => {

    const  [message, setMessage] = useState("");
    const [sentMessage, setSentMessage] = useState("")

    const handleMessage = (e) => {
        setMessage(e.target.value)
        console.log(message)
    }

    const handleSending = () => {
        setSentMessage(message)
        setMessage("")
    }


    const status = "Write a message"


    return (
        <div className="chatComponent_container">

            <div>
                <h3>Today</h3>

                    <div className = "text_wrapper"> {/* The questions should be gotten from the database as it's stored, so it'll be updated here */}
                            <header>
                                <span> Q : Are you visiting the toilet frequently?</span>
                            </header>
                            <div>
                                <p>Are you visiting the toilet frequently?</p>
                            </div>
                    </div>

                    <div className = "text_wrapper"> {/* The questions should be gotten from the database as it's stored, so it'll be updated here */}
                            <header>
                                <span> Q : Have you been eating proteins lately?</span>
                            </header>
                            <div>
                                <p>{sentMessage}</p>
                            </div>
                    </div>
            </div>

            <footer className="chat_footer">
                <div>
                    <img src={camera} alt="camera" />

                    {/* Status should change when typing */}
                    <input type="text" placeholder={status} onChange={handleMessage} />
                    
                    <img src={send} alt=""  onClick={handleSending}/>
                </div>
            </footer>
            
        </div> 
    );
}
 
export default Chat;