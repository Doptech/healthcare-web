import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserGender = () => {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container w-[300px] m-auto ">
        <div className="text-center h-[500px]">
          <p className="text-4xl font-bold my-8">What's your Biological Sex?</p>
          <p>This helps us to suggests medication in respect to your gender</p>
          <div className="flex justify-evenly">
            <div>
              <input
                type="radio"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                name={gender}
                className="p-3 mr-4 border rounded-lg outline-none my-16"
                placeholder="Enter your Fullname here"
              />
              <label>Male</label>
            </div>
            <div>
              <input
                type="radio"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                name={gender}
                id="male"
                className="p-3 mr-4 border rounded-lg outline-none my-16 text-lg"
                placeholder="Enter your Fullname here"
              />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex justify-between">
            <p className="cursor-pointer" onClick={() => navigate("/dob")}>
              Back
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/details")}>
              Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGender;
