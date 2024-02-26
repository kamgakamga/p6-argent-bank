import axios from "axios";

export const POST_LOGIN_USER ="POST_LOGIN_USER";
export const POST_SIGNUP_USER ="POST_SIGNUP_USER";
export const POST_USER_PROFILE ="POST_USER_PROFILE";
export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";

const BASE_URL = 'http://localhost:3001/api/v1/user/';

export const postLoginUser = async (userCredential: any) => {
        try {
          const response = axios.post(`${BASE_URL+'login'}`, userCredential);
          console.log('response', response);
        //  localStorage.setItem("user", JSON.stringify((await response).data));
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
return (dispatch: any) =>{
       
        return axios.post(`${BASE_URL+'profile'}`).then(
                (res) => {
                        console.log(res);
                }
        )
}
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


export const setUser = (user: any) => ({
        type: 'SET_USER',
        payload: user
      });