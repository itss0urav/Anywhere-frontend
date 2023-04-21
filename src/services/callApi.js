import axios from "axios";
import { BASE_URL } from "../Constants/baseUrl";

export async function callApi(data) {
  const { relativePath, method, apiData } = data;

  let loggedInUser = localStorage.getItem("anywhere-user");
  loggedInUser = JSON.parse(loggedInUser);
  try {
    const result = await axios({
      method,
      url: `${BASE_URL}${relativePath}`,
      data:apiData,
      headers: {
        Authorization: `Bearer ${loggedInUser?.accessToken}`,
      },
    });

    return result;
  } catch (error) {
    console.log(error);
    if(error.response.status === 401){
      alert("Your session has expired. Please login again.")
    }
  }
}
