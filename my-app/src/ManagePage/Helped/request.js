import React ,{ useState } from 'react'
import TextField from '@mui/material/TextField';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
const Request=()=>{
 const[openList,setOpenList]= useState(false);
 const[cnt,setCnt]= useState(0);
 const [selectedDate, setSelectedDate] = useState(null);
 const [checked, setChecked] = useState([]);
 const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
const [value, setValue] = useState();
const user = useSelector((state) => state.user); 
const[objReq,setObjReq]= useState({"UserId":user.code});

const onSubmit=async()=>{
  

  debugger
  alert(objReq);

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
const handleDateChange = (date) => {
  const formattedDate = new Date(date);
  const formattedDateTime = formattedDate.toISOString().slice(0, 16); // Get the formatted date and time without seconds and milliseconds
  handleChange(formattedDateTime, "dateTimeOfAvailability");
  const currentDate = new Date(); 
  const formattedDate2 = currentDate.toISOString().split('T')[0];
   handleChange(formattedDate2, "dateOfCreate"); 
  setSelectedDate(date);
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
       
                  <Card  id="cardcssRequest" >

            <h1>בקשה חדשה</h1>
            <div className='div-title-req'>מתי?</div>
            <div className='divDest'>
            <TextField id="outlined-basic" label="יעד" variant="outlined"  onBlur={(e)=>{handleChange(e.target.value,"Dest")}}/>
            </div>
            <div className='divDest'>
            <input id="insign" type="datetime-local" onBlur={(e)=>{handleChange(e.target.value,"Time")}}/>
            </div>
            <br/>
            <div >
                 <h3 className='title'>סמן את הנדרש עבורך:</h3>
                 <FormGroup row className='form-group-r'>
                 <FormControlLabel control={<Checkbox id="1" style={{color: 'black'}}/>} label="אופנוע"     disabled={isDisabled("1")} onChange={handleCheckboxChange} onClick={(e)=>{ handleChange(e.target.checked,"Motorcycle")} }  />
                 <FormControlLabel control={<Checkbox id="2" style={{color: 'black'}}/>}  label="רכב פרטי"     disabled={isDisabled("2")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Car")} }/>
                 <FormControlLabel control={<Checkbox id="3" style={{color: 'black'}}/>} label="אמבולנס"     disabled={isDisabled("3")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Ambulance")} }/>
                 </FormGroup>
                 <FormGroup row className='form-group2-r'>
                   <FormControlLabel control={<Checkbox id="4" style={{color: 'black'}}/>}   label="מעלון"     disabled={isDisabled("4")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Elevator")} } />
                   <FormControlLabel control={<Checkbox id="5" style={{color: 'black'}}/>} label="כסא תינוק"    disabled={isDisabled("5")}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"BabyChair")} }/>
                   <FormControlLabel control={<Checkbox id="6" style={{color: 'black'}}/>} label="כמות נוסעים "   disabled={isDisabled("6")}onChange={handleCheckboxChange} onClick={(e)=>{ setOpenList(openList==true?false:true)}}/>
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
                    <Button style={{backgroundColor: '#ff9100',border :'solid 3px black',color:'black'}} className='okReq' variant="contained" onClick={()=>{
                        onSubmit()} }>שלח בקשה</Button>
                 </div>
                </div>
              
          </Card>
      
    );
}

export default Request;
