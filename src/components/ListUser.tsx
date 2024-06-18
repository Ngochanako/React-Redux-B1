import React from 'react'
import { useSelector } from 'react-redux'
type State={
    listUser:{
        
            id:number,
            userName:string,
            gender:string,
            dateOfBirth:string,
            address:string,
        
    }[]
}
export default function ListUser() {
    const listUser=useSelector((state:State)=>state.listUser);
  return (
    <div>
      <table>
        <thead>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
        </thead>
        <tbody>
           {listUser.map(user=>(
            <tr>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.gender}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td style={{display:'flex',gap:'10px'}}><button>Sửa</button><button>Xóa</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}
