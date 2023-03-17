import React from "react";
import { useState, useRef, useEffect } from 'react';
import {
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
} from "@chakra-ui/react";

const AppointmentTable = ({open}) => {
    // const [open, setOpen] = useState(true);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);
  const [data , setData] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
    {/* '300px' */}
      <TableContainer  ref={containerRef} height={`150px`} overflowY='auto' className={`${open ? "w-72" : "lg:w-full"} lg:w-full`}>
        <Table variant="simple" className={`${open ? "w-72" : "lg:w-96"}`}>
          <Thead>
          {/* <Tr className="bg-gray-200 text-red-400"> */}
            <Tr className="bg-[#e9e6e6]">
              <Th textAlign={"center"}>Patient</Th>
              <Th textAlign={"center"}>Appointment</Th>
              <Th textAlign={"center"}>Date</Th>
            </Tr>
          </Thead>
          <Tbody className="">
            {
                data ? 'No Data Available' :(
                    <>
                        <Tr>
                            <Td>
                                <Flex alignItems={"center"} gap={4} justifyContent={"center"}>
                                <Avatar
                                    size="sm"
                                    name={"Mr. ABC XYZ"}
                                    src="https://bit.ly/ryan-florence"
                                />
                                <Text>Mr. ABC XYZ</Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Text textAlign={"center"}>Daily Checkup</Text>
                            </Td>
                            <Td textAlign={"center"}>
                                <Text>Dec 14, 2022</Text>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Flex alignItems={"center"} gap={4} textAlign={"center"}  justifyContent={"center"}>
                                <Avatar
                                    size="sm"
                                    name={"Mr. ABC XYZ"}
                                    src="https://bit.ly/ryan-florence"
                                />
                                <Text>Mr. ABC XYZ</Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Text textAlign={"center"}>Diabetes Control</Text>
                            </Td>
                            <Td textAlign={"center"}>
                                <Text>Dec 14, 2022</Text>
                            </Td>
                        </Tr> 
                    </>
                )
            }
            {/* <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex alignItems={"center"} gap={4}  justifyContent={"center"}>
                  <Avatar
                    size="sm"
                    name={"Mr. ABC XYZ"}
                    src="https://bit.ly/ryan-florence"
                  />
                  <Text>Mr. ABC XYZ</Text>
                </Flex>
              </Td>
              <Td>
                <Text textAlign={"center"}>Root Canal</Text>
              </Td>
              <Td>
                <Text textAlign={"center"}>Dec 14, 2022</Text>
              </Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AppointmentTable;