import React, { useEffect } from 'react'
import styles from "./ShowCode.module.css"

function ShowCode(props) {

  // below useEffect is just to simulate successfull attendance
  useEffect(()=>{
    setTimeout(()=>props.changeStatus(),
    5000)
  },[])

  return (
    <div className={styles.showCode}>
        <p className={styles.prompt}>Your code is</p>
        <p className={styles.code}>{props.code}</p>
        <p className={styles.prompt}>please provide this code to a volunteer</p>
    </div>
  )
}

export default ShowCode