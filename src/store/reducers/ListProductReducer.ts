const initialListProduct=[
    {
        id:1,
        name:'Cam sành',
        price:20000,
        quantity:10,
    },
    {
        id:2,
        name:'Bưởi',
        price:50000,
        quantity:15,
    }
]
type Action={type:any,payload:any};
const ListProductReducer=(state=initialListProduct,action:Action)=>{
    switch(action.payload){
        case 'SET_LIST_PRODUCT':
           return[...state,action.payload] 
        default:
           return state;
    }
}
export default ListProductReducer;