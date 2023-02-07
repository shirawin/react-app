import React ,{ useState } from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import NativeSelect from '@mui/material/NativeSelect'
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import './request.css'

const Request=()=>{
 const [value, setValue] = React.useState(null);
 const[disable,setDisable]= useState(false);
 const[openList,setOpenList]= useState(false);
 const[objReq,setObjReq]= useState([]);
 
//  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
const onSubmit=async()=>{
var x = await createTravel(objReq)
}
 const handleChange = (selected,key) => {
  setObjReq((prev) => ({
    ...prev,
    [key]: selected,
  }));
  };
  let cnt=0
  const handleSubmit = (e) => {
    debugger
    if(e)
    {

      cnt+=1;
    }else{
      cnt-=1;

    }
    if(cnt===4){
      alert("זהווו");
      setDisable(true);
        }
  };
    return(
        <div className="main">
            <h1>בקשה חדשה</h1>
            <div className='div-title-req'>מתי?</div>
            <div className='date-time-div'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
          
            }}
             renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <TextField
             style={{color: '#ff9100'}}
             type='time'
             />
            </div>
            <div className='divDest'>
            <TextField id="outlined-basic" label="יעד" variant="outlined"  />
            </div>
            <div >
                 <h3 className='title'>סמן את הנדרש עבורך:</h3>
                 <FormGroup row className='form-group-r'>
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked);handleChange(e.target.checked,"Motorcycle")} }

                
                />
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי"  disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked);handleChange(e.target.checked,"Car")} }/>
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס"  disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked);handleChange(e.target.checked,"Ambulance")} }/>
                 </FormGroup>
                 <FormGroup row className='form-group2-r'>
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון"  disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked);handleChange(e.target.checked,"Elevator")} } />
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked);handleChange(e.target.checked,"BabyChair")} }/>
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כמות נוסעים "disabled={disable} onClick={(e)=>{handleSubmit(e.target.checked); setOpenList(openList==true?false:true)}}/>
                </FormGroup>
                {openList&&
                <div className='passReq' >
                <label>מספר נוסעים</label>&nbsp;&nbsp;
                <NativeSelect
                 disabled={disable}
                 
                 inputProps={{
                 name: 'pass',
                 id: 'uncontrolled-native',
                }}
                >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </NativeSelect>
                </div> 
                }
                 <div className='okDivWrap'>
                  <br/>
                    <Button style={{backgroundColor: '#ff9100'}} className='okReq' variant="contained" onClick={()=>{
                        onSubmit()} }>שלח בקשה</Button>
                 </div>
                </div>
              
          
       </div>
    );
}

export default Request;
