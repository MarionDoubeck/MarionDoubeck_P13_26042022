import axios from 'axios'
import {isLoading, login, loadingError, loadCustomerData, modifyProfile } from '../components/customers/CustAction'

export const apiCall = (userName, password) => {
    return dispatch => {
        dispatch(isLoading())
        const serviceData = {
            email: userName,
            password: password
        }
        axios.post('http://localhost:3001/api/v1/user/login', serviceData)
        .then ( response => {
            dispatch(login(response.data.body.token))
        })
        .catch ( error => {
            dispatch(loadingError("Username or password is incorrect ! "))
        })
    }
}

export const loadProfile = (token) => {
    const serviceData = {
        headers: {
            authorization: `Bearer${token}`
        }
    }
    return dispatch => {
        axios.post('http://localhost:3001/api/v1/user/profile', null ,serviceData)
        .then ( response => {
            dispatch(loadCustomerData(response.data.body))
        })
        .catch ( error => {
            dispatch(loadingError(error.message))
        })
    }
}

export const updateUserProfile = (token, customerFirstName, customerLastName) => {
    const serviceData = {
        headers: {
            authorization: `Bearer${token}`
        },
        firstName: customerFirstName,
        lastName: customerLastName
    }
    return dispatch => {
        axios.put('http://localhost:3001/api/v1/user/profile', serviceData, serviceData)
        .then ( response => {
            dispatch(modifyProfile(response.data.body))
        })
        .catch ( error => {
            dispatch(loadingError(error.message))
        })
    }

}