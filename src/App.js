import {React} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/homePage/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/profile"} element={<Profile/>} /> 
        </Routes>
      </BrowserRouter>  
  );
};

export default App;