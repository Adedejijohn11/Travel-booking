import React from "react";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center px-10 pt-3 ">
      <div className="text-black text-center text-4xl font-bold ">Logo</div>
      <div>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
