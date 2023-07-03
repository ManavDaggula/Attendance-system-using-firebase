import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Form from './Components/Form/Form'
import Logo from "./Components/Logo/Logo"
import ShowCode from './Components/ShowCode/ShowCode'
import Menu from './Components/Menu/Menu'
import Homepage from './Components/Homepage/Homepage'
import Background from './Components/Background/Background'
import SuccessPage from './Components/SuccessPage/SuccessPage'
import AttendeeRegistration from './Components/AttendeeRegistration/AttendeeRegistration'
import Admin from './Components/Admin/Admin';
import Verify from './Components/Verify/Verify';
import View from './Components/View/View';
import Events from './Components/Events/Events';

function App() {
  const [userState, setUserState] = useState('attendee')
  return (
    <>
    <BrowserRouter>
      <Menu status={userState} changeStatus={(status)=>setUserState(status)}/>
      <Logo />
    <Routes>
      
      <Route path='/' element={(userState!='admin')?<Homepage />:<Admin />}/>
      <Route path='/register' element={<AttendeeRegistration/>} />
      {(userState=='admin') && <Route path="/events" element={<Events />} />}
      {(userState=='admin') && <Route path="/verify" element={<Verify />} />}
      {(userState=='admin') && <Route path="/view" element={<View />} />}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App