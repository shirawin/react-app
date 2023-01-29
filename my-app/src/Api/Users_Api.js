
import axios from "axios";

import { Get_ALL_Users } from '../Api/Config'



export const GetAllUsers = async () => {
    return await (await axios.get(Get_ALL_Users)).data;

}