import { IS_LOADING, LOADING_ERROR, LOGIN, LOGOUT} from "./CustTypes"
import axios from 'axios'

export const isLoading = () => {
    return(
        {
            type: IS_LOADING,
        }
    )
}

export const loadingError = error => {
    return(
        {
            type: LOADING_ERROR,
            payload: error
        }
    )
}

export const login = allCustomerData => {
    return(
        {
            type: LOGIN,
            payload: allCustomerData
        }
    )
}

export const logout = () => {
    return(
        {
            type: LOGOUT,
        }
    )
}

export const apiCall = (userName, password) => {
    return dispatch => {
        console.log(userName);
        console.log(password);
        dispatch(isLoading())
        axios.get('https://data.mongodb-api.com/app/data-jywgs/endpoint/data/beta')
        //axios.get('https://jsonplaceholder.typicode.com/users')
        .then ( response => {
            console.log(response.data)
            dispatch(login(response.data))
        })
        .catch ( error => {
            dispatch(loadingError(error.message))
        })
    }
}