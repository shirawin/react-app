import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Details from './Details'
import Request from '../ManagePage/Helped/request'
import  './PersonalArea.css'
import { useSelector } from 'react-redux';
import TableUsers from '../PersonalArea/TableUsers';
//מתנדב:עדכון פרטים
//נעזר:עדכון פרטים,יצירת מודעה
const PersonalArea =()=>{
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const [value, setValue] = React.useState('1');
      const user = useSelector((state) => state.user);
      return (
   
    <Box sx={{ width: '100%', typography: 'body1',backgroundColor:'lightgray' }}   >
    
    {user.usertype&&
  <> 
  {user.password=="admin"&&
      <>

      </>
    }
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}id="heade">
        <TabList onChange={handleChange} aria-label="lab API tabs example" id="bra">
          <Tab label="עדכון פרטים" value="1" />
          <Tab label="טבלת משתמשים" value="2" />
        </TabList>
      </Box>
       <TabPanel value="1" > <Details screen={true} header={'עדכון פרטים'} type={user.usertype}/> </TabPanel>
       <TabPanel value="2" > <TableUsers/> </TabPanel>
    </TabContext>
   
    </>
     }
     {!(user.usertype)&&
    <TabContext value={value} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}id="heade">
        <TabList onChange={handleChange} aria-label="lab API tabs example" id="bra">
          <Tab label="צור מודעה" value="1"  />
          <Tab label="עדכון פרטים" value="2" />
        </TabList>
      </Box>
    
      <TabPanel value="1"><Request/></TabPanel> 
      <TabPanel value="2">
        <div className='tabDetailes'>
          <Details screen={true} header={'עדכון פרטים'} type={user.usertype}/>
        </div>
        </TabPanel>
     
    </TabContext>
    }
  </Box>
 
)
}
export default PersonalArea