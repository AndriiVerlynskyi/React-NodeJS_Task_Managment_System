import React from 'react';
import { Formik, Form } from 'formik';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import BaseButton from 'shared/ui/BaseButton';
import { SIGN_IN_INITIAL_VALUES } from '../lib/constants';

const SignInForm = ({ setShowModal }) => {
  const handleSubmit = async (values) => {
    try {
      setShowModal(true)
    } catch (err) {

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
            type='text'
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