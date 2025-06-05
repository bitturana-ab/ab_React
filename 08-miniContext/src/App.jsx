import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider >
      <h1 className="bg-gray-50 dark:bg-gray-900 p-7 rounded-xl m-2">A context project</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
