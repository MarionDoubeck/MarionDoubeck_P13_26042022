import { IS_LOADING, LOADING_ERROR, LOGIN, LOAD_CUSTOMER_DATA, LOGOUT, MODIFY_PROFILE} from "./CustTypes"

export const isLoading = () => {
    return {
        type: IS_LOADING,
    }
}

export const loadingError = error => {
    return {
        type: LOADING_ERROR,
        payload: error
    }
}

export const login = token => {
    return {
        type: LOGIN,
        payload: token
    }
}

export const loadCustomerData = (data) => {
    return {
        type: LOAD_CUSTOMER_DATA,
        payload: data
    }
}

export const logout = () => {
    return  {
        type: LOGOUT,
    }
}

export const modifyProfile = (body) => {
    return {
        type: MODIFY_PROFILE,
        payload: {
            firstName: body.firstName,
            lastName: body.lastName
        }
    }
}