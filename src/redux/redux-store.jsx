import { applyMiddleware, combineReducers, createStore } from 'redux'
import productsReducer from './products-Reducer'
import thunkMiddleware from 'redux-thunk'


let RootReducers = combineReducers({
    products: productsReducer
})


const store = createStore(RootReducers, applyMiddleware(thunkMiddleware)); 

export default store;