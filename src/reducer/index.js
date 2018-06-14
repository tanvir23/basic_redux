import { combineReducers } from 'redux';
import myReducer from './myreducer';

const rootReducer = combineReducers({
    myState: myReducer
});

export default rootReducer;