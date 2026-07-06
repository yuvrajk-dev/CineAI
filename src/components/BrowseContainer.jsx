import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const BrowseContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return null;
  return (
    <div className="py-6 md:-mt-70 md:relative md:z-10 px-3 md:px-8">
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default BrowseContainer;
