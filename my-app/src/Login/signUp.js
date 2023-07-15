
import React ,{ useState } from 'react'
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import './signUp.css'
import { Grid } from '@mui/material';
import Details from '../PersonalArea/Details'
import { useNavigate } from 'react-router-dom'

const SignUp =()=>{
    const navigate = useNavigate();
    const [volunteer, setVolunteer]=useState(false);
return (
  <div>
         <div className="details">
          <Details screen={false} header={'הרשמה למערכת'} type={true}/> 
         </div>
 </div>
 )
}
export default SignUp