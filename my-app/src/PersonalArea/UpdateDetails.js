import React, { useEffect, useState } from 'react'
import './UpdateDetails.css'
import Details from '../PersonalArea/Details'
import { useSelector } from 'react-redux'; 
import { GetUserById } from '../Api/Users_Api';

const UpdateDetails =()=>{

    const id = useSelector((state) => state.users.id); 
    const [userDetails,setUserDetails]=useState({})
useEffect(()=>{
const fetchData=async()=>{
var res = await GetUserById(id)
setUserDetails(res)
}
fetchData()
},[])
return (
    <div dir='rtl'>
    <h1>עדכון פרטים אישיים</h1>
       <Details userType={true} userDetails={userDetails} />
    </div>
)
}
export default UpdateDetails