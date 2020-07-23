import {combineReducers} from "redux";
import workersReducer from "./workersReducer";

export default combineReducers({
    workers: workersReducer
});