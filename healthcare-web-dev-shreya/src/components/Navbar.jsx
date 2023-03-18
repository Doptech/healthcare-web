import React from "react";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <>
      <div className="p-4 flex justify-between w-full">
        <p className="text-4xl">
          <span className=" font-bold">Doc</span>trin
        </p>
        <img src={user} alt="" className="w-10 h-10" />
      </div>
      <hr />
    </>
  );
};

export default Navbar;
