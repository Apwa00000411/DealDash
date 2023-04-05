import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { sidebarOpen } from "../State/Slice/SidebarSlice";
import { checkoutOpen } from "../State/Slice/CheckoutSlice";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  });
  return (
    <div
      className={`${
        scroll ? "bg-main shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className="flex items-center justify-between relative container mx-auto py-4 px-2 gap-6">
        <Link to="/">
          <div className="font-bold text-xl cursor-pointer">DealDash</div>
        </Link>
        <div className="flex items-center justify-center relative gap-6">
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(sidebarOpen())}
          >
            <HiMenu className="text-3xl" />
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(checkoutOpen())}
          >
            <BiShoppingBag className="text-3xl opacity-80" />
            <div className="bg-black text-white w-4 h-4 absolute right-[-3px] bottom-[-3px] flex items-center justify-center rounded-full text-[10px] z-10">
              {amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
