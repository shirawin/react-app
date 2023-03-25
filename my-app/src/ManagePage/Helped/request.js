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


import './request.css'

const Request=()=>{
  const id = useSelector((state) => state.users.id); 
//  const[disable,setDisable]= useState(false);
 const[openList,setOpenList]= useState(false);
 const[objReq,setObjReq]= useState({
   "userId":id
 });
 const[cnt,setCnt]= useState(0);
 const [checked, setChecked] = useState([]);
 const [selectedCount, setSelectedCount] = useState(0);

const [value, setValue] = useState();

const onSubmit=async()=>{
  debugger
  
  handleChange()
var x = await CreateTravel(objReq)
}
const isDisabled=selectedCount >= 4;
const handleCheckboxChange = (event) => {
debugger
  const { checked } = event.target;
  setSelectedCount(prevCount => checked ? prevCount + 1 : prevCount - 1);
};


 const handleChange = (selected,key) => {
   debugger
  setObjReq((prev) => ({
    ...prev,
    [key]: selected,
  }));
  };
  // var cnt=0;
  const handleSubmit = (e) => {
    debugger
    if(e)
    {

      setCnt(cnt+1);
    }else{
      setCnt(cnt-1);

    }
    if(cnt===3){
      alert("זהווו");
    
        }
  };
    return(
        <div className="main">
            <h1>בקשה חדשה</h1>
            <div className='div-title-req'>מתי?</div>
            <div className='date-time-div'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateTimePicker
    renderInput={(props) => <TextField {...props} />}
    label="DateTimePicker"
    value={value}
     onBlur={(e)=>{handleChange(e.target.value,"Date")}}
   
  />
</LocalizationProvider>
            </div>
            <div className='divDest'>
            <TextField id="outlined-basic" label="יעד" variant="outlined"  onBlur={(e)=>{handleChange(e.target.value,"Dest")}}/>
            </div>
            <div >
                 <h3 className='title'>סמן את הנדרש עבורך:</h3>
                 <FormGroup row className='form-group-r'>
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>}id="1" label="אופנוע"  disabled={ isDisabled} onChange={handleCheckboxChange} onClick={(e)=>{ handleChange(e.target.checked,"Motorcycle")} }  />
                
              
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} id="2" label="רכב פרטי"  disabled={isDisabled}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Car")} }/>
                 <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>}id="3" label="אמבולנס"  disabled={isDisabled}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Ambulance")} }/>
                 </FormGroup>
                 <FormGroup row className='form-group2-r'>
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>}  id="4" label="מעלון"  disabled={isDisabled}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"Elevator")} } />
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>}id="5" label="כסא תינוק" disabled={isDisabled}onChange={handleCheckboxChange} onClick={(e)=>{handleChange(e.target.checked,"BabyChair")} }/>
                   <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>}id="6" label="כמות נוסעים "disabled={isDisabled}onChange={handleCheckboxChange} onClick={(e)=>{ setOpenList(openList==true?false:true)}}/>
                </FormGroup>
                {openList&&
                <div className='passReq' >
                <label>מספר נוסעים</label>&nbsp;&nbsp;
                <NativeSelect
                 disabled={isDisabled}
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
