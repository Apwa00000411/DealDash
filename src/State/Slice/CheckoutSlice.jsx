import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckoutOpen: false,
};

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutOpen: (state) => {
      state.isCheckoutOpen = !state.isCheckoutOpen;
    },
  },
});

export const { checkoutOpen } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
