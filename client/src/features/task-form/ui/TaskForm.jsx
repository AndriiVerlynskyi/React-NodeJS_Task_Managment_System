import React from 'react';
import { Formik, Form } from 'formik';
import { ADD_TASK_INITIAL_VALUES } from '../lib/constants';

import PriorityField from './components/PriorityField';
import SingleDatePicker from 'shared/ui/Form/SingleDateField';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import TextAreaField from 'shared/ui/Form/TextArea';
import BaseButton from 'shared/ui/BaseButton';
import TaskFormSchema from '../model/validator';
import CenteredContainer from 'shared/ui/Containers/CenteredContainer';

const TaskForm = () => {
  const handleSubmit = async (values) => {
    try {
      console.log(values)
    } catch (err) {

    }
  }
  return (
    <Formik
      initialValues={ADD_TASK_INITIAL_VALUES}
      validationSchema={TaskFormSchema}
      onSubmit={handleSubmit}
    >
      { props => (
        <Form>
          <CenteredContainer>
            <SimpleTextField
              type='text'
              name='title'
              label='title'
              onChange={props.handleChange}
              value={props.values.title}
            />
            <TextAreaField
              type='text'
              name='description'
              label='description'
              onChange={props.handleChange}
              value={props.values.description}
            />
            <PriorityField
              id='priority'
              onChange={props.handleChange}
              defaultOption={ADD_TASK_INITIAL_VALUES.priority}
            />
            <SingleDatePicker
              id='dueDate'
              name='dueDate'
              startDate={ADD_TASK_INITIAL_VALUES.dueDate}
            />
            <div className='mt-3'>
              <BaseButton type='submit'>Add task</BaseButton>          
            </div>
          </CenteredContainer>
        </Form>
      )}
    </Formik>
  )
}

export default TaskForm;