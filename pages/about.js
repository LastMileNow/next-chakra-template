import {Center, Text, Box, Divider} from '@chakra-ui/react'
export default function AboutMe() {
    return (
      <Center>
        
        <Box verticalAlign='middle' borderRadius='md' bg='grey' w='400px' p={2} color='white'>
          <Text m={5}>Next-Chakra-Template v1.0 10/21/2022</Text>
          <Divider />
          <Text textAlign='center' m={5}>
          This is a full-stack template that utilized Next.js (React), Chakra UI, Plotty, react-table 
          and Python in Vercel-compatible, ready to deploy for free. 
          </Text>
          <Text textAlign='center' m={5}>
          It demonstrates: fetching, useState, plotting, table, menu, components, full stack (front-end to back-end)
           and responsive layout. 
          </Text> 
        </Box>
      </Center>
    )
  }