import { createStore, applyMiddleware} from 'redux'
import {compose } from 'redux'
import customerReducer from './customers/CustReducer'
import thunk from 'redux-thunk'

//to work with chrome extension redux-devtools :
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(customerReducer, composeEnhancers(applyMiddleware(thunk)))


export default store