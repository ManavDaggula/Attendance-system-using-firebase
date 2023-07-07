import React, { useEffect, useState } from 'react'
import Form from "../Form/Form"
import ShowCode from '../ShowCode/ShowCode'
import SuccessPage from '../SuccessPage/SuccessPage'
import { getPrevAttendee } from '../../Operations/operations'

function AttendeeRegistration() {
    const [code, setCode] = useState(null)
    const [status, setStatus] = useState('pending')
    const [attendeeDocRef, setAttendeeDocRef] = useState(null)

    useEffect(()=>{
      if(window.localStorage.getItem('userCode') && window.localStorage.getItem('userId')){
        let prev_code = window.localStorage.getItem('userCode')
        let prev_id = window.localStorage.getItem('userId')
        getPrevAttendee(prev_id).then((doc)=>{
          console.log(doc.ref);
          setAttendeeDocRef(doc.ref)
          setCode(prev_code)
        })
        console.log(prev_code, prev_id)
      }
    },[])


  return (
    (code==null && status=='pending')?
    <Form setCode={(code)=>setCode(code)} setAttendeeDocRef={(ref)=>setAttendeeDocRef(ref)}></Form>:
    (code!=null && status=='pending')?
    <ShowCode code={code} changeStatus={()=>setStatus('done')} attendeeDocRef={attendeeDocRef}></ShowCode>:
    <SuccessPage />
  )
}

export default AttendeeRegistration