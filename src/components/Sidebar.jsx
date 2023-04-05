import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sidebarOpen } from "../State/Slice/SidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-transparentBlack h-screen w-full z-30 fixed left-0 top-0">
      <div className="h-full sm:w-[40rem] min-w-[15rem] bg-main">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer">
              <span className="font-bold text-xl">Shoplify</span>
            </div>
            <div
              className="text-3xl cursor-pointer"
              onClick={() => dispatch(sidebarOpen())}
            >
              <AiFillCloseCircle />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-10 text-2xl ml-10 gap-10 ">
            <Link to="/">
              <div className="flex items-center gap-3 hover:text-white">
                <AiFillHome />
                all products
              </div>
            </Link>
            <Link to="search">
              <div className="flex items-center gap-3 hover:text-white">
                <FaSearch />
                search
              </div>
            </Link>
            <Link to="category">
              <div className="flex items-center gap-3 hover:text-white">
                <MdCategory />
                category
              </div>
            </Link>
            <Link to="price">
              <div className="flex items-center gap-3 hover:text-white">
                <ImPriceTags />
                price
              </div>
            </Link>
            <Link to="rating">
              <div className="flex items-center gap-3 hover:text-white">
                <AiFillStar />
                rating
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
