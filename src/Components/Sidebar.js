import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  
  return (
    <div className="p-6 shadow-lg w-48 ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
