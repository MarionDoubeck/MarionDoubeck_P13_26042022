import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { apiCall, loadProfile } from '../../services/CallApi'

const Login = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const token = useSelector(state => state.token)
  const firstName = useSelector(state => state.firstName)
  const[userName, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const loadData = isLoading ?
      (<p class="loadData">"Please wait..."</p>) :
      (error ? (<p class="loadData">{error}</p>):(
          token && dispatch(loadProfile(token))
        )
      )

  return (
    <>
    {firstName && <Navigate to="/profile" replace={true}/>}
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" style={{fontSize: 'inherit'}}></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" id="username" onChange={e => setUserName(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>
          <button 
            className="sign-in-button" 
            style = { {border: 'none'} } 
            onClick={(e)=>{e.preventDefault(); dispatch(apiCall(userName, password))}}
          >Sign In</button>
        </form>
      </section>
      <div>
        {loadData}
      </div>
    </main>
    </>
  )
}

export default Login