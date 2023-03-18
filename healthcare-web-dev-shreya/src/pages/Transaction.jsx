import AppointmentTable from '../components/AppointmentTable'
import LineChart from "../Charts/LineChart";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import dashboard from "../assets/dashboard.png";
import patients from "../assets/patient.png";
import appointment from "../assets/appointment.png";
import { useNavigate } from "react-router";
import settings from "../assets/settings.png";
import logoutPic from "../assets/logout.png";
import report from "../assets/create-report.png";
import hamburger from "../assets/hamburger.png";
import {
  Box,
  Card,
  CardBody,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Transaction = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const Menus = [
    { title: "Dashboard", src: "dashboard" },
    { title: "Patient List", src: "Chat" },
    { title: "Reports", src: "User" },
    { title: "Log out", src: "User", gap: true },
  ];

  const addFile = (e) => {
    console.log("heloo");
    <input type="file" id="myFile" name="filename" />;
  };

  const scanqr = (e) => {
    console.log("qr");
  };

  return (
    // <div><AppointmentTable /></div>
    <div className='flex'>
      <div className="sidebar">
          <Button
            my={2}
            bg={"none"}
            _hover={{ bg: "none" }}
            ref={btnRef}
            onClick={onOpen}
          >
            <img src={hamburger} className="icons" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <div className="p-4 mb-6">
                  <p className="text-5xl">
                    <span className="font-bold">Doc</span>trin
                  </p>
                </div>
              </DrawerHeader>

              <DrawerBody>
                <div className="flex flex-col p-4 gap-6 text-md">
                  <div className="flex items-center">
                    <img src={dashboard} alt="" className="icons" />
                    <p
                      className="cursor-pointer"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={patients} alt="" className="icons" />
                    <p
                      className="cursor-pointer"
                      onClick={() => navigate("/dashboard/list")}
                    >
                      My Patients
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={appointment} alt="" className="icons" />
                    <p
                      className="cursor-pointer"
                      onClick={() => navigate("/dashboard/transaction")}
                    >
                      Transaction
                    </p>
                  </div>
                </div>
              </DrawerBody>

              <DrawerFooter>
                <div className="flex flex-row gap-6 text-md">
                  <div className="flex items-center">
                    <img src={settings} alt="" className="icons" />
                    <p>My Account</p>
                  </div>
                  <div>
                    <button className="flex p-4 items-center bg-pink-400 rounded text-white px-8">
                      <img src={logoutPic} alt="" className="icons" />
                      <p>Logout</p>
                    </button>
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div className='w-full m-4'><AppointmentTable /></div>
    </div>
    
  )
}

export default Transaction