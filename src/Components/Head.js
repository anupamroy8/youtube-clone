import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler() }
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
        />
        <a href="/">
          <img
            className="h-8 mx-4"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 self-center rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="usericon"
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        />
      </div>
    </div>
  );
};

export default Head;
