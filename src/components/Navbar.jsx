import React from "react";
import logo from "../assets/logo.jpg"; 
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-2 py-2">
      <img className="w-[50px]"  src={logo} alt="Moviemania"></img> 
      <Link className="text-blue-500 font-bold text-lg" to='/'>Movies</Link>
      <Link className="text-blue-500 font-bold text-lg" to ='/watchlist'>WatchList</Link>

      
    </div>
  );
};

export default Navbar;
