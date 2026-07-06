import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const BrowseContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return null;
  return (
    <div className="py-6 px-3">
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default BrowseContainer;
