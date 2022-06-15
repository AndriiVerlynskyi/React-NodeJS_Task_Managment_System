import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { SIGN_UP_INITIAL_VALUES } from '../lib/constants';
import { useNavigate } from 'react-router-dom';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import BaseButton from 'shared/ui/BaseButton';
import SignUpSchema from '../model/validator';
import { useAuth } from 'shared/auth';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const SignUpForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      await register(values)
      setShowAlert(true)
      setTimeout(() => {
        handleCloseAlert()
      }, 2000)
    } catch (err) {
      alert('Failed to sign up new user')
    }
  }
  
  const handleCloseAlert = (alertTimer) => {
    setShowAlert(false);
    navigate('/signin')
  }

  return (
    <>
      <Alert
        show={showAlert}
        className='shadow'
        variant='primary'
        style={{position: 'fixed', top: 15, textAlign: 'center'}}
      >
        <p>Confirmation letter was sent to your mail.</p>
        <Button onClick={handleCloseAlert} variant='outlined-primary'>
          OK
        </Button>
      </Alert>
      <Formik
        initialValues={SIGN_UP_INITIAL_VALUES}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        { props => (
          <Form>
            <SimpleTextField
              type='text'
              name='username'
              label='username'
              onChange={props.handleChange}
              value={props.values.username}
            />
            <SimpleTextField
              type='email'
              name='email'
              label='email'
              onChange={props.handleChange}
              value={props.values.email}
            />
            <SimpleTextField
              type='password'
              name='password'
              label='password'
              onChange={props.handleChange}
              value={props.values.password}
            />
            <div className='mt-2'>
              <BaseButton type='submit'>Sign up!</BaseButton>          
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignUpForm