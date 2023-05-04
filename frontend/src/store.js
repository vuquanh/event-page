import {configureStore, combineReducers} from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducers'

const rootReducer = combineReducers({
        eventList: eventListReducer,
        eventDetails: eventDetailsReducer,
})
const initialState = {}
// const middleware = [thunk]

const store = configureStore({
                reducer: rootReducer,
                preloadState: initialState,
                // applyMiddleware(...middleware)
            })

export default store