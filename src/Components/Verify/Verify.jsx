import React, { useState, useRef } from 'react'
import styles from "./Verify.module.css"
function Verify() {

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
      promptRef.current.textContent = "verify details"
      return true;
    }

    function getDetails() {
      if(validate()){
        // fetch attendee, if it exists set it using setAttendee
        setAttendee({name:"Manav"})
      }
    }

    function sendPrompt(message){
      promptRef.current.textContent = message
      setTimeout(()=>{promptRef.current.textContent = "enter attendee code"},2000)
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
        <ShowDetails details={attendee}/>
        <button onClick={()=>{promptRef.current.textContent = "Done 👍🏽"}}>verify</button>
        </>
    }
    </div>
  )
}


function ShowDetails(props) {
  return (
    <div className={styles.details}>
        <span>name</span><span>Lorem, ipsum.</span>
        <span>dept</span><span>Lorem, ipsum.</span>
        <span>roll</span><span>Lorem, ipsum.</span>
        <span>div</span><span>Lorem, ipsum.</span>
        <span>year</span><span>Lorem, ipsum.</span>
        <span>event</span><span>Lorem, ipsum.</span>
    </div>
  )
}


export default Verify