import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
type User={
    id:number,
    password:string,
    email:string,
}
type State={
    registerUser:User
}
export default function Login() {
    const userState=useSelector((state:State)=>state.registerUser);
    console.log(useState);
    
    const [user,setUser]=useState<User>({
        id:0,
        email:'',
        password:'',
    })
    useEffect(()=>{
        if(userState){
            setUser({...user,email:userState.email,password:userState.password})
        }
    },[useState])
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }
  return (
    <div>
       <h3>Đăng nhập</h3>
      <form action="" style={{display:'flex',gap:'20px',flexDirection:'column',width:'200px'}}>
      <input onChange={handleChange} value={user.email}  name='email' type="email" placeholder='Nhập email' required />
      <input onChange={handleChange} value={user.password} name='password' type="password" placeholder='Nhập mật khẩu' required /> 
      <button type='submit'>Đăng nhập</button>   
      </form>
    </div>
  )
}
