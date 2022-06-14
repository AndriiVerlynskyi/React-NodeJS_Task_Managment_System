import React from 'react';

const CenteredContainer = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}
    >
      { children }
    </div>
  )
}

export default CenteredContainer;