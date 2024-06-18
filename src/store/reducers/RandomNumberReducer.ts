const initialRandomNumbers:number[]=[];
type Action={
    type:string,
    payload:number,
}
const RandomNumbersReducer=(state=initialRandomNumbers,action:Action)=>{
     switch(action.type){
        case 'ADD_RANDOM_NUMBER':
            return [...state,action.payload]
        default:
            return state;
     }
}
export default RandomNumbersReducer;