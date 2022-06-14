import React from 'react';
import { signInContainerStyles } from '../lib/style-constants';
import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';

const SignIn = ({ setShowModal }) => {
  return (
    <div className="card shadow mt-5" style={ signInContainerStyles }>
      <div className="card-body">
        <h4 className='card-title'>Sign in</h4>
        <SignInForm setShowModal={setShowModal}/>
      </div>
      <div className='card-footer'>
        <Link to='/signup'>
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default SignIn;