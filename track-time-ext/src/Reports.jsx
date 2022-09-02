import { Box, Button, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Chart from './report/Chart'
import { Link } from "react-router-dom";
import axios from 'axios';
import CTable from './report/CTable';
const Reports = () => {  
    
  return (
    <Center >
        <Stack>
          <Center>
            <Heading>Daily Report</Heading>
          </Center>
        <Flex>
          <Box width="40%">
            <CTable/>
          </Box>
          <Box border='2px solid grey'></Box>
          <Box width="59%">
            <Chart/>
          </Box>
              {/* <Table></Table> */}
        </Flex>


        <Link to={"/"}>
        <Button bg={'pink'}>Timer</Button>
        </Link>
        </Stack>
    </Center>
  )
}

export default Reports