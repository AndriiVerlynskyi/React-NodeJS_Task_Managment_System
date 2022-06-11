import React from 'react';
import { NavBar } from 'widgets/navBar';
import { TaskList } from 'features/task-list';
import CenteredContainer from 'shared/ui/Containers/CenteredContainer';

const HomePage = () => {
  return (
    <>
      <NavBar/>
      <CenteredContainer>
        <TaskList/>
      </CenteredContainer>
    </>
  )
}

export default HomePage