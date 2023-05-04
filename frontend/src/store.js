import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {eventListReducer,eventDetailsReducer} from './reducers/eventReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer

}) 

//getting 'cartItems' data from the localStorage and convert it into JSON file. 
const cartItemFromStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: []

const initialState = {
    cart: {
        cartItems: cartItemFromStorage
        
    }
}

const store = configureStore({
    reducer: rootReducer,
    preloadState: {initialState} 
})

export default store 