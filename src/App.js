import {React} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Home from './components/pages/homePage/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import Header from './components/global/Header';
import Footer from './components/global/Footer';


const App = () => {
  const connected = useSelector(state => state.connected)
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          { connected ? <Route path="/profile" element={<Profile /> } /> :
          connected && <Route path="/profile" element={<Login />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>  
  );
};

export default App;