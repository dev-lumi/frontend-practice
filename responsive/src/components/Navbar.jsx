import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-400/30 px-5 py-3 sm:flex justify-between">
      <h1 className="font-semibold">REACT.</h1>
      <ul className=" sm:flex gap-10">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
