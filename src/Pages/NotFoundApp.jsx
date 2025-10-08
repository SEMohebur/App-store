import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router";
import appNotFoundImg from "../assets/App-Error.png";

const NotFoundApp = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[60vh] w-full flex flex-col justify-center items-center text-center px-4 my-5">
        <img src={appNotFoundImg} alt="Not found" className="w-60 mb-6" />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops!! App Not Found
        </h2>
        <p className="text-gray-500 max-w-md">
          The app you are requesting is not available in our system. Please try
          searching for another app.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-700 to-purple-600 
                      text-white font-semibold flex items-center gap-2"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFoundApp;
