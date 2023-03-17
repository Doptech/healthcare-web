import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import next from "../assets/next.png";
import back from "../assets/back.png";
import { Card, CardBody } from "@chakra-ui/react";

const UserDob = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container w-[300px] md:w-[500px] h-[500px] m-auto mt-20 items-center">
        <Card
          border={"1px solid lightgray"}
          className="child-container h-full p-6 rounded"
        >
          <CardBody>
            <div className="text-center">
              <p className="text-4xl font-bold mt-8">What's your Birth Date?</p>
              <p className="mt-8">This helps us to suggests medication in respect to your age</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name={date}
                className="p-3 border rounded-lg outline-none my-16 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <hr className="" />
              <div className="flex justify-between">
                <img
                  src={back}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/name")}
                />
                <img
                  src={next}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/gender")}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserDob;
