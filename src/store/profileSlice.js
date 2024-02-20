import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: "Толгонай",
    lastName: "Жапарова",
    phone: "+997709070809",
    birthDate: "01.03.1994",
    workSchedule: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: true,
    },
  },
  reducers: {
    updateProfile: (state, action) => {
      const {
        first_name,
        last_name,
        phone_number,
        date_of_birth,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      } = action.payload;

      state.firstName = first_name;
      state.lastName = last_name;
      state.phone = phone_number;
      state.birthDate = date_of_birth;
      state.workSchedule.monday = monday;
      state.workSchedule.tuesday = tuesday;
      state.workSchedule.wednesday = wednesday;
      state.workSchedule.thursday = thursday;
      state.workSchedule.friday = friday;
      state.workSchedule.saturday = saturday;
      state.workSchedule.sunday = sunday;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
