import React from 'react';

const LeftLabel = ({ children }) => {
  return (
    <label
      className='form-label'
      style={{ textAlign: 'left' }}
    >{children}</label>
  )
}

export default LeftLabel;