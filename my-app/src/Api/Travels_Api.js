
import axios from "axios";
import { Get_BY_DATE, Get_SUM_TRAVELS } from '../Api/Config'
import { Get_BY_CITY } from '../Api/Config'
import { Get_BY_DATE_CITY } from '../Api/Config'
import { Get_ALL_TRAVELS } from '../Api/Config'
import { createTravel } from '../Api/Config'


export const GetAllTravels = async () => {
    return await (await axios.get(Get_ALL_TRAVELS)).data;
}
// export const GetTravelsByDate = async (firstDate,secondDate) => {
//     return await (await axios.get(`${Get_BY_DATE}/${firstDate}/${secondDate}`)).data;
// }
// export const GetTravelsByCity = async (city) => {
//     return await (await axios.get(`${Get_BY_CITY}/${city}`)).data;
// }
// export const GetTravelsByCityandDate = async (city,firstDate,secondDate) => {
//     return await (await axios.get(`${Get_BY_DATE_CITY}/${city}/${firstDate}/${secondDate}`)).data;
// }
// export const UpdateStatus = async () => {
//     return await (await axios.get(`${Get_BY_DATE_CITY}/${city}/${firstDate}/${secondDate}`)).data;
// }
export const GetSumOfTravels = async () => {
    
    return await (await axios.get(Get_SUM_TRAVELS)).data;
}

export const createTravel= async(data)=>{
  return  axios.post(createTravel, data)
        .then(response => console.log({ articleId: response.data.id }));

}