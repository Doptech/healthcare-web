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

const AppointmentTable = () => {
  const patient ={
    "_id": {
      "$oid": "6414171396adb2af3a08e5a4"
    },
    "user_id": "R6AziGQwFvNoUTHiSmmwrHhHE7w1",
    "name": "Om mmm",
    "birth_date": {
      "$date": "2002-07-07T00:00:00.000Z"
    },
    "age": 21,
    "sex": "M",
    "blood_type": "O+",
    "height": 39,
    "weight": 62,
    "alegries": ",",
    "known_disease": ",",
    "blood_pressure": "",
    "blood_glucose": "",
    "last_assigned_doctor": "",
    "no_of_appointments": null,
    "file_id_id": null,
    "file_title": "",
    "file_info": "",
    "file_hocr": "",
    "file_ner_dict": "",
    "is_doc_assigned": false,
    "doctor_id_id": null
  }
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
                      <Text>Vikram seth</Text>
                    </Flex>
                  </Td>
                  <Td p={0}>
                    <Text textAlign={"center"}>Daily Checkup</Text>
                  </Td>
                  <Td textAlign={"center"}>
                    <Text>Jul 14, 2023</Text>
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
                      <Text>Jonith John</Text>
                    </Flex>
                  </Td>
                  <Td  p={0}>
                    <Text textAlign={"center"}>Diabetes Control</Text>
                  </Td>
                  <Td textAlign={"center"}>
                    <Text>Feb 02, 2023</Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td  p={0}>
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
                      <Text>Krutika Gandhi</Text>
                    </Flex>
                  </Td>
                  <Td  p={0}>
                    <Text textAlign={"center"}>Root Canal</Text>
                  </Td>
                  <Td  p={0}>
                    <Text textAlign={"center"}>March 02, 2023</Text>
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
