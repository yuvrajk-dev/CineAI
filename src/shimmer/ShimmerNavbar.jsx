const ShimmerNavbar = () => {
  return (
    <nav className="absolute flex h-20 w-full items-center justify-between bg-linear-to-b from-black px-6 md:px-20">
      <h1 className="text-4xl font-bold md:text-5xl">
        <span className="text-(--primary)">Cine</span>
        <span className="text-white">AI</span>
      </h1>

      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded bg-zinc-700 animate-pulse" />

        <div className="hidden h-4 w-20 rounded bg-zinc-700 animate-pulse md:block" />

        <div className="h-3 w-3 rounded-sm bg-zinc-700 animate-pulse" />
      </div>
    </nav>
  );
};

export default ShimmerNavbar;
