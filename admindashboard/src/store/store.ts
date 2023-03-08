import { createStore } from "redux";
import { UserReducer } from "./users/users.reducers";

export const Store = createStore(UserReducer);