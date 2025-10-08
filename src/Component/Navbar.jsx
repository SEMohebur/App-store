import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/app">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installedApp">Installation</NavLink>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost ">
          <NavLink to="/" className=" flex gap-2 items-center ">
            <img className=" h-[30px]" src={logo} alt="" />
            <p className=" font-bold">App Store</p>
          </NavLink>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/app">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installedApp">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link
          to="https://github.com/SEMohebur/E-Commerce-Shop"
          src="https://github.com/SEMohebur/E-Commerce-Shop"
          className="btn  flex gap-2 items-center bg-linear-to-r from-indigo-700 to-purple-600 text-white font-bold"
        >
          <FaGithub className=" text-xl" />
          <span>Contribute</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
