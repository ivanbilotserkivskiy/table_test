import { Login } from "../types/Login"
import { client } from "./fetchClient"


export const authorizeUser = () => {
  return client.get<Login>('/login');
}