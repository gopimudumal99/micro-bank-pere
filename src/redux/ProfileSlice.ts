import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDataBase } from "../Data/dataTypes";

import { updateRating } from "../api/apis";

const initialState: UserDataBase = {
  id: "",
  full_name: "",
  email: "",
  date_incorporation: "",
  password: "",
  rating: { current_account: 0, payroll: 0, payment: 0 },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<UserDataBase>) => {
      state.id = action.payload.id;
      state.full_name = action.payload.full_name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.date_incorporation = action.payload.date_incorporation;
      state.rating = action.payload.rating;
    },
    addCurrentBankRating: (state, action: PayloadAction<number>) => {
      state.rating.current_account = action.payload;
      updateRating(state.rating, state.id);
    },
    addPayrollRating: (state, action: PayloadAction<number>) => {
      state.rating.payroll = action.payload;
      updateRating(state.rating, state.id);
    },
    addPaymentRating: (state, action: PayloadAction<number>) => {
      state.rating.payment = action.payload;
      updateRating(state.rating, state.id);
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const {
  addProfile,
  addCurrentBankRating,
  addPayrollRating,
  addPaymentRating,
  logout,
} = profileSlice.actions;

export default profileSlice.reducer;
