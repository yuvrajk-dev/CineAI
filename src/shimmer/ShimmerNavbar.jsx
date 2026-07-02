const ShimmerNavbar = () => {
  return (
    <nav className="w-full absolute h-20 px-6 md:px-20 flex items-center justify-between from-black bg-linear-to-b">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-(--primary)">Cine</span>
        <span className="text-white">AI</span>
      </h1>

      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-1">
        <div className="w-9 h-9 rounded-full bg-white/10 animate-pulse" />

        <div className="hidden sm:block w-24 h-5 rounded bg-white/10 animate-pulse" />

        <div className="w-5 h-5 rounded bg-white/10 animate-pulse" />
      </div>
    </nav>
  );
};

export default ShimmerNavbar;
