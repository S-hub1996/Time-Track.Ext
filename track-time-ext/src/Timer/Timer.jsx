import { Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {
Link
  } from "react-router-dom";
const Timer = () => {
  return (
    <Center>
        <Stack gap={8}>

        <Box m={10}  border={'5px double '} borderColor={'gray.300'} rounded={8}>
            <Text p={4} textAlign={'center'} fontSize={20} bg={'blackAlpha.600'} color={'white'}>

            11 Hour : 11 Min : 11 Sec
            </Text>
        </Box>
        <Flex gap={2} justifyContent={'center'}>
            <Button bg={'green.400'} color={'white'}>Start</Button>
            <Button bg={'orange.400'} color={'white'}>Break</Button>
            <Button bg={'red.400'} color={'white'}>Leave</Button>
        </Flex>
        <Link to={'/reports'}>
<Button w={'100%'} bg={'blue.300'} color={'white'}>Reports</Button>
        </Link>
        </Stack>
    </Center>
  )
}

export default Timer