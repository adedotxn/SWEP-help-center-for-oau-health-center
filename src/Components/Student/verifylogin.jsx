import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import http from '../../http-config'
import '../../Styles/Student/verifylogin.css'

function Verifylogin() {
    const Params = useParams()
    let navigate = useNavigate()
    const [ verifyError, setVerifyError ] = useState(null)
    function grabTokenFromURL () {
        const token = Params.token
        return token
    }

    async function verifyTokenValidity () {
        try {
            const { data } = await http.post('/student/login/verify/'+grabTokenFromURL())
            localStorage.setItem('authToken', data.data.authToken.authToken)
            navigate('/student/dashboard')
        } catch (error) {
            setVerifyError(error.response?.data.message || error.message)
        }
    }

    useEffect (() => {
        verifyTokenValidity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='background-loader'>
                <div className="loader">
                <div className={`loader__figure ${verifyError && 'pause'}`}></div>
                <p className={`loader__label ${verifyError && 'pause'}`}> { verifyError || 'Verifying log in attempt' } </p>
                </div>
            </div>
        </div>
    )
}

export default Verifylogin
