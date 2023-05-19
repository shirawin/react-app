import React ,{ useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './contact.css'

const Contact =()=>{
    const [email,setEmail]= useState();
    const [sub,setSub]= useState();
    const [text,setText]= useState();

    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        navigate("/signIn")
      }

      const signup = async (e) => {
        e.preventDefault();
        navigate("/signUp")
      }

      const send=()=>{
        alert("תודה שיצרת איתנו קשר. נשתדל לענות בהקדם😊")
         // clear the state variables
        setEmail('');
        setSub('');
        setText('');
      }
return (
    <div>
        <div id="navbar">
        <div id="dwrap">
             <a  className="tag" onClick={()=>navigate("/")}>ראשי</a>
             <span>|</span>
             <a className="tag"  onClick={()=>navigate("/about")}>מי אנחנו</a>
             <span>|</span>
             <a className="tag"  onClick={()=>navigate("/contact")}>צור קשר</a>
             <Button
              id="b1"
              style={{ backgroundColor: 'orange', color: 'white' }}
              onClick={signup}
            >
              הרשמה
            </Button>
            <span id="bSpanB">&nbsp;&nbsp;&nbsp;</span>
            <Button
              id="b2"
              style={{ backgroundColor: 'orange', color: 'white' }}
              onClick={login}
            >
              כניסה
            </Button>
           
        </div>
        </div>
        <div id="divLogin">
    <div id="login" class="login-form-container">
    <header id="h">נשמח להיות בקשר🤙</header>
    <fieldset id="feild">
    <div className="input-wrapper1">
      <input id="in1" type="text" placeholder="your@email.com" 
      onChange={(e) => setEmail(e.target.value)}
                value={email} />
    </div>
    <div class="input-wrapper1">
      <input id="in1" type="text" placeholder="נושא" 
      onChange={(e) => setSub(e.target.value)}
               value={sub} />
    </div>
    <div class="input-wrapper">
      <textarea id="in" type="text" placeholder="יש לך משהו לומר?"  
      onChange={(e) => setText(e.target.value)}
                value={text}/>
    </div>
    <Button id="continue" type="button" onClick={send} >שלח הודעה</Button>
    </fieldset>
    </div>
</div>
    </div>
)
};

export default Contact;