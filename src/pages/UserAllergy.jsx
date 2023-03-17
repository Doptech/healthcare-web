import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAllergy = () => {
  const [allergy, setAllergy] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container w-[300px] m-auto ">
        <div className="text-center h-[500px]">
          <p className="text-4xl font-bold mt-8">Any allergies?</p>
          <div className="m-6 flex flex-col">
            <div className="m-6 flex gap-4">
              <input
                type="checkbox"
                value="Egg"
                onChange={(e) => setAllergy(e.target.value)}
                className="p-4"
              />
              <label for="vehicle1"> Egg </label>
            </div>
            <div className="m-6 flex gap-4">
              <input
                type="checkbox"
                value="Fish"
                onChange={(e) => setAllergy(e.target.value)}
              />
              <label for="vehicle2"> Fish </label>
            </div>
            <div className="m-6 flex gap-4">
              <input
                type="checkbox"
                value="Milk"
                onChange={(e) => setAllergy(e.target.value)}
              />
              <label for="vehicle3"> Milk </label>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex justify-between">
            <p className="cursor-pointer" onClick={() => navigate("/details")}>
              Back
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/test")}>
              Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAllergy;
