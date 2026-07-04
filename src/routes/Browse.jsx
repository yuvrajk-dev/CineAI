import { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import ShimmerNavbar from "../shimmer/ShimmerNavbar";
import { Navigate } from "react-router";
import useFetchUser from "../hooks/useFetchUser";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useFetchUser(setUser, setLoading);
  useNowPlayingMovies();

  if (loading) {
    return (
      <div>
        <ShimmerNavbar />
        <Main />
      </div>
    );
  }

  if (!user) return <Navigate to="/" replace />;

  return (
    <div>
      <Navbar email={user?.email} id={user?.id} username={user?.username} />
      <Main />
    </div>
  );
};

export default Browse;
