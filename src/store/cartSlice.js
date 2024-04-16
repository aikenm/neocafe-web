import { createSlice } from "@reduxjs/toolkit";

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const persistedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const persistedTotalAmount = calculateTotalAmount(persistedCartItems);
const persistedTempItems =
  JSON.parse(localStorage.getItem("tempCartItems")) || [];

const initialState = {
  items: persistedCartItems,
  totalAmount: persistedTotalAmount,
  tempItems: persistedTempItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    setItems: (state, action) => {
      state.items = action.payload;
      state.totalAmount = calculateTotalAmount(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      localStorage.removeItem("cartItems");
    },
    saveTempItems: (state, action) => {
      state.tempItems = action.payload;
      localStorage.setItem("tempCartItems", JSON.stringify(state.tempItems));
    },
    clearTempItems: (state) => {
      state.tempItems = [];
      localStorage.removeItem("tempCartItems");
    },
  },
});

export const {
  addItem,
  removeItem,
  updateCartItem,
  setItems,
  clearCart,
  clearTempItems,
  saveTempItems,
} = cartSlice.actions;

export default cartSlice.reducer;
