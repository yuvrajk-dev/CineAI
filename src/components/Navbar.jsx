import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import DropDown from "./DropDown";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDropDownOpen(false);
    navigate("/");
  };

  return (
    <nav className="w-full absolute h-20 px-6 md:px-20 flex items-center justify-between from-black bg-linear-to-b ">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-(--primary)">Cine</span>
        <span className="text-white">AI</span>
      </h1>

      <div className="relative">
        <div
          onClick={() => {
            setIsDropDownOpen((prev) => !prev);
          }}
          className="flex items-center cursor-pointer gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-1"
        >
          <div className="w-9 h-9 rounded-full bg-(--primary) flex items-center justify-center font-semibold text-white">
            {/* {user.username?.[0]?.toUpperCase()} */}nj
          </div>

          <span className="text-white font-medium hidden sm:block">
            {/* {user.username} */} jb
          </span>

          {isDropDownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {isDropDownOpen && <DropDown onLogout={handleLogout} />}
      </div>
    </nav>
  );
};

export default Navbar;
