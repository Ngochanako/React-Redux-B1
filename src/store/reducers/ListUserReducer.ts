const initialListUser=[
    {
        id:0,
        userName:'Nguyễn Văn Nam',
        gender:'Nam',
        dateOfBirth:'20/03/2023',
        address:'Thanh Xuân,Hà Nội',
    },
    {
        id:1,
        userName:'Nguyễn Văn Minh',
        gender:'Nam',
        dateOfBirth:'20/04/2023',
        address:'Thanh Xuân,Hà Nội',
    }
]
type Action={
    action:any,
    payload:any,
}
const listUserReducer=(state=initialListUser,action:Action)=>{
    switch(action.payload){
        case 'SET_LIST_USER':
            return {...state,...action.payload};
        default:
            return state;
    }
}
export default listUserReducer;