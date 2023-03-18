import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import next from "../assets/next.png";
import back from "../assets/back.png";
import Select from "react-select";
import { Card, CardBody } from "@chakra-ui/react";
import { colourOptions } from "../data/data";

const UserAllergy = () => {
  const [allergy, setAllergy] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="main-container w-[300px] m-auto ">
        <Card className="main-container w-[300px] m-auto">
          <CardBody>
            <div className="text-center h-[500px]">
              <p className="text-4xl font-bold mt-8">Any allergies?</p>
              <Select
                defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={colourOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div>
              <hr />
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
        
        
      </div> */}

      <div className="main-container w-[300px] md:w-[500px] h-[500px] m-auto mt-20 items-center">
        <Card
          border={"1px solid lightgray"}
          className="child-container h-full p-6 rounded"
        >
          <CardBody>
            <div className="text-center">
              <p className="text-3xl font-bold">Any allergies?</p>
              <div className="my-32">
                <Select
                  defaultValue={[colourOptions[2], colourOptions[3]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:mt-36">
              <hr />
              <div className="flex justify-between">
                <img
                  src={back}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/details")}
                />
                <img
                  src={next}
                  className="cursor-pointer icons"
                  onClick={() => navigate("/test")}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserAllergy;
