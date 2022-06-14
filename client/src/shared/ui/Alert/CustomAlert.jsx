import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({
  show,
  message,
  variant
}) => {
  const [showAlert, setShowAlert] = useState(show)
  console.log(showAlert)
  useEffect( () => {
    const alertTimeout = setTimeout(() => {
      setShowAlert(false)
    }, 2500)
    
    return () => {
      clearTimeout(alertTimeout)
    }
  }, [])
  return (
    <Alert show={showAlert} variant={variant}>
      {message}
    </Alert>
  )
}

export default CustomAlert;