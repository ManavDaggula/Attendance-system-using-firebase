import React, { useState } from 'react'
import styles from "./AttendeeForm.module.css"

// name, dept, div, roll, year, event

function AttendeeForm() {

  const [name, setName] = useState('')
  const [dept, setDept] = useState('')
  const [div, setDiv] = useState('')
  const [roll, setRoll] = useState('')
  const [year, setYear] = useState('')
  const [event, setEvent] = useState('')

  return (
    <div className={styles.attendeeForm}>
    <p className="prompt">enter your details</p>
    <div className={styles.inputForm}>
      <label htmlFor="nameInput">name</label>
      <input type="text" id="nameInput" onChange={e=>setName(e.target.value.toUpperCase())}/>
      <label htmlFor="deptInput">dept</label>
      <input type="text" id="deptInput" onChange={e=>setDept(e.target.value.toUpperCase())}/>
      <label htmlFor="divInput">div</label>
      <input type="text" id="divInput" onChange={e=>setDiv(e.target.value.toUpperCase())}/>
      <label htmlFor="rollInput">roll</label>
      <input type="text" id="rollInput" onChange={e=>setRoll(e.target.value.toUpperCase())}/>
      <label htmlFor="yearInput">year</label>
      <input type="text" id="yearInput" onChange={e=>setYear(e.target.value.toUpperCase())}/>
      <label htmlFor="eventInput">event</label>
      <select name="" id="eventInput" defaultValue={"none"} onChange={e=>setEvent(e.target.value.toUpperCase())}>
        <option value="none" disabled hidden>Select an option</option>
        <option value="Jetpack Compose">Jetpack Compose</option>
      </select>
    </div>
    <button>proceed</button>
    </div>
  )
}

export default AttendeeForm