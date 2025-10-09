import React, { useEffect, useState } from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";
import { GrInstall } from "react-icons/gr";

const InstalledAppPage = () => {
  const [orderChange, setOrderChange] = useState("none");
  const [downloadedApp, setDownloadedApp] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("appList"));
    if (localStorageData) {
      setDownloadedApp(localStorageData);
    }
  }, []);

  // console.log(downloadedApp);

  // this function return sorting array
  const sortedFunc = () => {
    if (orderChange == "downloadSize-Asc") {
      return [...downloadedApp].sort((a, b) => a.downloads - b.downloads);
    } else if (orderChange == "downloadSize-Desc") {
      return [...downloadedApp].sort((a, b) => b.downloads - a.downloads);
    } else {
      return downloadedApp;
    }
  };

  //toastMsg
  const downloadAlert = () => toast("✅Uninstall successfully!");

  const removeData = (id) => {
    const rominigData = downloadedApp?.filter((item) => item.id !== id);
    setDownloadedApp(rominigData);
    localStorage.setItem("appList", JSON.stringify(rominigData));
    downloadAlert();
  };

  //numberFormater
  function formatNumber(num) {
    const units = ["", "K", "M", "B", "T", "Q", "Qn"];
    let i = Math.floor(Math.log10(num) / 3); //
    i = Math.min(i, units.length - 1);
    return (num / Math.pow(1000, i)).toFixed(1).replace(/\.0$/, "") + units[i];
  }

  return (
    <div className=" px-10 py-4 bg-gray-100">
      <ToastContainer />
      <div className=" flex flex-col items-center text-center space-y-3 ">
        <h2 className=" font-bold text-2xl pt-10 flex items-center gap-3">
          <span>Your Installed Apps</span>{" "}
          <GrInstall className=" text-indigo-500 text-4xl" />
        </h2>
        <p className=" font-thin text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className=" flex justify-between items-center my-4">
        <div>
          (<span className=" text-green-500">{sortedFunc()?.length}</span>) app
          Found
        </div>
        <div>
          <select
            value={orderChange}
            onChange={(e) => setOrderChange(e.target.value)}
            className="select"
          >
            <option value="none">Sort by size</option>
            <option value="downloadSize-Asc">Low-&gt;High</option>
            <option value="downloadSize-Desc">High-&gt;Low</option>
          </select>
        </div>
      </div>

      <div>
        {sortedFunc() ? (
          sortedFunc().map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-3 mb-2 hover:shadow-2xl duration-300 cursor-pointer"
              >
                <div className=" flex flex-col md:flex-row  items-center gap-3">
                  <img className=" h-20 " src={item.image} alt="" />
                  <div>
                    <h5 className=" font-semibold text-xl text-center md:text-start">
                      {item.title}
                    </h5>
                    <div className=" flex gap-4">
                      <div className=" font-bold text-green-600 flex gap-1 items-center">
                        <img className=" h-4" src={downloadImg} alt="" />
                        {formatNumber(item.downloads)}
                      </div>
                      <div className=" flex items-center text-amber-600">
                        <img className=" h-4" src={ratingImg} alt="" />
                        {item.ratingAvg}
                      </div>
                      <div>{item.size}MB</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeData(item.id)}
                  className=" btn bg-indigo-600 hover:bg-indigo-200 hover:text-black text-white mt-3 md:mt-0"
                >
                  Uninstall
                </button>
              </div>
            );
          })
        ) : (
          <p>not found</p>
        )}
      </div>
    </div>
  );
};

export default InstalledAppPage;
