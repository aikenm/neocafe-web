import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: "Алихандро",
    lastName: "Бутовски",
    phone: "555 555 555",
    birthDate: "14.03.1998",
  },
  reducers: {
    // Add reducers if you need to modify the profile data
  },
});

export default profileSlice.reducer;
