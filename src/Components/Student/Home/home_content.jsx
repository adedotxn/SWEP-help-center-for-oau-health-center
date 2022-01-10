import React from 'react'
import {commonIssues} from '../../../data/commonissues.js'
import '../../../Styles/Student/home_content.css'
import forward from '../../../images/forward-2.svg'
import { Link } from "react-router-dom";
import bullet from '../../../images/ellipse.svg'

function HomeContent() {



    const issues = commonIssues.map((issue) => (
        <Link className="link" to = "/questions" key={issue.id}>
            <div className="issues_wrapper" >
                <div className="bullet">
                    <img src={bullet} alt="" />
                </div>
                
                <div>
                    <p> {issue.issue} </p>
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
