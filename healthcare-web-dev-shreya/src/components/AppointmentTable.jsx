import React from "react";
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AppointmentTable = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card border={"1px solid lightgray"}>
        <CardBody>
          <Text className="py-2 text-xl font-semibold">Patients</Text>
          <TableContainer
            w={{ sm: "100%", md: "100%", lg: "100%" }}
            className="rounded"
          >
            <Table variant="simple">
              <Thead>
                <Tr className="bg-slate-200">
                  <Th textAlign={"center"} className="my-2">Patient</Th>
                  <Th textAlign={"center"} className="my-2">Appointment</Th>
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
                      <Text textAlign={"center"} className="cursor-pointer"
                        onClick={() => navigate("/dob")}>
                        Mr. ABC XYZ
                      </Text>
                    </Flex>
                  </Td>
                  <Td p={0}>
                    <Text textAlign={"center"}>Dialy Checkup</Text>
                  </Td>
                  <Td textAlign={"center"}>
                    <Text>Dec 14, 2022</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td p={0}>
                    <Flex
                      alignItems={"center"}
                      gap={4}
                      textAlign={"center"}
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
                    <Text textAlign={"center"}>Diabetes Control</Text>
                  </Td>
                  <Td textAlign={"center"}>
                    <Text>Dec 14, 2022</Text>
                  </Td>
                </Tr>
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
                    <Text textAlign={"center"}>Root Canal</Text>
                  </Td>
                  <Td p={0}>
                    <Text textAlign={"center"}>Dec 14, 2022</Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};

export default AppointmentTable;
