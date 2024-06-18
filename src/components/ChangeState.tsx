import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const status=useSelector((state:any)=>state.changeState)
    const dispatch=useDispatch();
    const change=()=>{
        dispatch({
          type:'CHANGE_STATUS'
    })
}
  return (
    <div>
      <h2>{status}</h2>
      <button onClick={change}>Change State</button>
    </div>
  )
}
