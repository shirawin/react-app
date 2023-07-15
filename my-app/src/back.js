import * as React from 'react';
import './back.css';
import { useNavigate } from 'react-router-dom'



const Back=(props)=>{
    const navigate = useNavigate();

    const hadleClick=()=>{
       navigate( `${props.navigateHref}`)
    }
    return(
        <>
        <div class="circle" onClick={hadleClick}>חזרה</div>
        </>
    );
}

export default Back;
