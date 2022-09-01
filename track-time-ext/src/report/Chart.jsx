import React from "react";
import "./App.css";
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
      <h1>Daily Report</h1>
      <div className="App">

      
      <LineChart width={400} height={400} data={data}>
      <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
        <Line type="monotone" dataKey="users" stroke="red" />
      </LineChart>

      </div>
    </div>
  );
};

export default Chart;
