import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add } from "../State/Slice/CartSlice";
import { AiFillStar } from "react-icons/ai";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    setItem(data);
  };
  fetchData();

  return (
    <>
      {Object.keys(item).length === 0 ? (
        <div className="section min-h-screen ">
          <p className="text-4xl text-center">Loading...</p>
        </div>
      ) : (
        <div className="section min-h-screen p-4 flex items-center justify-center">
          <div className="lg:flex items-center justify-center relative">
            <img
              src={item.images[0]}
              className="lg:w-[35rem] md:w-[30rem] w-[25rem] md:mb-6 mb-8 rounded-md"
            />
            <div
              className={`badge ${
                item.rating >= 4.5 ? "badge-success" : "badge-warning"
              } absolute top-0 right-0 gap-1`}
            >
              {item.rating}
              <AiFillStar />
            </div>
            <div>
              <div className="mb-4 text-3xl ">{item.title}</div>
              <div className="mb-4 text-2xl font-bold">${item.price}</div>
              <div className="max-w-[400px] mb-4">{item.description}</div>
              <button
                onClick={() => dispatch(add(item))}
                className="bg-black text-white rounded-md p-2"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetails;
