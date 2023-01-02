
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

const SignUp =()=>{
    const [volunteer, setVolunteer]=useState(false);
return (
    <div className="container">
    <h1>הרשמה למערכת</h1>
    <div className='div-user-type'>
    <RadioGroup row name="user-type" defaultValue="helped" className="user-type" >
      <FormControlLabel value="helped" label="נעזר" onClick={()=>setVolunteer(false)} control={<Radio style={{color: '#ff9100'}}/>} style={{color: '#a1a1a1'}}/>
      <FormControlLabel value="volunteer" label="מתנדב" onClick={()=>setVolunteer(true)} control={<Radio style={{color: '#ff9100'}}/>} style={{color: '#a1a1a1'}}/>
    </RadioGroup>
    </div>
     <Details userType={volunteer}/>
    </div>
 )
}
export default SignUp