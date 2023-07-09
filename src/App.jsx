import { useEffect, useLayoutEffect, useState, Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import './App.css'
import Logo from "./Components/Logo/Logo"
import Menu from './Components/Menu/Menu'
import Homepage from './Components/Homepage/Homepage'
// import AttendeeRegistration from './Components/AttendeeRegistration/AttendeeRegistration'
const AttendeeRegistration = lazy(()=>import("./Components/AttendeeRegistration/AttendeeRegistration"))
// import Admin from './Components/Admin/Admin';
const Admin = lazy(()=>import("./Components/Admin/Admin"))
// import Verify from './Components/Verify/Verify';
const Verify = lazy(()=>import("./Components/Verify/Verify"))
// import View from './Components/View/View';
const View = lazy(()=>import("./Components/View/View"))
// import Events from './Components/Events/Events';
const Events = lazy(()=>import("./Components/Events/Events"))
// import SignIn from './Components/SignIn/SignIn';
const SignIn = lazy(()=>import("./Components/SignIn/SignIn"))

function App() {
  const [userState, setUserState] = useState('attendee')
  // const navigate = useNavigate()

  useEffect(()=>{
    if(window.sessionStorage.getItem('user')){
      setUserState('admin')
    }
  },[])
  // useLayoutEffect(()=>{
  //   console.log("checking session");
  //   if(window.sessionStorage.getItem('user')){
  //     setUserState('admin')
  //   }
  // },[])

  return (
    <>
    <BrowserRouter>
    <Menu status={userState} changeStatus={(status)=>setUserState(status)}/>
    <Logo />
    <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      
      
      <Route path='/' element={(userState!='admin')?<Homepage />:<Admin />}/>
      <Route path='/register' element={<AttendeeRegistration/>} />
      <Route path='/signin' element={<SignIn changeStatus={(status)=>setUserState(status)}/>} />
      {/* <Route path='/events' element={<Events userState={userState}/>} />
      <Route path='/verify' element={<Verify  userState={userState}/>} />
      <Route path='/view' element={<View  userState={userState}/>} /> */}
      {(userState=='admin') ? <Route path="/events" element={<Events />} /> : <Route path='/events' element={<RedirectTo to={"/"} />} />}
      {(userState=='admin') ? <Route path="/verify" element={<Verify />} /> : <Route path='/verify' element={<RedirectTo to={"/"} />} />}
      {(userState=='admin') ? <Route path="/view" element={<View />} /> : <Route path='/view' element={<RedirectTo to={"/"} />} />}
      <Route path='*' element={<RedirectTo to={"/"} />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

function RedirectTo(props){
  const navigate = useNavigate()
  useEffect(()=>{
    console.log("renavigating to /")
    navigate(props.to)
  },[])
  return(<></>)
}

export default App