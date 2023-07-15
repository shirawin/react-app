import React, { useState } from 'react'
import './ManagePage.css'
import Grid from '@mui/material/Grid';
import { Navigate, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useEffect } from "react";
import Travel from './Travels/Travel';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {FilterTravels, getActivTravels,GetTravelsByUser,FilterTravelsByUser} from '../Api/Travels_Api'
import { Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux'; 
import {orangcar} from '../Images/orangcar.png'
import Back from '../back'

const ManagePage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [firstDate, setFirstDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [disable, setDisable] = useState(true);
  const [searchObj, setSerchObj] = useState([]);
  const [city, setCity] = useState("");
  const [connection, setConnection] = useState(null);
  const [cityDest,setCityDest] = useState("");
  const cities = ["אשדוד", "ירשלים", "תל אביב", "פתח תקווה","בני ברק","רחובות","אלעד","חיפה","sss"]
  const options = ["עדכון פרטים", "המודעות שלי", "צור מודעה"]
  const [resData, setResData] = useState([]);
  
 


//  useEffect(() => {
//   const newConnection = new signalR.HubConnectionBuilder()
//     .withUrl("https://localhost:44330" + "/hubs/chat")
//     .withAutomaticReconnect()
//     .build();

//   setConnection(newConnection);
// }, []);

// const createConnection = () => {
//   debugger
//   if (connection === null) {
//     const newConnection = new HubConnectionBuilder()
//       .withUrl("https://localhost:44330" + "/my-hub", {
//         skipNegotiation: true,
//         transport: signalR.HttpTransportType.WebSockets,
//       })
//       .withAutomaticReconnect()
//       .build();
//     setConnection(newConnection);
//   }
// };
const GetAllTravels=async()=>{

}



// useEffect(() => {
//   if (connection) {
//     connection.start()
//       .then(() => console.log('Connection started!'))
//       .catch(err => console.error('Error while establishing connection:', err));

//     connection.on('ReceiveMessage', (user, message) => {
//       setMessages([...messages, { user, message }]);
//     });
//   }
// }, [connection, messages]);

// const sendMessage = () => {
//   connection.invoke('SendMessage', 'User', message);
//   setMessage('');
// };

  //כשחל שינוי בתאריך הראשון
  const onChange =(selected,key)=>{
    setSerchObj((prev) => ({
      ...prev,
      [key]: selected,
    }));
  }
const fetchData = async () => {
  debugger;
  console.log(user);
 let data=[]
  if(user.usertype){
    debugger
    data= await getActivTravels();
  }
  else{
    data= await GetTravelsByUser(user.code);
    data= await GetTravelsByUser(user.code);
  }
  setResData(data);
 
};

useEffect(() => {
  fetchData()
}, []);
  const handleChangeFirstDate = (newValue) => {
    setFirstDate(newValue);
    setDisable(false);
    onChange(newValue,"FirstDate")
    
  };
  //כשחל שינוי בתאריך השני
  const handleChangeSecondDate = (newValue) => {
    setSecondDate(newValue);
    setDisable(false);
    onChange(newValue,"SecondDate")
  };
  //כשחל שינו בעיר
  const handleChangeCity = async (newValue) => {
    newValue.preventDefault();
    setCity(newValue);
    setDisable(false);
  };
  //כשחל שינוי בעיר יעד
  const handleChangeCityDest = async (newValue) => {
    newValue.preventDefault();
    setCityDest(newValue);
    setDisable(false);
  };
  const handleReset=()=>{
    setSerchObj([])
    setCity("")
    setCityDest("");
    setFirstDate(null)
    setSecondDate(null)
    fetchData()
    setDisable(true)
  }
  //בלחיצה על כפתור הפלטור

  const handleSubmit = async () => {
    debugger
    var x 
    if(user.usertype){
     x= await FilterTravels(searchObj)
    debugger
   }
   else{
    debugger
    x= await FilterTravelsByUser(searchObj,user.code)
   }
    setResData(x)
  };
  //בלחיצה על הכפתור למעבר לעדכון פרטים אישיים
  const submit = async (e) => {
  debugger
    e.preventDefault();
    navigate("/PersonalArea")
  }
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (event) => {
    event.preventDefault();
    setAnchorEl(null);
    alert(event.target.value);
  };
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div id="main">
         

      <Box id="boxBar" >

        <AppBar position="static" id="bar">
          <Toolbar>
          {/* <button onClick={sendMessage}>Send</button> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            {auth && (
              <div>
                {user.fullname}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={submit}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>  <Back  navigateHref={'/'} ></Back>
      <FormControl id="form" className='header'> <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Grid item xs
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center">
          <Grid item style={{ width: '12vw'}}>
            <FormControl id="cityLabel">
              <InputLabel >עיר מוצא</InputLabel>
              <Select
                labelId="cityLabel"
                id="city"
                value={city}
                label="city"
                onChange={(e)=>{onChange(e.target.value,"city");setDisable(false);setCity(e.target.value)}}>
                {cities.map((city) => {
                  return (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            </Grid>
            <Grid item style={{ width: '13vw'}}>
            <FormControl id="cityDestLabel">
              <InputLabel >עיר יעד</InputLabel>
              <Select
                labelId="cityDestLabel"
                id="cityDest"
                value={cityDest}
                label="cityDest"
                onChange={(e)=>{onChange(e.target.value,"cityDest");setDisable(false);setCityDest(e.target.value)}}>
                {cities.map((cityDest) => {
                  return (
                    <MenuItem key={cityDest} value={cityDest}>
                      {cityDest}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item style={{ width: '13vw' }}>
            {/* <FormControl style={{ minWidth: 40 }}> */}
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <Stack spacing={1}
                >
                  <DesktopDatePicker className="aa"
                    label="מתאריך"
                    inputFormat="DD/MM/YYYY"
                    value={firstDate}
                    onChange={handleChangeFirstDate}
                    renderInput={(params) => <TextField {...params}  />}
                  />
                </Stack>
              </LocalizationProvider>
            {/* </FormControl> */}
          </Grid>
          <Grid item style={{ width: '14vw' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <Stack spacing={1} className="o">
                <DesktopDatePicker id="o"
                  label="עד תאריך"
                  className="aa"
                  inputFormat="DD/MM/YYYY"
                  value={secondDate}
                  onChange={handleChangeSecondDate}
                  renderInput={(params) => <TextField {...params}  />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs className="gridLast">
            <Button variant="contained" id="last" disabled={disable} onClick={handleSubmit}><b>סנן</b></Button>
            <Button variant="contained" id="last" disabled={disable} onClick={handleReset}><b>נקה נתונים</b></Button>
          </Grid>
        </Grid>
      </Box>
      </FormControl>
      <br />
      <div id="travel">
      {resData.map((dd) => <Travel dest={dd.dest} from={dd.city} ls={dd.list} Date={dd.date} idTravel={dd.travelId}/>)}
      < div id="picture"></div>
</div>
    </div>
  )
}
export default ManagePage
