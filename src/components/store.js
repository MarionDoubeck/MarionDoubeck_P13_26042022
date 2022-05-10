import { createStore, applyMiddleware} from 'redux'
import customerReducer from './customers/CustReducer'
import thunk from 'redux-thunk'

const store = createStore(customerReducer, applyMiddleware(thunk))

export default store