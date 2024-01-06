import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [], // Initially empty, fetch from server or static data
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
    // Add other reducers as needed for handling menu actions
  },
});

export const { setMenuItems } = menuSlice.actions;

export default menuSlice.reducer;
