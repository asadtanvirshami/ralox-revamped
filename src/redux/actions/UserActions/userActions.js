// authActions.js
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_FALIURE, LOGOUT } from '../../constants/userConstants';

export const loginSuccess = (user) => ({
  type: USER_SIGNIN_SUCCESS,
  payload: { user },
});

export const loginFailure = (error) => ({
  type: USER_SIGNIN_FALIURE,
  payload: { error },
});

export const logout = () => ({
  type: LOGOUT,
});