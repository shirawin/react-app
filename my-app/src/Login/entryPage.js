import React, { useState, useEffect } from 'react';
import './entryPage.css';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';

const EntryPage = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    navigate('/signIn');
  };

  const signup = async (e) => {
    e.preventDefault();
    navigate('/signUp');
  };
  const [showHeaders, setShowHeaders] = useState(false); // flag to show/hide the headers element
  const [size, setSize] = useState(100); // initial size of the car element
  const [height, setHeigt] = useState(70); // initial size of the car element
  useEffect(() => {

    if (size < 450 || height<300) { // limit the size of the car element to 300px
      const intervalId = setInterval(() => {
        setSize((size) => size + 30); // increase the size of the car element by 10px every 100ms
        setHeigt((height) => height + 10)
      }, 18);
      return () => clearInterval(intervalId); // stop the interval when the component unmounts
    }
  }, [size]);

  

  return (
    <div>
      <div id="body">
        <div id="navbar">
          <div id="dwrap">
            <a className="tag" onClick={() => navigate('/')}>
              ראשי
            </a>
            <span>|</span>
            <a className="tag" onClick={() => navigate('/about')}>
              מי אנחנו
            </a>
            <span>|</span>
            <a className="tag" onClick={() => navigate('/contact')}>
              צור קשר
            </a>
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
          <div id="headers">
            <h1 id="header2">נוסעים לעשות טוב</h1>
            <h1 id="header1">
              נסיעה <span id="spanofheart">♥</span> טובה
            </h1>
          </div>
        </div>
        <div id="carElem" style={{ width: `${size}px`, height: `${height}px` }} />
      </div>
    </div>
  );
};

export default EntryPage;