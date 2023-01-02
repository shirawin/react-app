import React ,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import {Button,Box} from '@mui/material';
import './logIn.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const SignIn =()=>{
  
const [logIn, setLogIn] =useState({ userName: "", password: "" });
const navigate = useNavigate();
const handleSubmit = async (e) => {
  
    e.preventDefault();
   
      // const response = await axios.post(`${hh}`,body);
      localStorage.setItem("uuid", 9);
    navigate("/ManagePage")
   
  }

return (
    <Box component="form" onSubmit={handleSubmit} dir='rtl'>
        <h1>כניסה למערכת</h1>
        <div className='div-personal-detailes'>
        <TextField id="outlined-basic" label="שם" variant="outlined"  />
        <TextField id="outlined-basic" label="סיסמה" variant="outlined"   type='password'/>
        </div>

        <div className='ok-div-Wrap'>
                    <span></span>
                    <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" type='submit'>אישור</Button>
    </div>
    </Box>
    
    
);
}
export default SignIn