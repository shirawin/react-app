import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SignIn from './logIn';
import SignUp from './signUp';
import './Home.css'
import UpdateDetails from '../PersonalArea/UpdateDetails'
import {GetAllUsers} from '../Api/Users_Api'
import axios from "axios";
import {useSpring,animated} from 'react-spring'
import {GetSumOfHelpeds} from '../Api/Users_Api'
import {GetSumOfTravels} from '../Api/Travels_Api'
//import {GetSumOfVolunteers} from '../Api/volunteers_Api'

const Home =()=>{

const [signIn,setSignIn] =useState(false)
const [signUp,setSignUp] =useState(false)
const [showBtns,setShowBtns]=useState(true)
const [users, setUsers] = useState([]);
const [volunteers, setVolunteers] = useState([]);
const [helpeds, setHelpeds] = useState([]);
const [travels, setTravels] = useState([]);

const x =300

const fetchData = async () => {
    const resHelpeds = await GetSumOfHelpeds();
    setHelpeds(resHelpeds);

     const data = await GetAllUsers();
    setUsers(data);
   
    setVolunteers(300);
    //const resVolunteers = await GetSumOfVolunteers();
    const resTravels = await GetSumOfTravels();setTravels(resTravels);

    
};

useEffect(() => {
    fetchData()
}, []);

const hideSignIn =()=>{
    setSignIn(true);
    setShowBtns(false)
}
const hideSignUp =()=>{
    setSignUp(true);
    setShowBtns(false)
}

function Number({n}){
    const {number} =useSpring({
       from:{number:0},
       number:n,
       delay:200,
       config: {mass:1,tension:20,driction:10}, 
    });
   return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>;
}


return (
    <>
   {showBtns&&
   <div>
     {/* <div>
      {users.map((user)=>{
         return <p>{user.fullname}</p>;
      }
      
    )}
    </div> */}
    <div className="logo"></div>
    <div className="btnWrap" >
    <Button style={{backgroundColor: '#ff9100' , color:'white'}} className='btns' onClick={(hideSignIn)}>
       כניסה
    </Button>
    <Button style={{backgroundColor: '#ff9100', color:'white'}} className='btns' onClick={(hideSignUp)}>
        הרשמה
    </Button>
    </div>
    {/* <div className='bottombar'> */}
    <div className='heart'>
        <a id='a-span-c'>מתנדבים</a>
    </div>
    <span id='span-c'>
        <Number n={x}/> 
        </span>
    <div className='car'>
        <a id='a-span-c2'>נסיעות</a>    
    </div>
    <span id='span-c2'>
        <Number n={x}/>
    </span>
    <div className='weelchair'>
        <a id='a-span-c3'>נעזרים </a>    
    </div>
    <span id='span-c3'>
        <Number n={x}/>
        </span>
    </div>
    // </div>
    }
    {signIn&&
    <SignIn/>
    }
    {signUp&&
    <SignUp/>
    } 
    </>
)
}
export default Home