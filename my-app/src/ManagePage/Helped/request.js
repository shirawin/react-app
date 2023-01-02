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
//  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
 const handleChange = (newValue) => {
    setValue(newValue);
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
            <TextField id="outlined-basic" label="יעד" variant="outlined" />
            </div>
            <div >
                 <h3 className='title'>סמן את הנדרש עבורך:</h3>
                 <FormGroup row className='form-group-r'>
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" />
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי" />
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס" />
                 </FormGroup>
                 <FormGroup row className='form-group2-r'>
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון" />
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" />
                </FormGroup>
                <div className='passReq' >
                <label>מספר נוסעים</label>&nbsp;&nbsp;
                <NativeSelect
                 defaultValue={0}
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
                 <div className='okDivWrap'>
                  <br/>
                    <Button style={{backgroundColor: '#ff9100'}} className='okReq' variant="contained" onClick={()=>{
                        alert('האם אתה בטוח?')} }>שלח בקשה</Button>
                 </div>
                </div>
              
          
       </div>
    );
}

export default Request;
