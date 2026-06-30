import React from "react";

const DropDown = ({ onLogout, email }) => {
  return (
    <div className="absolute right-0 top-14 w-44  backdrop-blur-md bg-black/50 border border-white/10 rounded-2xl  shadow-xl">
      <div
        onClick={onLogout}
        className="w-full text-left px-4 py-2  text-(--text-muted) text-sm"
      >
        {email}
      </div>
      <button
        onClick={onLogout}
        className="w-full text-left px-5 py-3 rounded-xl text-red-500 hover:bg-white/10 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default DropDown;
