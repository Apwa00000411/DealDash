import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { remove, increase, decrease } from "../State/Slice/CartSlice";

const CheckoutItems = ({ cartItem }) => {
  const { title, thumbnail, stock, price, amount } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="flex  justify-between p-4 mb-6 items-center border border-white">
      <div className="flex items-center gap-6">
        <img src={thumbnail} alt={title} className="w-20 h-20 object-cover" />
        <div>{title.slice(0, 10) + "..."}</div>
      </div>

      <div className="max-w-[6.8rem]">
        <div className="flex items-center gap-4 mt-2">
          <button
            className="bg-black w-8 h-8 rounded-full text-white"
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="bg-black w-8 h-8 rounded-full text-white"
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <GrClose
          className="cursor-pointer"
          onClick={() => dispatch(remove(cartItem))}
        />
        <div>${(amount * price).toFixed(2)}</div>
        <div className="text-red-500">left: {stock}</div>
      </div>
    </div>
  );
};

export default CheckoutItems;
