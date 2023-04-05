import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../State/Slice/CartSlice";

const ShoppingItems = ({ item }) => {
  const { id, title, thumbnail, price, rating, stock } = item;
  const dispatch = useDispatch();

  return (
    <div className="hover:bg-gray-200 rounded-md shadow-lg">
      <Link to={`item/${id}`}>
        <div className="bg-main w=[10rem] h-[10rem] flex items-center justify-center relative rounded-md">
          <img
            src={thumbnail}
            alt={title}
            className="w-[15rem] max-w-screen max-h-full  rounded-md hover:scale-125 object-cover transition-all"
          />
          <div
            className={`badge ${
              rating >= 4.5 ? "badge-success" : "badge-warning"
            } absolute top-0 right-0 gap-1`}
          >
            {rating}
            <AiFillStar />
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between mt-6 px-6">
        <div>
          <div className="mb-2 font-medium">{title}</div>
          <div className="text-2xl font-bold">${price}</div>
          <div className="text-red-400">left {stock}</div>
        </div>

        <button
          className="bg-black text-white rounded-md p-1"
          onClick={() => dispatch(add(item))}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingItems;
