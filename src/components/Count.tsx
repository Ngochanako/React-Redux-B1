import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store';

export default function Count() {
    const stateCount:any=useSelector((state:any)=>{
        return state.counter;
    })
    console.log(stateCount);
    
    //useSelector kiểm tra state có thay đổi hay không thì cập nhập lại UI
    const dispatch=useDispatch();
    const increase=()=>{
        dispatch({
            type:"INCREASE"
        })
    }
    const decrease=()=>{
      dispatch({
        type:'DECREASE'
      })
    }
  return (
    <div>
      <div>Count
        <p>Giá trị count:{stateCount}</p>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>
      </div>
    </div>
  )
}
