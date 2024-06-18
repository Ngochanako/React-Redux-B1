const initialUser={
  id:0,
  userName:'Nguyễn Văn Nam',
  gender:'Nam',
  dateOfBirth:'20/03/2023',
  address:'Thanh Xuân,Hà Nội',
}
type Action={
    type:any,
    payload:any,
}
const userReducer=(state=initialUser,action:Action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export default userReducer;