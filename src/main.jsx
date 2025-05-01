import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from '@asgardeo/auth-react';

const authConfig = {
  signInRedirectURL: 'http://localhost:5173',
  signOutRedirectURL: 'http://localhost:5173',
  clientID: 'baofsaPZhpZJKxpP0PlE6ULH0dUa',
  baseUrl: 'https://api.asgardeo.io/t/sagaraorg',
  scope: ['openid', 'profile']
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
