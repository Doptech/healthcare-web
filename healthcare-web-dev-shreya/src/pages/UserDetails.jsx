import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import next from "../assets/next.png";
import back from "../assets/back.png";
import { Card, CardBody } from "@chakra-ui/react";

const UserDetails = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();
  return (
    <>
      {/* <Card className="main-container w-[300px] m-auto">
        <CardBody>
          <div>
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
              <img
                  src={back}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/gender")}
                />
                <img
                  src={next}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/allergy")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card> */}

      <div className="main-container w-[300px] md:w-[500px] h-[500px] m-auto mt-20 items-center">
        <Card
          border={"1px solid lightgray"}
          className="child-container h-full p-6 rounded"
        >
          <CardBody>
            <div className="text-center">
              <div className="flex justify-around p-4 mt-2 md:mt-10">
                <div className="text-center">
                  <p className="text-3xl font-semibold">Enter your Height</p>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    name={height}
                    className="p-3 border rounded-lg outline-none my-2 md:my-8 cursor-pointer"
                    placeholder="Enter height in meters"
                  />

                  <p className="text-3xl font-semibold">Enter your Weight</p>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    name={weight}
                    className="p-3 border rounded-lg outline-none my-8 cursor-pointer"
                    placeholder="Enter weight in kgs"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <hr />
                <div className="flex justify-between">
                  <img
                    src={back}
                    className="cursor-pointer icons"
                    onClick={() => navigate("/dob")}
                  />
                  <img
                    src={next}
                    className="cursor-pointer icons"
                    onClick={() => navigate("/allergy")}
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserDetails;
