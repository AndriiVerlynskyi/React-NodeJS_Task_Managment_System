import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import SignInPage from 'pages/Auth/sign-in';
import SignUpPge from 'pages/Auth/sign-up';
import HomePage from 'pages/Home';

import withBrowserRouter from './hofs/with-router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default withBrowserRouter(App);
