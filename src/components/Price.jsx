import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingItems from "./ShoppingItems";
import { getPosts } from "../State/Slice/PostSlice";

const Price = () => {
  const { data, loading } = useSelector((state) => state.posts);
  // const [select, setSelect] = useState([]);
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const changePrice = (e) => {
    const select = e.target.value;

    if (select === "more") {
      const resultMore = data
        .filter((i) => i.price >= 1000)
        .sort((a, b) => a.price - b.price);
      setShow(resultMore);
    }

    if (select === "low") {
      const resultLow = data.slice().sort((a, b) => a.price - b.price);
      setShow(resultLow);
    }

    if (select === "high") {
      const resultHigh = data.slice().sort((a, b) => b.price - a.price);
      setShow(resultHigh);
    }
  };

  return (
    <div className="section min-h-sreen">
      <select
        className="select select-bordered w-full max-w-full bg-main"
        onChange={(e) => changePrice(e)}
      >
        <option disabled selected>
          Select Price
        </option>
        <option value="more">more than $1000</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
      </select>

      {loading ? (
        <div className="section min-h-screen text-center text-xl">
          loading...
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-8">
          {show?.map((item) => {
            return <ShoppingItems key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Price;
