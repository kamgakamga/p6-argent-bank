import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  
  const userJSON = localStorage.getItem('user');
  const initialState = userJSON
    ? { isLoggedIn: true, user: JSON.parse(userJSON) }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState, action: { type: any; payload: any; }) {
      const { type, payload } = action;
    
      switch (type) {
        case REGISTER_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
          };
        case REGISTER_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case LOGIN_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        case LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        default:
          return state;
      }
  }
  