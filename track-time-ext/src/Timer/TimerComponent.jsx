import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const TimerComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
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
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
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
  let currtime = Hours + ":" + Minutes + ":" + Seconds;


let TotalTime= `${("0" + Math.floor((time / 3600000) % 60)).slice(-2)}${" "}:${" "}
            ${("0" + Math.floor((time / 60000) % 60)).slice(-2)}${" "}:${" "}
            ${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`;


  // console.log(currtime, dayName, today);

  return (
    <Center m={8}>
      <Stack gap={8}>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>{today+" "+dayName+" "+currtime}</Text>
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
    </Center>
  );
};

export default TimerComponent;
