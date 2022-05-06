import {IS_LOADING, LOADING_ERROR, LOGIN, LOGOUT} from './CustTypes'

const initialStateCustomer = {
    isLoading: false, 
    error:'',
    connected: false,
    jwt:'',
    id: '',
    firstName:'',
    lastName:'',
    userName:'',
    password:'',
    allData:{}
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
                connected: false,
                id: '',
                firstName:'',
                lastName:'',
                userName:'',
                password:'',
                allData: {}
            }
        case LOGIN:
            return {
                ...state,
                isLoading: false,
                error: '',
                connected: false,
                id: '',
                firstName:'',
                lastName:'',
                userName:'',
                password:'',
                allData: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                connected : false,
                userName: '',
                password:'',
                id: '',
                firstName:'',
                lastName:''
            }
        default:
            return state
    }
}

export default customerReducer;