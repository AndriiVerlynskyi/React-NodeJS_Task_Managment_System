import React from 'react';
import { inputFieldWidth } from 'shared/ui/Form/constants';
import { priorityOptions } from '../../lib/constants';
import LeftLabel from 'shared/ui/Form/LeftLabel';

const PriorityField = ({ handleChange, defaultOption }) => {
  return (
    <div 
      style={
        { display: 'inline-block', width: inputFieldWidth, textAlign: 'left' }
      }
    >
      <LeftLabel>priority</LeftLabel>
      <select
        className="form-select"
        style={{ textAlign: 'left' }}
        onChange={handleChange}
        defaultValue={defaultOption}
      >
        { priorityOptions.map( option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          )
        })
        }
      </select>
    </div>
  )
}

export default PriorityField