import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SignIn from './logIn';
import SignUp from './signUp';
// import Adv from '../ManagePage/Helped/adv';
import './Home.css'
import UpdateDetails from '../PersonalArea/UpdateDetails'
import {GetAllUsers} from '../Api/Users_Api'
import axios from "axios";
import {useSpring,animated} from 'react-spring'


const Home =()=>{

const [signIn,setSignIn] =useState(false)
const [signUp,setSignUp] =useState(false)
const [showBtns,setShowBtns]=useState(true)
const [users, setUsers] = useState([]);
    
const fetchProducts = async () => {
    const data = await GetAllUsers()
    setUsers(data);
    console.log(data);
};

useEffect(() => {
    fetchProducts();
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
     <div>
      {users.map((user)=>{
         return <p>{user.fullname}</p>;
      }
      
    )}
    </div>
    <div className="logo"></div>
    <div className="btnWrap" row>
    <Button style={{backgroundColor: '#ff9100', color:'white'}} className='btns' onClick={(hideSignUp)}>
        הרשמה
    </Button>
    <Button style={{backgroundColor: '#ff9100' , color:'white'}} className='btns' onClick={(hideSignIn)}>
        התחברות
    </Button>
    <span id='span-about'>
    <a id='about' href=''>הסיפור שלנו</a>
    </span>
    </div>
    <div className='circle'id='c'>
        <span id='span-c'>
        <Number n={82}/>
        <a id='a-span-c'>מתנדבים</a>
        </span>
    </div>
    <div className='circle'id='c2'>
        <span id='span-c2'>
        <Number n={119}/>
        <a id='a-span-c2'>נעזרים</a>
        </span>
    </div>
    <div className='circle'id='c3'>
        <span id='span-c2'>
        <Number n={201}/>
        <a id='a-span-c2'>נסיעות</a>
        </span>
    </div>
    </div>
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