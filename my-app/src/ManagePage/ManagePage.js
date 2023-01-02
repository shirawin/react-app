import React from 'react'
import './ManagePage.css'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Grid from '@mui/material/Grid';
import { Navigate, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useEffect } from "react";
const ManagePage =()=>{
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const td=date+"   "+" "+" "+time;
  
  useEffect(() => {
    const uuid = localStorage.getItem("uuid");
    !uuid && Navigate("/home");
  });
return (
    <>
  <nav><div className="icon">🧑</div></nav>
  <div id="adv">
  <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 1 }} id="Grid">
  <Grid item xs={6}>
    <p>{date}</p>
  </Grid>
  <Grid item xs={6}>
    <p>{time}</p>
  </Grid>
  <Grid item xs={6}>
    <p>ירושלים</p>
  </Grid>
  <Grid item xs={6}>
   <p>בני ברק</p>
  </Grid>
</Grid>
<h2 >:נדרש</h2>
<List sx={{ width: '100%', maxWidth: 360,}}>
  {[1, 2, 3].map((value) => (
    <ListItem
      key={value}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          
        </IconButton>
      }
    >
      <ListItemText primary={`Line item ${value}`} />
    </ListItem>
  ))}
</List>
  </div>
    </>
)
}
export default ManagePage
