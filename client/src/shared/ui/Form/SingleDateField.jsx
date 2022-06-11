import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormikContext, useField } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';

const SingleDatePicker = ({ startDate, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div style={{ margin: '1.5rem' }}>
      <p style={{ textAlign: 'left'}}>due date</p>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        minDate={new Date()}
        dateFormat='dd/MM/yyyy'
        onChange={date => setFieldValue(field.name, date)}
        wrapperClassName='datePicker'
      />
    </div>
  );
};

export default SingleDatePicker;
