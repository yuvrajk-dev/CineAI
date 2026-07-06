import MovieListShimmer from "./MovieListShimmer";

const BrowseContainerShimmer = () => {
  return (
    <div className="px-3 py-6 md:relative md:-mt-70 md:z-10 md:px-5">
      <MovieListShimmer />
      <MovieListShimmer />
      <MovieListShimmer />
      <MovieListShimmer />
    </div>
  );
};

export default BrowseContainerShimmer;
