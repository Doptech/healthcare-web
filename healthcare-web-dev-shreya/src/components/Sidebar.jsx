import React from "react";
// import {
//   Grid,
//   GridItem,
//   Image,
//   Box,
//   Flex,
//   Text,
//   Button,
// } from "@chakra-ui/react";
import dashboard from "../assets/dashboard.png";
import patient from "../assets/patient.png";
import message from "../assets/messages.png";
import appointment from "../assets/appointment.png";
import transaction from "../assets/transaction.png";
import notification from "../assets/notification.png";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";

const Sidebar = () => {
  return (
    <>
      <div className="main-container w-44 h-[500px] p-2 bg-slate-300">

        <div className="upper-div h-full">
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={dashboard} alt="" className="icons" />
            <p>Dashboard</p>
          </div>
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={patient} alt="" className="icons" />
            <p>Patients</p>
          </div>
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={message} alt="" className="icons" />
            <p>Messages</p>
          </div>
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={appointment} alt="" className="icons" />
            <p>Appointment</p>
          </div>
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={transaction} alt="" className="icons" />
            <p>Transaction</p>
          </div>
        </div>

        <div className="lower-div">

          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={notification} alt="" className="icons" />
            <p>Notifications</p>
          </div>
          <div className="px-4 pt-4 flex text-center p-2 items-center">
            <img src={settings} alt="" className="icons" />
            <p>Settings</p>
          </div>
          <button className="flex text-center p-2 px-4 m-1 mx-4 items-center bg-blue-500 text-white rounded-md">
            <img src={logout} alt="" className="icons" />
            <p>Logout</p>
          </button>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
