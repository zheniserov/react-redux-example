import jsonData from '../../data.json';

const initialState = jsonData;

export default function (state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}