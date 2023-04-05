import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { checkoutOpen } from "../State/Slice/CheckoutSlice";
import CheckoutItems from "./CheckoutItems";
import { BsTrashFill } from "react-icons/bs";
import { clear } from "../State/Slice/CartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="bg-transparentBlack h-screen w-full z-30 fixed left-0 top-0">
      <div className="h-full sm:w-[40rem] min-w-[15rem] bg-main overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(checkoutOpen())}
            >
              <AiFillCaretLeft />
              <span className="uppercase text-[0.95rem]">
                continued shopping
              </span>
            </div>
            <div>shopping bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="text-center uppercase text-3xl">
                your cart is emtry
              </div>
            ) : (
              <>
                {cartItems.map((cartItem) => {
                  return (
                    <CheckoutItems key={cartItem.id} cartItem={cartItem} />
                  );
                })}
                <div className="flex justify-between items-center mt-12">
                  <div>total cost: ${total.toFixed(2)}</div>
                  <BsTrashFill
                    className="text-2xl cursor-pointer"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <div className="cursor-pointer p-3 mt-8 text-center bg-black text-white">
                  Check out
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
