import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import profileReducer from './profileSlice';
import { testOrders } from '../common';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
});

store.dispatch({ type: 'order/setOrders', payload: testOrders });

export default store;
