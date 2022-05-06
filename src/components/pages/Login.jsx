import Header from '../global/Header'
import Footer from '../global/Footer'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { apiCall } from '../customers/CustAction'

const Login = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading)
  const error = useSelector(state => state.error)
  const allData = useSelector(state => state.allData)
  const[userName, setUserName] = useState('')
  const[password, setPassword] = useState('')


  const loadData = isLoading ?(
      <p>Veuillez patienter</p>
      ):(
        error ? (
          <p>{error}</p>
        ):(
          allData ? (
            <p>Data vides</p>
          ) : (
          <p>Data chargées</p>
          )
        )
      )


  return (
    <>
    <Header />
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
          <button className="sign-in-button" style = { {border: 'none'} } onClick={(e)=>{e.preventDefault(); dispatch(apiCall(userName, password))}}>Sign In</button>
        </form>
      </section>
      <div>
        {loadData}
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Login