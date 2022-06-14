import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from 'shared/auth';
import withBrowserRouter from './hofs/with-router';

const SignInPage = React.lazy(() => import('pages/Auth/sign-in'));
const SignUpPge = React.lazy(() => import('pages/Auth/sign-up'));
const HomePage = React.lazy(() => import('pages/Home'));
const ConfirmEmail = React.lazy(() => import('pages/Auth/sign-up-confirm'));

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
