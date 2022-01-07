import React, { useState }  from "react";
import '../../../Styles/Student/questions.css'
import back from '../../../images/back.svg'
import { questions } from "../../../data/questions";
import { Link, useNavigate } from "react-router-dom";


const Questions = () => {

    let navigate = useNavigate()

    const [step, setStep] = useState(1);

    return ( 
        <div className="questions_container">
            <div className= "questions_wrapper">
                <div className = "back" onClick={() => {
                        navigate("/home")
                    }}>
                    <img src={back} alt="" />
                </div>
                
                <main className = "questions">
                    <h3>
                        Please take this quick examination so that the correct medication can be prescribed for you
                    </h3>


                    <div className="question-card-wrapper">
                        <div className="question-card">

                                {/* The question that will be here has to be related to the issue clicked on in the previous page */}
                                {questions.slice(step - 1, step).map((step) => (
                                    <div key={step.id}>
                                        <p> {step.question} </p>
                                    </div>
                                ))}


                            {/* the radio buttons need some logic thats stored somewhere */}
                            <div>
                                <label>
                                    <input type="radio" name="answer" value="YES" /> YES
                                </label>

                                <label>
                                    <input type="radio" name="answer" value="NO" /> NO
                                </label>
                            </div>
                        </div>

                            {/* onClick, it moves to the next question in the array..need actual data to work */}
                        
                            {step < questions.length && (
                                <div>
                                    <button onClick={() => setStep(step - 1)}> PREVIOUS </button>
                                    <button onClick={() => setStep(step + 1)}> NEXT </button>
                                </div> 
                            )}
                        
                    

                        
                            {step === questions.length && (
                                <div className="finish-btn">
                                    <button onClick={() => setStep(step - 1)}> PREVIOUS </button>
                                    <Link className="link" to="/positive-feedback">
                                        <button>Finish</button>
                                    </Link>
                                </div>
                            )}
                        
                    </div>
                </main>
                {/* Card's basically undone cause more logic, data and js is needed for it to work properly */}
            </div>
        </div>
     );
}
 
export default Questions;