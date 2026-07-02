import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import supabase from "../utils/supabase";
import ShimmerNavbar from "../shimmer/ShimmerNavbar";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        const user = data.user;

        if (!user) return;
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", user.id)
          .single();

        if (profileError) throw profileError;

        setUser({
          id: user.id,
          email: user.email,
          username: profile.username,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div>
        <ShimmerNavbar />
        <Main />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar email={user?.email} id={user?.id} username={user?.username} />
        <Main />
      </div>
    );
  }
};

export default Dashboard;
