import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";

const Card = ({ item }) => {
  function formatNumber(num) {
    const units = ["", "K", "M", "B", "T", "Q", "Qn"];
    let i = Math.floor(Math.log10(num) / 3); //
    i = Math.min(i, units.length - 1);
    return (num / Math.pow(1000, i)).toFixed(1).replace(/\.0$/, "") + units[i];
  }

  return (
    <Link
      to={`/cardDetailPage/${item.id}`}
      className="block shadow-lg p-5 bg-white rounded-2xl hover:shadow-2xl duration-300"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center border border-gray-200 rounded-2xl p-3 bg-gray-50">
          <img
            className="h-32 w-32 md:h-36 md:w-36 rounded-xl object-contain"
            src={item.image}
            alt={item.title}
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {item.title}
        </h3>

        <div className="flex justify-between w-full mt-2">
          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-md">
            <img className="h-4 w-4" src={downloadIcon} alt="Downloads" />
            <span className="font-semibold text-gray-700">
              {formatNumber(item.downloads)}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-md">
            <img className="h-4 w-4" src={ratingIcon} alt="Rating" />
            <span className="font-semibold text-gray-700">
              {item.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
