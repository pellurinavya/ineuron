import { UserActionTypes,User,UserAction } from "../../types/types"
import axios from 'axios';
import { useDispatch } from "react-redux";

export const currentUser = (user: User[]): UserAction => ({
    type: UserActionTypes.FETCH_USERS,
    payload: user,
  });

export const addUser = (user: User): UserAction => ({
  type: UserActionTypes.ADD_USER,
  payload: user,
});
export const updateUser = (user: User): UserAction => ({
  type: UserActionTypes.UPDATE_USER,
  payload: user,
});
export const deleteUser = (id: string): UserAction => ({
  type: UserActionTypes.DELETE_USER,
  payload: id,
});


