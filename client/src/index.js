import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from 'shared/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider> 
       <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
