import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service"; 

const userJON = localStorage.getItem("user");
let  user ;
if (userJON) {
   user = JSON.parse(userJON);
}

export const register = createAsyncThunk(
  "auth/register",
  async (userData: any, thunkAPI) => {
    try {
      const response = await AuthService.register(userData);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const errorMessage = 
        (error instanceof Error) ? error.message :
        (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') ? error.message :
        'An error occurred';
      
      thunkAPI.dispatch(setMessage({message :errorMessage}));
      throw new Error(errorMessage);
    }
  }
) as any;

export const login = createAsyncThunk(
  "auth/login",
  async (userCredential: any, thunkAPI) => {
    try {
      const data = await AuthService.login(userCredential);
      return { user: data };
    } catch (error) {
      const errorMessage =
        (error instanceof Error) ? error.message :
        (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') ? error.message :
        'An error occurred';

      thunkAPI.dispatch(setMessage({message :errorMessage}));
      throw new Error(errorMessage);
    }
  }
)  as any;


export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      // Définissez vos réducteurs ici si nécessaire
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, (state :any, action:any) => {
          state.isLoggedIn = false;
        })
        .addCase(register.rejected, (state :any, action :any) => {
          state.isLoggedIn = false;
        })
        .addCase(login.fulfilled, (state :any, action :any) => {
          state.isLoggedIn = true;
          state.user = action.payload.user;
        })
        .addCase(login.rejected, (state : any, action : any) => {
          state.isLoggedIn = false;
          state.user = null;
        })
        .addCase(logout.fulfilled, (state :any, action :any) => {
          state.isLoggedIn = false;
          state.user = null;
        });
    },
  });
  
  

const { reducer } = authSlice;
export default reducer;