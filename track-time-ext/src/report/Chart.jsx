import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart,
  Line
} from "recharts";


const Chart = () => {
  const data = [
    { name: "Mon", users: 4 },
    { name: "Tues", users: 3 },
    { name: "Wed", users: 2 },
    { name: "Thurs", users: 4 },
  ];
 
  return (
    <div style={{ textAlign: "center" }}>
      <Heading>Daily Report</Heading>
      <Box m={20}>

      
      <LineChart width={400} height={400} data={data}>
      <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
        <Line type="monotone" dataKey="users" stroke="red" />
      </LineChart>

      </Box>
    </div>
  );
};

export default Chart;
