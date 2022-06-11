import React from 'react';
import { signUpContainerStyles } from '../lib/style-constants';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <div className="card shadow mt-5" style={ signUpContainerStyles }>
      <div className="card-body">
        <h4 className='card-title'>Sign up</h4>
        <SignUpForm/>
      </div>
    </div>
  )
}

export default SignUp;