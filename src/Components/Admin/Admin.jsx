import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Admin.module.css"

function Admin() {
  return (
    <div className={styles.adminMenu}>
        <p className={styles.prompt}>Welcome admin</p>
        <Link to={"/events"}>Events</Link>
        <Link to={"/verify"}>Verify</Link>
        <Link to={"/view"}>View</Link>
    </div>
  )
}

export default Admin