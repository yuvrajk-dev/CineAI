const GptMovieListShimmer = () => {
  return (
    <div className="relative z-10 w-full px-3 md:px-5 py-6 animate-pulse">
      <div className="h-8 w-56 rounded bg-gray-700 mb-5"></div>

      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-48 shrink-0">
            <div className="aspect-2/3 rounded-md bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieListShimmer;
