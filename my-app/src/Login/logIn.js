import React ,{ useState , useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {Button,Box} from '@mui/material';
import './logIn.css'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { style } from '@mui/system';
import {CheckingUser,getUser} from '../Api/Users_Api'
import store from '../redux/store';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/Slices/UserSlice';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
// import Swal from 'sweetalert2'
const SignIn =()=>{
  
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [contentAlert, setContentAlert] = useState('');
  const [navigateTo, setNavigateTo] = useState('');
  

  const [logIn, setLogIn] = useState({
    userName: '',
    password: ''
   
})
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  const resHelpeds = await CheckingUser(logIn.userName,logIn.password);
  
   if(resHelpeds==-1){
    setContentAlert('שם משתמש וסיסמה נכונים+משתמש לא פעיל')
    setShowAlert(true);
    return; 
 
   }
  else{
    if(resHelpeds==1){
      setContentAlert('סיסמא שגויה')
      setShowAlert(true);
      return; 
    }
    else{
      if (resHelpeds === 2) {
        setContentAlert('משתמש לא קיים');
        setShowAlert(true);
        setNavigateTo('/SignUp');
        return;
      

      }
      else{
     
        const userData = await getUser(resHelpeds);
        debugger
        dispatch(setUser(userData));
        navigate("/ManagePage");
       }
    }
}
      // localStorage.setItem("uuid", 9);
      // navigate("/ManagePage")
}
 
  const navigateToSignup=()=>{
    navigate("/signUp")
  }
  useEffect(() => {
    if (!showAlert && navigateTo) {
      navigate(navigateTo);
    }
  }, [showAlert, navigateTo]);

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
    {showAlert && (
      <>
        <div className="darken-background" />
        <div className="alert-container">
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert
       severity="warning" onClick={() => setShowAlert(false)}>
        <AlertTitle>אופס...</AlertTitle>
     {contentAlert} — <strong>נסה שנית!</strong>
     </Alert>
          </Stack>
        </div>
      </>
    )}
  </div>

</Box>
    
);
}
export default SignIn