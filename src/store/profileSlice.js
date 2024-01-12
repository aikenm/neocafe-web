import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    workSchedule: {
      monday: false, monday_start_time: "", monday_end_time: "",
      tuesday: false, tuesday_start_time: "", tuesday_end_time: "",
      wednesday: false, wednesday_start_time: "", wednesday_end_time: "",
      thursday: false, thursday_start_time: "", thursday_end_time: "",
      friday: false, friday_start_time: "", friday_end_time: "",
      saturday: false, saturday_start_time: "", saturday_end_time: "",
      sunday: false, sunday_start_time: "", sunday_end_time: "",
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      const { firstName, lastName, phone_number, date_of_birth, ...workSchedule } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phone = phone_number;
      state.birthDate = date_of_birth;
      state.workSchedule = workSchedule;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
