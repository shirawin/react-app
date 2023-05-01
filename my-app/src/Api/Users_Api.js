
import axios from "axios";

import { Get_ALL_Users, Get_SUM_HELPEDS } from '../Api/Config'



export const GetAllUsers = async () => {
    return await (await axios.get(Get_ALL_Users)).data;

}
export const GetSumOfHelpeds = async () => {
    return await (await axios.get(Get_SUM_HELPEDS)).data;

}
export const CheckingUser = async (email,password) => {
    return await (await axios.get(`https://localhost:44330/api/Users/checkPassword/${email}/${password}`)).data;

}

export const GetUserById = async (id) => {
    return await (await axios.get(`https://localhost:44330/api/Users/getUserById/${id}`)).data;

}
export const getUser = async (code) => {
    return await (await axios.get(`https://localhost:44330/api/Users/${code}`)).data;

}