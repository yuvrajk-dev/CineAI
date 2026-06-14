import { useState } from "react";
import Footer from "../components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/bg4.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full min-h-screen flex justify-center items-center px-4"
      >
        <div className="w-full max-w-80 bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isLogin ? "Sign In" : "Sign Up"}
          </h1>

          <p className="text-(--text-muted) mb-8">
            Discover movies with AI-powered recommendations.
          </p>

          <form className="flex flex-col gap-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
            />

            <button
              type="submit"
              className="w-full bg-(--primary) text-white py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-(--text-muted) mt-6 text-sm text-center">
            {isLogin ? "New to CineAI? " : "Already have an account? "}

            <span
              onClick={() => setIsLogin((prev) => !prev)}
              className="text-white cursor-pointer hover:underline font-medium"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
