import axios from "axios";

export const POST_LOGIN_USER ="POST_LOGIN_USER";
export const POST_SIGNUP_USER ="POST_SIGNUP_USER";
export const POST_USER_PROFILE ="POST_USER_PROFILE";
export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";


//url de base
const BASE_URL = 'http://localhost:3001/api/v1/user/';


//service de connxion
const login = (userCredential:any) => {
  return axios
    .post(`${BASE_URL + 'login'}`,userCredential)
    .then((response) => {
      if (response.data.body.token) {        
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

//service de deconexion
const logout = () => {
  localStorage.removeItem("user");
};

const register = (userData: any) => {
  return axios.post(BASE_URL + "signup",userData);
};

const authService = {
  login,
  logout,
  register
};

export default authService;