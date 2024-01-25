// authReducer.js
import Cookies from "js-cookie";
import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FALIURE,
  LOGOUT,
} from "../constants/userConstants";

const initialState = {
  user: {},
  error: {},
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: {},
        isAuthenticated: true,
      };
    case USER_SIGNIN_FALIURE:
      return {
        ...state,
        user: {},
        error: action.payload.error,
        isAuthenticated: false,
      };
    case LOGOUT:
      return initialState, Cookies.remove("user"), Cookies.remove("token");
    default:
      return state;
  }
};

export default userReducer;
