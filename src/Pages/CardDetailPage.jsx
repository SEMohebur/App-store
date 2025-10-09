import React, { useEffect, useState } from "react";
import useAllData from "../Hooks/UseAllData";
import { useNavigate, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";

import { ToastContainer, toast } from "react-toastify";

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
  const navigate = useNavigate();
  const { allData, loading, error } = useAllData();
  const [btnStatus, setBtnStatus] = useState(false);

  const { id } = useParams();

  //btn status check
  useEffect(() => {
    const downloadedApp = JSON.parse(localStorage.getItem("appList"));
    const status = downloadedApp?.some((app) => app.id == id);
    setBtnStatus(status);
  }, [btnStatus]);

  // pages loading======================================================
  if (loading)
    return (
      <div className=" h-48 flex justify-center items-center text-center text-2xl font-bold">
        <p>Loading...</p>
      </div>
    );

  //find singlae data
  const singleData = allData.find((item) => item.id == id);

  if (!singleData) return navigate("/notFoundApp");

  //numberFormater
  function formatNumber(num) {
    const units = ["", "K", "M", "B", "T", "Q", "Qn"];
    let i = Math.floor(Math.log10(num) / 3); //
    i = Math.min(i, units.length - 1);
    return (num / Math.pow(1000, i)).toFixed(1).replace(/\.0$/, "") + units[i];
  }

  //ToastMsg
  const downloadAlert = () => toast("✅ Installed successfully!");
  const allradyAxist = () => toast("✅ Already installed!");

  //add to localstorage
  const addToLocalStorage = () => {
    const downloadedApp = JSON.parse(localStorage.getItem("appList"));
    let updateList = [];
    if (downloadedApp) {
      const isDublicate = downloadedApp.some((app) => app.id == id);
      if (isDublicate) return allradyAxist();
      updateList = [...downloadedApp, singleData];
    } else {
      updateList.push(singleData);
    }
    localStorage.setItem("appList", JSON.stringify(updateList));
    // console.log(downloadedApp);
    downloadAlert();
    setBtnStatus(!btnStatus);
  };

  return (
    <div className=" bg-gray-100 p-10 ">
      <div className=" flex flex-col md:flex-row gap-10  ">
        <div className=" bg-white flex items-center justify-center rounded-2xl p-2 ">
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
          <hr className=" my-2 text-gray-400" />
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
          <button
            disabled={btnStatus}
            onClick={addToLocalStorage}
            className=" mt-2 btn bg-green-400 text-white"
          >
            {btnStatus
              ? "Already Download"
              : `Install Now ${singleData.size}MB`}
          </button>
        </div>
      </div>
      <hr className=" my-3 text-gray-400" />

      {/* Ratings Chart */}
      <h2 className=" text-center text-indigo-600 font-semibold underline my-3">
        Ratings Chart
      </h2>
      <div className="w-full h-96 border border-gray-400 shadow-xl rounded-xl">
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
        <p className=" font-semibold  text-2xl  text-gray-700 mb-2">
          Description
        </p>
        <p className=" font-thin">{singleData.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardDetailPage;
