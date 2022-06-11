import React from 'react';

const BaseButton = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="btn btn-primary m-2"
      {...props}
    >
        { children }
    </button>
  )
};

export default BaseButton;