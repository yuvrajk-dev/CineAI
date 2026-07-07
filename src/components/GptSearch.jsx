import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openRouter from "../utils/openRouter";

const GptSearch = () => {
  const language = useSelector((store) => store.gpt.lang);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    const prompt = searchValue.trim();

    if (!prompt) {
      setError("Please enter a movie description.");
      return;
    }
    setLoading(true);

    try {
      const response = await openRouter.chat.send({
        chatRequest: {
          model: "openrouter/free",
          messages: [
            {
              role: "system",
              content:
                "You are a movie recommendation assistant. Recommend exactly 5 movies. Return ONLY the movie titles separated by commas. Do not include numbering, explanations, or any extra text.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        },
      });

      const moviesName = response.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());
      console.log(moviesName);
      setSearchValue("");
    } catch (err) {
      if (err.statusCode === 429) {
        setError(
          "The AI is busy right now. Please try again in a few seconds.",
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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

      <div className="relative z-10 w-full  max-w-3xl">
        <h1 className="mb-6 text-center text-3xl md:text-4xl font-bold text-white">
          {lang[language].heading}
        </h1>

        <form
          onSubmit={handleSearch}
          className="   rounded-md bg-black/70 p-4 md:flex-row"
        >
          <div className="flex gap-3 flex-col md:flex-row">
            <input
              disabled={loading}
              value={searchValue}
              onChange={(e) => {
                setError("");
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder={lang[language].placeholder}
              className="flex-1 rounded-md bg-white px-4 py-3 text-black outline-none"
            />

            <button
              disabled={loading}
              type="submit"
              className="w-36 rounded-md bg-(--primary) px-6 py-3 font-semibold text-white transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:0.15s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:0.3s]"></span>
                </div>
              ) : (
                lang[language].search
              )}
            </button>
          </div>
          {error && <p className="text-red-700 pt-1 pl-2 ">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
