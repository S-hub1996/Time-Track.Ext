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
        <Flex border={'1px solid '} rounded={8} my={10}borderColor={'gray.300'}>
          <Box width="40%">
            <CTable/>
          </Box>
          <Box border='1px solid' borderColor={'gray.300'}></Box>
          <Box width="59%">
            <Chart/>
          </Box>
             
        </Flex>

<Center>

        <Link to={"/"}>
        <Button bg={'pink'}>Timer</Button>
        </Link>
</Center>
        </Stack>
    </Center>
  )
}

export default Reports