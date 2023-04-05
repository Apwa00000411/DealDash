import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slice/AuthSlice";
import CartReducer from "./Slice/CartSlice";
import PostReducer from "./Slice/PostSlice";
import CheckoutReducer from "./Slice/CheckoutSlice";
import SidebarReducer from "./Slice/SidebarSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: CartReducer,
    posts: PostReducer,
    checkout: CheckoutReducer,
    sidebar: SidebarReducer,
  },
});
