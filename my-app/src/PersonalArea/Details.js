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

const [moveRight, setMoveRight] = useState(false);
const [type,setType]=useState(true);
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

 const handleButtonClick = () => {
  debugger;
  setType(false);
  handleChange(true,"Usertype");
  setMoveRight(true);
};
return (
    <>
   {/* <div className='div-wrp'>
    <div className='div-title'>
        פרטים אישיים:
    </div>
    <div className='div-personal-detailes2'>
    <TextField id="outlined-basic" label="שם" variant="outlined"  onBlur={(e)=>{ handleChange(e.target.value,"Fullname")} }  /> 
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
    </div>  */}

    <div id="divSignUp">
    {/* {moving-div ${moveRight ? 'move-right' : ''}} */}
      <div id="login" className={`login-form-container-sign${moveRight ? '-right' : ''}`}>
         <header id="h">{props.header}</header>
         <fieldset id="feild">
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder="שם" onBlur={(e)=>{ handleChange(e.target.value,"Fullname")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="password" placeholder="טלפון נייד" onBlur={(e)=>{ handleChange(e.target.value,"Phone")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="email" placeholder="your@email.com" onBlur={(e)=>{ handleChange(e.target.value,"Email")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="password" placeholder="סיסמה" onBlur={(e)=>{ handleChange(e.target.value,"Password")}}/>
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder="עיר" onBlur={(e)=>{ handleChange(e.target.value,"City")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder="רחוב" onBlur={(e)=>{ handleChange(e.target.value,"Street")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="number" placeholder="בית" onBlur={(e)=>{ handleChange(e.target.value,"Housenumber")}}/>
            </div>
            {type&&
            <>
            <a className="signup" id="vol">מתנדב? <span className='link' onClick={handleButtonClick}>הוסף פרטים כאן</span></a>
            <Button id="continue" type="submit" >כניסה</Button>
            </>
            }
        </fieldset>
      </div>
      {/* פרטים עבור מתנדב */}
      {!type&&
      <div id="moreDetailes" class="login-form-container2">
         {/* <header id="h">{props.header}</header> */}
         <fieldset id="feild">
            <div class="input-wrapper-sign">
                <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" onClick={(e)=>{ handleChange(e.target.checked,"Motorcycle")} } />
            </div>
            <div class="input-wrapper-sign">
                <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי" onClick={(e)=>{ handleChange(e.target.checked,"Privatecar")} } />
            </div>
            <div class="input-wrapper-sign">
                <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס" onClick={(e)=>{ handleChange(e.target.checked,"Ambulance")} } />
            </div>
            <div class="input-wrapper-sign">
                <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון" onClick={(e)=>{ handleChange(e.target.checked,"Elevator")} } />
            </div>
            <div class="input-wrapper-sign">
                <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" onClick={(e)=>{ handleChange(e.target.checked,"Babychair")} } />
            </div>
            <div class="input-wrapper-sign">
            <input id="insign" type="number" placeholder="מספר מקומות" onBlur={(e)=>{ handleChange(e.target.value,"Numofsits")} } />
            </div>
            <div  class="input-wrapper-sign">
              <span className='mail'>התראות לדוא"ל:</span> 
              <br/>
              <Switch  defaultChecked  color="warning" />
              <input
                style={{color: '#ff9100', backgroundColor:'#272E38',border:'none',height:'5vh' ,width:'6vw',fontSize:'2em'}}
                placeholder="משעה"
                type="time"
                defaultValue="08:00"
               />
               <span>&nbsp;&nbsp;&nbsp;</span>
              <input
                style={{color: '#ff9100', backgroundColor:'#272E38',border:'none',height:'5vh' ,width:'6vw',fontSize:'2em'}}
                placeholder="עד שעה"
                type='time'
                defaultValue="20:00"
              />
            </div>
            <Button id="continue" type="submit" >אישור</Button>
        </fieldset>
      </div>
      }
    </div>

    </>
)
}
export default Details