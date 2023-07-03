import React, { useState } from 'react'
import Form from "../Form/Form"
import ShowCode from '../ShowCode/ShowCode'
import SuccessPage from '../SuccessPage/SuccessPage'

function AttendeeRegistration() {
    const [code, setCode] = useState(null)
    const [status, setStatus] = useState('pending')
    const [attendeeDocRef, setAttendeeDocRef] = useState(null)

    
  return (
    (code==null && status=='pending')?
    <Form setCode={(code)=>setCode(code)} setAttendeeDocRef={(ref)=>setAttendeeDocRef(ref)}></Form>:
    (code!=null && status=='pending')?
    <ShowCode code={code} changeStatus={()=>setStatus('done')} attendeeDocRef={attendeeDocRef}></ShowCode>:
    <SuccessPage />
  )
}

export default AttendeeRegistration