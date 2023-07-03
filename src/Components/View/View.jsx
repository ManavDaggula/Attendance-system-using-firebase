import React from 'react'
import styles from "./View.module.css"
function View() {

    const tempData = [
        {
            name:'manav daggula',
            dept:"IT",
            roll: "606",
            div:"A",
            year: "TE",
            event:"Jetpack Compose"
        },
        {name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"},{name:'manav daggula',dept:"IT",roll: "606",div:"A",year: "TE",event:"Jetpack Compose"}
    ]

  return (
    <table className={styles.viewAttendees}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Roll</th>
                <th>Div</th>
                <th>Year</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            {tempData.map((data,index)=>
                <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.dept}</td>
                    <td>{data.roll}</td>
                    <td>{data.div}</td>
                    <td>{data.year}</td>
                    <td>{data.event}</td>
                </tr>
            )}
        </tbody>

    </table>
  )
}

export default View