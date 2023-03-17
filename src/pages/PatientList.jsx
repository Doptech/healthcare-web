import React from "react";
import PatientListCard from "../components/PatientListCard";
import { Grid, GridItem, Flex, Text, Button, Img } from "@chakra-ui/react";


const PatientList = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <PatientListCard />
      </div>
    </div>
  );
};

export default PatientList;
