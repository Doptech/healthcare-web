import LineChart from "../Charts/LineChart";
import { useDisclosure } from "@chakra-ui/react";
import AppointmentTable from "../components/AppointmentTable";
import React, { useState } from "react";
import dashboard from "../assets/dashboard.png";
import patients from "../assets/patient.png";
import appointment from "../assets/appointment.png";
import { useNavigate } from "react-router";
import settings from "../assets/settings.png";
import logoutPic from "../assets/logout.png";
import report from "../assets/create-report.png";
import hamburger from "../assets/hamburger.png";
import QRcodeGEN from "../components/QrcodeGEN";
import qr from "../assets/qr.png";
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardBody,
  Tag,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Consumer } from "../context/QRContext";
import AddNewPatient from "./AddNewPatient";

const Dashboard = ({ value }) => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isShow, onShow, onShowClose } = useDisclosure();
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
    <>
      <div className="flex">
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

        <div className="h-screen flex-1 p-7 border_bottom w-full">
          <div className="py-2 mb-2">
            <p className="text-5xl">
              <span className="font-bold">Doc</span>trin
            </p>
          </div>
          <div className="md:flex gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // name={search}
              className="border rounded-lg outline-none w-full p-2 mb-2 md:mb-0"
              placeholder="Search"
              required
            />
            <button className="bg-pink-400 rounded text-white p-2 w-full md:w-fit md:px-8">
              Search
            </button>
          </div>
          <h1 className="text-3xl font-semibold py-4">Hello DOC !</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <Card border={"1px solid lightgray"} className="w-full m-auto">
                <CardBody>
                  <div className="flex gap-4 w-fit">
                    <p className="font-semibold text-xl">Patients</p>
                    <Tag colorScheme={"teal"} className="px-6">
                      +24.24
                    </Tag>
                  </div>
                  <LineChart />
                </CardBody>
              </Card>
            </div>
            <div>
              <Card
                border={"1px solid lightgray"}
                className="text-center  w-full h-full"
              >
                <CardBody>
                  <div className="">
                    <p className="text-5xl font-semibold mt-14">131</p>
                    <p>Total Patients</p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card
                border={"1px solid lightgray"}
                className="text-center w-full h-full"
              >
                <CardBody>
                  <div className="">
                    <p className="text-5xl font-semibold mt-12">131</p>
                    <p>
                      Total alerts in <br /> 24 hours
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="md:grid grid-cols-3 my-4 gap-4">
            <div className="md:col-span-2 mb-4 md:mb-0">
              <AppointmentTable />
            </div>
            <div>
              <Card border={"1px solid lightgray"} className="h-full m-auto">
                <CardBody>
                  <img
                    src={report}
                    className="w-[100px] mx-auto mt-16 cursor-pointer"
                    onClick={(e) => {
                      addFile();
                    }}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="grid md:grid-cols-4 my-4 gap-4">
            <div className="md:col-span-3">
              <Card border={"1px solid lightgray"}>
                <CardBody>
                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <Text className="py-2 text-xl font-semibold">Alerts</Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <TableContainer
                          w={{ sm: "100%", md: "100%", lg: "100%" }}
                          className="rounded"
                        >
                          <Table variant="simple">
                            <Thead>
                              <Tr className="bg-slate-200">
                                <Th textAlign={"center"} className="my-2">Patient</Th>
                                <Th textAlign={"center"} className="my-2">Appointment</Th>
                                <Th textAlign={"center"} className="my-2">Status</Th>
                                <Th textAlign={"center"} className="my-2">Date</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td p={0}>
                                  <Flex
                                    alignItems={"center"}
                                    gap={4}
                                    justifyContent={"center"}
                                  >
                                    <Avatar
                                      size="sm"
                                      name={"Mr. ABC XYZ"}
                                      src="https://bit.ly/ryan-florence"
                                    />
                                    <Text>Mr. ABC XYZ</Text>
                                  </Flex>
                                </Td>
                                <Td p={0}>
                                  <Text textAlign={"center"}>Dialy Checkup</Text>
                                </Td>
                                <Td textAlign={"center"}>
                                  <Tag colorScheme={'red'} className="px-2">High</Tag>
                                </Td>
                                <Td textAlign={"center"}>
                                  <Text>Dec 14, 2022</Text>
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card border={"1px solid lightgray"} className="h-full">
                <CardBody>
                  <Button className="mt-20 ml-10" onClick={onOpen} bg={'none'} _hover={{bg: 'none'}} >
                    <img
                      src={qr}
                      className="w-[125px] mx-auto cursor-pointer"
                    />
                  </Button>
                  <Modal isOpen={isShow} onClose={onShow}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Modal Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <AddNewPatient />
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onShowClose}>
                          Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
