
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './adv.css'

const Adv =()=>{
return (
    <div className="container">
        {/* <button  
         className="close" ></button> */}
         <div className="d_t" row>
         <TextField id="outlined-basic" label="תאריך" variant="outlined" type="read"  className="text"/>
        <TextField id="outlined-basic" label="שעה" variant="outlined"  type="read"  className="text"/>
       
    </div>
        <div className="f_d" row>
        <TextField id="outlined-basic" label="מוצא" variant="outlined" type="read"  className="text"/>
        <TextField id="outlined-basic" label="יעד" variant="outlined"  type="read"  className="text"/>
    </div>
    <h2>נדרש:</h2>
    <List className="list" >
      {[1, 2, 3].map((value) => (
       
          <ListItemText primary={`Line item ${value}`} />
  
      ))}
    </List>
    <div className='ok-div-Wrap'>
                    <span></span>
                    <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" onClick={()=>{
                        alert('האם אתה בטוח?')} }>אני רוצה לעשות טוב😁</Button>
    </div>
 </div>
);
}
export default Adv