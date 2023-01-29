
import axios from "axios";
import { Get_ALL_Users,check_User } from '../Api/Config'
import {url} from "../Api/Config"


export const GetAllUsers = async () => {
    return await (await axios.get(Get_ALL_Users)).data;
}

export const checkUser= async(email,password)=>{
    // debugger
    return await ( axios.get(`${url}checkPassword/${email}/${password}`)).then(res => {
        const persons = res.data;
        console.log(persons);
      })
    
}
export const createUser=(user)=>{
    //POST
}