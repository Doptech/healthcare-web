import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import next from "../assets/next.png";
import back from "../assets/back.png";
import male from "../assets/male.png";
import female from "../assets/female.png";
import { Card, CardBody } from "@chakra-ui/react";

const UserGender = () => {
  const [gender, setGender] = useState("");
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
              <p className="text-3xl font-bold mt-8">What's your Biological Sex?</p>
              <p className="mt-8">This helps us to suggests medication in respect to your gender</p>
              <div className="flex justify-around p-4 mt-0 md:mt-8">
                <input type="radio" name="choice" id="choose-1" value="1" />
                <label for="choose-1">
                  <img src={male} className="gender-img" />
                  <p>Male</p>
                </label>

                <input type="radio" name="choice" id="choose-2" value="2" />
                <label for="choose-2">
                  <img src={female} className="gender-img" />
                  <p>Female</p>
                </label>
              </div>
              <div className="flex flex-col gap-4 mt-10">
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
                    onClick={() => navigate("/details")}
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

export default UserGender;
