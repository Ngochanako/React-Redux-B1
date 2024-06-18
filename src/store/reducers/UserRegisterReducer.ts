const initialUserRegister={
    id:0,
    email:'',
    password:'',
}
const UserRegisterReducer=(state=initialUserRegister,action:any)=>{
    switch(action.type){
        case 'REGISTER':
            return {...state,...action.payload}
        default:
            return state;
    }
}
export default UserRegisterReducer;