import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingItems from "./ShoppingItems";

const Rating = () => {
  const { data } = useSelector((state) => state.posts);

  return (
    <div className="section grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
      {data
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .map((item) => {
          return <ShoppingItems key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Rating;
