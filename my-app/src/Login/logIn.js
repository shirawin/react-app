import React ,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import {Button,Box} from '@mui/material';
import './logIn.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { style } from '@mui/system';
import {CheckingUser} from '../Api/Users_Api'
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'


const SignIn =()=>{
  
  
  const [logIn, setLogIn] = useState({
    userName: '',
    password: ''
   
})
const navigate = useNavigate();
const handleSubmit = async (e) => {
  /*"email": "shv1891@gmail.com",
    "phone": "0527189124",
    "address": "הרב אברמסקי 43",
    "activestatus": true,
    "usertype": true,
    "password": "12345";
    -------------
    "email": "yael@gmail.com",
    "phone": "0527690126",
    "address": "צבי 25",
    "activestatus": true,
    "usertype": true,
    "password": "22222",
    *\ */
  
  e.preventDefault();
  debugger
  const resHelpeds = await CheckingUser(logIn.userName,logIn.password);
   if(resHelpeds==-1){
  alert("שם משתמש וסיסמה נכונים+משתמש לא פעיל");
   }
  else{
    if(resHelpeds==1){
      alert("סיסמה שגויה ")
    }
    else{
      if(resHelpeds==2){
        alert("משתמש לא קיים")
        navigate("/SignUp")

      }
      // else{
      //    navigate("/ManagePage")
      // }

    }
  }
        navigate("/ManagePage")


      localStorage.setItem("uuid", 9);
  }
  const navigateToSignup=()=>{
    navigate("/SignUp")
  }


return (
   <div className='login'>
    <Box component="form" onSubmit={handleSubmit} dir='rtl' >
        <h1 className='title'>התחברות</h1>
        <h2 className="signup">פעם ראשונה באתר? <span className='link' onClick={navigateToSignup}>הרשמה</span></h2>
          <div className='name'>
          <TextField id="outlined-basic" label="שם" variant="outlined"  onChange={(e) => setLogIn({ ...logIn, userName: e.target.value})}/>
          </div>
          <div className='pass'>
          <TextField id="outlined-basic" label="סיסמה" variant="outlined" type='password' onChange={(e) => setLogIn({ ...logIn, password: e.target.value})}/>
          </div>
        <div className="ok-div-Wrap">
             <span></span>
             <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" type='submit'>אישור</Button>
        </div>
    </Box>
   </div>
    
);
}
export default SignIn