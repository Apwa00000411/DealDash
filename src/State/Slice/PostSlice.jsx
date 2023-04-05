import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts, getPosts", async () => {
  const { data } = await axios.get(`https://dummyjson.com/products`);
  return data.products;
});

const initialState = {
  data: [],
  loading: true,
};

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default PostSlice.reducer;
