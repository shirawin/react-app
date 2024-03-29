import axios from "axios";
import { Get_Active_Travels, Get_BY_DATE, Get_SUM_TRAVELS } from '../Api/Config'
import { Get_BY_CITY } from '../Api/Config'
import { Get_BY_DATE_CITY } from '../Api/Config'
import { Get_ALL_TRAVELS,TAKE_TRAVEL } from '../Api/Config'
import { createTravel } from '../Api/Config'
import { filterTravel } from '../Api/Config'
import { filterTravelsByUser } from '../Api/Config'


export const GetAllTravels = async () => {
    return await (await axios.get(Get_ALL_TRAVELS)).data;
}
export const GetSumOfTravels = async () => {
    
    return await (await axios.get(Get_SUM_TRAVELS)).data;
}

export const CreateTravel= async(data)=>{
    debugger
  return await (await axios.post(createTravel, data)).data;
      
}

export const FilterTravels= async(data)=>{
  debugger
return await (await axios.post(filterTravel, data)).data;
    
}

export const FilterTravelsByUser= async(data,userID)=>{
  debugger
return await (await axios.post(`https://localhost:44330/api/filterTravelsByUser/${userID}`,data)).data;   
}

export const getActivTravels = async () => {
    
    return await axios.get(Get_Active_Travels).then((res) => {
      return res.data;
    });
  };
  export const GetTravelsByUser = async (userID) => {
    return await (await axios.get(`https://localhost:44330/api/GetTravelsByUser/${userID}`)).data;

}

export const TakeTravel= async(travelID,vounteerID)=>{
  debugger
return await (await axios.get(`https://localhost:44330/api/takeTravel/${travelID}/${vounteerID}`)).data; 
}  

export const CloseTravel= async(travelID)=>{
  debugger
return await (await axios.put(`https://localhost:44330/api/closeTravel/${travelID}`)).data; 
}  