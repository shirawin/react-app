import React, { useState } from 'react'
import './ManagePage.css'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import { Navigate, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useEffect } from "react";
import Travel from './Travels/Travel';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Menu from '@mui/material/Menu';
import {
  Button,
  FormControl,
  formLabelClasses,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';

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
  const [city, setCity] = useState(null);

  const cities = ["בני ברק", "ירשלים", "תל אביב", "פתח תקווה"]
  const options = ["עדכון פרטים", "המודעות שלי", "צור מודעה"]
  const data = [{ "dest": "dfghjkl", "from": "jjjני ברק", "ls": ["fffff", "fffff", "fffff"] }, { "dest": "jhgf", "from": "בני ברק", "ls": [1, 2, 3] }, { "dest": "ירושלים", "from": "בני ברק", "ls": [1, 2, 3] }, { "dest": "ירושלים", "from": "בני ברק", "ls": [1, 2, 3] }, { "dest": "בני ברק", "from": "פתח תקווה", "ls": [81, 28, 39] }, { "dest": "כינר", "from": "בני ברק", "ls": [14, 42, 43] }];
  //כשחל שינוי בתאריך הראשון
  const onChange =(selected,key)=>{
    debugger
    setSerchObj((prev) => ({
      ...prev,
      [key]: selected,
    }));
  }
  const handleChangeFirstDate = (newValue) => {
    setFirstDate(newValue);
    setDisable(false);
    onChange(newValue,"date1")
  };
  //כשחל שינוי בתאריך השני
  const handleChangeSecondDate = (newValue) => {
    setSecondDate(newValue);
    setDisable(false);
  };
  //כשחל שינו בעיר
  const handleChangeCity = async (newValue) => {
    newValue.preventDefault();
    setCity(newValue);
    setDisable(false);
  };
  //בלחיצה על כפתור הפלטור
  const handleSubmit = async () => {
    if (city != null) {
      if (firstDate == null) {
        if (secondDate == null) {
          alert("עיר")
        }
        else {
          alert("עיר-היום-תאריךשני")
        }
      }
      else {
        if (secondDate == null) {
          alert("עיר-תאריךראשון-היום")
        }
        else {
          alert("עיר-תאריךראשון-תאריךשני")

        }
      }
    }
    else {
      if (firstDate == null) {
        if (secondDate != null) {
          alert("היום-תאריךשני")
        }
      }
      else {
        if (secondDate == null) {
          alert("תאריךראשון-היום")
        }
        else {
          alert("-תאריךראשון-תאריךשני")

        }
      }
    }
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
                  color="inherit"
                >
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
                // value={age}
                label="city"
                onChange={(e)=>onChange(e.target.value,"city")}
              >
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
          <Grid item xs>

            <Button variant="contained" id="last" disabled={disable} onClick={handleSubmit}><b>סנן</b></Button>
          </Grid>
        </Grid>

      </Box>
      </FormControl>
      <br />

      {data.map((dd) => <Travel dest={dd.dest} from={dd.from} ls={dd.ls} />)}


    </div>
  )

}
export default ManagePage
