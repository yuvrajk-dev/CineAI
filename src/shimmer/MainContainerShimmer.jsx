const MainContainerShimmer = () => {
  return (
    <div className="relative mt-20 md:mt-0">
      <div className="aspect-video w-full animate-pulse bg-zinc-900" />

      <div className="absolute bottom-6 left-4 md:bottom-70 md:left-10">
        <div className="mb-4 h-10 w-80 animate-pulse rounded bg-zinc-700 md:h-16 md:w-[500px]" />

        <div className="space-y-2">
          <div className="h-4 w-96 animate-pulse rounded bg-zinc-700" />
          <div className="h-4 w-80 animate-pulse rounded bg-zinc-700" />
          <div className="h-4 w-60 animate-pulse rounded bg-zinc-700" />
        </div>

        <div className="mt-6 flex gap-4">
          <div className="h-12 w-36 animate-pulse rounded-md bg-zinc-200" />
          <div className="h-12 w-40 animate-pulse rounded-md bg-zinc-700" />
        </div>
      </div>
    </div>
  );
};

export default MainContainerShimmer;
