import React from 'react';
import { priorityOptions } from '../../lib/constants';
import SimpleSelect from 'shared/ui/Form/SimpleSelect';

const PriorityField = ({ onChange, defaultOption, value, ...props }) => {
  return (
    <SimpleSelect
      options={priorityOptions}
      onChange={onChange}
      defaultOption={defaultOption}
      value={value}
      label={'priority'}
      {...props}
    />
  )
}

export default PriorityField;