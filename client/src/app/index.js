import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from 'shared/auth';
import withBrowserRouter from './hofs/with-router';

import SignInPage from 'pages/Auth/sign-in';
import SignUpPge from 'pages/Auth/sign-up';
import HomePage from 'pages/Home';
import ConfirmEmail from 'pages/Auth/sign-up-confirm';

function App() {
  const { user } = useAuth();
  return user ? (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/signup/:email/:token' element={<Navigate to='/signin'/>}/>
          <Route path='/signin' element={ <SignInPage/> }/>
          <Route path='/signup' element={ <SignUpPge/> }/>
          <Route path="*" element={<Navigate to='/signin'/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/signup/:email/:token' element={<ConfirmEmail/>}/>
          <Route path='/signin' element={ <SignInPage/> }/>
          <Route path='/signup' element={ <SignUpPge/> }/>
          <Route path="*" element={<Navigate to='/signin'/>} />
        </Routes>
      </div>
    </div>
  )
}

export default withBrowserRouter(App);
