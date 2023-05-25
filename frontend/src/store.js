import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  eventListReducer,
  eventDetailsReducer,
} from "./reducers/eventReducers";
import { cartReducer } from "./reducers/cartReducers";
// import thunk from 'redux-thunk';
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderHistoryReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  //For receiving order history for profile page.
  orderHistory: orderHistoryReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

//For the profile page
// const orderHistoryFromStorage = localStorage.getItem("orderHistoryItems")
//   ? JSON.parse(localStorage.getItem("orderHistoryItems"))
//   : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  // orderHistory: {
  //   pastOrder: orderHistoryFromStorage,
  // },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;