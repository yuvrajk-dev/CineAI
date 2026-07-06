import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const language = useSelector((store) => store.gpt.lang);
  return (
    <div
      style={{
        backgroundImage: "url('/bg4.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-full flex items-center justify-center px-4"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl">
        <h1 className="mb-6 text-center text-3xl md:text-4xl font-bold text-white">
          {lang[language].heading}
        </h1>

        <form className="flex flex-col gap-3 rounded-md bg-black/70 p-4 md:flex-row">
          <input
            type="text"
            placeholder={lang[language].placeholder}
            className="flex-1 rounded-md bg-white px-4 py-3 text-black outline-none"
          />

          <button
            type="submit"
            className="rounded-md bg-(--primary) px-6 py-3 font-semibold text-white transition hover:brightness-110"
          >
            {lang[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
