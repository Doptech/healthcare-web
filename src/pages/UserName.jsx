import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserName = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container w-[300px] m-auto ">
        <div className="text-center h-[500px]">
          <p className="text-4xl font-bold mt-8">What's your name?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name={name}
            className="p-3 border rounded-lg outline-none my-16"
            placeholder="Enter your Fullname here"
            required
          />
        </div>
        <div>
          <hr />
          <p className="cursor-pointer" onClick={() => navigate('/dob')}>Next</p>
        </div>
      </div>
    </>
  );
};

export default UserName;
