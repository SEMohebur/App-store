import React from "react";
import notFound404Img from "../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[60vh] w-full flex flex-col justify-center items-center text-center my-4 ">
        <img src={notFound404Img} alt="Not found" className="w-60 mb-6" />

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 max-w-md">
          The page you are looking for is not available.
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

export default NotFoundPage;
