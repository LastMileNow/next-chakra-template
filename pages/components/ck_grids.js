import {Grid, GridItem, Flex, Center, Text, Square, Box,
    Wrap, WrapItem, Image, VStack, Container} from '@chakra-ui/react';

// https://chakra-ui.com/docs/styled-system/style-props


export function ScreenWrap () {
    return (<Wrap>
        <WrapItem>
          <Center w='180px' h='180px' bg='red.200'>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='180px' bg='green.200'>
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='180px' bg='tomato'>
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='180px' bg='blue.100'>
            Box 4
          </Center>
        </WrapItem>
      </Wrap>);
}

export function ScreenGrid() {
    return (
        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
        </Grid>
    );
}

export function ScreenFlex() {
    return (
    <Flex color='white' gap='2' padding='3'>
        <Center w='100px' bg='green.500'>
            <Text>Box 1</Text>
        </Center>
        <Square bg='blue.500' size='100px'>
            <Text>Box 2</Text>
        </Square>
        <Box flex='1' bg='tomato'>
            <Text padding='3'>Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element.</Text>
        </Box>
    </Flex>
    );
}

export default function show_all() {
  return (<VStack m='5'>
    <Container maxW='container.lg'>
      <ScreenWrap/>
    </Container>
    <Container maxW='container.lg'>
      <ScreenGrid/>
    </Container>
    <Container maxW='container.lg'>
      <ScreenFlex/>
    </Container>
    </VStack>)
}