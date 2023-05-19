import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Home from './Login/Home';
import EntryPage from './Login/entryPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PersonalArea from './PersonalArea/PersonalArea';
import ManagePage from './ManagePage/ManagePage';
import About from './Login/about';
import Contact from './Login/contact';
import SignUp from './Login/signUp';
import SignIn from './Login/logIn';
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from "@emotion/cache";
import { Provider } from 'react-redux';
import store from './redux/store';
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});



function App() {
  
  return (
    
    <Provider store={store}>
     
          <Helmet>
          <title>נסיעה טובה</title>
          <link rel="icon" href='../public/logo.ico?v=2'/>
        
          </Helmet>
      
    <CacheProvider value={cacheRtl}>
      <Router>
           <div >
         
           <Routes>
                 <Route exact path='/' element={< EntryPage />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/signIn' element={< SignIn />}></Route>
                 <Route exact path='/ManagePage' element={< ManagePage />}></Route>
                 <Route exact path='/personalArea' element={< PersonalArea />}></Route>
                 <Route exact path='/signUp' element={< SignUp />}></Route>
          </Routes>
          </div>
       </Router>
   
       </CacheProvider>
       </Provider>
  );
}

export default App;
