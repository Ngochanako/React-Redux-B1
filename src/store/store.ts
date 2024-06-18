import {createStore,combineReducers} from 'redux';
import reducerCount from './reducers/CountReducer';
import userReducer from './reducers/UserReducer';
import listUserReducer from './reducers/ListUserReducer';
import ListProduct from '../components/ListProduct';
import ListProductReducer from './reducers/ListProductReducer';
import RandomNumbersReducer from './reducers/RandomNumberReducer';
import ChangeStateReducer from './reducers/ChangeStateReducer';
import ChangeColorReducer from './reducers/ChangeColorReducer';
const rootReducer=combineReducers({
    user:userReducer,
    listUser:listUserReducer,
    ListProduct:ListProductReducer,
    counter:reducerCount,
    randomNumbers:RandomNumbersReducer,
    changeState:ChangeStateReducer,
    changeColor:ChangeColorReducer,
})
const store=createStore(rootReducer);
export default store;