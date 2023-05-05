import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers';
import { cartReducer } from './reducers/cartReducers';



const rootReducer =  combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
}) 

const cartItemFromStorage = localStorage.getItem
('cartItems')? JSON.parse(localStorage.getItem('cartItems'))
: []

const initialState = {
    cart: {cartItems: cartItemFromStorage}
}

const store = configureStore({
    reducer: rootReducer,
    preloadState: initialState
})

export default store