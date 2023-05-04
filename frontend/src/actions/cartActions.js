import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/events/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      event: data._id,
      name: data.name,
      image: data.image,
      fee: data.fee,
      openSpot: data.openSpot,
      qty,
    },
  });
//Why setting cart in the localStorage in action? Can we jsut set data in store.js?
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  console.log("cartItems:", getState().cart.cartItems)
};
