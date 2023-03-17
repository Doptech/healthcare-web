import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container w-[300px] m-auto ">
        <div className="text-center h-[500px]">
          <p className="text-4xl font-bold mt-8">Height</p>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            name={height}
            className="p-3 border rounded-lg outline-none my-8 cursor-pointer"
            placeholder="Enter height in meters"
          />

          <p className="text-4xl font-bold">Weight</p>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            name={weight}
            className="p-3 border rounded-lg outline-none my-8 cursor-pointer"
            placeholder="Enter weight in kgs"
          />
        </div>
        <div>
          <hr />
          <div className="flex justify-between">
            <p className="cursor-pointer" onClick={() => navigate("/gender")}>
              Back
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/allergy")}>
              Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
