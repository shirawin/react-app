import axios from "axios";
import { Get_SUM_VOLUNTEERS } from "./Config";

export const GetSumOfVolunteers = async () => {

    return await (await axios.get(Get_SUM_VOLUNTEERS)).data;

}