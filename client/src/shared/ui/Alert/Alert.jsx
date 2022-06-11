import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Alert = ({
  show,
  message,
  variant
}) => {
  const [showAlert, setShowAlert] = useState(show)
  
  useEffect( () => {
    setTimeout(() => {
      setShowAlert(false)
    }, 2500)
  }, [])
  return (
    <Alert show={showAlert} variant={variant}>
      {message}
    </Alert>
  )
}

export default Alert;