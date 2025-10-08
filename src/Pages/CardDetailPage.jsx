import React from "react";
import useAllData from "../Hooks/UseAllData";
import { useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const CardDetailPage = () => {
  const { allData, loading, error } = useAllData();

  const { id } = useParams();
  //loading
  if (loading) return <p className=" text-center">Loading...</p>;
  const singleData = allData.find((item) => item.id == id);
  console.log(singleData);

  function formatNumber(num) {
    const units = ["", "K", "M", "B", "T", "Q", "Qn"];
    let i = Math.floor(Math.log10(num) / 3); //
    i = Math.min(i, units.length - 1);
    return (num / Math.pow(1000, i)).toFixed(1).replace(/\.0$/, "") + units[i];
  }

  return (
    <div className=" bg-gray-100 p-10 ">
      <div className=" flex gap-10  ">
        <div className=" bg-white rounded-2xl p-2">
          <img className=" h-40" src={singleData.image} alt="" />
        </div>
        <div>
          <h2 className=" font-bold text-2xl">{singleData.title}</h2>
          <p className=" font-thin">
            Developed by{" "}
            <span className=" font-bold text-purple-700">
              {singleData.companyName}
            </span>
          </p>
          <hr className=" my-2" />
          <div className=" flex gap-4">
            <div>
              <img className=" h-7" src={downloadImg} alt="" />
              <p className=" font-thin text-sm">Downloads</p>
              <p className=" text-2xl font-bold">
                {formatNumber(singleData.downloads)}
              </p>
            </div>

            <div>
              <img className=" h-7" src={ratingImg} alt="" />
              <p className=" font-thin text-sm">Average Ratings</p>
              <p className=" text-2xl font-bold">{singleData.ratingAvg}</p>
            </div>

            <div>
              <img className=" h-7" src={reviewImg} alt="" />
              <p className=" font-thin text-sm">Total Reviews</p>
              <p className=" text-2xl font-bold">
                {formatNumber(singleData.reviews)}
              </p>
            </div>
          </div>
          <button className=" mt-2 btn bg-green-400 text-white">
            Install Now
          </button>
        </div>
      </div>
      <hr className=" my-3" />

      {/* Ratings Chart */}
      <h2 className=" text-center text-indigo-600 font-semibold underline my-3">
        Ratings Chart
      </h2>
      <div className="w-full h-96 shadow-2xl rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={singleData.ratings}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" barSize={40} fill="#8884d8" />
            <Line type="monotone" dataKey="count" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/*description*/}
      <div className=" my-3">
        <p className=" font-semibold mb-2">Description</p>
        <p className=" font-thin">{singleData.description}</p>
      </div>
    </div>
  );
};

export default CardDetailPage;
