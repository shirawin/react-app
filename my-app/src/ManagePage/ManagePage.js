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
import {FilterTravels, getActivTravels,GetTravelsByUser} from '../Api/Travels_Api'
import { Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux'; 
const ManagePage = () => {
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
  const cities = ["אשדוד", "ירשלים", "תל אביב", "פתח תקווה"]
  const options = ["עדכון פרטים", "המודעות שלי", "צור מודעה"]
  const [resData, setResData] = useState([]);
  const userType =1;
  
  const user = useSelector((state) => state.user);
 //מתנדב-true
  //כשחל שינוי בתאריך הראשון
  const onChange =(selected,key)=>{
    setSerchObj((prev) => ({
      ...prev,
      [key]: selected,
    }));
  }
const fetchData = async () => {
  console.log(user);
 let data=[]
  if(user.usertype){
    debugger
    data= await getActivTravels();
  }
  else{
    data= await GetTravelsByUser(user.Code);
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
  const handleReset=()=>{
    setSerchObj([])
    setCity("")
    setFirstDate(null)
    setSecondDate(null)
    fetchData()
    setDisable(true)
  }
  //בלחיצה על כפתור הפלטור
  const handleSubmit = async () => {
    var x = await FilterTravels(searchObj)
    debugger
    setResData(x)
  };
  //בלחיצה על הכפתור למעבר לעדכון פרטים אישיים
  const submit = async (e) => {
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
  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    !uuid && Navigate("/home");
  });
  return (
    <div id="main">
      <Box >
        <AppBar position="static" id="bar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            {auth && (
              <div>
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
      </Box> 
      <FormControl id="form" className='header'> <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Grid item xs
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center">
          <Grid item style={{ width: '14vw'}}>
            <FormControl id="cityLabel">
              <InputLabel >עיר</InputLabel>
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
          <Grid item style={{ width: '14vw' }}>
            {/* <FormControl style={{ minWidth: 40 }}> */}
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <Stack spacing={1}
                >
                  <DesktopDatePicker className="aa"
                    label="מתאריך"
                    inputFormat="DD/MM/YYYY"
                    value={firstDate}
                    onChange={handleChangeFirstDate}
                    renderInput={(params) => <TextField {...params} classname="inputDate" />}
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
                  renderInput={(params) => <TextField {...params} classname="inputDate" />}
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
      {resData.map((dd) => <Travel dest={dd.dest} from={dd.city} ls={dd.list} Date={dd.date} idTravel={dd.travelId}/>)}
    </div>
  )
}
export default ManagePage
