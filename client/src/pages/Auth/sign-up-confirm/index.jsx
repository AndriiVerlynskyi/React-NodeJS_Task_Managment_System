import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { signUpConfirmEmail } from 'shared/api/auth';
import BaseButton from 'shared/ui/BaseButton';

const SignUpConfirm = () => {
  const { email, token } = useParams();
  const [showConfirmFailed, setshowConfirmFailed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const confirm = async () => {
      try {
        await signUpConfirmEmail({email, token});
        navigate('/signin')
      } catch (err) {
        setshowConfirmFailed(true)
      }
    }
    confirm();
  }, [])
  return showConfirmFailed ? null : (
    <Modal>
      <Modal.Header>
        <Modal.Title>
          Confirmation failed
        </Modal.Title>
        <Modal.Body>
          <BaseButton onClick={() => navigate('/signin')}>Back to login</BaseButton>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  )
}

export default SignUpConfirm;