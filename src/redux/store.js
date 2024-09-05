import { combineReducers, createStore } from "redux";
import { userReduser } from "./userReduser";
const reducers = combineReducers({
    users:userReduser
})
export const store = createStore(reducers)