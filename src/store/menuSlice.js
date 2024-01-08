import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [], 
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;

export default menuSlice.reducer;
