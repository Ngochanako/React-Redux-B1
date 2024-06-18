import React from 'react'
import { useSelector } from 'react-redux'
type State={
    user:{
        id:number,
        userName:string,
        gender:string,
        dateOfBirth:string,
        address:string,
    }
}
export default function Profiles() {
  const user=useSelector((state:State)=>state.user);
  return (
    <div>
      <h3>Thông tin cá nhân</h3>
      <p>Id:{user.id}</p>
      <p>Họ và tên:{user.userName}</p>
      <p>Giới tính :{user.gender}</p>
      <p>Ngày sinh:{user.dateOfBirth}</p>
      <p>Địa chỉ:{user.address}</p>
    </div>
  )
}
