import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
   //ISTE DES REDUCER
   userReducer,
   postReducer 
})