import React, { useEffect, useRef, useState } from 'react'
import styles from './Events.module.css'

function Events() {

    const [eventList, setEventList] = useState([])
    const [isAddingNew, setIsAddingNew] = useState(false)

    useEffect(()=>{
        console.log("events rerendered")
    },[eventList])

    return (
        <div className={styles.events}>
            <p className={styles.prompt}>Events</p>
            {(isAddingNew == false) ?
                <>
                <EventList />
                <button onClick={()=>setIsAddingNew(true)}>New Event</button>
                </> :
                <NewEvent goBack={()=>setIsAddingNew(false)}/>
    }

        </div>
    )
}

function EventList() {
    return (
        <div className={styles.eventList}>
            <Event />
            <Event />
            <Event />
        </div>
    )
}

function Event() {

    const state = useRef(null)

    function toggleState() {
        (state.current.dataset.state == 'open') ?
            state.current.dataset.state = 'closed' :
            state.current.dataset.state = 'open'
    }

    return (
        <div className={styles.event} ref={state} onClick={toggleState} data-state={"closed"}>
            <span>Event Name</span>
            <button>Run this event</button>
        </div>
    )

}

function NewEvent(props) {
    return (
        <>
            <input type="text" />
            <button onClick={()=>props.goBack()}>add event</button>
        </>
    )
}

export default Events