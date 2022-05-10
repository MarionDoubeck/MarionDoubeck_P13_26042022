import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { updateUserProfile } from '../../services/CallApi'

const Profile = () => {
  
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const initialFirstName = useSelector((state) => state.firstName)
  const initialLastName = useSelector((state) => state.lastName)
  const [customerFirstName, setCustomerFirstName] = useState (initialFirstName)
  const [customerLastName, setCustomerLastName] = useState (initialLastName)
  
  const editProfile = () => {
   document.getElementById('nameContainer').classList.add('hidden')
   document.getElementById('changeNameContainer').classList.remove('hidden')
  }
  const cancel = (e) => {
    e.preventDefault()
    setCustomerFirstName(initialFirstName)
    setCustomerLastName(initialLastName)
    document.getElementById('nameContainer').classList.remove('hidden')
    document.getElementById('changeNameContainer').classList.add('hidden')
  }
  const saveChange = (e,token, customerFirstName, customerLastName) => {
    e.preventDefault();
    dispatch(updateUserProfile(token, customerFirstName, customerLastName));
    document.getElementById('nameContainer').classList.remove('hidden')
    document.getElementById('changeNameContainer').classList.add('hidden')
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <div id="nameContainer">
            <h1>Welcome back<br />
              <div>{customerFirstName} {customerLastName}!</div>
            </h1>
            <button className="edit-button" onClick={editProfile}>Edit Name</button>
          </div>
          <div id="changeNameContainer" className='hidden'>
            <h1>Welcome back<br /></h1>
            <form>
              <div>
                <input 
                  type='text' 
                  value={customerFirstName} 
                  placeholder={customerFirstName} 
                  required
                  onChange={ e => setCustomerFirstName(e.target.value)}
                />
                <input 
                  type='text' 
                  value={customerLastName}
                  placeholder={customerLastName}
                  required
                  onChange={ e => setCustomerLastName(e.target.value)}
                />
              </div>
              <div>
                <button onClick={ e => saveChange(e,token, customerFirstName, customerLastName)}>Save</button>
                <button onClick={ e => cancel(e)}>Cancel</button>
              </div>
            </form>
          </div>
            
          
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile