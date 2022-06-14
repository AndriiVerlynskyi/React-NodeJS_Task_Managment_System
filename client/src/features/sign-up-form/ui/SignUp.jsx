import React from 'react';
import { signUpContainerStyles } from '../lib/style-constants';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="card shadow mt-5" style={ signUpContainerStyles }>
      <div className="card-body">
        <h4 className='card-title'>Sign up</h4>
        <SignUpForm/>
      </div>
      <div className='card-footer'>
        <Link to='signin'>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default SignUp;