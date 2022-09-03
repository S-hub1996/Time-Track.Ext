import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const TimerComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [starttime, setstartTime] = useState("");
  const [endtime, setendTime] = useState("");
  const [totaltime, settotalTime] = useState(0);
  const [weekDay, setweekDay] = useState("");
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setstartTime(currtime);
    setendTime("")
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    
    setendTime(currtime);
    settotalTime(time/1000);
    if(data.Endtime && data.totalTime>0){
      axios.post("https://timer-tracker-app.herokuapp.com/report", data)
    }
    setTime(0);
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let Hours = today.getHours();
  let Minutes = today.getMinutes();
  let Seconds = today.getSeconds();
  let day = today.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  today = mm + "/" + dd + "/" + yyyy;
  let dayName = days[day];
  
  let currtime = date.toLocaleTimeString();

  let TotalTime = `${("0" + Math.floor((time / 3600000) % 60)).slice(
    -2
  )}${" "}:${" "}
            ${("0" + Math.floor((time / 60000) % 60)).slice(-2)}${" "}:${" "}
            ${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`;

console.log(totaltime/1000)
const dataArr=[]

// const dataArr= new Array(1)
  const data =  
    {
      
      startTime: starttime,
      Endtime: endtime,
      totalTime: totaltime,
      Day: dayName,
      date: today,
    }
  
  
  // console.log(currtime, dayName, today,time,TotalTime);
  // console.log(starttime, endtime, totaltime);
  // console.log("dataArr",dataArr)
dataArr.push(...dataArr,data)
  localStorage.setItem("data", JSON.stringify(dataArr))
  return (
    <Center py={'10rem'}>
      <Stack>

      <Box  bgImage={'https://www.icegif.com/wp-content/uploads/2022/05/icegif-511.gif'}
    bgRepeat={'no-repeat'}
    bgSize={'cover'}  rounded={8}  p={20}>
     
      </Box>
      <Stack
      
      bgColor={'black'}
        gap={8}
        // border={"10px inset"}
        rounded={8}
        // borderColor={"red.400"}
        w={"30rem"}
        p={16}
      >
        <Text color={'whitesmoke'} textAlign={"center"} fontWeight={"semibold"} fontSize={"xl"}>
          {today + " " + dayName + " " + currtime}
        </Text>
        <Box m={10} border={"5px double "} borderColor={"gray.300"} rounded={8}>
          <Text
            p={4}
            textAlign={"center"}
            fontSize={20}
            bg={"blackAlpha.600"}
            color={"white"}
          >
            {TotalTime}
          </Text>
        </Box>
        <Flex gap={2} justifyContent={"center"}>
          <Button bg={"green.400"} color={"white"} onClick={handleStart}>
            Start
          </Button>
          <Button bg={"orange.400"} color={"white"} onClick={handlePauseResume}>
            Break
          </Button>
          <Button bg={"red.400"} color={"white"} onClick={handleReset}>
            Leave
          </Button>
        </Flex>
        <Link to={"/reports"}>
          <Button w={"100%"} bg={"blue.300"} color={"white"}>
            Reports
          </Button>
        </Link>
      </Stack>
      </Stack>
    </Center>
  );
};

export default TimerComponent;
