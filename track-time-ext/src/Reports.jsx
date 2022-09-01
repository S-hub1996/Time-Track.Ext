import { Button, Center, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Chart from './report/Chart'
import { Link } from "react-router-dom";
const Reports = () => {

    
  return (
    <Center >
        <Stack>
<Flex>

      <Chart/>
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