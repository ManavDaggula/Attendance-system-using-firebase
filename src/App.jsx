import React, { useState } from 'react'
import './App.css'
import AttendeeForm from './Components/AttendeeForm/AttendeeForm'
import Logo from "./Components/Logo/Logo"
import ShowCode from './Components/ShowCode/ShowCode'
import Menu from './Components/Menu/Menu'
import Homepage from './Components/Homepage/Homepage'
import Background from './Components/Background/Background'
import SuccessPage from './Components/SuccessPage/SuccessPage'

function App() {
  const [userState, setUserState] = useState('attendee')
  return (
    <>
      <Logo />
      <SuccessPage />
      <Background />
    </>
  )
}

export default App