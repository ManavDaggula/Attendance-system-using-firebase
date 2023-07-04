import React, { useRef, useState } from 'react'
import styles from "./Signin.module.css"
import { trySignIn } from '../../Operations/operations'
import { useNavigate } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function SignIn(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const promptRef = useRef(null)
  const navigate = useNavigate()

  function sendPrompt(message) {
    promptRef.current.textContent = message
    promptRef.current.style.transform = "scale(1.4)"

      setTimeout(()=>{
        promptRef.current.style.transform = "scale(1)"
        promptRef.current.textContent = "Enter Credentials"
      },1000)
  }

  function signin(){
    trySignIn(email, password)
    .then((user)=>{
      console.log(user)
      props.changeStatus('admin')
      navigate("/")

    })
    .catch((e)=>{
      console.error(e)
      sendPrompt(e.code.slice(5))
    })
  }

  return (
    <div className={styles.signin}>
      <p className={styles.prompt} ref={promptRef}>Enter Credentials</p>
      <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={signin}>Sign In</button>
    </div>
  )
}

export default SignIn