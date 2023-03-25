import logo from './logo.svg';
import './App.css';
import Home from './Login/Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PersonalArea from './PersonalArea/PersonalArea';
import ManagePage from './ManagePage/ManagePage';
import SignUp from './Login/signUp';
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
    <CacheProvider value={cacheRtl}>
      <Router>
           <div >
         
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/ManagePage' element={< ManagePage />}></Route>
                 <Route exact path='/PersonalArea' element={< PersonalArea />}></Route>
                 <Route exact path='/signUp' element={< SignUp />}></Route>
          </Routes>
          </div>
       </Router>
   
       </CacheProvider>
       </Provider>
  );
}

export default App;
