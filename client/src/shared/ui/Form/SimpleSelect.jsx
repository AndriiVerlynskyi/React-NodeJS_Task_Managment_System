import React from 'react';
import { inputFieldWidth } from 'shared/ui/Form/constants';
import LeftLabel from 'shared/ui/Form/LeftLabel';

const SimpleSelect = ({
  onChange,
  defaultOption,
  value,
  options,
  label,
  inputWidth = inputFieldWidth,
  ...props
}) => {
  return (
    <div 
      style={
        { display: 'inline-block', width: inputWidth, textAlign: 'left' }
      }
    >
      {!!label && <LeftLabel>{label}</LeftLabel>}
      <select
        className="form-select"
        style={{ textAlign: 'left' }}
        value={value}
        onChange={onChange}
        {...props}
      >
        { options.map( option => {
          return (
            <option value={option.value} key={option.name} name={option.name}>
              {option.name}
            </option>
          )
        })
        }
      </select>
    </div>
  )
}

export default SimpleSelect;