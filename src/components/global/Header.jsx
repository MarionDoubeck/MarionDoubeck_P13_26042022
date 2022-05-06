import React, { NavLink } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { useSelector } from 'react-redux';

const Header = () => {
  const connected = useSelector((state) => state.connected)
  const customerId = useSelector((state) => state.id)
  
  return (
    <div className="main-nav">
      <NavLink exact="true" to={`/`}>
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </NavLink>
      {connected ?
        <div>
        <NavLink exact="true" to={`/${customerId}/profile`}  className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {" "}Tony
        </NavLink>
        <NavLink exact="true" to={`/`}>
            <i className="fa fa-user-circle"></i>
            {" "}Sign Out 
        </NavLink>
        </div>
      :
        <div>
        <NavLink exact="true" to={`/login`} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {" "}Sign In 
        </NavLink>
        </div>
      }
    </div>
  )
}

export default Header