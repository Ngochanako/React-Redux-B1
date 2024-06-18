import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RandomNumber() {
    const randomNumbers=useSelector((state:any)=>state.randomNumbers);
    const dispatch=useDispatch();
    const create=()=>{
        dispatch({
            type:'ADD_RANDOM_NUMBER',
            payload:Math.floor(Math.random()*100)
        })
    }
  return (
    <div style={{marginTop:'50px'}}>
     <p>[ {randomNumbers.join(',')}]</p>
      <button onClick={create}>Generate random Number</button>
    </div>
  )
}
