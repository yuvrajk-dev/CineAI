import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="mb-5">
      <div>
        <h1 className="text-3xl font-bold  mb-2">{title}</h1>
      </div>
      <div className="flex  flex-nowrap gap-3 scrollbar-none overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} imgPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
