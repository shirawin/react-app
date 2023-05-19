import React ,{ useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {useSpring,animated} from 'react-spring'
import './about.css'

const About =()=>{
    const x =300;

    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        navigate("/signIn")
      }

      const signup = async (e) => {
        e.preventDefault();
        navigate("/signUp")
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

       <div id="about">
         <h1 id="aboutH1">ברוכים הבאים לנסיעה טובה</h1>
         <p className="aboutP">פלטפורמה המובילה בקהילה המקשרת מתנדבים עם אנשים הסובלים מקשיי תנועה וזקוקים לעזרה בתחום התחבורה.</p>
         <p className="aboutP"> מטרתנו היא להפוך את התחבורה עבור מתקשים בתנועה לנגישה , זמינה ובחינם! </p>
         <p className="aboutP">ב-"נסיעה טובה" אנחנו מאמינים שכל אחד זכאי לאפשרות להתנייד ולהגיע לכל יעד ולכל מטרה.</p>
         <p className="aboutP"> זו הסיבה שיצרנו פלטפורמה שמאפשרת למתנדבים להציע את זמנם ושירותיהם לאלו הזקוקים. בין אם אתם נגישי גיל, אנשים עם מוגבלויות או מתאוששים מפציעה, המתנדבים שלנו כאן כדי לעזור לכם להגיע לכל מקום שאתם צריכים להיות בו</p>
         <p className="aboutP">המתנדבים שלנו נלהבים לעשות שינוי בקהילה ולעזור לנזקקים. הם מגיעים מכל תחומי החיים ומחויבים לספק חווית תחבורה בטוחה ונוחה למשתמשים שלנו.</p>
         <p className="aboutP">עם "נסיעה טובה" אתה יכול להיות סמוך ובטוח שאתה בידיים טובות.</p>
         <p className="aboutP">כדי להתחיל עם הפלטפורמה שלנו, פשוט הירשם כמשתמש או כמתנדב. כמשתמש, אתם יכולים לבקש נסיעה ולהתחבר עם מתנדב שזמין לעזור לכם.</p>
         <p className="aboutP">כמתנדב, אתם יכולים לעיין בבקשות לנסיעות ולהציע את השירותים שלכם לאלו הזקוקים להם.</p>
         <p className="aboutP">זה פשוט ככה!!</p>
         <p className="aboutP">תודה על בחירתכם ב"נסיעה טובה" כפתרון התחבורה המושלם שלכם.</p>
       </div>

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
)
};

export default About;