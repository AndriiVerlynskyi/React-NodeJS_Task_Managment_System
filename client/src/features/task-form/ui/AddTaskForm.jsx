import React from 'react';
import { Formik, Form } from 'formik';
import { ADD_TASK_INITIAL_VALUES } from '../lib/constants';
import { useAddTaskMutation } from '../model/use-add-task-mutation';
import { useRefetchTasksQuery } from 'features/task-list/model/use-tasks-query';

import PriorityField from './components/PriorityField';
import SingleDatePicker from 'shared/ui/Form/SingleDateField';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import TextAreaField from 'shared/ui/Form/TextArea';
import BaseButton from 'shared/ui/BaseButton';
import TaskFormSchema from '../model/validator';
import CenteredContainer from 'shared/ui/Containers/CenteredContainer';

const AddTaskForm = ({ setShowModal, query }) => {
  const refetchTasksQuery = useRefetchTasksQuery();
  const { mutateAsync } = useAddTaskMutation();

  const handleSubmit = async (values) => {
    try {
      await mutateAsync({...values, priority: +values.priority})
      setShowModal(false)
      await refetchTasksQuery()
    } catch (err) {
      alert('Failed to add task')
    }
  }
  return (
    <Formik
      initialValues={ADD_TASK_INITIAL_VALUES}
      validationSchema={TaskFormSchema}
      onSubmit={handleSubmit}
    >
      { ({ handleChange, values }) => (
        <Form>
          <CenteredContainer>
            <SimpleTextField
              type='text'
              name='title'
              label='title'
              onChange={handleChange}
              value={values.title}
            />
            <TextAreaField
              type='text'
              name='description'
              label='description'
              onChange={handleChange}
              value={values.description}
            />
            <PriorityField
              id='priority'
              name='priority'
              onChange={handleChange}
              value={values.priority}
            />
            <SingleDatePicker
              id='dueDate'
              name='dueDate'
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

export default AddTaskForm;