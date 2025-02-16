import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <>
    {isAuthenticated ? ( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):<Login/>
}
    </>
  )
}

export default App
