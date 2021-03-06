import { NavLink} from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../customers/CustAction';

const Header = () => {

  const dispatch = useDispatch()
  const connected = useSelector((state) => state.connected)
  const customerId = useSelector((state) => state.id)
  const customerFirstName = useSelector((state) => state.firstName)
  const signOut = () => {
    dispatch(logout)
    this.props.history.push("/")
  }

  return (
    <div className="main-nav">
      <NavLink to={`/`}>
        <div className="main-nav-logo">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </div>
      </NavLink>
      {connected ?
        <div>
          <NavLink to={`/${customerId}/profile`}  className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {` ${customerFirstName}`}
          </NavLink>
          <NavLink to={`/`} onClick={signOut}>
              <i className="fa fa-sign-out"></i>
              {" "}Sign Out 
          </NavLink>
        </div>
      :
        <div>
        <NavLink to={`/login`} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {" "}Sign In 
        </NavLink>
        </div>
      }
    </div>
  )
}

export default Header