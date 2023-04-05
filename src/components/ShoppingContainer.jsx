import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../State/Slice/PostSlice";
import ShoppingItems from "./ShoppingItems";

const ShoppingContainer = () => {
  const { data, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {loading ? (
        <div className="section min-h-screen text-4xl text-center">
          <h1 className="text-4xl">Loading...</h1>
        </div>
      ) : (
        <div className="section grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {data?.map((item) => (
            <ShoppingItems key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShoppingContainer;
