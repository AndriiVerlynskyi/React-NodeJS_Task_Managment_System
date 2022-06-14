import React from 'react';
import { sortOptions } from 'features/task-list/lib/constants';
import SimpleSelect from 'shared/ui/Form/SimpleSelect';

const SortTasks = ({ onChange, value, inputWidth, ...props }) => {
  return (
    <SimpleSelect
      inputWidth={inputWidth}
      options={sortOptions}
      defaultOption={sortOptions[0]}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default SortTasks;