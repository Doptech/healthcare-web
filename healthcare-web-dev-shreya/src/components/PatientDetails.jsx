import React from "react";
import {
  Card,
  CardBody,
  Text,
  Avatar,
  Divider,
  Box,
  Flex,
  Button,
  Grid,
  GridItem,
  Img
} from "@chakra-ui/react";
import download from "../assets/download.png";

import { useNavigate } from "react-router-dom";

const PatientDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 w-full border-slate-300">
        {/* for large lg: grid-cols-3  */}
        <div className="cols-span-1 p-2 w-full block md:flex lg:block">
          <div className="card-1 w-full mb-2">
            <Card
              border={"1px solid lightgray"}
              p={1}
              colSpan={1}
              className="lg:mx-6 lg:mb-6"
            >
              <CardBody>
                <Box textAlign={"center"}>
                  <Avatar
                    size="lg"
                    my={1}
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text fontWeight={700} fontSize={"1.2rem"} p={1}>
                    Ryan Florence
                  </Text>
                  <Text p={1}>Patient ID: 12345</Text>
                  <Text p={1}>Address</Text>
                </Box>
                <Flex justifyContent={"space-evenly"} textAlign={"center"}>
                  <Box>
                    <Text fontSize={"1.6rem"}>15</Text>
                    <Text>Appointments</Text>
                  </Box>
                  <Divider orientation={"vertical"} h="50px" />
                  <Box>
                    <Text fontSize={"1.6rem"}>12</Text>
                    <Text>Completed</Text>
                  </Box>
                </Flex>

                <Flex className="my-2 w-full items-center">
                  <Button colorScheme="twitter" className="mx-auto">
                    Message patient
                  </Button>
               
              
                  <Button colorScheme="gray" className="mx-auto">
                    <Flex  w-full items-center>
                      <Img src={download} className="icons" />
                      <Text>Download Report</Text>
                    </Flex>
                  </Button>
                  </Flex>
              </CardBody>
            </Card>
          </div>

          <div className="card-2 mx-auto w-full h-[300px] md:pl-2 lg:pl-0">
            <Card border={"1px solid lightgray"} px={2} className="lg:mx-6">
              <CardBody>
                <Text p={2} fontWeight={700} fontSize={"1.2rem"}>
                  Patient Information
                </Text>
                <Box>
                  <Flex justifyContent={"space-around"} p={2} gap={8}>
                    <Text className="grey-text">Weight</Text>
                    <Text>60 kg</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2} gap={8}>
                    <Text className="grey-text">Height</Text>
                    <Text>1.75m</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2} gap={8}>
                    <Text className="grey-text">Blood Type</Text>
                    <Text>O+ (positive)</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2}>
                    <Text className="grey-text">Blood pressure</Text>
                    <Text>124/79 mmHd</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2}>
                    <Text className="grey-text">Blood Glucose</Text>
                    <Text>2017 mg/dL</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2}>
                    <Text className="grey-text">Disease</Text>
                    <Text>Diabetes</Text>
                  </Flex>
                  <Flex justifyContent={"space-around"} p={2}>
                    <Text className="grey-text">Allergies</Text>
                    <Text>Peanut</Text>
                  </Flex>
                </Box>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* card-3 */}
        <div className=" w-full p-4 mt-14 md:pr-2 lg:pr-8 md:mt-0">
          <Card
            className="card-3 w-full h-[300px] md:h-[600px] overflow-y-scroll"
            border={"1px solid lightgray"}
            p={2}
          >
            <CardBody>
              <Text p={2} fontWeight={700} fontSize={"1.2rem"}>
                Past Notes Appointment
              </Text>
              <Grid gap={6}>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title  py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title  py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title  py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title  py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Flex alignItems={"center"} gap={2}>
                    <Box className="circle"></Box>
                    <Text className="date">March 12, 2021</Text>
                  </Flex>
                  <Box>
                    <Text fontWeight={700} className="disease-title  py-2">
                      Diabetes Control Appointemnt
                    </Text>
                    <Text className="disease-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, corporis!
                    </Text>
                    <Divider className="my-2" />
                    <Flex className="flex-col lg:flex-row justify-between">
                      <Box className="flex gap-4">
                        <Text className="grey-text">Treatment</Text>
                        <Text>Check-up</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Duration</Text>
                        <Text>3 months</Text>
                      </Box>
                      <Box className="flex gap-4">
                        <Text className="grey-text">Document</Text>
                        <Text className="text-sky-600 font-medium cursor-pointer">
                          check-up-result.pdf
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
