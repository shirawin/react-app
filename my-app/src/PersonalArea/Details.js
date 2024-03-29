import React ,{ useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { createUser } from '../Api/Users_Api';
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux'; 
import './Details.css'
import Back from '../back'


const Details =(props)=>{
  const navigate = useNavigate();
  const [moveRight, setMoveRight] = useState(false);
  const [show,setShow]=useState(true);
  const [type,setType]=useState(false);
  const [alarm,setAlarm] = useState(false);
  const [minAlarm,setMinAlarm] = useState("08:00");
  const [maxAlarm,setMaxAlarm] = useState("20:00");
  const [listAlarms,setListAlarms] = useState([]);
  const [submit,setSubmit] = useState(false);
  const[objReq,setObjReq]= useState({"Usertype":false});
  const user = useSelector((state) => state.user);
 var newArr=[]
 useEffect(()=>{
   console.log(props.screen)
if(submit){
  debugger
  var obj={Minhour :minAlarm,Maxhour:maxAlarm}
  setListAlarms(listAlarms.push(obj));
  handleChange(listAlarms,"listOfAlarms")
  onSubmit();
}
if(props.screen&&props.type){
  console.log(moveRight)
  setMoveRight(true);
}
} ,[submit])
const handleTime=()=>{
  
  var obj={Minhour :minAlarm,Maxhour:maxAlarm}
  newArr.push(obj)
  setListAlarms(listAlarms.concat(obj));
  setMinAlarm("08:00");
  setMaxAlarm("20:00");
  // handleChange(listAlarms,"listOfAlarms")
}
const onSubmit=async()=>{
  debugger
  objReq.listOfAlarms=listAlarms
  console.log(objReq.listOfAlarms+"submit")

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
 
 const handleNavigate=()=>{
   if (props.screen){
     return "/ManagePage"
   }
   else{
    return encodeURIComponent("/");
   }
 }
 const handleButtonClick = () => {
    
  debugger;
  setShow(false);
  setType(true)
  handleChange(true,"Usertype");
  setMoveRight(true);
};
return (
    <>
    <div id="divSignUp">

    <Back  navigateHref={props.screen?"/ManagePage":"/"} ></Back>
    {/* {moving-div ${moveRight ? 'move-right' : ''}} */}
      <div id="login" className={`login-form-container-sign${moveRight ? '-right' : ''}`}>
         <header id="h">{props.header}</header>
         <fieldset id="feild">
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder={props.screen ? user.fullname: "שם"} onBlur={(e)=>{ handleChange(e.target.value,"Fullname")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder={props.screen ? user.phone: "טלפון נייד"} onBlur={(e)=>{ handleChange(e.target.value,"Phone")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="email" placeholder={props.screen ? user.email: "your@email.com"} onBlur={(e)=>{ handleChange(e.target.value,"Email")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="password" placeholder={props.screen ? user.password: "סיסמה"} onBlur={(e)=>{ handleChange(e.target.value,"Password")}}/>
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder={props.screen ? user.city: "עיר"} onBlur={(e)=>{ handleChange(e.target.value,"City")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="text" placeholder={props.screen ? user.Street: "רחוב"} onBlur={(e)=>{ handleChange(e.target.value,"Street")}} />
            </div>
            <div class="input-wrapper-sign">
              <input id="insign" type="number" placeholder={props.screen ? user.housenumber: "בית"} onBlur={(e)=>{ handleChange(e.target.value,"Housenumber")}}/>
            </div>
            {(show&&!props.screen)&&
             <>
            {(props.type&&!props.screen)&&
            <>
            <a className="signup" id="vol">מתנדב? <span className='link' onClick={handleButtonClick}>הוסף פרטים כאן</span></a>
            </>
            } 
             <Button id="continue" type="submit" onClick={()=>{onSubmit()}} >אישור</Button>
             </>
            }
            {(!props.type)&&
            <>
              <Button id="continue" type="submit" onClick={()=>{onSubmit()}} >אישור</Button>
            </>
            }
        </fieldset>
      </div>
      {/* פרטים עבור מתנדב */}
      {(type&&props.type||props.screen&&props.type)&&
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
            <div  class="input-wrapper-signAlarm">
              <span className='mail'>התראות לדוא"ל:</span> 
              <br/>
              <Switch  checked={alarm} onChange={()=>setAlarm(!alarm)} color="warning" />
              {alarm&&
              <>
              <input
                style={{color: '#ff9100', backgroundColor:'#272E38',border:'none',height:'5vh' ,width:'5vw',fontSize:'2em'}}
                placeholder="משעה"
                type="time"
                value={minAlarm}
                onChange={(e)=>{setMinAlarm(e.target.value)}}
               />
               <span>&nbsp;&nbsp;&nbsp;</span>
              <input
                style={{color: '#ff9100', backgroundColor:'#272E38',border:'none',height:'5vh' ,width:'5vw',fontSize:'2em'}}
                placeholder="עד שעה"
                type='time'
                onChange={(e)=>{setMaxAlarm(e.target.value)}}
               value={maxAlarm}
              />
               <IconButton onClick={handleTime} >
              <AddAlarmIcon/>
              </IconButton>
              </>
            }
            </div>
            <Button id="continue" type="submit"  onClick={()=>setSubmit(true)}>אישור</Button>
        </fieldset>
      </div>
      }
      <div id="backToManage" onClick={()=>navigate("/ManagePage")}></div>
    </div>

    </>
)
}
export default Details