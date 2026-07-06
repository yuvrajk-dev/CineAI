import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import DropDown from "./DropDown";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const Navbar = ({ email, username }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDropDownOpen(false);
    navigate("/");
  };

  return (
    <nav className="w-full z-999 top-0 left-0 absolute h-20 px-6 md:px-20 flex items-center justify-between from-black bg-linear-to-b ">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-(--primary)">Cine</span>
        <span className="text-white">AI</span>
      </h1>

      <div className="relative ">
        <button
          onClick={() => setIsDropDownOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-(--primary) flex items-center justify-center text-white font-semibold">
            {username?.[0]?.toUpperCase()}
          </div>

          <span className="hidden md:block text-white text-sm">{username}</span>

          <div
            className={`text-white transition-transform duration-200 ${
              isDropDownOpen ? "rotate-180" : ""
            }`}
          >
            <IoMdArrowDropdown size={20} />
          </div>
        </button>

        {isDropDownOpen && <DropDown onLogout={handleLogout} email={email} />}
      </div>
    </nav>
  );
};

export default Navbar;
