import { UserState,UserActionTypes,UserAction } from "../../types/types";


const initialState: UserState = {
      users:[],
    };

export const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, users: action.payload };
    case UserActionTypes.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
