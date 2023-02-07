import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Details from './Details'
import Request from '../ManagePage/Helped/request'
import Adv from '../ManagePage/Helped/adv'
import  './PersonalArea.css'

const PersonalArea =()=>{
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
 
      const [value, setValue] = React.useState('1');
return (
  
    <Box sx={{ width: '100%', typography: 'body1' }}   >
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}id="heade">
        <TabList onChange={handleChange} aria-label="lab API tabs example" id="bra">
          <Tab label="צור מודעה" value="1"  />
          <Tab label="עדכון פרטים" value="2" />
          <Tab label="המודעות שלי" value="3" style={{color:"red"}}/>
        </TabList>
      </Box>
    
      <TabPanel value="1"><Request/></TabPanel> 
       <TabPanel value="2" ><Details/></TabPanel>
      <TabPanel value="3"><Adv/></TabPanel>
    </TabContext>
  </Box>
 
)
}
export default PersonalArea