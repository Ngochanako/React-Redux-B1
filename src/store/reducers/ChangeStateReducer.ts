const initialState:string='Rikkei Academy';
const ChangeStateReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case 'CHANGE_STATUS':
            return 'RikkeiSoft'
        default:
            return state;
    }
}
export default ChangeStateReducer;