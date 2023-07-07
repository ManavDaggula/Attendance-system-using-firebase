import { onSnapshot } from "firebase/firestore";
import { addAttendee, addEvent, generateCode, getAllEvents, getAttendees, getParticipantForCode, getPrevAttendee, getRunningEvents, runEvent, stopEvent, trySignIn } from "./operations.js";

// addEvent("Web Dev")
// addEvent("Cybersecurity")

// console.log("event added")
// runEvent("8aoOYFBIAWycEVc1GP7v")
// stopEvent("QBLUADdCbQynLPhc1v2N")
// getRunningEvents().then((data)=>console.log(data))
// console.log(await getAllEvents())
// getAttendees().then(data=>console.log(data))
// generateCode().then(code=>console.log(code))
// addAttendee("nupoor","IT","C","606","TE","Cybersecurity").then(()=>console.log("added")).catch((e)=>console.log(e.message))
// getParticipantForCode("X04").then((d)=>console.log(d)).catch((e)=>console.log(e.message))
// trySignIn("manavdaggula@gmail.com","ganu2002").then((user)=>{console.log("success")}).catch((e)=>{console.log("error")})
// console.log(await generateCode())
getPrevAttendee('AzqEQEtbY7Kg5kiJCVNQ').then((doc)=>{
    let unsubscribe = onSnapshot(doc.ref,(d)=>{
        console.log(d.data())
        setTimeout(()=>{
            console.log("closing snapshot")
            unsubscribe()
        },2000)
    })
})