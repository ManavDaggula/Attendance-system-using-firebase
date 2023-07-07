import React, { useEffect, useRef, useState } from 'react'
import styles from "./Form.module.css"
import { addAttendee, getRunningEvents } from '../../Operations/operations'

// name, dept, div, roll, year, event

function Form(props) {

  const promptRef = useRef(null)

  const [name, setName] = useState('')
  const [dept, setDept] = useState('')
  const [div, setDiv] = useState('')
  const [roll, setRoll] = useState('')
  const [year, setYear] = useState('')
  const [event, setEvent] = useState('')

  const [eventList, setEventList] = useState([])

  function validateForm() {
    if(name=="" || dept=="" || div=="" || roll=="" || year=="" || event=="") {
      sendPrompt("Fill all fields")
      return false;}
    // regex for name : ^([a-zA-Z]+\s)*[a-zA-Z]+$
    // regex for roll : ^[0-9]{3,3}$
    if(!(name.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/) && roll.match(/^[0-9]{3,3}$/))){
      sendPrompt("Enter valid details")
      return false}

    if(window.localStorage.getItem('appearedEvents')){
      if(JSON.parse(window.localStorage.getItem('appearedEvents')).includes(event)){
        sendPrompt("Already registered for this event")
        return false;
      }
    }

    return true;
  }

  function submitForm() {
    if(validateForm()){
      // sendPrompt("details valid.")
      console.log("details are valid")
      // props.setCode("abc")
      if(window.localStorage.getItem('appearedEvents')){
        let appearedEvents = JSON.parse(window.localStorage.getItem('appearedEvents'))
        appearedEvents.push(event)
        window.localStorage.setItem('appearedEvents',appearedEvents)
      }
      else{
        window.localStorage.setItem('appearedEvents',JSON.stringify([event]))
      }
      addAttendee(name, dept, div, roll, year, event)
      .then((data)=>{
        console.log(data)
        sendPrompt("your registration is recorded")
        props.setCode(data.code)
        window.localStorage.setItem('userCode',data.code)
        props.setAttendeeDocRef(data.ref)
        window.localStorage.setItem('userId',data.ref.id)
      })
      .catch((e)=>{
        if(e.message=="Attendee already exists."){sendPrompt("record already exists")}
        console.error(e)
      })

    }
  }

  function sendPrompt(message) {
    promptRef.current.textContent = message
    promptRef.current.style.transform = "scale(1.4)"

      setTimeout(()=>{
        promptRef.current.style.transform = "scale(1)"
        promptRef.current.textContent = "Enter your details"
      },1000)
  }

  useEffect(()=>{
    getRunningEvents().then((data)=>setEventList(data))
  },[])

  return (
    <div className={styles.attendeeForm}>
    <p className={styles.prompt} ref={promptRef}>enter your details</p>
    <div className={styles.inputForm}>
      <label htmlFor="nameInput">name</label>
      <input type="text" id="nameInput" onChange={e=>setName(e.target.value.trim().toUpperCase())}/>
      <label htmlFor="deptInput">dept</label>
      <select type="text" id="deptInput" defaultValue={"none"} onChange={e=>setDept(e.target.value.toUpperCase().trim())}>
        <option value="none" disabled hidden>Select an option</option>
        <option value="I.T.">I.T.</option>
        <option value="C.S.">C.S.</option>
      </select>
      <label htmlFor="divInput">div</label>
      <select type="text" id="divInput" defaultValue={"none"} onChange={e=>{setDiv(e.target.value.toUpperCase())}}>
        <option value="none" disabled hidden>Select an option</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <label htmlFor="rollInput">roll</label>
      <input type="text" id="rollInput" maxLength={3} onChange={e=>setRoll(e.target.value.trim().toUpperCase())}/>
      <label htmlFor="yearInput">year</label>
      <select type="text" id="yearInput" defaultValue={"none"} onChange={e=>setYear(e.target.value.toUpperCase())}>
        <option value="none" disabled hidden>Select an option</option>
        <option value="F.E.">F.E.</option>
        <option value="S.E.">S.E.</option>
        <option value="T.E.">T.E.</option>
        <option value="B.E.">B.E.</option>
      </select>
      <label htmlFor="eventInput">event</label>
      <select name="" id="eventInput" defaultValue={"none"} onChange={e=>setEvent(e.target.value.toUpperCase())}>
        <option value="none" disabled hidden>Select an option</option>
        {/* <option value="Jetpack Compose">Jetpack Compose</option> */}
        {eventList.map((data,index)=><option key={index} value={data.name}>{data.name}</option>)}
      </select>
    </div>
    <button onClick={submitForm}>proceed</button>
    </div>
  )
}

export default Form