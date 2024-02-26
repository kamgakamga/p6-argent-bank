import axios from "axios";

export const POST_LOGIN_USER ="POST_LOGIN_USER";
export const POST_SIGNUP_USER ="POST_SIGNUP_USER";
export const POST_USER_PROFILE ="POST_USER_PROFILE";
export const UPDATE_USER_PROFILE ="UPDATE_USER_PROFILE";


//url de base
const BASE_URL = 'http://localhost:3001/api/v1/';


//service de connxion
const login = (username : string , password : string) => {
  return axios
    .post(`${BASE_URL + 'user/login'}`,{
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

//service de deconexion
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;