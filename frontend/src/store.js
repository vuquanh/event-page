import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers';
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails:eventDetailsReducer 
})
const initialState = {}
// const middleware = [thunk]
const store = configureStore({
                reducer: rootReducer, 
                initialState,
                // applyMiddleware(...middleware)
            })

export default store