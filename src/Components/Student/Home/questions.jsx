import React, { useState, useEffect } from "react";
import '../../../Styles/Student/questions.css'
import back from '../../../images/back.svg'
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http-config";
import PositiveFeedback from "./positive_feedback";
import Prescription from "./prescription";

const Questions = () => {

    let navigate = useNavigate()

    const [step, setStep] = useState(0);
    const [survey, setSurvey] = useState({})
    const [questions, setQuestions] = useState([])

    let { id } = useParams()

    const handleQuestions = async () => {
        try {
            const { data } = await http.get(`/student/survey/${id}`);
            console.log(data)
            setQuestions(data.questions)
            setSurvey(data)
        }
        catch (error) {
            console.log(error.response?.data || error.message)
        }
    }

    useEffect(() => {
        handleQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [checkValue, setCheckValue] = useState({})

    const handleChecked = (e, step) => {
        setCheckValue({ ...checkValue, [step]: e })
    }

    const [resultName, setResultName] = useState("");
    const [negativeResponse, setNegativeResponse] = useState("");
    const [resultDescription, setResultDescription] = useState("");
    const [prescription, setPrescription] = useState([])
    
    const postChecked = async () => {
        try {
            const {data} = await http.post(`/student/survey/match-response`, {
                surveyId: survey.id,
                surveyResponses: checkValue
            })
            console.log(data)
            setNegativeResponse(data.ailment.message)
            setResultDescription(data.ailment.description);
            console.log(resultDescription)
            setResultName( data.ailment.name)
            console.log(resultName)
            setPrescription(data.ailment.prescriptions)
            console.log(prescription)
        } catch(error) {
            console.log(error.response?.data || error.message)
        }
    }


    const [surveyFinished, setSurveyFinished] = useState(false);

    const handleFinish = () => {
        postChecked().then(() => {
            setSurveyFinished(true)
        })
    }

    const [viewPresciption, setViewPrescription] = useState(false);

    const handlePrescription = () => {
        setViewPrescription(true)
    }

    return (
        <div className="questions_container">
            <div className="questions_wrapper">
                <div className="back" onClick={() => {
                    navigate("/home")
                }}>
                    <img src={back} alt="" />
                </div>

                <main className="questions">
                    <h3>
                        Please take this quick examination so that the correct medication can be prescribed for you
                    </h3>


                    <div className="question-card-wrapper">
                        <div className="question-card">
                            <div>
                                <div >
                                    <p> {questions[step]?.question} </p>


                                </div>

                                <div>
                                    <label>
                                        <input key={questions[step]?.id} type="radio" name="answer" value={checkValue[step+1]} onChange={(e) => handleChecked("yes", step+1)} /> YES
                                    </label>

                                    <label>
                                        <input key={questions[step]?.id} type="radio" name="answer" value={checkValue[step+1]} onChange={(e) => handleChecked("no", step+1)} /> NO
                                    </label>
                                </div>
                            </div>
                        </div>

                        {step < questions.length-1 && (
                            <div>
                                <button onClick={() => setStep(step - 1)}> PREVIOUS </button>
                                <button onClick={() => setStep(step + 1)}> NEXT </button>
                            </div>
                        )}




                        {step === questions.length -1 && (
                            <div className="finish-btn">
                                <button onClick={() => setStep(step - 1)}> PREVIOUS </button>

                                 <button onClick={handleFinish}>Finish</button> 
                            </div>
                        )}

                    </div>
                    {
                        surveyFinished && (
                            <div className={ 'show' }>
                                { viewPresciption ? <Prescription handlePrescription = {handlePrescription} prescription = {prescription}/> :  <PositiveFeedback message={negativeResponse} description = {resultDescription} name = {resultName} handlePrescription = {handlePrescription}/>}
                        </div>
                        )
                    }
                    
                </main>
            </div>
        </div>
    );
}

export default Questions;