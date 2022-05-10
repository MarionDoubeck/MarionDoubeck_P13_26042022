import {IS_LOADING, LOADING_ERROR, LOGIN, LOAD_CUSTOMER_DATA, LOGOUT, MODIFY_PROFILE} from './CustTypes'

const initialStateCustomer = {
    isLoading: false, 
    error:'',
    connected: false,
    token:'',
    id: '',
    firstName:'',
    lastName:'',
    userName:'',
    password:''
}

const customerReducer = (state = initialStateCustomer, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                connected: false
            }
        case LOGIN:
            return {
                ...state,
                isLoading: false,
                error: '',
                token: action.payload
            }
        case LOAD_CUSTOMER_DATA:
            return {
                ...state,
                isLoading: false,
                error: '',
                connected: true,
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.email,
                password:''
            }
        case LOGOUT:
            return {
                ...state,
                connected : false,
                token: '',
                userName: '',
                password:'',
                id: '',
                firstName:'',
                lastName:''
            }
        case MODIFY_PROFILE:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        default:
            return state
    }
}

export default customerReducer;