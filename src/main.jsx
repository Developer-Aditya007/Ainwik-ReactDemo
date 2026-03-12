import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId='995269796857-jh4n7ib4aheh9age8vrfdl5ujldd7u83.apps.googleusercontent.com'>
    <StrictMode>
    <App />
  </StrictMode>
</GoogleOAuthProvider>,
)
