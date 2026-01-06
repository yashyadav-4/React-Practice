import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>Lemon </h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
