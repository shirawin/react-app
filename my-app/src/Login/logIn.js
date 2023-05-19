import React ,{ useState } from 'react'
import TextField from '@mui/material/TextField';
import {Button,Box} from '@mui/material';
import './logIn.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { style } from '@mui/system';
import {CheckingUser,getUser} from '../Api/Users_Api'
//import Alert from '@mui/material/Alert';
import store from '../redux/store';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { setUser } from '../redux/Slices/UserSlice';
import { Alert, Space } from 'antd';
// import Swal from 'sweetalert2'
=======
import { keepUser} from '../redux/Slices/UserSlice';
>>>>>>> 63d5fe0ab2381219928541f59a73c78ef815fb88


const SignIn =()=>{
  
  const dispatch = useDispatch();
  const [logIn, setLogIn] = useState({
    userName: '',
    password: ''
   
})
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
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
      else{
<<<<<<< HEAD
     
        const userData = await getUser(resHelpeds);
        debugger
        dispatch(setUser(userData));
=======
        // const userData = await getUser(resHelpeds);
        // console.log(userData);
        // dispatch(keepUser(userData));
>>>>>>> 63d5fe0ab2381219928541f59a73c78ef815fb88
        navigate("/ManagePage");
       }
    }
}
      // localStorage.setItem("uuid", 9);
      // navigate("/ManagePage")
}
 
  const navigateToSignup=()=>{
    navigate("/SignUp")
  }


return (
  //  <div className='login'>
  //   <Box component="form" onSubmit={handleSubmit} dir='rtl' >
  //       <h1 className='title'>התחברות</h1>
  //       <h2 className="signup">פעם ראשונה באתר? <span className='link' onClick={navigateToSignup}>הרשמה</span></h2>
  //         <div className='name'>
  //         <TextField id="outlined-basic" label="אימייל" variant="outlined"  onChange={(e) => setLogIn({ ...logIn, userName: e.target.value})}/>
  //         </div>
  //         <div className='pass'>
  //         <TextField id="outlined-basic" label="סיסמה" variant="outlined" type='password' onChange={(e) => setLogIn({ ...logIn, password: e.target.value})}/>
  //         </div>
  //       <div className="ok-div-Wrap">
  //            <span></span>
  //            <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" type='submit'>אישור</Button>
  //       </div>
  //   </Box>
  //  </div>
<Box component="form" onSubmit={handleSubmit} dir='rtl' >
<div id="backTohome" onClick={()=>navigate("/")}></div>
<div id="divLogin">
    <div id="login" class="login-form-container">
    <header id="h">התחברות למערכת</header>
    <fieldset id="feild">
    <div class="input-wrapper">
      <input id="in" type="text" placeholder="your@email.com" onChange={(e) => setLogIn({ ...logIn, userName: e.target.value})}/>
    </div>
    <div class="input-wrapper">
      <input id="in" type="password" placeholder="סיסמה" onChange={(e) => setLogIn({ ...logIn, password: e.target.value})}/>
    </div>
    <Button id="continue" type="submit" >כניסה</Button>
    </fieldset>
    </div>
</div>
</Box>
    
);
}
export default SignIn