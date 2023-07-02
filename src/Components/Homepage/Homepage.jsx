import React from 'react'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import styles from "./Homepage.module.css"

function Homepage() {
  return (
    <div className={styles.welcome}>
        
        <p className={styles.prompt}>click to mark your presence</p>
        <button>register</button>
    </div>
  )
}

export default Homepage