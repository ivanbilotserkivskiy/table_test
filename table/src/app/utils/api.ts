import { Login } from "../types/Login"
import { PersonData } from "../types/PersonData";
import { TableData } from "../types/TableData";
import { UserData } from "../types/UserData";
import { client } from "./fetchClient"


export const authorizeUser = (formData: UserData) => {
  return client.post<Login>('login/', formData);
}

export const getTableData = () => {
  return client.get<TableData>('table/');
}

export const updatePersonData = ({ name, email, phone_number, address, birthday_date, id }: PersonData) => {
  return client.put<PersonData>(`table/${id}`, { name, email, phone_number, address, birthday_date})
}