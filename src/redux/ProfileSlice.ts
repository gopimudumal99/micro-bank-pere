import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {UserDataBase} from "../Data/data"

const initialState: UserDataBase ={ id: "", full_name: "", email: "", date_incorporation: "", password: "",rating:{current_account:0,payroll:0,payment:0} }

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<UserDataBase>) => {
      console.log("action",action.payload)
      state.id = action.payload.id
      state.full_name = action.payload.full_name
      state.email = action.payload.email
      state.password = action.payload.password
      state.date_incorporation = action.payload.date_incorporation
      state.rating = action.payload.rating
    }
  },
})

export const { addProfile } = profileSlice.actions

export default profileSlice.reducer