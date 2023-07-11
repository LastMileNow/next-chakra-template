import {Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Main() {
    return (
        <Box bg='grey' w='100%' p={4} color='white'>
        <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
      
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs></Box>
    )
}
