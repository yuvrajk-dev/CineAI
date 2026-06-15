import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { validateAuth } from "../utils/validation";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(() => {
    const value = localStorage.getItem("isLogin");
    return value === null ? true : value === "true";
  });
  const [errors, setErrors] = useState({});

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const handleAuth = async (e) => {
    e.preventDefault();
    const ValidationError = validateAuth(
      email.current.value,
      username.current?.value || "",
      password.current.value,
      isLogin,
    );

    setErrors(ValidationError);

    if (Object.keys(ValidationError).length > 0) return;

    try {
      if (!isLogin) {
        const { data, error } = await supabase.auth.signUp({
          email: email.current.value,
          password: password.current.value,
        });

        if (error) throw error;

        const { error: profileError } = await supabase
          .from("profiles")
          .insert({ id: data.user.id, username: username.current.value });

        if (profileError) throw profileError;

        navigate("/main");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.current.value,
          password: password.current.value,
        });

        if (error) throw error;
        navigate("/main");
      }

      // navigat
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        authError: error.message,
      }));
    } finally {
      // rfs
    }
  };

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

          <form onSubmit={handleAuth} className="flex  flex-col gap-4">
            {!isLogin && (
              <div>
                <input
                  onChange={() => {
                    setErrors((prev) => ({
                      ...prev,
                      usernameError: "",
                      authError: "",
                    }));
                  }}
                  ref={username}
                  type="text"
                  placeholder="Username"
                  className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
                />
                {errors.usernameError && (
                  <p className="text-(--primary) text-sm pl-1">
                    {errors.usernameError}
                  </p>
                )}
              </div>
            )}

            <div>
              <input
                type="email"
                onChange={() => {
                  setErrors((prev) => ({
                    ...prev,
                    emailError: "",
                    authError: "",
                  }));
                }}
                placeholder="Email"
                ref={email}
                className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
              />
              {errors.emailError && (
                <p className="text-(--primary) text-sm pl-1">
                  {errors.emailError}
                </p>
              )}
            </div>

            <div>
              <input
                ref={password}
                onChange={() => {
                  setErrors((prev) => ({
                    ...prev,
                    passwordError: "",
                    authError: "",
                  }));
                }}
                type="password"
                placeholder="Password"
                className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-(--primary)"
              />
              {errors.passwordError && (
                <p className="text-(--primary) text-sm pl-1">
                  {errors.passwordError}
                </p>
              )}
            </div>

            <div>
              {errors.authError && (
                <p className="text-(--primary) text-sm pl-1">
                  {errors.authError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-(--primary) text-white py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </div>
          </form>

          <p className="text-(--text-muted) mt-6 text-sm text-center">
            {isLogin ? "New to CineAI? " : "Already have an account? "}

            <span
              onClick={() => {
                setIsLogin((prev) => !prev);
                setErrors({});
              }}
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
