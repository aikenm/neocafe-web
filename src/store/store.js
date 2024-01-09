import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    cart: cartReducer,
  },
});

export default store;
