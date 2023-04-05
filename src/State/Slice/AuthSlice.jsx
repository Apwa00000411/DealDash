import { createSlice } from "@reduxjs/toolkit";
import { BiBadge } from "react-icons/bi";

const initialState = {
  isLogin: false,
  email: "aa@bb.cc",
  password: "1234",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
  },
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
