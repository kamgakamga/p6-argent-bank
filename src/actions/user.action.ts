import axios from "axios";
import authHeader from "../services/auth-header";

export const POST_LOGIN_USER ="POST_LOGIN_USER";
export const POST_SIGNUP_USER ="POST_SIGNUP_USER";
export const POST_USER_PROFILE ="POST_USER_PROFILE";
export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";

const BASE_URL = 'http://localhost:3001/api/v1/user/';

export const postLoginUser = async (userCredential: any) => {
        try {
      const res =    axios.post(`${BASE_URL+'login'}`, userCredential).then((response) => {  
        //return { 'x-access-token': user.accessToken };
        if (response.data && response.data.body && response.data.body.token) {
                  console.log('data',response.data);    
                  localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
        });
        console.log('data',res);    
        return {
                type: POST_LOGIN_USER,
                payload: userCredential
              };
        } catch (error) {
          console.error('Une erreur est survenue lors de la connexion :', error);
          throw error; 
        }
      };
      

export const postSignUpUser = () =>{
return (dispatch: any) =>{
        return axios.post(`${BASE_URL+'signup'}`).then(
                (res) => {
                        console.log(res);
                }
        )
}
};

export const postUserProfile = () =>{
        return axios.post(`${BASE_URL+'profile'}`, { headers: authHeader() }).then(
                (res) => {
                        console.log(res);
                }
        )
};

export const updateUserProfile = () =>{
return (dispatch: any) =>{
        return axios.put(`${BASE_URL+'profile'}`).then(
                (res) => {
                        console.log(res);
                }
        )
}
};
export const logout = () => {
        localStorage.removeItem("user");
      };

export const setUser = (user: any) => ({
        type: 'SET_USER',
        payload: user
      });