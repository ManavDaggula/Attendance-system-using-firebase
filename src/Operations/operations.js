// DB OPERATIONS
// get duplicate participant --done
// add new participant --done
// get participant for code --done
// change status of participant --done
// read live participants with status attended
// read running events --done
// add event --done
// run event --done
// stop event --done

// DATA MODEL
// participants {
//     name:str;
//     dept: str;
//     div: str;
//     roll: str;
//     year: str;
//     event: ref/str;
// }
// events {
//     name: str;
//     status: str (running/stopped);
//     start_time: datetime; ---not working
//     end_time: datetime; ----not working
// }

import { collection, addDoc, updateDoc, getDoc, serverTimestamp, getDocs, doc, setDoc, query, where, limit, connectFirestoreEmulator, onSnapshot } from "firebase/firestore";
import {db, auth} from "./firebase-config.js"
import { connectAuthEmulator, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// connectFirestoreEmulator(db,"192.168.0.109","8080")
// connectAuthEmulator(auth, "http://192.168.0.109:9099")

const attendeesRef = collection(db,'attendees')
const eventsRef = collection(db,'events')

async function trySignIn(email,pwd) {
    let user;
    try{
        user = await signInWithEmailAndPassword(auth, email, pwd)
    }
    catch (e){
        throw e;
    }
    return user
}

async function addEvent(name) {
    let newEvent = {name:name, status:"stopped"} // {start_time:[], end_time:[]} not working hence removed from document
    try{
        let ref = await addDoc(eventsRef, newEvent)
    }
    catch (error){
        console.log("error occured")
    }
}

async function getRunningEvents(){
    let q = query(eventsRef, where("status","==","running"))
    let eventList = await getDocs(q)
    let l = []
    eventList.forEach((doc)=>{
        let x = doc.data()
        x.id = doc.id
        // console.log(x)
        l.push(x)
    })
    // console.log(l, l.length)
    return l;
}

async function getAllEvents() {
    let eventList = await getDocs(eventsRef)
    let l = []
    eventList.forEach((doc)=>{
        let x = doc.data()
        x.id = doc.id
        // console.log(x)
        l.push(x)
    })
    // console.log(l, l.length)
    return l;
}

async function runEvent(id){
    let event = doc(eventsRef, id)
    await updateDoc(event, {status: "running"})
    console.log("event running")
}

async function stopEvent(id){
    let event = doc(eventsRef, id)
    await updateDoc(event, {status: "stopped"})
    console.log("event stopped")
}

async function generateCode(allowRepeat=true){
    let code_sample_space='ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let newCode="";
    if(allowRepeat){
        for (let i=0;i<3;i++){
            newCode += code_sample_space.charAt(Math.floor(Math.random()*36))
        }
    }
    else{
        let codes = []
        // fetch codes from db
        let attendees = await getAttendees()
        attendees.forEach(data=>codes.push(data.code))
        do {
            newCode='';
            for (let i=0;i<3;i++){
                newCode += code_sample_space.charAt(Math.floor(Math.random()*36))
            }
        } while (newCode in codes);
    }
    return newCode;
}

async function addAttendee(name, dept, div, roll, year, event){
    let q = query(attendeesRef, where("name","==",name), where("dept","==",dept), where("div","==",div), where("roll","==",roll), where("year","==",year), where("event","==",event))
    let check = await getDocs(q)
    let code;
    let newAttendeeRef;
    if(!check.empty){ throw Error("Attendee already exists.")}
    else{
        code = await generateCode()
        newAttendeeRef = await addDoc(attendeesRef, {'name':name, 'dept':dept, 'div':div, 'roll':roll, 'year':year, 'event':event, 'code':code})
        console.log("attendee added")
    }
    return {'code':code,'ref':newAttendeeRef};
    
    // console.log(check.empty)
}

async function getAttendees(){
    let attendeeList = await getDocs(attendeesRef)
    let l = []
    attendeeList.forEach((doc)=>{
        let x = doc.data()
        x.id = doc.id
        // console.log(x)
        l.push(x)
    })
    // console.log(l, l.length)
    return l;
}

async function getParticipantForCode(code){
    let q = query(attendeesRef, where("code","==",code), limit(1))
    let attendee = await getDocs(q)
    if(attendee.empty){ throw Error("No attendee found.")}
    let details;
    attendee.forEach((doc)=>{
        details = { ...{id : doc.id}, ...doc.data()}
    })
    return details;
}

function changeParticipantStatus(id) {
    let docRef = doc(attendeesRef,id)
    updateDoc(docRef, {code: ""})
    console.log("participant status changed")
}

function getAttendedListQuery() {
    let q = query(attendeesRef, where("code","==",""))
    return q;
}

export { addEvent, runEvent, stopEvent, getRunningEvents, getAllEvents, getAttendees, generateCode, addAttendee, getParticipantForCode, changeParticipantStatus, getAttendedListQuery, trySignIn }