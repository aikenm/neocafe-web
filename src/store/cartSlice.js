import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    setItems: (state, action) => {
      state.items = action.payload;
      state.totalAmount = calculateTotalAmount(state.items);
    },
  },
});

export const { addItem, removeItem, updateCartItem, setItems } = cartSlice.actions;

export default cartSlice.reducer;
