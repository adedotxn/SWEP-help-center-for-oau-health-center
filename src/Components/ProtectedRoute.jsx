import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute ({ children }) {
  const navigate = useNavigate()
  const [ isLoaded, setIsLoaded ] = useState(false)
  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      navigate('/student')
      return
    }
    setIsLoaded(true)
  })

  return (
    <>
      { isLoaded ? children : '' }
    </>
  )
}