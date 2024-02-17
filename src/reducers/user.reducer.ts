import { POST_LOGIN_USER, POST_SIGNUP_USER, POST_USER_PROFILE, UPDATE_USER_PROFILE } from "../actions/user.action";

const initialState = {user:null};

export default function userReducer(state=initialState,action:any){
  switch (action.type) {
        case POST_LOGIN_USER:
                return {
                        ...state,
                        user: action.payload,
                      };     
        case POST_SIGNUP_USER:
                return {
                        ...state,
                        user: null,
                      };
        case POST_USER_PROFILE:
                
                break;
        case UPDATE_USER_PROFILE:
                if (true) {
                        
                } else {
                        
                }
                break;
  
        default:           
return state;
  }
}