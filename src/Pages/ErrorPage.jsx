import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ErrorPage = () => {
  // error cullect kore ui te dekhano holo
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-60 flex justify-center items-center text-center">
        <div>
          {" "}
          <p className=" font-bold text-2xl">Something went Wrong</p>
          <p className=" text-red-500">{error.message}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
