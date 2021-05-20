import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducer/authReducer'
import coutReducer from './reducer/coutReducer'
let reducer = combineReducers({
    coutReducer: coutReducer,
    authReducer: authReducer
})
const middleware = stores => next => action => {
    if (typeof action === 'function') {
        return action(stores.dispatch)
    } else {
        next(action)
    }
}
let store = createStore(reducer, applyMiddleware(middleware))
export default store