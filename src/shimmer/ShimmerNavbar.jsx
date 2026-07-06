const ShimmerNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-linear-to-b from-black px-6 md:px-20">
      <h1 className="text-4xl font-bold md:text-5xl">
        <span className="text-(--primary)">Cine</span>
        <span className="text-white">AI</span>
      </h1>

      <div className="flex items-center gap-4">
        <div className="h-9 w-32 animate-pulse rounded-md bg-zinc-200" />

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 animate-pulse rounded bg-zinc-700" />
          <div className="hidden h-4 w-20 animate-pulse rounded bg-zinc-700 md:block" />
          <div className="h-3 w-3 animate-pulse rounded-sm bg-zinc-700" />
        </div>
      </div>
    </nav>
  );
};

export default ShimmerNavbar;
