import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const UserDob = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container w-[300px] m-auto ">
        <div className="text-center h-[500px]">
          <p className="text-4xl font-bold mt-8">What's your Birth Date?</p>
          <p>This helps us to suggests medication in respect to your age</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name={date}
            className="p-3 border rounded-lg outline-none my-16 cursor-pointer"
          />
        </div>
        <div>
          <hr />
          <div className="flex justify-between">
            <p className="cursor-pointer" onClick={() => navigate("/name")}>
              Back
            </p>
            <p className="cursor-pointer" onClick={() => navigate("/gender")}>
              Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDob;
