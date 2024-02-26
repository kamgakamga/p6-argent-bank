import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/api/v1/";

const getProfile = () => {
  return axios.post(API_URL + 'profile');
};

const updateProfile = () => {
  return axios.put(API_URL + 'profile', { headers: authHeader() });
};

const userService = {
    getProfile,
    updateProfile
};

export default userService