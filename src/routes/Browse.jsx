import { useState } from "react";
import Navbar from "../components/Navbar";
import ShimmerNavbar from "../shimmer/ShimmerNavbar";
import { Navigate } from "react-router";
import useFetchUser from "../hooks/useFetchUser";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import BrowseContainer from "../components/BrowseContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useFetchUser(setUser, setLoading);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  if (loading) {
    return (
      <div>
        <ShimmerNavbar />
      </div>
    );
  }

  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="bg-black">
      <Navbar email={user?.email} id={user?.id} username={user?.username} />
      <MainContainer />
      <BrowseContainer />
    </div>
  );
};

export default Browse;
