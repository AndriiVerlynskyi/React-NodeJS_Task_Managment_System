import React, { useState } from 'react';
import { SignIn } from 'features/sign-in-form';
import ConfirmEmail from 'features/sign-in-form/ui/ConfirmEmail';

const SignInPage = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent:'center' }}>
      <SignIn setShowModal={setShowVerifyModal}/>
      <ConfirmEmail
        showModal={showVerifyModal}
        setShowModal={setShowVerifyModal}
      />
    </div>
  )
};

export default SignInPage;