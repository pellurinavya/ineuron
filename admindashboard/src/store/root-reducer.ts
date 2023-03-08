import { combineReducers } from "redux";
import { UserReducer } from "./users/users.reducers";
export const rootReducer= combineReducers({
    user:UserReducer
})