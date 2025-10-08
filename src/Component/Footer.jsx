import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" px-7 bg-gray-900 text-white py-10">
      <div className=" flex items-center justify-between px-">
        <NavLink className=" flex items-center ">
          <img className=" h-[50px]" src={logo} alt="" />
          <p className=" font-bold">App Store</p>
        </NavLink>
        <div>
          <h2>Social Links</h2>
          <div className=" flex gap-3">
            <TiSocialTwitter />
            <FaLinkedinIn />
            <FaFacebookF />
          </div>
        </div>
      </div>
      <hr className=" text-gray-700 my-2" />
      <p className=" text-center font-thin">
        Copyright © 2025 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
