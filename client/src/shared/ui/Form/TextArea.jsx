import React from 'react';
import { inputFieldWidth } from 'shared/ui/Form/constants';
import { useField } from 'formik';
import LeftLabel from './LeftLabel';

const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
      <LeftLabel>
        {label}
        <textarea
          className={meta.touched && !!meta.error ? 'form-control is-invalid' : 'form-control' }
          id={props.name}
          style={{ width: inputFieldWidth }}
          {...field}
          {...props}
        />
        
          { meta.touched && !!meta.error ? (
              <div style={{ color: '#dc3545'}}>
                {meta.error}
              </div>
            ) : null } 
        </LeftLabel>
  )
}

export default TextAreaField;