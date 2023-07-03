import React, { useEffect } from 'react'
import styles from "./ShowCode.module.css"
import { onSnapshot } from 'firebase/firestore'

function ShowCode(props) {

  // below useEffect is just to simulate successfull attendance
  useEffect(()=>{
    // setTimeout(()=>props.changeStatus(),
    // 5000)
    // realtime listener for the attendeeRef passed, if its code gets '' then unsubscribe and then call change status
    let unsubscribe = onSnapshot(props.attendeeDocRef,(doc)=>{
      let data = doc.data()
      console.log(data)
      if (data.code!=""){
        console.log("pending")
      }
      else {
        console.log("done")
        props.changeStatus()
        unsubscribe()
      }
    })

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