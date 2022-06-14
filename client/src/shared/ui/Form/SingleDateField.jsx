import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormikContext, useField } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

const SingleDatePicker = ({ startDate, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  let selected = new Date(field.value).toLocaleDateString();
  return (
    <div style={{ margin: '1.5rem' }}>
      <p style={{ textAlign: 'left'}}>due date</p>
      <DatePicker
        {...field}
        {...props}
        // selected={new Date(field.value)}
        value={selected}
        selected={new Date(field.value)}
        minDate={new Date()}
        dateFormat='dd/mm/yyyy'
        onChange={date => {
          const dateString = new Date(date).toISOString();
          setFieldValue(field.name, dateString)
        }}
        wrapperClassName='datePicker'
      />
    </div>
  );
};

export default SingleDatePicker;
