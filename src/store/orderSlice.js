import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [], 
    selectedOrder: null,
    editingOrder: null,
    orderAccepted: false,
  },
  reducers: {
    addOrder: (state, action) => {
        const newOrder = action.payload;
        state.orders.push(newOrder); 
      },
      setOrders: (state, action) => {
        state.orders = action.payload;
      },
      setEditingOrder: (state, action) => {
        state.editingOrder = action.payload;
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
        if (state.editingOrder && state.editingOrder.id === orderId) {
          state.editingOrder = newOrderData; 
        }
      },
      
      updateOrderStatus: (state, action) => {
        const { orderId, newStatus } = action.payload;
        const orderIndex = state.orders.findIndex(order => order.id === orderId);
      
        if (orderIndex >= 0) {
          state.orders[orderIndex].status = newStatus;
          state.orders[orderIndex].timestamp = new Date().toISOString();
        }
      },
      
      removeOrderItem: (state, action) => {
        const { orderId, itemId } = action.payload;
        const orderToUpdate = state.orders.find(order => order.id === orderId);
      
        if (orderToUpdate) {
          orderToUpdate.items = orderToUpdate.items.filter(item => item.id !== itemId);
        }
      },
      deleteOrder: (state, action) => {
        const orderId = action.payload;
        state.orders = state.orders.filter(order => order.id !== orderId);
  
        if (state.selectedOrder && state.selectedOrder.id === orderId) {
          state.selectedOrder = null;
        }
        if (state.editingOrder && state.editingOrder.id === orderId) {
          state.editingOrder = null;
        }
      },
      setOrderAccepted: (state, action) => {
        state.orderAccepted = action.payload;
      },
  },
});

export const { addOrder, setOrders, selectOrder, clearSelectedOrder, updateOrder, setEditingOrder, updateOrderStatus, updateOrderItemQuantity, removeOrderItem, deleteOrder, setOrderAccepted } = orderSlice.actions;

export default orderSlice.reducer;
