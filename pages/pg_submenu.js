// https://chakra-templates.dev/page-sections/features
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Link } from '@chakra-ui/react';
import { FcInTransit } from 'react-icons/fc';
import { FiColumns } from "react-icons/fi";
import { BiSidebar, BiStats } from "react-icons/bi";
import { BsLayoutThreeColumns } from "react-icons/bs";

const Feature = ({ title, text, icon, url='/' }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={'center'} justify={'center'}
        color={'white'} rounded={'full'} bg={'gray.100'} mb={1}>
        {icon}
      </Flex>
      <Link fontWeight={600} href={url}>{title}</Link>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
export function UseCases() {
  return (
    <Box p={4}>
  
      <Text fontSize='3xl' m={55} color={'gray.600'}>Components</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<Icon as={FiColumns} w={10} h={10} />}
          title={'Text Response'}  url='/usecases/text_response'
          text={'that send a text and display the return text from an API call in the textbox below'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'Static Pages'} url='static_pridesum.html'
          text={'that plug in static files (html, css, js) generated from external sites such as https://codesandbox.io'}
        />
      </SimpleGrid>
    </Box>
  );
}
export function Components() {
  return (
    <Box p={4}>
  
      <Text fontSize='3xl' m={55} color={'gray.600'}>Components</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<Icon as={FiColumns} w={10} h={10} />}
          title={'Grids'}  url='/components/ck_grids'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'Tabs'} url='/components/ck_tabs'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
      </SimpleGrid>
    </Box>
  );
}
export function SpecialTopics() {
  return (
    <Box p={4}>
  
      <Text fontSize='3xl' m={55} color={'gray.600'}>Special Topics</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<Icon as={FiColumns} w={10} h={10} />}
          title={'Ploty'}  url='/topics/pg_plotly'
          text={'use React Plotly to plot data'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'Fetch'}  url='/topics/pg_fetch'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BsLayoutThreeColumns} w={10} h={10} />}
          title={'useState'}  url='/topics/pg_useState'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiSidebar} w={10} h={10} />}
          title={'React Table'}  url='/topics/ck_table'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiSidebar} w={10} h={10} />}
          title={'Plain NextJs'}  url='/topics/pg_plain'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'MDX'}  url='/topics/pg_mdx'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'Google Map'}  url='/topics/pg_map'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
      </SimpleGrid>
    </Box>
  );
}
export default function ChakraTemplates() {
  return (
    <Box p={4}>
  
      <Text fontSize='3xl' m={55} color={'gray.600'}>Simple three column grid</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={<Icon as={FiColumns} w={10} h={10} />}
          title={'Two Column Grid w/ Image'}  url='/templates/two_col_with_image'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiStats} w={10} h={10} />}
          title={'Stats Grid with Image'} url='/templates/stats_grid_image'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Nagivational Bar'} url='/templates/navbar'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BiSidebar} w={10} h={10} />}
          title={'Sidebar'} url='/templates/sidebar'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
        <Feature icon={<Icon as={BsLayoutThreeColumns} w={10} h={10} />}
          title={'Three Column (This page)'} url='/templates/three_col_grid'
          text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
        />
      </SimpleGrid>
    </Box>
  );
}