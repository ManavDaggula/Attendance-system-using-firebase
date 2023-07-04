import React, { useEffect, useState } from 'react'
import styles from "./View.module.css"
import { getAttendedListQuery } from '../../Operations/operations'
import { onSnapshot } from 'firebase/firestore'
function View() {

    const [attendeeList, setAttendeeList] = useState([])

    useEffect(() => {
        let unsubscribe = onSnapshot(getAttendedListQuery(), (docs)=>{
            let list = []
            docs.forEach((doc)=>{
                list.push({ ...{id:doc.id} , ...doc.data()})
            })
            console.log(list)
            setAttendeeList(list)
        })
    },[])
    const tempData = [
        {
            name: 'manav daggula',
            dept: "IT",
            roll: "606",
            div: "A",
            year: "TE",
            event: "Jetpack Compose"
        },
        { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }, { name: 'manav daggula', dept: "IT", roll: "606", div: "A", year: "TE", event: "Jetpack Compose" }
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
                {attendeeList.map((data, index) =>
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