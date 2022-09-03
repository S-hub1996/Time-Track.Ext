import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'

const CTable = () => {
    const [rep,setRep] = useState(null)

  useEffect(() => {
    axios.get("https://timer-tracker-app.herokuapp.com/report")
    .then(function (response) {
      console.log(response);
      setRep(response.data)
    });
  },[setRep])
  if(rep){
    console.log("table",rep);
  }
  return (
    <>
    <TableContainer marginTop='100px' >
  <Table size='sm' variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead >
      <Tr >
        <Th color={'gold'}>Date</Th>
        <Th color={'gold'}>Day</Th>
        <Th color={'gold'}>Start-time</Th>
        <Th color={'gold'}>End-time</Th>
        <Th color={'gold'}>Total-time</Th>
      </Tr>
    </Thead>
    <Tbody color={'whitesmoke'} >
        {rep?.map((e,i)=> (
           <Tr key={i}>
            <Td>{e.date}</Td>
            <Td>{e.Day}</Td>
            <Td>{e.startTime}</Td>
            <Td>{e.Endtime}</Td>
            <Td>{e.totalTime} - Sec</Td>
          </Tr>
        ))}
      {/* <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
  </Table>
</TableContainer>
    </>
  )
}

export default CTable