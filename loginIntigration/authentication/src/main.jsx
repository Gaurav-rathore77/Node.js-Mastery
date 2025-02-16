import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider  domain="dev-td76b7dlqzx14g4r.us.auth0.com"
    clientId="2j4BD1GNdiucrHvXOMN1HUboACNnlj9f"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />

    </Auth0Provider>
  </StrictMode>,
)
