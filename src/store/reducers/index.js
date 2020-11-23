import {combineReducers} from "redux";
import mainReducer from "./reducer";

const appReducer = combineReducers({
    data: mainReducer
});

export default appReducer;
