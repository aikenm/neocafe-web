import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [], 
    selectedOrder: null, 
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    clearSelectedOrder: (state) => {
      state.selectedOrder = null;
    },
   
  },
});

export const { setOrders, selectOrder, clearSelectedOrder } = orderSlice.actions;

export default orderSlice.reducer;
