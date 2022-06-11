import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import SignInPage from 'pages/Auth/sign-in';
import SignUpPge from 'pages/Auth/sign-up';
import HomePage from 'pages/Home';

import withBrowserRouter from './hofs/with-router';

function App() {
  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/signin' element={ <SignInPage/> }/>
          <Route path='/signup' element={ <SignUpPge/> }/>
          <Route path="*" element={<Navigate to='/signup'/>} />
        </Routes>
      </div>
    </div>
  );
}

export default withBrowserRouter(App);
