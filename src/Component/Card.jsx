import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

const Card = ({ item }) => {
  function formatNumber(num) {
    const units = ["", "K", "M", "B", "T", "Q", "Qn"];
    let i = Math.floor(Math.log10(num) / 3); //
    i = Math.min(i, units.length - 1);
    return (num / Math.pow(1000, i)).toFixed(1).replace(/\.0$/, "") + units[i];
  }

  return (
    <div className=" shadow p-5 bg-white rounded-xl">
      <div className="p-5">
        <div className=" flex justify-center border border-gray-200 rounded-2xl p-2">
          <img
            className=" h-40 w-40 md:h-32 rounded-xl"
            src={item.image}
            alt=""
          />
        </div>
        <p className=" float-left mt-2">{item.title}</p>
        <br />
        <div className=" flex justify-between mt-3 ">
          <div className=" flex items-center gap-1 bg-green-100 p-1 rounded-md">
            <img className=" h-3" src={downloadIcon} alt="" />
            <span className=" font-bold">{formatNumber(item.downloads)}</span>
          </div>

          <div className=" flex items-center gap-1 bg-yellow-100 p-1 rounded-md">
            <img className=" h-3" src={ratingIcon} alt="" />
            <span className=" font-bold">{item.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
