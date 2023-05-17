import React ,{ useState } from 'react'
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { createUser } from '../Api/Users_Api';

import './Details.css'

const Details =(props)=>{
const [type,setType]=useState(false);
const [alarm,setAlarm] = useState(true);
const[objReq,setObjReq]= useState({"Usertype":false});

const onSubmit=async()=>{
  debugger
  var x = await createUser(objReq)
  if(x){
    alert("נוסף בהצלחה,הידד!!")
  }
}
const handleChange = (selected,key) => {
  
 setObjReq((prev) => ({
   ...prev,
   [key]: selected,
 }));
 };
return (
    <>
 
   <div className='div-wrp'>
    <div className='div-title'>
        פרטים אישיים:
    </div>
    <div className='div-personal-detailes2'>
    <TextField id="outlined-basic" label="שם" variant="outlined"  onBlur={(e)=>{ handleChange(e.target.value,"Fullname")} }  /> 
    {/* value={objUser.name!==undefined?objUser.name: props.userDetails.name} */}
    <TextField id="outlined-basic" label="טלפון נייד" variant="outlined"  onBlur={(e)=>{ handleChange(e.target.value,"Phone")} }  />
    </div>
    <div className='div-personal-detailes2'>
    <TextField id="outlined-basic" label="אי-מייל" variant="outlined" onBlur={(e)=>{ handleChange(e.target.value,"Email")} }  />
    <TextField id="outlined-basic" label="סיסמה" variant="outlined" onBlur={(e)=>{ handleChange(e.target.value,"Password")} } />
    </div>
    <div className='div-title' >
        כתובת:
    </div>
    <div className='div-address2'>
    <TextField id="outlined-basic" label="עיר" variant="outlined"  onBlur={(e)=>{ handleChange(e.target.value,"City")} }  />
    <TextField id="outlined-basic" label="רחוב" variant="outlined" onBlur={(e)=>{ handleChange(e.target.value,"Street")} } />
    <TextField id="outlined-basic" label="בית" variant="outlined"  type="number" className='num' onBlur={(e)=>{ handleChange(e.target.value,"Housenumber")} } />
    </div>
    {!type&&
    <h2 className="signup" id="vol">מתנדב? <span className='link' onClick={()=>{setType(true);handleChange(true,"Usertype")}}>הוסף פרטים כאן</span></h2>
    }
    {type&&
    <div className='more-detailes'>
     <div className='div-title'>
       פרטי רכב:
     </div>
     <FormGroup row className='formGroup'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" onClick={(e)=>{ handleChange(e.target.checked,"Motorcycle")} } />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי" onClick={(e)=>{ handleChange(e.target.checked,"Privatecar")} } />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס" onClick={(e)=>{ handleChange(e.target.checked,"Ambulance")} } />
    </FormGroup>
    <FormGroup row className='formGroup2'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון" onClick={(e)=>{ handleChange(e.target.checked,"Elevator")} } />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" onClick={(e)=>{ handleChange(e.target.checked,"Babychair")} } />
    </FormGroup>
    <div className='div-places'>
    <TextField id="outlined-basic" label="מספר מקומות " variant="outlined"  type="number"  onBlur={(e)=>{ handleChange(e.target.value,"Numofsits")} } />
    </div>
    <div >
       <div className='alarmTime'>
       <span className='mail'>התראות לדוא"ל:</span> 
       <Switch  defaultChecked  color="warning" />
      <TextField
         style={{color: '#ff9100'}}
         label="משעה"
         type="time"
         defaultValue="08:00"
       />
      <TextField
         style={{color: '#ff9100'}} 
         label="עד שעה"
         type='time'
         defaultValue="20:00"
      />
      </div>
     </div>
     </div>
    }
    </div>
    <div className='okWrap2'>
                    <span></span>
                    <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" onClick={()=>{
                        onSubmit()} }>אישור</Button>
    </div> 
    </>
)
}
export default Details