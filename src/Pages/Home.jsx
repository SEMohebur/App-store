import React from "react";
import { Link } from "react-router";
import bannerImg from "../assets/hero.png";
import useAllData from "../Hooks/UseAllData";
import Card from "../Component/Card";
import { CiSaveDown2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaGooglePlay } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Home = () => {
  const { allData, loading, error } = useAllData();

  if (loading)
    return (
      <div className=" h-48 flex justify-center items-center text-center text-2xl font-bold">
        <p>Loading...</p>
      </div>
    );

  // console.log(alu);

  return (
    <div className="  text-center pt-10 bg-gray-100">
      <div className=" space-y-4 ">
        <h1 className=" text-4xl font-bold">
          We Build <br />{" "}
          <span className="  bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className=" font-thin text-sm">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className=" flex justify-center gap-4">
          <Link to="https://play.google.com/store/games?hl=en" className=" btn">
            <img
              className=" h-[20px]"
              src="https://www.pngall.com/wp-content/uploads/15/Google-Play-Logo-PNG-Free-Image.png"
              alt=""
            />
            <span>Google Play</span>
          </Link>
          <Link to="https://www.apple.com/app-store/" className=" btn">
            <img
              className=" h-[20px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
              alt=""
            />
            <span>App Store</span>
          </Link>
        </div>

        {/*banner*/}
        <div className=" flex flex-col">
          <div className=" flex justify-center px-10">
            <img className="  " src={bannerImg} alt="" />
          </div>
          <div className="bg-linear-to-r from-indigo-600 to-purple-500 text-white py-10 ">
            <div className=" space-y-5">
              <h2 className=" font-bold text-2xl">
                Trusted by Millions, Built for You
              </h2>
              <div className=" flex flex-col md:flex-row justify-center gap-10">
                <div className=" flex flex-col items-center">
                  <p className=" text-sm font-thin">Total Downloads</p>
                  <strong className="  text-3xl flex gap-1">
                    29.6M <CiSaveDown2 />
                  </strong>
                  <p className=" text-sm font-thin">21% more than last month</p>
                </div>

                <div className=" flex flex-col items-center">
                  <p className=" text-sm font-thin  ">Total Reviews</p>
                  <strong className=" text-3xl flex gap-1">
                    906K <CiStar />
                  </strong>
                  <p className=" text-sm font-thin">46% more than last month</p>
                </div>

                <div className=" flex flex-col items-center">
                  <p className=" text-sm font-thin">Active Apps</p>
                  <strong className=" text-3xl flex">
                    132+ <FaGooglePlay />
                  </strong>
                  <p className=" text-sm font-thin">31 more will Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Trending Apps*/}
      <div className=" py-10 px-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2  py-2 rounded-lg">
            Trending Apps <FaArrowTrendUp className=" text-indigo-500" />
          </h2>
          <p className="font-thin mt-1">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 pt-5">
          {allData?.slice(0, 8).map((item, index) => {
            return <Card key={index} item={item}></Card>;
          })}
        </div>

        <div className=" pt-5">
          <Link
            to="/app"
            className="btn bg-linear-to-r from-indigo-700 to-purple-600 text-white py-2 px-4 rounded-md cursor-pointer"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
