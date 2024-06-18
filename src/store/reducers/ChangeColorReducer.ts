const initialColor='white';
const ChangeColorReducer=(state=initialColor,action:any)=>{
    switch(action.type){
        case 'CHANGE_COLOR':
            return 'black';
        case 'RESET_COLOR':
            return 'white';
        default:
            return state;
    }
}
export default ChangeColorReducer;