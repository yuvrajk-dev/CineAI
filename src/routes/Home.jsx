import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import supabase from "../utils/supabase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const fetchProfile = async (id) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      return null;
    }

    return data;
  };

  const handleUser = async (authUser) => {
    const profile = await fetchProfile(authUser.id);
    if (!profile) return;

    const user = {
      id: authUser.id,
      email: authUser.email,
      username: profile.username,
    };
    dispatch(addUser(user));
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        handleUser(session.user);
      } else {
        dispatch(removeUser());
        console.log("User logged out");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <div className=" ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
