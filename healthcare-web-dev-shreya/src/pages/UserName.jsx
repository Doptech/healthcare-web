import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import next from "../assets/next.png";

const UserName = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container w-[300px] md:w-[500px] h-[500px] m-auto mt-20 items-center">
      <Card border={"1px solid lightgray"} className="child-container h-full p-6 rounded">
          <CardBody>
            <div className="text-center">
              <p className="text-4xl font-bold mt-8">What's your name?</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name={name}
                className="p-3 border rounded-lg outline-none my-16 w-full"
                placeholder="Enter your Fullname here"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <hr className="mt-24" />
              <img
                src={next}
                className="cursor-pointer icons"
                onClick={() => navigate("/dob")}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserName;
