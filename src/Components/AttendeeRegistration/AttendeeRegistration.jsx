import React, { useState } from 'react'
import Form from "../Form/Form"
import ShowCode from '../ShowCode/ShowCode'
import SuccessPage from '../SuccessPage/SuccessPage'

function AttendeeRegistration() {
    const [code, setCode] = useState(null)
    const [status, setStatus] = useState('pending')

    
  return (
    (code==null && status=='pending')?
    <Form setCode={(code)=>setCode(code)}></Form>:
    (code!=null && status=='pending')?
    <ShowCode code={code} changeStatus={()=>setStatus('done')}></ShowCode>:
    <SuccessPage />
  )
}

export default AttendeeRegistration