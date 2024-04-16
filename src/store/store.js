import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import profileReducer from "./profileSlice";
import { testOrders } from "../common";

const persistedOrders =
  JSON.parse(localStorage.getItem("orders")) || testOrders;

const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
  preloadedState: {
    order: {
      orders: persistedOrders,
      selectedOrder: null,
      editingOrder: null,
      orderAccepted: false,
    },
  },
});

export default store;
