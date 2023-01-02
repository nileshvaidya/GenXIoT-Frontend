import axios from "axios";
import { AxiosError } from 'axios';

const api = axios.create({
  baseURL: "http://localhost:9000/api",
});

export const loginUser = async({user_type,email,password}:ILoginType) => {

  try {
    user_type = "Customer";
    const { data } = await api.post("/v1/user/signin", {user_type, email, password });
    return data
  } catch (err) {
    const error = err as AxiosError
    if (error.response) throw Error(error.message);
    }
  
}