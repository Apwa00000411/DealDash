import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingItems from "./ShoppingItems";
import { getPosts } from "../State/Slice/PostSlice";

const Category = () => {
  const { data, loading } = useSelector((state) => state.posts);
  // const [select, setSelect] = useState("");
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  let unique = [];

  data.filter((i) => {
    const without = unique.includes(i.category);

    if (!without) {
      unique.push(i.category);

      return true;
    }

    return false;
  });

  // const showItems = data.filter((i) => select === i.category);

  // if (showItems) {
  //   setShow(showItems);
  // }

  // console.log(show);

  const changeCate = (e) => {
    const select = e.target.value;

    const showItems = data.filter((i) => select === i.category);

    if (showItems) setShow(showItems);
  };

  return (
    <div className="section min-h-sreen">
      <select
        className="select select-bordered w-full max-w-full bg-main"
        onChange={(e) => changeCate(e)}
      >
        <option disabled selected>
          Pick Category
        </option>
        {unique?.map((item) => (
          <option>{item}</option>
        ))}
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

export default Category;
