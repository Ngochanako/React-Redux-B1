import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeColor() {
    const color:string=useSelector((state:any)=>state.changeColor);
    const dispatch=useDispatch();
    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            dispatch({
                type:'CHANGE_COLOR',
            })
        }else{
            dispatch({
                type:'RESET_COLOR'
            })
        }
    }
  return (
    <div style={{border:'1px solid grey',marginTop:'50px', width:'200px',height:'200px',display:'flex',justifyContent:'space-between',backgroundColor:color}}>
       <input type="checkbox" onChange={change} />
    </div>
  )
}
