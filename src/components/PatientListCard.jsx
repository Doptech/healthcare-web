import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Avatar,
  Divider,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";

const PatientsData = [
  {
    id: 1,
    url: "https://bit.ly/ryan-florence",
    pname: "Ryan Florence",
    paddress: "XYZ",
    pweight: "60kg",
    bp: "124/79 mmHd",
    bg: "2017 mg/dL",
  },
  {
    id: 2,
    url: "https://bit.ly/dan-abramov",
    pname: "Dan",
    paddress: "ABC",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 3,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 4,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
  {
    id: 5,
    url: "https://bit.ly/dan-abramov",
    pname: "john",
    paddress: "ndsjsd",
    pweight: "60kg",
    bp: "126/79 mmHd",
    bg: "2015 mg/dL",
  },
];

const PatientListCard = () => {
  return (
    <>
      {PatientsData.map((data) => {
        return (
          <Card className="h-fit" border={"1px solid lightgray"} p={2} key={data.id}>
            <CardBody>
              <Box>
                <Avatar
                  size="sm"
                  my={2}
                  name="Ryan Florence"
                  src={data.url}
                />
                <Text fontWeight={700} fontSize={"1.2rem"} p={2}>
                  {data.pname}
                </Text>
                <Text p={2}>{data.paddress}</Text>
                <Divider />
              </Box>
              <Flex justifyContent={"space-between"} p={2} gap={8}>
                <Text>Weight</Text>
                <Text>{data.pweight}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} p={2}>
                <Text>Blood pressure</Text>
                <Text>{data.bp}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} p={2}>
                <Text>Blood Glucose</Text>
                <Text>{data.bg}</Text>
              </Flex>
              <Button colorScheme="twitter">View Patient Details</Button>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default PatientListCard;