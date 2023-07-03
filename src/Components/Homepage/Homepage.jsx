import React from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import styles from "./Homepage.module.css"
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className={styles.welcome}>
        
        <p className={styles.prompt}>click to mark your presence</p>
        <Link to={"/register"}>register</Link>
    </div>
  )
}

export default Homepage