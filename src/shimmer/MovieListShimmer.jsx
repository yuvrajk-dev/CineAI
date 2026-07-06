const MovieListShimmer = () => {
  return (
    <div className="mb-6">
      <div className="mb-4 h-8 w-48 animate-pulse rounded bg-zinc-700" />

      <div className="flex gap-3 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-72 w-48 shrink-0 animate-pulse rounded bg-zinc-800"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListShimmer;
