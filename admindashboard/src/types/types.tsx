export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age?: number;
}
export interface UserState {
  users: User[];
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  ADD_USER = "ADD_USER",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
}

export interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
  payload: User[];
}
export interface AddUserAction {
  type: UserActionTypes.ADD_USER;
  payload: User;
}
export interface UpdateUserAction {
  type: UserActionTypes.UPDATE_USER;
  payload: User;
}
export interface DeleteUserAction {
  type: UserActionTypes.DELETE_USER;
  payload: string;
}
export type UserAction =
  | FetchUsersAction
  | AddUserAction
  | UpdateUserAction
  | DeleteUserAction;
