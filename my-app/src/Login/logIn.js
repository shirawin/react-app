import React ,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import {Button,Box} from '@mui/material';
import './logIn.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import {checkUser} from '../Api/Users_Api'
import { url } from '../Api/Config';

const SignIn =()=>{

const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const [logIn, setLogIn] =useState({ userName: "", password: "" });
const navigate = useNavigate();
const handleSubmit = async (e) => {
  // const data = new FormData(e.currentTarget);
  // try{
  //   debugger
  //           var res = await fetch(`${url}checkPassword/${email}/${password}`)
  //           if (res.ok)
  //           {
  //       debugger
  //           }
  //       }catch(e){{
  //           debugger
  //   console.error(e)
  //       }}
  // console.log({
  //   email: data.get('email'),
  //   password: data.get('password'),
  // });
  let data1 = await checkUser(email,password)
   // e.preventDefault();
   // const response = await axios.post(`${hh}`,body);
   //todo useEffect
   // localStorage.setItem("uuid", 9);
   // navigate("/ManagePage")
}
const handleChangeName = event => {
  setEmail(event.target.value);
  console.log('value is:', email);
};
const handleChangePassword = event => {
  setPassword(event.target.value);
  console.log('value is:', password);
};

return (
    <Box component="form"  dir='rtl'>
        <h1>כניסה למערכת</h1>
        <div className='div-personal-detailes'>
        <TextField id="outlined-basic" label="שם" variant="outlined" onChange={handleChangeName} />
        <TextField id="outlined-basic" label="סיסמה" variant="outlined"   type='password'onChange={handleChangePassword}/>
        </div>

        <div className='ok-div-Wrap'>
            <span></span>
            <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" onClick={handleSubmit} >אישור</Button>
    </div>
    </Box>
    
    
);
}
export default SignIn