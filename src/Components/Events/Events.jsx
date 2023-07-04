import React, { useEffect, useRef, useState } from 'react'
import styles from './Events.module.css'
import { addEvent, getAllEvents, runEvent, stopEvent } from '../../Operations/operations'

function Events() {

    const [isAddingNew, setIsAddingNew] = useState(false)
    const promptRef = useRef(null)

    function sendPrompt(message) {
        promptRef.current.textContent = message
        promptRef.current.style.transform = "scale(1.4)"
    
          setTimeout(()=>{
            promptRef.current.style.transform = "scale(1)"
            promptRef.current.textContent = "Events"
          },1000)
      }

    // useEffect(()=>{
    //     console.log("events rerendered")
    // },[eventList])

    return (
        <div className={styles.events}>
            <p className={styles.prompt} ref={promptRef}>Events</p>
            {(isAddingNew == false) ?
                <>
                <EventList sendPrompt={(message)=>sendPrompt(message)}/>
                <button onClick={()=>setIsAddingNew(true)}>New Event</button>
                </> :
                <NewEvent goBack={()=>setIsAddingNew(false)} sendPrompt={(message)=>sendPrompt(message)}/>
    }

        </div>
    )
}

function EventList(props) {

    const [eventList, setEventList] = useState([])

    useEffect(()=>{
        getAllEvents().then((data)=>setEventList(data))
    },[])

    return (
        <div className={styles.eventList}>
            {eventList.map((event,index)=><Event eventName={event.name} eventStatus={event.status} key={index} eventId={event.id} sendPrompt={(message)=>props.sendPrompt(message)}/>)}
        </div>
    )
}

function Event(props) {

    const eventRef = useRef(null)
    const [status, setStatus] = useState(props.eventStatus)

    function toggleState() {
        (eventRef.current.dataset.state == 'open') ?
            eventRef.current.dataset.state = 'closed' :
            eventRef.current.dataset.state = 'open'
    }

    async function start() {
        await runEvent(props.eventId)
        setStatus("running")
        props.sendPrompt(`Running "${props.eventName}" event`)
    }

    async function end() {
        await stopEvent(props.eventId)
        setStatus("stopped")
        props.sendPrompt(`Stopped "${props.eventName}" event`)
    }

    // useEffect(()=>{
    //     setStatus(props.status)
    // },[])

    return (
        <div className={styles.event} ref={eventRef} onClick={toggleState} data-state={"closed"}>
            <span>{props.eventName}</span>
            {(status=="stopped") ?
            <button onClick={start}>Start the event</button>:
            <button onClick={end}>End this event</button>
            }
        </div>
    )

}

function NewEvent(props) {

    const [eventName, setEventName] = useState('')

    function addNewEvent(){
        if(eventName!=""){
            addEvent(eventName)
            // window.alert("added event")
            props.sendPrompt("New Event Added")
            props.goBack()
        }
        else{
            props.sendPrompt("Enter event name")
        }
    }

    return (
        <>
            <input type="text" onChange={(e)=>setEventName(e.target.value.trim().toUpperCase())}/>
            <button onClick={addNewEvent}>add event</button>
            <button onClick={props.goBack}>back</button>
        </>
    )
}

export default Events