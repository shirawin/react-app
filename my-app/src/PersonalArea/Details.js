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
import './Details.css'

const Details =(props)=>{
const [type,setType]=useState(false);
const [alarm,setAlarm] = useState(true);


return (
    <>
 
   <div className='div-wrp'>
    <div className='div-title'>
        פרטים אישיים:
    </div>
    <div className='div-personal-detailes2'>
    <TextField id="outlined-basic" label="שם" variant="outlined"  />
    <TextField id="outlined-basic" label="טלפון נייד" variant="outlined" />
    </div>
    <div className='div-personal-detailes2'>
    <TextField id="outlined-basic" label="אי-מייל" variant="outlined"  />
    <TextField id="outlined-basic" label="סיסמה" variant="outlined" />
    </div>
    <div className='div-title'>
        כתובת:
    </div>
    <div className='div-address2'>
    <TextField id="outlined-basic" label="עיר" variant="outlined" />
    <TextField id="outlined-basic" label="רחוב" variant="outlined" />
    <TextField id="outlined-basic" label="בית" variant="outlined"  type="number" className='num'/>
    </div>
    {!props.userType===2||!props.userType===1&&
    <h2 className="signup" id="vol">מתנדב? <span className='link' onClick={()=>setType(true)}>הוסף פרטים כאן</span></h2>
    }
    {props.userType===2&&
    <div className='more-detailes'>
     <div className='div-title'>
       פרטי רכב:
     </div>
     <FormGroup row className='formGroup'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס" />
    </FormGroup>
    <FormGroup row className='formGroup2'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" />
    </FormGroup>
    <duv className='div-places'>
    <TextField id="outlined-basic" label="מספר מקומות " variant="outlined"  type="number"/>
    </duv>
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
                        alert(props.userType)} }>אישור</Button>
    </div> 
    </>
)
}
export default Details