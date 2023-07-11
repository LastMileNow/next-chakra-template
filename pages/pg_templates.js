import Menu from './pg_menu';
import {Box} from '@chakra-ui/react'
import ChakraTemplates from './pg_submenu';

export default function Main() {
  return (
    <Box m={2}>
      <Menu/>
      <ChakraTemplates/>
    </Box>
  )
}