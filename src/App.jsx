import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import ItemDetails from "./components/ItemDetails";
import SearchContainer from "./components/SearchContainer";
import Price from "./components/Price";
import Category from "./components/Category";
import Rating from "./components/Rating";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Checkout from "./components/Checkout";
import { total } from "./State/Slice/CartSlice";
import Login from "./components/Login";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isCheckoutOpen } = useSelector((state) => state.checkout);
  const { isSidebarOpen } = useSelector((state) => state.sidebar);
  const { isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <>
      {isLogin && (
        <BrowserRouter>
          <Navbar />
          {isSidebarOpen && <Sidebar />}
          {isCheckoutOpen && <Checkout />}
          <Routes>
            <Route path="/" element={<ShoppingContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetails />}></Route>
            <Route path="search/item/:id" element={<ItemDetails />}></Route>
            <Route path="price/item/:id" element={<ItemDetails />}></Route>
            <Route path="category/item/:id" element={<ItemDetails />}></Route>
            <Route path="rating/item/:id" element={<ItemDetails />}></Route>
            <Route path="search" element={<SearchContainer />}></Route>
            <Route path="price" element={<Price />}></Route>
            <Route path="rating" element={<Rating />}></Route>
            <Route path="category" element={<Category />}></Route>
            <Route
              path="/*"
              element={
                <h1 className="section">Sorry something went wrong...</h1>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
      {!isLogin && <Login />}
    </>
  );
};

export default App;
