import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
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
import SignIn from './Components/SignIn/SignIn';

function App() {
  const [userState, setUserState] = useState('attendee')
  // const navigate = useNavigate()
  return (
    <>
    <BrowserRouter>
      <Menu status={userState} changeStatus={(status)=>setUserState(status)}/>
      <Logo />
    <Routes>
      
      <Route path='/' element={(userState!='admin')?<Homepage />:<Admin />}/>
      <Route path='/register' element={<AttendeeRegistration/>} />
      <Route path='/signin' element={<SignIn changeStatus={(status)=>setUserState(status)}/>} />
      {(userState=='admin') ? <Route path="/events" element={<Events />} /> : <Route path='/events' element={<RedirectTo to={"/"} />} />}
      {(userState=='admin') ? <Route path="/verify" element={<Verify />} /> : <Route path='/verify' element={<RedirectTo to={"/"} />} />}
      {(userState=='admin') ? <Route path="/view" element={<View />} /> : <Route path='/view' element={<RedirectTo to={"/"} />} />}
      <Route path='*' element={<RedirectTo to={"/"} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

function RedirectTo(props){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate(props.to)
  },[])
  return(<></>)
}

export default App