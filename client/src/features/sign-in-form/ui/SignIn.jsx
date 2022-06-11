import React from 'react';
import { signInContainerStyles } from '../lib/style-constants';
import SignInForm from './SignInForm';

const SignIn = ({ setShowModal }) => {
  return (
    <div className="card shadow mt-5" style={ signInContainerStyles }>
      <div className="card-body">
        <h4 className='card-title'>Sign in</h4>
        <SignInForm setShowModal={setShowModal}/>
      </div>
    </div>
  )
}

export default SignIn;