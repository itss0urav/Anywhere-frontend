import axios from "axios";
import { BASE_URL } from "../Constants/baseUrl";
export class AuthService {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  async createUser(userDetails) {
    try {
      const result = await axios.post(`${BASE_URL}/auth/register`, userDetails);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  async loginUser(userDetails) {
    try {
      const result = await axios.post(`${BASE_URL}/auth/login`, userDetails, {
        withCredentials: true,
      });
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }

  async logOutUser(){
    localStorage.removeItem("anywhere-user")
  }
}
