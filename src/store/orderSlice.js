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
      updateOrder: (state, action) => {
        const { orderId, newOrderData } = action.payload;
        const orderIndex = state.orders.findIndex(order => order.id === orderId);
        if (orderIndex >= 0) {
          state.orders[orderIndex] = newOrderData;
        }
        if (state.selectedOrder && state.selectedOrder.id === orderId) {
          state.selectedOrder = newOrderData;
        }
      },
  
      removeOrderItem: (state, action) => {
        const { orderId, itemId } = action.payload;
        const orderToUpdate = state.orders.find(order => order.id === orderId);
      
        if (orderToUpdate) {
          orderToUpdate.items = orderToUpdate.items.filter(item => item.id !== itemId);
        }
      },
      
  },
});

export const { setOrders, selectOrder, clearSelectedOrder, updateOrder, updateOrderItemQuantity, removeOrderItem } = orderSlice.actions;

export default orderSlice.reducer;
