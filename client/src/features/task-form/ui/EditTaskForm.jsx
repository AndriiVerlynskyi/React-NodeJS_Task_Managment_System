import React from 'react';
import { Formik, Form } from 'formik';
import { useEditTaskMutation } from '../model/use-edit-mutation';
import {
  useSingleTaskQuery
} from 'features/task-list/model/use-single-task-query';
import { useRefetchTasksQuery } from 'features/task-list/model/use-tasks-query';
import { definePriority } from 'features/task-list/model/define-priority';

import PriorityField from './components/PriorityField';
import SingleDatePicker from 'shared/ui/Form/SingleDateField';
import SimpleTextField from 'shared/ui/Form/SimpleTextField';
import TextAreaField from 'shared/ui/Form/TextArea';
import BaseButton from 'shared/ui/BaseButton';
import CenteredContainer from 'shared/ui/Containers/CenteredContainer';

const EditTaskForm = ({ setShowModal, taskId }) => {
  const refetchTasksQuery = useRefetchTasksQuery();
  const {
    isLoading,
    data,
    refetch: refetchSingleTask
  } = useSingleTaskQuery(taskId);
  const { mutateAsync } = useEditTaskMutation();

  const handleSubmit = async (values) => {
    try {
      await mutateAsync(values)
      setShowModal(false)
      await refetchSingleTask()
      await refetchTasksQuery()
    } catch (err) {
      alert('Failed to edit task')
    }
  }
  return (
    <>
    { !isLoading ? (
      <Formik
        initialValues={{...data, priority: definePriority(data.priority)}}
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
                <BaseButton type='submit'>Edit</BaseButton>          
              </div>
            </CenteredContainer>
          </Form>
        )}
      </Formik>
      ) : (<div>Loading...</div>)
    }
  </>
  )
}

export default EditTaskForm;