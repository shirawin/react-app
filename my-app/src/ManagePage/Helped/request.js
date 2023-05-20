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
import { CreateTravel } from '../../Api/Travels_Api';
import { useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './request.css'

const Request=()=>{
 const[openList,setOpenList]= useState(false);
 const[objReq,setObjReq]= useState({});
 const[cnt,setCnt]= useState(0);
 const [checked, setChecked] = useState([]);
 const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
const [value, setValue] = useState();
const user = useSelector((state) => state.user);
const onSubmit=async()=>{
  debugger
  handleChange(user.Code,"userId")
  handleChange(value,"Date")
var x = await CreateTravel(objReq)
}
const handleCheckboxChange = (event) => {
  const checkboxId = event.target.getAttribute('id');
    const isChecked = event.target.checked;
  if (isChecked) {
    debugger
    // Add the checkbox id to the selected checkboxes
    setSelectedCheckboxes((prevSelected) => [...prevSelected, checkboxId]);
  } else {
    // Remove the checkbox id from the selected checkboxes
    setSelectedCheckboxes((prevSelected) =>
      prevSelected.filter((id) => id !== checkboxId)
    );
  }
};

const isDisabled = (checkboxId) => {
  debugger
  return selectedCheckboxes.length >= 4 && !selectedCheckboxes.includes(checkboxId);
};

 const handleChange = (selected,key) => {
   debugger
  setObjReq((prev) => ({
    ...prev,
    [key]: selected,
  }));
  };
  
    return(
        <div className="main">
            <h1>בקשה חדשה</h1>
            <div className='div-title-req'>מתי?</div>
            <div className='date-time-div'>

    <Datetime/>
            </div>
            <div className='divDest'>
            <TextField id="outlined-basic" label="יעד" variant="outlined"  onBlur={(e)=>{handleChange(e.target.value,"Dest")}}/>
            </div>
            <div >
                 <h3 className='title'>סמן את הנדרש עבורך:</h3>
                 <FormGroup row className='form-group-r'>
                 <FormControlLabel control={<Checkbox id="1" style={{color: '#ff9100'}}/>} label="אופנוע"     disabled={isDisabled("1")} onChange={handleCheckboxChange} onClick={(e)=>{ handleChange(e.target.checked,"Motorcycle")} }  />
                 <FormControlLabel control={<Checkbox id="2" style={{color: '#ff9100'}}/>}  label="רכב פרטי"     disabled={isDisabled("2")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Car")} }/>
                 <FormControlLabel control={<Checkbox id="3" style={{color: '#ff9100'}}/>} label="אמבולנס"     disabled={isDisabled("3")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Ambulance")} }/>
                 </FormGroup>
                 <FormGroup row className='form-group2-r'>
                   <FormControlLabel control={<Checkbox id="4" style={{color: '#ff9100'}}/>}   label="מעלון"     disabled={isDisabled("4")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Elevator")} } />
                   <FormControlLabel control={<Checkbox id="5" style={{color: '#ff9100'}}/>} label="כסא תינוק"    disabled={isDisabled("5")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"BabyChair")} }/>
                   <FormControlLabel control={<Checkbox id="6" style={{color: '#ff9100'}}/>} label="כמות נוסעים "   disabled={isDisabled("6")}onChange={handleCheckboxChange} onClick={(e)=>{ setOpenList(openList==true?false:true)}}/>
                </FormGroup>
                {openList&&
                <div className='passReq' >
                <label>מספר נוסעים</label>&nbsp;&nbsp;
                <NativeSelect
                    disabled={isDisabled("6")}
                 onChange={(e)=>{handleChange(e.target.value,"Places")}}
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
