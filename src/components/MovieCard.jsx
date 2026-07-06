import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className="shrink-0 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-(--shadow-m)">
      <img className="w-48 " src={IMG_CDN_URL + imgPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
