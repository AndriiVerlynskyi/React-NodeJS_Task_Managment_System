import React from 'react';
import { Formik, Form } from 'formik';
import { SIGN_UP_INITIAL_VALUES } from '../lib/constants';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import BaseButton from 'shared/ui/BaseButton';
import SignUpSchema from '../model/validator';

const SignUpForm = () => {
  const handleSubmit = async (values) => {
    try {
      console.log(values)
    } catch (err) {

    }
  }

  return (
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
            type='text'
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
  )
}

export default SignUpForm