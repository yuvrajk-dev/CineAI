import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ imgPath }) => {
  return (
    <div className=" hover:scale-105 shrink-0">
      <img className="w-48 " src={IMG_CDN_URL + imgPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
