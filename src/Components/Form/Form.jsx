import React, { useRef, useState } from 'react'
import styles from "./Form.module.css"

// name, dept, div, roll, year, event

function Form(props) {

  const promptRef = useRef(null)

  const [name, setName] = useState('')
  const [dept, setDept] = useState('')
  const [div, setDiv] = useState('')
  const [roll, setRoll] = useState('')
  const [year, setYear] = useState('')
  const [event, setEvent] = useState('')

  function validateForm() {
    if(name=="" || dept=="" || div=="" || roll=="" || year=="" || event=="") {
      sendPrompt("Fill all fields")
      return false;}
    // regex for name : ^([a-zA-Z]+\s)*[a-zA-Z]+$
    // regex for roll : ^[0-9]{3,3}$
    if(!(name.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/) && roll.match(/^[0-9]{3,3}$/))){
      sendPrompt("Enter valid details")
      return false}

    return true;
  }

  function submitForm() {
    if(validateForm()){
      // sendPrompt("details valid.")
      props.setCode("abc")

    }
  }

  function sendPrompt(message) {
    promptRef.current.textContent = message
      setTimeout(()=>{promptRef.current.textContent = "Enter your details"},1000)
  }

  return (
    <div className={styles.attendeeForm}>
    <p className="prompt" ref={promptRef}>enter your details</p>
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
        <option value="Jetpack Compose">Jetpack Compose</option>
      </select>
    </div>
    <button onClick={submitForm}>proceed</button>
    </div>
  )
}

export default Form