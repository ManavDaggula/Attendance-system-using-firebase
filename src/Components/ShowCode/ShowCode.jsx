import React from 'react'
import styles from "./ShowCode.module.css"

function ShowCode() {
  return (
    <div className={styles.showCode}>
        <p className={styles.prompt}>Your code is</p>
        <p className={styles.code}>abc</p>
        <p className={styles.prompt}>please provide this code to a volunteer</p>
    </div>
  )
}

export default ShowCode