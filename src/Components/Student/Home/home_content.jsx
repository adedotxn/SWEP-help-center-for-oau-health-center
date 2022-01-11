import React, {useState, useEffect} from 'react'
import '../../../Styles/Student/home_content.css'
import forward from '../../../images/forward-2.svg'
import { Link} from "react-router-dom";
import bullet from '../../../images/ellipse.svg'
import http from '../../../http-config.js';


function HomeContent() {

    const [survey, setSurvey] = useState([])
    const [loading, setLoading] = useState(true)

    const handleSurvey = async () => {
        try {
            const {data} = await http.get('/student/survey/common');
            console.log(data)
            setSurvey(data)
            setLoading(false)
            } 
            catch (error) {
                console.log(error.response?.data || error.message)
            }
    }

    useEffect(() => {    
        
        handleSurvey()
    }, [])



    const issues = survey.map(({topic, id}) => (
        <Link className="link" to = {`/student/survey/${id}`} key={id}>
            <div className="issues_wrapper" >
                <div className="bullet">
                    <img src={bullet} alt="" />
                </div>
                
                <div>
                    {loading ? <p>Loading...</p> : 
                    <p> {topic} </p>}
                </div>

                <div className="forward">
                    <img src={forward} alt="click" />
                </div> 
            </div>
        </Link>
    ));
    return (

            <div className = "student_home_wrapper">

                <header>
                    <h2>Common Issues</h2>
                </header>

                <section className="issues-section">
                    {issues}   
                </section>   

            </div>
            
    )
}

export default HomeContent
