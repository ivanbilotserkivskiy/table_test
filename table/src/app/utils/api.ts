import { Login } from "../types/Login"
import { UserData } from "../types/UserData";
import { client } from "./fetchClient"


export const authorizeUser = (formData: UserData) => {
  return client.post<Login>('login/', formData);
}