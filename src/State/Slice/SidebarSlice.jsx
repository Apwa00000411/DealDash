import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};
const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { sidebarOpen } = SidebarSlice.actions;
export default SidebarSlice.reducer;
