import React from 'react'
import styles from "./SuccessPage.module.css"
import Background from '../Background/Background'

function SuccessPage() {
  return (
    <>
    <Background />
    <p className={styles.card}>Your attendance is successfully recorded</p>
    </>
  )
}

export default SuccessPage