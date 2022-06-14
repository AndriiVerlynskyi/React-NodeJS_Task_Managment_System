import React from 'react';

const BaseButton = ({ children, ...props }) => {
  return (
    <button
      type={`button `}
      className={`btn btn-${!!props.variant ? props.variant : 'primary'} m-2`}
      {...props}
    >
        { children }
    </button>
  )
};

export default BaseButton;