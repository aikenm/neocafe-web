import { createSlice } from "@reduxjs/toolkit";
import { testOrders } from "../common";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || testOrders,
  selectedOrder: null,
  editingOrder: null,
  orderAccepted: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const newOrderData = action.payload;
      const maxId = state.orders.reduce(
        (max, order) => Math.max(Number(order.id), max),
        0
      );
      const newOrder = { ...newOrderData, id: String(maxId + 1) };
      state.orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
      localStorage.setItem("orders", JSON.stringify(state.orders));
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
      const orderIndex = state.orders.findIndex(
        (order) => order.id === orderId
      );
      if (orderIndex >= 0) {
        state.orders[orderIndex] = newOrderData;
        if (state.selectedOrder && state.selectedOrder.id === orderId) {
          state.selectedOrder = newOrderData;
        }
        if (state.editingOrder && state.editingOrder.id === orderId) {
          state.editingOrder = newOrderData;
        }
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const orderIndex = state.orders.findIndex(
        (order) => order.id === orderId
      );
      if (orderIndex >= 0) {
        state.orders[orderIndex].status = newStatus;
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
      localStorage.setItem("orders", JSON.stringify(state.orders));
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

export const {
  addOrder,
  setOrders,
  selectOrder,
  clearSelectedOrder,
  updateOrder,
  setEditingOrder,
  updateOrderStatus,
  deleteOrder,
  setOrderAccepted,
} = orderSlice.actions;

export default orderSlice.reducer;
