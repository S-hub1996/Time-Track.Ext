import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

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


const Chart = ({report}) => {
  // console.log("chart",report);
  const [rep,setRep] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:8080/report")
    .then(function (response) {
      console.log(response);
      setRep(response.data)
    });
  },[setRep])

  // const data = [
  //   { name: "Mon", users: 4 },
  //   { name: "Tues", users: 3 },
  //   { name: "Wed", users: 2 },
  //   { name: "Thurs", users: 4 },
  // ];
 
  return (
    <div style={{ textAlign: "center" }}>
      <Heading>Daily Report</Heading>
      <Box m={20}>

      
      <LineChart width={800} height={400} data={rep}>
      <XAxis
            dataKey="Day"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
        <Line type="monotone" dataKey="totalTime" stroke="red" />
      </LineChart>

      </Box>
    </div>
  );
};

export default Chart;
