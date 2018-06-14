import data from './mydata.json';

const initialState = {
    mydata: data
}
export default function myReducer(state=initialState) {
    return state;
}