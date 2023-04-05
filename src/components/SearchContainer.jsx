import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../State/Slice/PostSlice";
import ShoppingItems from "./ShoppingItems";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { data } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [search]);

  const post = data.slice().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="section min-h-screen">
      <input
        className="w-full bg-main rounded-md p-2 text-xl"
        placeholder="search name or brand..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-8">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? { post }
              : item.title.toLowerCase().includes(search) ||
                  item.brand.toLowerCase().includes(search);
          })
          .map((item) => {
            return <ShoppingItems key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default SearchContainer;
