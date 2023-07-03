import React, { useState, useRef } from 'react'
import styles from "./Verify.module.css"
import { changeParticipantStatus, getParticipantForCode } from '../../Operations/operations'
import { useNavigate } from 'react-router-dom'
function Verify() {

  const navigate = useNavigate()

    const [attendee, setAttendee] = useState()
    const promptRef = useRef(null)
    const [code, setCode] = useState('')

    function validate(){
      if(code==""){
        sendPrompt("Enter a code")
        return false;
      }
      if(!code.match(/^[a-zA-Z0-9]{3,3}$/)){
        sendPrompt("Invalid code")
        return false;
      }
      
      return true;
    }

    function getDetails() {
      if(validate()){
        // fetch attendee, if it exists set it using setAttendee
        getParticipantForCode(code)
        .then(attendee=>{
          setAttendee(attendee)
          promptRef.current.textContent = "verify details"
        })
        .catch(e=>{
          if(e.message=="No attendee found."){sendPrompt("No attendee found")}
          else{
            console.error(e)
            sendPrompt("Error Occurred")
          }
        })
      }
    }

    function successfullAttendance() {
      console.log(attendee.id)
      changeParticipantStatus(attendee.id)
      sendPrompt("Done 👍🏽")
      setTimeout(()=>{
        setAttendee(null)
        setCode('')
      },1500)
      
    }

    function sendPrompt(message){
      promptRef.current.textContent = message
      promptRef.current.style.transform = "scale(1.4)"
      setTimeout(()=>{
        promptRef.current.textContent = "enter attendee code";
        promptRef.current.style.transform = "scale(1)"
      },1500)
    }

  return (
    <div className={styles.verification}>
        <p ref={promptRef} className={styles.prompt}>enter attendee code</p>
        {(!attendee)?
        <>
        <input type={styles.text} maxLength={3} onChange={(e)=>setCode(e.target.value.trim().toUpperCase())}/>
        <p className={styles.message}></p>
        <button onClick={getDetails}>check</button>
        </>
    :
        <>
        {/* <input type={styles.text} /> */}
        <ShowDetails attendeeName={attendee.name} attendeeDept={attendee.dept} attendeeRoll={attendee.roll} attendeeDiv={attendee.div} attendeeYear={attendee.year} attendeeEvent={attendee.event}/>
        <button onClick={successfullAttendance}>verify</button>
        </>
    }
    </div>
  )
}


function ShowDetails(props) {
  return (
    <div className={styles.details}>
        <span>name</span><span>{props.attendeeName}</span>
        <span>dept</span><span>{props.attendeeDept}</span>
        <span>roll</span><span>{props.attendeeRoll}</span>
        <span>div</span><span>{props.attendeeDiv}</span>
        <span>year</span><span>{props.attendeeYear}</span>
        <span>event</span><span>{props.attendeeEvent}</span>
    </div>
  )
}


export default Verify