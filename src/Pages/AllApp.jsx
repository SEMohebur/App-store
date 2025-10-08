import React, { useState } from "react";
import useAllData from "../Hooks/UseAllData";
import Card from "../Component/Card";
import appNotFoundImg from "../assets/App-Error.png";
import { Link } from "react-router";

const AllApp = () => {
  const { allData, loading, error } = useAllData();
  const [search, setsearch] = useState("");

  if (loading) return <p className=" text-center">Loading...</p>;

  const term = search.trim().toLowerCase();
  const filterData = term
    ? allData.filter((item) => item.title.toLowerCase().includes(term))
    : allData;

  return (
    <div className=" p-10 bg-gray-100">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold">Our All Applications</h1>
        <p className=" font-thin mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className=" flex flex-col gap-3 md:flex-row items-center justify-between my-5">
        <div>
          <span className=" text-green-600 font-bold">
            ({filterData.length})
          </span>
          Apps Found
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="search"
              required
              placeholder="Search App"
            />
          </label>
        </div>
      </div>

      {filterData.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filterData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="h-[60vh] w-full flex flex-col justify-center items-center text-center px-4">
          <img src={appNotFoundImg} alt="Not found" className="w-60 mb-6" />

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops!! App Not Found
          </h2>
          <p className="text-gray-500 max-w-md">
            The app you are requesting is not available in our system. Please
            try searching for another app.
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
      )}
    </div>
  );
};

export default AllApp;
