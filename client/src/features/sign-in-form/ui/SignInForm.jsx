import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import BaseButton from 'shared/ui/BaseButton';
import { SIGN_IN_INITIAL_VALUES } from '../lib/constants';
import { useAuth } from 'shared/auth';

const SignInForm = ({ setShowModal }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await login(values)
      navigate('/', { replace: true })
    } catch (err) {
      if (err.response.data.notConfirmed) {
        setShowModal(true);
      } else {
        alert('Login failed, try again later')
      }
    }
  }

  return (
    <Formik
      initialValues={SIGN_IN_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      { props => (
        <Form>
          <SimpleTextField
            type='text'
            name='login'
            label='login'
            onChange={props.handleChange}
            value={props.values.login}
          />
          <SimpleTextField
            type='password'
            name='password'
            label='password'
            onChange={props.handleChange}
            value={props.values.password}
          />
          <div className='mt-2'>
            <BaseButton type='submit'>Sign in!</BaseButton>          
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignInForm;